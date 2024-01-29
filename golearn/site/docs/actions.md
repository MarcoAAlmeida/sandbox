# Action

## Github Actions

[Understanding Github Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

[GH Pages - websites for your repos](https://pages.github.com/)

## Sandbox Actions

Check the execution at [Sandbox actions console](https://github.com/MarcoAAlmeida/sandbox/actions)


### publish mkdocs to GH Pages

[mkdocs-deploy](https://github.com/mhausenblas/mkdocs-deploy-gh-pages)

### publish nuxtJS to s3

```yaml
name: build-and-deploy-s3
run-name: ${{ github.actor }} builds project with GitHub Actions
on:
  push:
    paths:
      mlearn/**
jobs:
  build-nuxt-then-upload:
    runs-on: ubuntu-latest
    steps:
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '19'
      - run: cd mlearn && yarn install && npm run generate
      - run: cd mlearn && ls -al
      - run: aws s3 sync mlearn/.output/public s3://mlearn.marcoalmeida.dev.br -
```
[check source](https://github.com/MarcoAAlmeida/sandbox/blob/main/.github/workflows/build-and-deploy-s3.yml)