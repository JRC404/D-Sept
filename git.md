# What is Git?

## Version Control

* System / tool that tracks changes to our files / folders over time.
* Allows engineers / development teams to manage and keep a histroy of changes made to the codebase
    * Who made the changes?
    * When were the changes made?
    * Most importantly, what were the changes?

## Why do we use it in Software Development?

* Collaboration: It allows multiple developers to work on the same codebase simultaneously without interfering with each other
* History Tracking: a detailed record of code changes, identifying issues / fixes
* Code Backup: We are able to store code safely and restore previous versions / states if needed
* Experimentation: Engineers can create branches to experiment with new features or bug fixes without affecting the main codebase

## Setting up our Git on Personal Git Account

```
git config --global user.name
git config --global user.name "Your name here"
git config --global user.name

git config --global user.email
git config --global user.email "Your email here"
git config --global user.email
```
* We are setting up the global configuration of our git credentials and these will be used when uploading to a git repository

* When using a command line / terminal, validation rarely happens. You only really get responses, when you do something wrong

## Cloning a Repo

* Gone are the days of having 50 local files / version, with git, we can clone the original and keep updating that same repository. Other people can also do that, everyone can stay up to date with no worries
```
git clone repository.url
```