Refactor and cleanup:
- documentation
    - config
    - registration
    - binding
    - do not use typedoc readme?
- make http verbs case insensitive
- accept uricomponentType instead of uricomponent
- create example dir with mix compilation and make sure everything works
- CI? (travis?)
- more tests:
    - Configurations specs?
    - Other missing tests

RouteRepo
- removeRoute / unregister
- disableRoute
- enableRoute

UriBuilder
- better validation for components (should only support http / https schemes etc.)
