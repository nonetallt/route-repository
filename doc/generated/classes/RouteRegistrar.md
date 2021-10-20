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

[src/RouteRegistrar.ts:20](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L20)

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

[src/RouteRegistrar.ts:144](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L144)

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

[src/RouteRegistrar.ts:100](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L100)

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

[src/RouteRegistrar.ts:133](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L133)

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

[src/RouteRegistrar.ts:111](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L111)

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

[src/RouteRegistrar.ts:122](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L122)

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
| `uri` | `string` \| `Map`<[`UriComponent`](../enums/UriComponent.md), `string`\> |
| `extra` | `object` |

#### Returns

`void`

#### Defined in

[src/RouteRegistrar.ts:40](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L40)

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

[src/RouteRegistrar.ts:54](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/RouteRegistrar.ts#L54)
