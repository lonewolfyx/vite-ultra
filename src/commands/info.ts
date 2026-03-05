import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'info',
        description: 'Show system, Node.js, and project environment information',
    },
    run({ args }) {
        console.log('Info')
        console.log('Parsed args:', args)
    },
})
