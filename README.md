# README

## Description
This application was created as part of a senior thesis project at Eastern Michigan University.
The Ruby on Rails serves as the API which communicates with the PostgreSQL database and displays information to the user through the frontend which is written in ReactJS.

## Installation
```
brew install postgresql
brew install node
cd client && npm install
cd .. && bundle install
```

## To Run

```
whenever --update-crontab
pg_ctl -D /usr/local/var/postgres start
rake start
```

### Cron options
```
$ whenever --user app # set a user as which to install the crontab
$ whenever --load-file config/my_schedule.rb # set the schedule file
$ whenever --crontab-command 'sudo crontab` # override the crontab command
```
You can list installed cron jobs using `crontab -l`
Run `whenever --help` for a complete list of options for selecting the schedule to use, setting variables in the schedule, etc.

