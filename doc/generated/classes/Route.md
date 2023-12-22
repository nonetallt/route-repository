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

[src/Route.ts:13](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L13)

## Properties

### extra

• `Readonly` **extra**: `object`

#### Defined in

[src/Route.ts:11](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L11)

___

### method

• `Readonly` **method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"``

#### Defined in

[src/Route.ts:9](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L9)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[src/Route.ts:8](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L8)

## Accessors

### uri

• `get` **uri**(): [`Uri`](Uri.md)

#### Returns

[`Uri`](Uri.md)

#### Defined in

[src/Route.ts:74](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L74)

• `set` **uri**(`uri`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | [`Uri`](Uri.md) |

#### Returns

`void`

#### Defined in

[src/Route.ts:79](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L79)

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

[src/Route.ts:64](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L64)

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

[src/Route.ts:34](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L34)

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

[src/Route.ts:25](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L25)

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

[src/Route.ts:43](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L43)

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

[src/Route.ts:52](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/Route.ts#L52)
