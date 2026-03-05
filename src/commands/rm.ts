import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'rm',
        description: 'Remove the cache files under the current project',
    },
    run({ args }) {
        console.log('Remove')
        console.log('Parsed args:', args)
    },
})
