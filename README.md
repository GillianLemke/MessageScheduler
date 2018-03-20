# README

### To Run

```
whenever --update-crontab
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
