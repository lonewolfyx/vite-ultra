import { defineCommand } from 'citty'

export default defineCommand({
    meta: {
        name: 'lib',
        description: 'Build the project as a reusable library',
    },
    run({ args }) {
        console.log('Lib')
        console.log('Parsed args:', args)
    },
})
