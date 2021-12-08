This directory is for testing if a workflow will only run on merged PR.

You can disregard this directory and all of its children content.

## How to trigger an action on merged PR?
### Experiment 1
```
jobs:
  build:
    name: Check if it's a merged PR
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - name: Get Github env
        run: |
          echo $GITHUB_ENV
```
Result: skipped

### Experiment 2
```
name: Pull request merged

on:
  pull_request:
    types: [closed]

jobs:
  merge_job:
    name: Check if it's a merged PR
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - name: Get Github env
        run: |
          echo $GITHUB_ENV
```