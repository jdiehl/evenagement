#! /usr/bin/env node
/* eslint-disable no-console */

const { readdirSync } = require('fs')

const components = readdirSync('./src/components').map(file => file.substr(0, file.indexOf('.')))
const stories = readdirSync('./src/components/stories').map(file => file.substr(0, file.indexOf('.')))

const WARN = '\x1b[33m'
const NC = '\x1b[0m'

let failed = 0
for (const component of components) {
  if (!component || component[0] === '.') continue
  if (stories.includes(component)) continue
  console.error(`Missing Storybook for Component: ${WARN}${component}${NC}`)
  failed = 1
}

process.exit(failed)
