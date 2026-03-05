import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'dev',
        description: 'Start the development server for the current project',
    },
    run({ args }) {
        console.log('Dev')
        console.log('Parsed args:', args)
    },
})
