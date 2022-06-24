import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const text = core.getInput('text')
    const regex = core.getInput('regex')
    const flags = core.getInput('flags')

    const re = new RegExp(regex, flags)

    const result = [...text.matchAll(re)].map(it => it[1])

    if (result) core.setOutput('matches', result.join('\n'))
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
