import os
import pandas as pd
from collections import defaultdict
from jinja2 import Environment, FileSystemLoader, select_autoescape
import datetime
env = Environment(
    loader=FileSystemLoader('.')
)

TEMPLATE_FILES = [
  "js/piecharts.js.template"
]

TEMPLATE_EXT = '.template'

HOURS_FILE = "data/hours.csv"


def load_data():
   return {
    "hours": compute_hours(load_build_log())
   }


def load_build_log():
   return pd.read_csv(os.path.join(os.path.dirname(__file__), HOURS_FILE))


def is_recent(row):
    date = [int(x) for x in row['Date']].split('/')
    month, day, year = date if len(date) == 3 else date + [2020,]
    if year < 2000:
        year += 2000
    return datetime.today() - datetime.date(year, month, day) < datetime.timedelta(days=30)


def compute_hours(build_log):
   per_person = defaultdict(float)
   per_person_recent = defaultdict(float)
   per_tag = defaultdict(float)
   for _, row in build_log.iterrows():
        hours = row['Time (hr)']
        per_person[row['Person'].capitalize()] += hours
        if is_recent(row):
            per_person_recent[row['Person'].capitalize()] += hours
        for tag in row['Tag(s)'].split(','):
            per_tag[tag.lower().strip()] += hours
   
   total = sum(per_person.values())
   total_recent = sum(per_person_recent.values())
   print("Total build hours: ", total)
   per_person = sorted([(p, h) for p,h in per_person.items()], key=lambda x: -x[1])
   return {
    "per_person": per_person, 
    "per_person_recent": per_person_recent,
    "per_tag": per_tag, 
    "total": int(total),
    "total_recent": int(total_recent),
   }


def render(data):
    for tf in TEMPLATE_FILES:
        template = env.get_template(tf)
        assert tf.endswith(TEMPLATE_EXT), f"template files should end with {TEMPLATE_EXT}, but {tf} does not"
        output_name = tf[:-len(TEMPLATE_EXT)]
        with open(output_name, 'w') as rendered:
            rendered.write(template.render(**data))


if __name__ == '__main__':
    data = load_data()
    render(data)
