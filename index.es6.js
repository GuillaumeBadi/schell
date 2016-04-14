
import { exec } from 'child_process'

export const $_ = (command, output = true) => new Promise((resolve, reject) =>
  exec(command, (err, stdout, stderr) => err || stderr
    ? reject(err || stderr)
    : resolve(output && console.log(stdout))))
