[route-repository](../README.md) / [Exports](../modules.md) / Uri

# Class: Uri

## Table of contents

### Constructors

- [constructor](Uri.md#constructor)

### Accessors

- [components](Uri.md#components)
- [fragment](Uri.md#fragment)
- [host](Uri.md#host)
- [password](Uri.md#password)
- [path](Uri.md#path)
- [port](Uri.md#port)
- [queryParameters](Uri.md#queryparameters)
- [queryString](Uri.md#querystring)
- [scheme](Uri.md#scheme)
- [uriParameters](Uri.md#uriparameters)
- [userinfo](Uri.md#userinfo)
- [username](Uri.md#username)

### Methods

- [bindParameters](Uri.md#bindparameters)
- [getComponent](Uri.md#getcomponent)
- [hasComponent](Uri.md#hascomponent)
- [isAbsolute](Uri.md#isabsolute)
- [isRelative](Uri.md#isrelative)
- [toString](Uri.md#tostring)
- [withComponent](Uri.md#withcomponent)

## Constructors

### constructor

• **new Uri**(`uri`, `config?`)

Create a new uri

**`throws`** UriSyntaxError

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` \| `Map`<[`UriComponent`](../enums/UriComponent.md), `string`\> |
| `config` | [`UriConfigurationInterface`](../interfaces/UriConfigurationInterface.md) |

#### Defined in

[src/Uri.ts:24](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L24)

## Accessors

### components

• `get` **components**(): `Map`<[`UriComponent`](../enums/UriComponent.md), `string`\>

Get all uri components

#### Returns

`Map`<[`UriComponent`](../enums/UriComponent.md), `string`\>

#### Defined in

[src/Uri.ts:178](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L178)

___

### fragment

• `get` **fragment**(): ``null`` \| `string`

Get fragment component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:169](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L169)

___

### host

• `get` **host**(): ``null`` \| `string`

Get uri host component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:114](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L114)

___

### password

• `get` **password**(): ``null`` \| `string`

Get uri password component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:105](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L105)

___

### path

• `get` **path**(): ``null`` \| `string`

Get uri path component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:138](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L138)

___

### port

• `get` **port**(): ``null`` \| `number`

Get uri port component

#### Returns

``null`` \| `number`

#### Defined in

[src/Uri.ts:123](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L123)

___

### queryParameters

• `get` **queryParameters**(): ``null`` \| [`QueryParameterCollection`](QueryParameterCollection.md)

Get query parameters

#### Returns

``null`` \| [`QueryParameterCollection`](QueryParameterCollection.md)

#### Defined in

[src/Uri.ts:156](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L156)

___

### queryString

• `get` **queryString**(): ``null`` \| `string`

Get query string

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:147](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L147)

___

### scheme

• `get` **scheme**(): ``null`` \| `string`

Get uri scheme component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:78](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L78)

___

### uriParameters

• `get` **uriParameters**(): [`UriParameterCollection`](UriParameterCollection.md)

Get the uri parameters

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Defined in

[src/Uri.ts:187](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L187)

___

### userinfo

• `get` **userinfo**(): ``null`` \| `string`

Get uri userinfo component, containing both username and password

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:87](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L87)

___

### username

• `get` **username**(): ``null`` \| `string`

Get uri user component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:96](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L96)

## Methods

### bindParameters

▸ **bindParameters**(`values`, `config?`): `string`

Bind given values as uri parameters

**`throws`** UriParameterBindingError

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `values` | `any` | `undefined` |
| `config` | ``null`` \| [`UriParameterBinderConfigurationInterface`](../interfaces/UriParameterBinderConfigurationInterface.md) | `null` |

#### Returns

`string`

#### Defined in

[src/Uri.ts:198](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L198)

___

### getComponent

▸ **getComponent**(`component`): ``null`` \| `string`

Get uri component

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`UriComponent`](../enums/UriComponent.md) |

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:211](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L211)

___

### hasComponent

▸ **hasComponent**(`component`): `boolean`

Check if the uri has the given component

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`UriComponent`](../enums/UriComponent.md) |

#### Returns

`boolean`

#### Defined in

[src/Uri.ts:220](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L220)

___

### isAbsolute

▸ **isAbsolute**(): `boolean`

Check if this uri is absolute

#### Returns

`boolean`

#### Defined in

[src/Uri.ts:60](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L60)

___

### isRelative

▸ **isRelative**(): `boolean`

Check if this uri is relative

#### Returns

`boolean`

#### Defined in

[src/Uri.ts:69](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L69)

___

### toString

▸ **toString**(): `string`

Get a string representation

#### Returns

`string`

#### Defined in

[src/Uri.ts:51](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L51)

___

### withComponent

▸ **withComponent**(`component`, `value`): [`Uri`](Uri.md)

Create a new instance of this uri with the given component uri component

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`UriComponent`](../enums/UriComponent.md) |
| `value` | `string` |

#### Returns

[`Uri`](Uri.md)

#### Defined in

[src/Uri.ts:229](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/Uri.ts#L229)
