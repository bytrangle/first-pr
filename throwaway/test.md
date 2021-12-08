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