import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'format',
        description: 'Format project files using the configured formatter',
    },
    run({ args }) {
        console.log('Info')
        console.log('Parsed args:', args)
    },
})
