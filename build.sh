#!/bin/sh

curl -L 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSLVPwmH5Vx0thG0g9XozEXzd861-NspRUqSTwLuuflrKKLO1WOgbAbaur3r78iLF6dcJPJp2-ZVaCg/pub?gid=0&single=true&output=csv' > data/hours.csv
pip install -r requirements.txt

python generate_tags.py
python render_templates.py
