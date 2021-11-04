[route-repository](../README.md) / [Exports](../modules.md) / UriParameterBindingError

# Class: UriParameterBindingError

Error that is thrown when parameter binding fails

## Hierarchy

- `Error`

  ↳ **`UriParameterBindingError`**

## Table of contents

### Constructors

- [constructor](UriParameterBindingError.md#constructor)

### Properties

- [message](UriParameterBindingError.md#message)
- [name](UriParameterBindingError.md#name)
- [previous](UriParameterBindingError.md#previous)
- [stack](UriParameterBindingError.md#stack)
- [prepareStackTrace](UriParameterBindingError.md#preparestacktrace)
- [stackTraceLimit](UriParameterBindingError.md#stacktracelimit)

### Methods

- [captureStackTrace](UriParameterBindingError.md#capturestacktrace)

## Constructors

### constructor

• **new UriParameterBindingError**(`message`, `previous?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `previous?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

[src/error/UriParameterBindingError.ts:9](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/error/UriParameterBindingError.ts#L9)

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

[src/error/UriParameterBindingError.ts:7](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/error/UriParameterBindingError.ts#L7)

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
