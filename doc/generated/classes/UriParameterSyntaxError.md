[route-repository](../README.md) / [Exports](../modules.md) / UriParameterSyntaxError

# Class: UriParameterSyntaxError

Error that is thrown when parameter syntax is incorrect

## Hierarchy

- `Error`

  ↳ **`UriParameterSyntaxError`**

## Table of contents

### Constructors

- [constructor](UriParameterSyntaxError.md#constructor)

### Properties

- [message](UriParameterSyntaxError.md#message)
- [name](UriParameterSyntaxError.md#name)
- [previous](UriParameterSyntaxError.md#previous)
- [stack](UriParameterSyntaxError.md#stack)
- [prepareStackTrace](UriParameterSyntaxError.md#preparestacktrace)
- [stackTraceLimit](UriParameterSyntaxError.md#stacktracelimit)

### Methods

- [captureStackTrace](UriParameterSyntaxError.md#capturestacktrace)

## Constructors

### constructor

• **new UriParameterSyntaxError**(`message`, `previous?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `previous?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

[src/error/UriParameterSyntaxError.ts:9](https://github.com/nonetallt/front-to-back-router/blob/c711a78/src/error/UriParameterSyntaxError.ts#L9)

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

[src/error/UriParameterSyntaxError.ts:7](https://github.com/nonetallt/front-to-back-router/blob/c711a78/src/error/UriParameterSyntaxError.ts#L7)

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
