#! /usr/bin/env node
/* eslint-disable no-console */

const { readdirSync, readFileSync, statSync } = require('fs')

const NON_UI_COMPONENTS = ['./src/content/', './src/fragments/', './src/layouts/', './src/pages/']

let failed = 0

function fail(message, file) {
  console.error(`${message}: \x1b[33m${file}\x1b[0m`)
  failed += 1
}

function readdirRec(dir) {
  let res = []
  const files = readdirSync(dir)
  for (const file of files) {
    if (statSync(dir + file).isDirectory()) {
      res = res.concat(readdirRec(dir + file + '/'))
    } else {
      res.push(dir + file)
    }
  }
  return res
}

function checkStories() {
  const dir = './src/components/'
  const components = readdirSync(dir)
  const stories = readdirSync(`${dir}stories`).map(file => file.substr(0, file.indexOf('.')))

  for (const component of components) {
    if (stories.includes(component.substr(0, component.indexOf('.')))) continue
    if (statSync(dir + component).isDirectory()) continue
    fail('Missing Storybook for Component', dir + component)
  }
}

function checkTailwind() {
  for (const dir of NON_UI_COMPONENTS) {
    const files = readdirRec(dir)
    for (const file of files) {
      const content = readFileSync(file).toString()
      if (content.includes('className')) {
        fail('Non-UI Component uses custom class', file)
      }
    }
  }
}

checkStories()
checkTailwind()
process.exit(failed ? 1 : 0)
