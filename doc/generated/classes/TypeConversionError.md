[route-repository](../README.md) / [Exports](../modules.md) / TypeConversionError

# Class: TypeConversionError

Error that is thrown when parameter type conversion fails.

## Hierarchy

- `Error`

  ↳ **`TypeConversionError`**

## Table of contents

### Constructors

- [constructor](TypeConversionError.md#constructor)

### Properties

- [message](TypeConversionError.md#message)
- [name](TypeConversionError.md#name)
- [previous](TypeConversionError.md#previous)
- [stack](TypeConversionError.md#stack)
- [prepareStackTrace](TypeConversionError.md#preparestacktrace)
- [stackTraceLimit](TypeConversionError.md#stacktracelimit)

### Methods

- [captureStackTrace](TypeConversionError.md#capturestacktrace)

## Constructors

### constructor

• **new TypeConversionError**(`message`, `previous?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `previous?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

[src/error/TypeConversionError.ts:9](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/error/TypeConversionError.ts#L9)

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

[src/error/TypeConversionError.ts:7](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/error/TypeConversionError.ts#L7)

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
