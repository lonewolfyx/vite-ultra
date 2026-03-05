import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'lint',
        description: 'Run lint checks on the project source code',
    },
    run({ args }) {
        console.log('Lint')
        console.log('Parsed args:', args)
    },
})
