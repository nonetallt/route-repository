

merge group registrar config from original config (repo's registrar config) so that non-overridden values are as default

check if route parameter encoding works

don't trim if route params can be whitespace strings

FIX prefix (this is what merge is for! change merge to "setComponent" ?) and ApplyConfiguration middleware
-> create setter / getter for prefix that actually modifies the underlying value?



- prepend slash in apply configuration (enable setting by default)
    - add defaultScheme option? defaulting to https (relevant when slash is not prepended)



- uri configuration
    - base uri (test and more options: merge path, merge query)
    - strip leading
    - strip trailing
    - conversion function (TESTS)


- handle nested uri parameters?

- create example dir with mix compilation and make sure everything works



- make relevant props readonly / private + consistent setters / getters
- make http verbs case insensitive
- documentation

CI? (travis?)



RouteRepo
- disableRoute
- enableRoute
- removeRoute / unregister
