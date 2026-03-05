import { intro } from '@clack/prompts'
import chalk from 'chalk'
import { createMain, defineCommand } from 'citty'
import { description, name, version } from '../package.json' with { type: 'json' }

const command = defineCommand({
    meta: {
        name,
        version,
        description,
    },
    setup() {
        intro(
            [
                chalk.blueBright(`✨ `),
                chalk.bgGreenBright.black(name),
                chalk.blue(`@${version}`),
                chalk.blueBright(` ✨`),
            ].join(''),
        )
    },
    subCommands: {
        // use vite
        dev: () => import('./commands/dev.ts').then(r => r.default),
        // use vite
        build: () => import('./commands/build.ts').then(r => r.default),
        // use eslint 、oxlint in type，default oxlint
        lint: () => import('./commands/lint.ts').then(r => r.default),
        // use prettier 、oxfmt in type，default oxfmt
        fmt: () => import('./commands/format.ts').then(r => r.default),
        // use create-xxx
        new: () => import('./commands/create.ts').then(r => r.default),
        // use vitest
        test: () => import('./commands/test.ts').then(r => r.default),
        // use vite、tsdown、tsup、rollup、rolldonw in type, default tsdown
        lib: () => import('./commands/lib.ts').then(r => r.default),
        // use turbo
        task: () => import('./commands/task.ts').then(r => r.default),
        // deploy to vercel 、netlify 、cloudflare in type, default vercel
        deploy: () => import('./commands/deploy.ts').then(r => r.default),
        // about this cli
        about: () => import('./commands/about.ts').then(r => r.default),
        // about package dependencies infos
        info: () => import('./commands/info.ts').then(r => r.default),
        // use rmcache
        rm: () => import('./commands/rm.ts').then(r => r.default),
    },
})

createMain(command)({})
