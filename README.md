# Action Regex Match

[![actions-workflow-test][actions-workflow-test-badge]][actions-workflow-test]
[![release][release-badge]][release]
[![license][license-badge]][license]

This is a GitHub Action to do regex matching and output the matched text and groups captured by the given regex.

GitHub Actions natively supports some helpful functions, like `contains` and `startsWith`, but doesn't regex matching.
This actions provides the missing, useful function.

It would be more useful to use this with other GitHub Actions' outputs.

## Inputs

|  NAME   |                      DESCRIPTION                      |   TYPE   | REQUIRED | DEFAULT |
| ------- | ----------------------------------------------------- | -------- | -------- | ------- |
| `text`  | A text as the target for `inputs.regex`.              | `string` | `true`   | `N/A`   |
| `regex` | A regex for `inputs.text`. Supports capturing groups. | `string` | `true`   | `N/A`   |
| `flags` | Flags for inputs.regex. e.g.) `'g'`, `'gm'`           | `string` | `false`  | `''`    |

## Outputs

| NAME      | DESCRIPTION                                |   TYPE   |
|-----------|--------------------------------------------| -------- |
| `matches` | All captured group split with line breaks. | `string` |                                                                    | `string` |

## Example

```yaml
name: Add Label with Comment

on: [ issue_comment ]

jobs:
  create_comment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: SettingDust/action-regex-match@latest
        id: regex-match
        with:
          text: ${{ github.event.comment.body }}
          regex: '^/label\s*(.*?)\s*$'

      - uses: actions-ecosystem/action-add-labels@v1
        if: ${{ steps.regex-match.outputs.match != '' }}
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          labels: ${{ steps.regex-match.outputs.group1 }}
```

## License

Copyright 2020 The Actions Ecosystem Authors.

Action Regex Match is released under the [Apache License 2.0](./LICENSE).

<!-- badge links -->

[release]: https://github.com/actions-ecosystem/action-regex-match/releases

[release-badge]: https://img.shields.io/github/v/release/actions-ecosystem/action-regex-match?style=for-the-badge&logo=github

[license]: LICENSE

[license-badge]: https://img.shields.io/github/license/actions-ecosystem/action-add-labels?style=for-the-badge
