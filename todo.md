test that mergeQuery prioritizes uri params over base params

- fix base uri config

- tests have todos
- merge group registrar config from original config (repo's registrar config) so that non-overridden values are as default

- allow user to supply configuration as argument when binding parameters, merge / override configs

- Configuration proxies (using setters and getters)
    - registrar: accept baseUri directly

- prepend slash in apply configuration (enable setting by default)
    - add defaultScheme option? defaulting to https (relevant when slash is not prepended)


check if route parameter encoding works
don't trim if route params can be whitespace strings

- uri configuration
    - base uri (test and more options: merge path, merge query)
    - strip leading
    - strip trailing
    - conversion function (TESTS)


- create example dir with mix compilation and make sure everything works
- make relevant props readonly / private + consistent setters / getters
- documentation
- make http verbs case insensitive
- handle nested uri parameters?

CI? (travis?)

RouteRepo
- load
- loadJson
- disableRoute
- enableRoute
- removeRoute / unregister
