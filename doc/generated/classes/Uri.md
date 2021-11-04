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
| `uri` | `string` \| `Map`<``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"``, `string`\> |
| `config` | [`UriConfigurationInterface`](../interfaces/UriConfigurationInterface.md) |

#### Defined in

[src/Uri.ts:25](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L25)

## Accessors

### components

• `get` **components**(): `Map`<``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"``, `string`\>

Get all uri components

#### Returns

`Map`<``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"``, `string`\>

#### Defined in

[src/Uri.ts:179](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L179)

___

### fragment

• `get` **fragment**(): ``null`` \| `string`

Get fragment component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:170](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L170)

___

### host

• `get` **host**(): ``null`` \| `string`

Get uri host component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:115](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L115)

___

### password

• `get` **password**(): ``null`` \| `string`

Get uri password component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:106](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L106)

___

### path

• `get` **path**(): ``null`` \| `string`

Get uri path component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:139](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L139)

___

### port

• `get` **port**(): ``null`` \| `number`

Get uri port component

#### Returns

``null`` \| `number`

#### Defined in

[src/Uri.ts:124](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L124)

___

### queryParameters

• `get` **queryParameters**(): ``null`` \| [`QueryParameterCollection`](QueryParameterCollection.md)

Get query parameters

#### Returns

``null`` \| [`QueryParameterCollection`](QueryParameterCollection.md)

#### Defined in

[src/Uri.ts:157](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L157)

___

### queryString

• `get` **queryString**(): ``null`` \| `string`

Get query string

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:148](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L148)

___

### scheme

• `get` **scheme**(): ``null`` \| `string`

Get uri scheme component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:79](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L79)

___

### uriParameters

• `get` **uriParameters**(): [`UriParameterCollection`](UriParameterCollection.md)

Get the uri parameters

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Defined in

[src/Uri.ts:188](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L188)

___

### userinfo

• `get` **userinfo**(): ``null`` \| `string`

Get uri userinfo component, containing both username and password

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:88](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L88)

___

### username

• `get` **username**(): ``null`` \| `string`

Get uri user component

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:97](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L97)

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

[src/Uri.ts:199](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L199)

___

### getComponent

▸ **getComponent**(`component`): ``null`` \| `string`

Get uri component

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | ``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"`` |

#### Returns

``null`` \| `string`

#### Defined in

[src/Uri.ts:212](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L212)

___

### hasComponent

▸ **hasComponent**(`component`): `boolean`

Check if the uri has the given component

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | ``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"`` |

#### Returns

`boolean`

#### Defined in

[src/Uri.ts:221](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L221)

___

### isAbsolute

▸ **isAbsolute**(): `boolean`

Check if this uri is absolute

#### Returns

`boolean`

#### Defined in

[src/Uri.ts:61](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L61)

___

### isRelative

▸ **isRelative**(): `boolean`

Check if this uri is relative

#### Returns

`boolean`

#### Defined in

[src/Uri.ts:70](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L70)

___

### toString

▸ **toString**(): `string`

Get a string representation

#### Returns

`string`

#### Defined in

[src/Uri.ts:52](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L52)

___

### withComponent

▸ **withComponent**(`component`, `value`): [`Uri`](Uri.md)

Create a new instance of this uri with the given component uri component

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | ``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"`` |
| `value` | `string` |

#### Returns

[`Uri`](Uri.md)

#### Defined in

[src/Uri.ts:230](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/Uri.ts#L230)
