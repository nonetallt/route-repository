[route-repository](../README.md) / [Exports](../modules.md) / UriConfigurationInterface

# Interface: UriConfigurationInterface

## Hierarchy

- `default`

  ↳ **`UriConfigurationInterface`**

## Table of contents

### Properties

- [baseUri](UriConfigurationInterface.md#baseuri)
- [defaultScheme](UriConfigurationInterface.md#defaultscheme)
- [mergeQuery](UriConfigurationInterface.md#mergequery)
- [overrideScheme](UriConfigurationInterface.md#overridescheme)
- [parameters](UriConfigurationInterface.md#parameters)
- [prependSlash](UriConfigurationInterface.md#prependslash)

## Properties

### baseUri

• `Optional` **baseUri**: ``null`` \| `string` \| [`Uri`](../classes/Uri.md)

#### Inherited from

UriBuilderConfigurationInterface.baseUri

#### Defined in

[src/contract/UriBuilderConfigurationInterface.ts:5](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/contract/UriBuilderConfigurationInterface.ts#L5)

___

### defaultScheme

• `Optional` **defaultScheme**: ``null`` \| ``"http"`` \| ``"https"``

#### Inherited from

UriBuilderConfigurationInterface.defaultScheme

#### Defined in

[src/contract/UriBuilderConfigurationInterface.ts:7](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/contract/UriBuilderConfigurationInterface.ts#L7)

___

### mergeQuery

• `Optional` **mergeQuery**: `boolean`

#### Inherited from

UriBuilderConfigurationInterface.mergeQuery

#### Defined in

[src/contract/UriBuilderConfigurationInterface.ts:6](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/contract/UriBuilderConfigurationInterface.ts#L6)

___

### overrideScheme

• `Optional` **overrideScheme**: ``null`` \| ``"http"`` \| ``"https"``

#### Inherited from

UriBuilderConfigurationInterface.overrideScheme

#### Defined in

[src/contract/UriBuilderConfigurationInterface.ts:8](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/contract/UriBuilderConfigurationInterface.ts#L8)

___

### parameters

• `Optional` **parameters**: [`UriParameterBinderConfigurationInterface`](UriParameterBinderConfigurationInterface.md)

#### Defined in

[src/contract/UriConfigurationInterface.ts:7](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/contract/UriConfigurationInterface.ts#L7)

___

### prependSlash

• `Optional` **prependSlash**: `boolean`

#### Defined in

[src/contract/UriConfigurationInterface.ts:6](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/contract/UriConfigurationInterface.ts#L6)
