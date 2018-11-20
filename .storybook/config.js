import { configure } from '@storybook/riot'

// automatically import all files ending in *.stories.js
const req = require.context('../src/tags', true, /.stories.js$/)
function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
