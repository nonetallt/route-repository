[route-repository](../README.md) / [Exports](../modules.md) / RouteRegistrar

# Class: RouteRegistrar

Describes a class that can register routes

## Hierarchy

- **`RouteRegistrar`**

  ↳ [`RouteRepository`](RouteRepository.md)

## Table of contents

### Constructors

- [constructor](RouteRegistrar.md#constructor)

### Methods

- [delete](RouteRegistrar.md#delete)
- [get](RouteRegistrar.md#get)
- [patch](RouteRegistrar.md#patch)
- [post](RouteRegistrar.md#post)
- [put](RouteRegistrar.md#put)
- [register](RouteRegistrar.md#register)
- [registerAll](RouteRegistrar.md#registerall)

## Constructors

### constructor

• **new RouteRegistrar**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`RouteRegistrarConfigurationInterface`](../interfaces/RouteRegistrarConfigurationInterface.md) |

#### Defined in

[src/RouteRegistrar.ts:21](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L21)

## Methods

### delete

▸ **delete**(`name`, `uri`, `extra?`): `void`

Register a new delete route

**`throws`** RegistrationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:145](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L145)

___

### get

▸ **get**(`name`, `uri`, `extra?`): `void`

Register a new get route

**`throws`** RegistrationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:101](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L101)

___

### patch

▸ **patch**(`name`, `uri`, `extra?`): `void`

Register a new patch route

**`throws`** RegistrationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:134](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L134)

___

### post

▸ **post**(`name`, `uri`, `extra?`): `void`

Register a new post route

**`throws`** RegistrationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:112](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L112)

___

### put

▸ **put**(`name`, `uri`, `extra?`): `void`

Register a new put route

**`throws`** RegistrationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uri` | `string` |
| `extra` | `object` |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:123](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L123)

___

### register

▸ **register**(`name`, `method`, `uri`, `extra?`): `void`

Create and register a new route from parameters

**`throws`** RegistrationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"CONNECT"`` \| ``"OPTIONS"`` \| ``"TRACE"`` |
| `uri` | `string` \| `Map`<``"scheme"`` \| ``"userinfo"`` \| ``"username"`` \| ``"password"`` \| ``"host"`` \| ``"port"`` \| ``"path"`` \| ``"query"`` \| ``"fragment"``, `string`\> |
| `extra` | `object` |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:41](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L41)

___

### registerAll

▸ **registerAll**(`routes`): `void`

Register all routes from a given schema

**`throws`** RegistrationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `routes` | `string` \| [`RouteInterface`](../interfaces/RouteInterface.md)[] |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:55](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/RouteRegistrar.ts#L55)
