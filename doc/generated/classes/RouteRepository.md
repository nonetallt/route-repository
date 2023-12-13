[route-repository](../README.md) / [Exports](../modules.md) / RouteRepository

# Class: RouteRepository

Describes a class that can register routes

## Hierarchy

- [`RouteRegistrar`](RouteRegistrar.md)

  ↳ **`RouteRepository`**

## Table of contents

### Constructors

- [constructor](RouteRepository.md#constructor)

### Methods

- [countRoutes](RouteRepository.md#countroutes)
- [delete](RouteRepository.md#delete)
- [get](RouteRepository.md#get)
- [getRoute](RouteRepository.md#getroute)
- [group](RouteRepository.md#group)
- [hasRouteWithName](RouteRepository.md#hasroutewithname)
- [hasRouteWithUri](RouteRepository.md#hasroutewithuri)
- [listRoutes](RouteRepository.md#listroutes)
- [patch](RouteRepository.md#patch)
- [post](RouteRepository.md#post)
- [put](RouteRepository.md#put)
- [register](RouteRepository.md#register)
- [registerAll](RouteRepository.md#registerall)

## Constructors

### constructor

• **new RouteRepository**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`RouteRepositoryConfigurationInterface`](../interfaces/RouteRepositoryConfigurationInterface.md) |

#### Overrides

[RouteRegistrar](RouteRegistrar.md).[constructor](RouteRegistrar.md#constructor)

#### Defined in

[src/RouteRepository.ts:17](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRepository.ts#L17)

## Methods

### countRoutes

▸ **countRoutes**(): `number`

Count the number of routes

#### Returns

`number`

#### Defined in

[src/RouteRepository.ts:68](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRepository.ts#L68)

___

### delete

▸ **delete**(`name`, `uri`, `extra?`): `void`

Register a new delete route

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

**`Throws`**

RegistrationError

#### Inherited from

[RouteRegistrar](RouteRegistrar.md).[delete](RouteRegistrar.md#delete)

#### Defined in

[src/RouteRegistrar.ts:145](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRegistrar.ts#L145)

___

### get

▸ **get**(`name`, `uri`, `extra?`): `void`

Register a new get route

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

**`Throws`**

RegistrationError

#### Inherited from

[RouteRegistrar](RouteRegistrar.md).[get](RouteRegistrar.md#get)

#### Defined in

[src/RouteRegistrar.ts:101](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRegistrar.ts#L101)

___

### getRoute

▸ **getRoute**(`name`): ``null`` \| [`Route`](Route.md)

Get a route with the given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`Route`](Route.md)

#### Defined in

[src/RouteRepository.ts:77](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRepository.ts#L77)

___

### group

▸ **group**(`config`, `callback`): `void`

Register routes using same registrar settings for the whole group

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`RouteRegistrarConfigurationInterface`](../interfaces/RouteRegistrarConfigurationInterface.md) |
| `callback` | (`registrar`: [`RouteRegistrar`](RouteRegistrar.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/RouteRepository.ts:124](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRepository.ts#L124)

___

### hasRouteWithName

▸ **hasRouteWithName**(`name`): `boolean`

Check if a route with a given name exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/RouteRepository.ts:87](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRepository.ts#L87)

___

### hasRouteWithUri

▸ **hasRouteWithUri**(`uri`, `...methods`): `boolean`

Check if a route with a given uri and optionally method, exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `...methods` | (``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"``)[] |

#### Returns

`boolean`

#### Defined in

[src/RouteRepository.ts:96](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRepository.ts#L96)

___

### listRoutes

▸ **listRoutes**(): `string`

Get a formatted list of all registered routes.

#### Returns

`string`

#### Defined in

[src/RouteRepository.ts:134](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRepository.ts#L134)

___

### patch

▸ **patch**(`name`, `uri`, `extra?`): `void`

Register a new patch route

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

**`Throws`**

RegistrationError

#### Inherited from

[RouteRegistrar](RouteRegistrar.md).[patch](RouteRegistrar.md#patch)

#### Defined in

[src/RouteRegistrar.ts:134](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRegistrar.ts#L134)

___

### post

▸ **post**(`name`, `uri`, `extra?`): `void`

Register a new post route

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

**`Throws`**

RegistrationError

#### Inherited from

[RouteRegistrar](RouteRegistrar.md).[post](RouteRegistrar.md#post)

#### Defined in

[src/RouteRegistrar.ts:112](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRegistrar.ts#L112)

___

### put

▸ **put**(`name`, `uri`, `extra?`): `void`

Register a new put route

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

**`Throws`**

RegistrationError

#### Inherited from

[RouteRegistrar](RouteRegistrar.md).[put](RouteRegistrar.md#put)

#### Defined in

[src/RouteRegistrar.ts:123](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRegistrar.ts#L123)

___

### register

▸ **register**(`name`, `method`, `uri`, `extra?`): `void`

Create and register a new route from parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"`` |
| `uri` | `string` \| `Map`\<``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"``, `string`\> |
| `extra` | `object` |

#### Returns

`void`

**`Throws`**

RegistrationError

#### Inherited from

[RouteRegistrar](RouteRegistrar.md).[register](RouteRegistrar.md#register)

#### Defined in

[src/RouteRegistrar.ts:41](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRegistrar.ts#L41)

___

### registerAll

▸ **registerAll**(`routes`): `void`

Register all routes from a given schema

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | `string` \| [`RouteInterface`](../interfaces/RouteInterface.md)[] |

#### Returns

`void`

**`Throws`**

RegistrationError

#### Inherited from

[RouteRegistrar](RouteRegistrar.md).[registerAll](RouteRegistrar.md#registerall)

#### Defined in

[src/RouteRegistrar.ts:55](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/RouteRegistrar.ts#L55)
