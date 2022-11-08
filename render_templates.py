import os
import pandas as pd
from collections import defaultdict
from jinja2 import Environment, FileSystemLoader, select_autoescape
import datetime
import calendar
import numpy as np

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
    date = [int(x) for x in row['Date'].split('/')]
    month, day, year = date if len(date) == 3 else date + [2020,]
    if year < 2000:
        year += 2000
    return datetime.date.today() - datetime.date(year, month, day) < datetime.timedelta(days=30)


def compute_hours(build_log):
    per_person = defaultdict(float)
    per_person_recent = defaultdict(float)
    per_tag = defaultdict(float)
    per_month = defaultdict(float)
    per_month_sp = defaultdict(float)
    for _, row in build_log.iterrows():
        hours = row['Time (hr)']
        if np.isnan(hours):
            hours = 0
        person = row['Person'].strip().title()
        per_person[person] += hours
        month = get_month(row)
        per_month[month] += hours
        if person in ('Sasha', 'Peter'):
            per_month_sp[month] += hours
        if is_recent(row):
            per_person_recent[person] += hours
        for tag in row['Tag(s)'].split(','):
            subtags = [t.lower().strip() for t in tag.split('/') if len(t) > 0]
            for subtag in subtags:
                per_tag[subtag] += hours / len(subtags)

    current_month = get_current_month()
    current_date_mult = get_current_date_multiplier()
    print(f"For the current month {current_month} using day multiplier {current_date_mult}")
    per_month[current_month] *= current_date_mult
    per_month_sp[current_month] *= current_date_mult

    total = sum(per_person.values())
    total_recent = sum(per_person_recent.values())
    print("Total build hours: ", total)
    print("Recent build hours: ", total_recent)
    add_sasha_peter(per_person)
    add_sasha_peter(per_person_recent)
    per_person = sorted([(p, h) for p,h in per_person.items()], key=lambda x: -x[1])
    per_person_recent = sorted([(p, h) for p,h in per_person_recent.items()], key=lambda x: -x[1])
    per_month = sorted([(m, h, per_month_sp[m]) for m, h in per_month.items()], key=lambda x: month_sorting_key(x[0]))
    return {
        "per_person": per_person, 
        "per_person_recent": per_person_recent,
        "per_tag": per_tag, 
        "total": int(total),
        "total_recent": int(total_recent),
        "per_month": per_month,
    }

def add_sasha_peter(per_person):
    per_person['Sasha + Peter'] = per_person['Sasha'] + per_person['Peter']
    del per_person['Sasha']
    del per_person['Peter']

def get_current_month():
    today = datetime.date.today()
    return f'{today.month}/{today.year}'


def get_current_date_multiplier():
    today = datetime.date.today()
    return calendar.monthrange(today.year, today.month)[1] / today.day


def get_month(row):
    date = row['Date']
    split_date =  date.split('/')
    if len(split_date) == 3:
        month, day, year = split_date
    elif len(split_date) == 2:
        month, day = split_date
        year = '2022'
        print(f'Warning - for entry {date} assuming year 2022')
    else:
        raise ValueError(f'Cannot parse {date} into date')

    if len(year) == 2:
        year = '20' + year
    return '/'.join([month, year])

def month_sorting_key(month):
    month, year = month.split('/')
    return int(year) * 12 + int(month)

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
