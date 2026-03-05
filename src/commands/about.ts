import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'about',
        description: 'Show information about vite ultra',
    },
    run({ args }) {
        console.log('About')
        console.log('Parsed args:', args)
    },
})
