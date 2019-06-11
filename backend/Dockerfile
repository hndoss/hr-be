FROM python:3
WORKDIR /srv/hr
COPY requirements.txt /srv/hr
RUN pip install -r requirements.txt
COPY . /srv

ENTRYPOINT ['python', 'manage.py', 'runserver']