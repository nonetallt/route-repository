Import routes from json file using typescript

```javascript

import { Router } from 'front-to-back-router';
import * as routes from './routes.json';

router = new Router(routes);
```

Prefixing multiple routes


```javascript
router = new Router();
router.prefix('foo', (router) => {
    router.register('test', 'GET', '/bar')
})

router.route('test').url(); // /foo/bar
```
