import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'create',
        description: 'Create a new monorepo package (in-project) or a new project (global) on use a template lib',
    },
    run({ args }) {
        console.log('Create')
        console.log('Parsed args:', args)
    },
})
