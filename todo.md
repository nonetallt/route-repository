- implement parameter configuration options
    - allow user to supply configuration, preserve user supplied values from the original config?
    - acceptWhitespace
    - bindGetParameters
    - typeConversion function
    - make sure that extra slashes are stripped
    - check if parameter encoding works

- tests
    - Configurations?

- move registration middleware to config or take as constructor arg

RouteRepo
- load
- loadJson
- disableRoute
- enableRoute
- removeRoute / unregister

Refactor and cleanup:
- make relevant props readonly / private + consistent setters / getters
- documentation
- make http verbs case insensitive
- create example dir with mix compilation and make sure everything works
- CI? (travis?)
