[route-repository](../README.md) / [Exports](../modules.md) / UriParameterBinderConfigurationInterface

# Interface: UriParameterBinderConfigurationInterface

## Table of contents

### Properties

- [bindGetParameters](UriParameterBinderConfigurationInterface.md#bindgetparameters)
- [encodeGetParameters](UriParameterBinderConfigurationInterface.md#encodegetparameters)
- [encodeUriParameters](UriParameterBinderConfigurationInterface.md#encodeuriparameters)
- [trailingSlashes](UriParameterBinderConfigurationInterface.md#trailingslashes)
- [typeConversionFunction](UriParameterBinderConfigurationInterface.md#typeconversionfunction)

## Properties

### bindGetParameters

• `Optional` **bindGetParameters**: `boolean`

#### Defined in

[src/contract/UriParameterBinderConfigurationInterface.ts:4](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/contract/UriParameterBinderConfigurationInterface.ts#L4)

___

### encodeGetParameters

• `Optional` **encodeGetParameters**: `boolean`

#### Defined in

[src/contract/UriParameterBinderConfigurationInterface.ts:6](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/contract/UriParameterBinderConfigurationInterface.ts#L6)

___

### encodeUriParameters

• `Optional` **encodeUriParameters**: `boolean`

#### Defined in

[src/contract/UriParameterBinderConfigurationInterface.ts:5](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/contract/UriParameterBinderConfigurationInterface.ts#L5)

___

### trailingSlashes

• `Optional` **trailingSlashes**: `boolean`

#### Defined in

[src/contract/UriParameterBinderConfigurationInterface.ts:3](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/contract/UriParameterBinderConfigurationInterface.ts#L3)

___

### typeConversionFunction

• `Optional` **typeConversionFunction**: (`parameterValue`: `any`) => `string`

#### Type declaration

▸ (`parameterValue`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `parameterValue` | `any` |

##### Returns

`string`

#### Defined in

[src/contract/UriParameterBinderConfigurationInterface.ts:7](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/contract/UriParameterBinderConfigurationInterface.ts#L7)
