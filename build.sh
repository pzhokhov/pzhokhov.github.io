!#/bin/sh

pip install -r requirements.txt

python generate_tags.py
python render_templates.py
