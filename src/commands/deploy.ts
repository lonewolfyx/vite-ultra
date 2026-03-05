import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'deploy',
        description: 'Deploy the project to the configured platform',
    },
    run({ args }) {
        console.log('Deploy')
        console.log('Parsed args:', args)
    },
})
