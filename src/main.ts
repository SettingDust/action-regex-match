import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const text = core.getInput('text');
    const regex = core.getInput('regex');
    const flags = core.getInput('flags');

    const re = new RegExp(regex, flags);

    const result = re.exec(text);

    if (result) {
      core.setOutput('match', result.shift());
      core.setOutput('matches', result);
    }
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
