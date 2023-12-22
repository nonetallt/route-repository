[route-repository](../README.md) / [Exports](../modules.md) / RegistrationError

# Class: RegistrationError

Error that is thrown when route registration fails

## Hierarchy

- `Error`

  ↳ **`RegistrationError`**

## Table of contents

### Constructors

- [constructor](RegistrationError.md#constructor)

### Properties

- [message](RegistrationError.md#message)
- [name](RegistrationError.md#name)
- [previous](RegistrationError.md#previous)
- [stack](RegistrationError.md#stack)
- [prepareStackTrace](RegistrationError.md#preparestacktrace)
- [stackTraceLimit](RegistrationError.md#stacktracelimit)

### Methods

- [captureStackTrace](RegistrationError.md#capturestacktrace)

## Constructors

### constructor

• **new RegistrationError**(`message`, `previous?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `previous?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

[src/error/RegistrationError.ts:9](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/error/RegistrationError.ts#L9)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### previous

• `Readonly` **previous**: ``null`` \| `Error`

#### Defined in

[src/error/RegistrationError.ts:7](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/error/RegistrationError.ts#L7)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
