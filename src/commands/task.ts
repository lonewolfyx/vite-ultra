import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'task',
        description: 'Run predefined project tasks, in package scripts',
    },
    run({ args }) {
        console.log('Task')
        console.log('Parsed args:', args)
    },
})
