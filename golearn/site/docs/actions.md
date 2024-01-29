# Action

## Github Actions

[Understanding Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

[GH Pages - websites for your repos](https://pages.github.com/)

## Sandbox Actions

Check the execution at [Sandbox actions console](https://github.com/MarcoAAlmeida/sandbox/actions)


### publish mkdocs to GH Pages

[mkdocs-deploy](https://github.com/mhausenblas/mkdocs-deploy-gh-pages)

This action publishes to [the sandbox root](https://marcoaalmeida.github.io/sandbox/) (which might not be advisable)

> TODO : disable this, and put in place an action to upload to s3, make a link to [Marco's landing page](https://marcoalmeida.dev.br/)

```yaml
name: Publish mkdocs via GitHub Pages
on:
  push:
    paths:
      golearn/site/**

jobs:
  build:
    name: Deploy docs
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - uses: actions/setup-python@v2
      - run: pip install --upgrade pip && pip install mkdocs mkdocs-gen-files mkdocs-material
      - run: git config user.name 'github-actions[bot]' && git config user.email 'github-actions[bot]@users.noreply.github.com'
      - name: Publish docs
        working-directory: ./golearn/site
        run: mkdocs gh-deploy
```
[check source](https://github.com/MarcoAAlmeida/sandbox/blob/main/.github/workflows/main.yml)