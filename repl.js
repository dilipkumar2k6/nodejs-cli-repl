const repl = require('repl');
const r = repl.start({
  ignoreUndefined: true,
  replMode: repl.MODE_STRICT
});

r.context.lodash = require('loadash')
