- implement parameter configuration options
    - allow user to supply configuration, preserve user supplied values from the original config?
    - acceptWhitespace
    - make sure that extra slashes are stripped

- tests
    - Configurations specs?

- move registration middleware to config or take as constructor arg

Refactor and cleanup:
- make relevant props readonly / private + consistent setters / getters
- documentation
- make http verbs case insensitive
- create example dir with mix compilation and make sure everything works
- CI? (travis?)

RouteRepo
- removeRoute / unregister
- disableRoute
- enableRoute
