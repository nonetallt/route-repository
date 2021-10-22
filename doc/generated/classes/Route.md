[route-repository](../README.md) / [Exports](../modules.md) / Route

# Class: Route

## Table of contents

### Constructors

- [constructor](Route.md#constructor)

### Properties

- [extra](Route.md#extra)
- [method](Route.md#method)
- [name](Route.md#name)

### Accessors

- [uri](Route.md#uri)

### Methods

- [withExtra](Route.md#withextra)
- [withMethod](Route.md#withmethod)
- [withName](Route.md#withname)
- [withUri](Route.md#withuri)
- [withUriComponent](Route.md#withuricomponent)

## Constructors

### constructor

• **new Route**(`name`, `method`, `uri`, `extra?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"`` |
| `uri` | `string` \| [`Uri`](Uri.md) |
| `extra` | `object` |

#### Defined in

[src/Route.ts:14](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L14)

## Properties

### extra

• `Readonly` **extra**: `object`

#### Defined in

[src/Route.ts:12](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L12)

___

### method

• `Readonly` **method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"``

#### Defined in

[src/Route.ts:10](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L10)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[src/Route.ts:9](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L9)

## Accessors

### uri

• `get` **uri**(): [`Uri`](Uri.md)

#### Returns

[`Uri`](Uri.md)

#### Defined in

[src/Route.ts:75](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L75)

• `set` **uri**(`uri`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | [`Uri`](Uri.md) |

#### Returns

`void`

#### Defined in

[src/Route.ts:80](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L80)

## Methods

### withExtra

▸ **withExtra**(`extra`): [`Route`](Route.md)

Create a new instnace of this route with the given extra

#### Parameters

| Name | Type |
| :------ | :------ |
| `extra` | `object` |

#### Returns

[`Route`](Route.md)

#### Defined in

[src/Route.ts:65](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L65)

___

### withMethod

▸ **withMethod**(`method`): [`Route`](Route.md)

Create a new instance of this route with the given request method

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"`` |

#### Returns

[`Route`](Route.md)

#### Defined in

[src/Route.ts:35](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L35)

___

### withName

▸ **withName**(`name`): [`Route`](Route.md)

Create a new instance of this route with the given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Route`](Route.md)

#### Defined in

[src/Route.ts:26](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L26)

___

### withUri

▸ **withUri**(`uri`): [`Route`](Route.md)

Create a new instance of this route with the given uri

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` \| [`Uri`](Uri.md) |

#### Returns

[`Route`](Route.md)

#### Defined in

[src/Route.ts:44](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L44)

___

### withUriComponent

▸ **withUriComponent**(`component`, `value`): [`Route`](Route.md)

Create a new instance of this route with the given uri component

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | ``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"`` |
| `value` | `string` |

#### Returns

[`Route`](Route.md)

#### Defined in

[src/Route.ts:53](https://github.com/nonetallt/front-to-back-router/blob/ae9086a/src/Route.ts#L53)
