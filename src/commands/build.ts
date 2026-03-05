import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'build',
        description: 'Build the project for production',
    },
    run({ args }) {
        console.log('Build')
        console.log('Parsed args:', args)
    },
})
