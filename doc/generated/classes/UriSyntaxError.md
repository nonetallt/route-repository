[route-repository](../README.md) / [Exports](../modules.md) / UriSyntaxError

# Class: UriSyntaxError

Error that is returned when uri has incorrect syntax

## Hierarchy

- `Error`

  ↳ **`UriSyntaxError`**

## Table of contents

### Constructors

- [constructor](UriSyntaxError.md#constructor)

### Properties

- [message](UriSyntaxError.md#message)
- [name](UriSyntaxError.md#name)
- [previous](UriSyntaxError.md#previous)
- [stack](UriSyntaxError.md#stack)
- [prepareStackTrace](UriSyntaxError.md#preparestacktrace)
- [stackTraceLimit](UriSyntaxError.md#stacktracelimit)

### Methods

- [captureStackTrace](UriSyntaxError.md#capturestacktrace)

## Constructors

### constructor

• **new UriSyntaxError**(`message`, `previous?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `previous?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

[src/error/UriSyntaxError.ts:9](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/error/UriSyntaxError.ts#L9)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### previous

• `Readonly` **previous**: ``null`` \| `Error`

#### Defined in

[src/error/UriSyntaxError.ts:7](https://github.com/nonetallt/front-to-back-router/blob/8c8599e/src/error/UriSyntaxError.ts#L7)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

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

node_modules/@types/node/globals.d.ts:4
