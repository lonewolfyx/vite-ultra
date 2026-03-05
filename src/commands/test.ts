import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'test',
        description: 'Run the project test suite',
    },
    run({ args }) {
        console.log('Test')
        console.log('Parsed args:', args)
    },
})
