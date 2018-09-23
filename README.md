# Node CLI
Node comes with variety of CLI i.e. command line interface. This options support builtin debugging,
multiple ways to execute scripts, and other helpful runtime options.

# Node REPL as CLI
running `node` command without any option starts `REPL` i.e `Read Eval Print Loop`.
It helps a quickly way to run the javascript code. Following are few notes.

1. By default `REPL` prints the output therefore you don't generally use `console.log`
2. It remembers the lines you previously tested. It can also be navigate using `up` and `down` arrow.
3. It does provide auto complete on `tab` which nothing but a simple list of all the `global` object.
4. In `REPL`, lot of `node` global modules are pre-loaded and available without even using `require`
5. Use underscore `_` to print the last evaluated line.
6. It does have following special command which starts `.`
- .break
- .load
- .save
- .editor Note: Use crt+d to exit
- .
7. You can exit by `ctr+c` twice
## How to use your own version of `rlwrap`?
Start `REPL` using following command
```
NODE_NO_READLINE=1 rlwrap node
```

# Node `repl` built in module

## Customize `repl` and start your own version
You can write `repl.js` file with following code and then run `node repl.js` to start your own custom `repl`.
```
const repl = require('repl');
repl.start({
ignoreUndefined: true,
replMode: repl.REPL.MODE_STRICT
});
```

## Preload your own favourite `npm` module
```
const repl = require('repl');
const r = repl.start({
  ignoreUndefined: true,
  replMode: repl.MODE_STRICT
});

r.context.lodash = require('loadash')
```

# Node CLI Example
## Get help
```
node --help
```
Following are sample output.
```
  -v, --version              print Node.js version
  -e, --eval script          evaluate script
  -p, --print                evaluate script and print result
  -c, --check                syntax check script without executing
  -i, --interactive          always enter the REPL even if stdin
                             does not appear to be a terminal
  -r, --require              module to preload (option can be repeated)
  -                          script read from stdin (default; interactive mode if a tty)
  --inspect[=[host:]port]    activate inspector on host:port
                             (default: 127.0.0.1:9229)
  --inspect-brk[=[host:]port]
                             activate inspector on host:port
                             and break at start of user script
  --inspect-port=[host:]port
                             set host:port for inspector
  --no-deprecation           silence deprecation warnings
  --trace-deprecation        show stack traces on deprecations
  --throw-deprecation        throw an exception on deprecations
  --pending-deprecation      emit pending deprecation warnings
  --no-warnings              silence all process warnings
  --napi-modules             load N-API modules (no-op - option
                             kept for compatibility)
  --abort-on-uncaught-exception
                             aborting instead of exiting causes a
                             core file to be generated for analysis
  --trace-warnings           show stack traces on process warnings
  --redirect-warnings=file
                             write warnings to file instead of
                             stderr
  --trace-sync-io            show stack trace when use of sync IO
                             is detected after the first tick
  --no-force-async-hooks-checks
                             disable checks for async_hooks
  --trace-events-enabled     track trace events
  --trace-event-categories   comma separated list of trace event
                             categories to record
  --trace-event-file-pattern Template string specifying the
                             filepath for the trace-events data, it
                             supports ${rotation} and ${pid}
                             log-rotation id. %2$u is the pid.
  --track-heap-objects       track heap object allocations for heap snapshots
  --prof-process             process v8 profiler output generated
                             using --prof
  --zero-fill-buffers        automatically zero-fill all newly allocated
                             Buffer and SlowBuffer instances
  --v8-options               print v8 command line options
  --v8-pool-size=num         set v8's thread pool size
  --tls-cipher-list=val      use an alternative default TLS cipher list
  --use-bundled-ca           use bundled CA store (default)
  --use-openssl-ca           use OpenSSL's default CA store
  --openssl-config=file      load OpenSSL configuration from the
                             specified file (overrides
                             OPENSSL_CONF)
  --icu-data-dir=dir         set ICU data load path to dir
                             (overrides NODE_ICU_DATA)
  --preserve-symlinks        preserve symbolic links when resolving
  --experimental-modules     experimental ES Module support
                             and caching modules
  --experimental-vm-modules  experimental ES Module support
                             in vm module

Environment variables:
NODE_DEBUG                   ','-separated list of core modules
                             that should print debug information
NODE_DISABLE_COLORS          set to 1 to disable colors in the REPL
NODE_EXTRA_CA_CERTS          path to additional CA certificates
                             file
NODE_ICU_DATA                data path for ICU (Intl object) data
NODE_NO_WARNINGS             set to 1 to silence process warnings
NODE_OPTIONS                 set CLI options in the environment
                             via a space-separated list
NODE_PATH                    ':'-separated list of directories
                             prefixed to the module search path
NODE_PENDING_DEPRECATION     set to 1 to emit pending deprecation
                             warnings
NODE_REPL_HISTORY            path to the persistent REPL history
                             file
NODE_REDIRECT_WARNINGS       write warnings to path instead of
                             stderr
OPENSSL_CONF                 load OpenSSL configuration from file
```
