This directory is for testing if a workflow will only run on merged PR.

You can disregard this directory and all of its children content.

## Difference between contexts and environment variables
Environment variables only exists on the runner executing your job.

Contexts, on the other hand, are available at any point in your workflow, even when default environment variables are unavailable.

For example, you can use contexts with expressions to perform initial processing before the job is routed to a runenr for execution. This allows you to use a context with the conditional `if`keyword to determine whether a step should run.

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

Result: success, but couldn't get the Github envs

## How to get a PR's author
