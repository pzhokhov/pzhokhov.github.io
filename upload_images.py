import glob
import re
import os
import subprocess
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
import tempfile


GS_BUCKET = "slingalongblog-images"
THUMB_SIZE = 128
THUMB_SUFFIX = "_thumb"

tempdir = tempfile.gettempdir()

def upload_file(local_link):
    file_path = local_link
   
    if os.path.exists(file_path):
        base_name = os.path.basename(file_path)
        remote_link = '/'.join(["gs:/", GS_BUCKET, base_name])
        public_url = f"https://storage.googleapis.com/{GS_BUCKET}/{base_name}"
        print(f"Uploading {local_link} ({file_path}) -> {remote_link} ({public_url})")
        try:
            subprocess.check_call(['bash', '-c', f'gsutil cp -n "{file_path}" "{remote_link}"'])
        except BaseException as e:
            print(e)
            return None
        return public_url

def download_file(url):
    filename = os.path.basename(url)
    print(f'Downloading {url} -> {os.path.join(tempdir, filename)}')
    try:
        subprocess.check_call(['curl', '-O', url], cwd=tempdir)
        return os.path.join(tempdir, filename)
    except BaseException as e:
        print(e)
        return None
    return public_url

def resize_thumbnail(local_link):
    basename = os.path.basename(local_link)
    basename_split = os.path.splitext(basename)
    im = Image.open(local_link)
    im = im.resize((THUMB_SIZE, THUMB_SIZE), Image.LANCZOS)
    resized = os.path.join(tempdir, basename_split[0] + THUMB_SUFFIX +  basename_split[1])
    im.save(resized)
    return resized


def process_image_links(text):
    def _thunk(matchobj):
        local_link = matchobj.group(2)
        remote_url = upload_file(resized)
        if remote_url is None:
            return matchobj.group(0)
        else:
            return f"{matchobj.group(1)}({remote_url})"
    # local (i.e. not URLs) links in markdown, of kind ![description](/file.jpg)
    return re.sub(r'(\!\[.*\])\(((?!https://|http://).*\..*)\)', _thunk, text)


def process_thumbnail_links(text):
    def _thunk(matchobj):
        local_link = matchobj.group(2)
        remote_url = upload_file(resize_thumbnail(local_link))
        if remote_url is None:
            return matchobj.group(0)
        else:
            return f'thumbnail: "{remote_url}"'

    # process local (i.e. not URLs) links in thumbnail, of kind 'thumbnail: "/file.jpg"'
    return re.sub(r'(thumbnail: \")((?!https://|http://).*\..*)\"', _thunk, text)

def resize_thumbnail_links(text):
    def _thunk(matchobj):
        unresized = matchobj.group(1)
        if THUMB_SUFFIX not in unresized:
            local_link = download_file(unresized)
            remote_url = upload_file(resize_thumbnail(local_link))
        else:
            remote_url = None

        if remote_url is None:
            return matchobj.group(0)
        else:
            return f'thumbnail: "{remote_url}"'

    return re.sub(r'thumbnail: \"(https://.*\..*)\"', _thunk, text)



def remove_windows_line_endings(text_bytes):
    return text_bytes.replace(b'\r\n', b'\n')

def upload_links(fname):
    print(f'Processing file {fname}')
    with open(fname, 'rb') as f:
        text = f.read()
    text = text.decode('utf-8')
    new_text = process_image_links(text)
    new_text = process_thumbnail_links(new_text)
    new_text = resize_thumbnail_links(new_text)
    with open(fname, 'wb') as f:
        f.write(remove_windows_line_endings(new_text.encode('utf-8')))

def main():
    fs = []
    with ThreadPoolExecutor(max_workers=1) as tpe:
        fs = [tpe.submit(upload_links, fname) for fname in glob.glob('_posts/*.md')]
    for f in fs:
        f.result()

if __name__ == '__main__':
    main()
