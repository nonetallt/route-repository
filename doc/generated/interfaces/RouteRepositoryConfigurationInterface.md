[route-repository](../README.md) / [Exports](../modules.md) / RouteRepositoryConfigurationInterface

# Interface: RouteRepositoryConfigurationInterface

## Hierarchy

- [`RouteRegistrarConfigurationInterface`](RouteRegistrarConfigurationInterface.md)

  ↳ **`RouteRepositoryConfigurationInterface`**

## Table of contents

### Properties

- [duplicates](RouteRepositoryConfigurationInterface.md#duplicates)
- [extra](RouteRepositoryConfigurationInterface.md#extra)
- [mutable](RouteRepositoryConfigurationInterface.md#mutable)
- [registrationMiddleware](RouteRepositoryConfigurationInterface.md#registrationmiddleware)
- [uris](RouteRepositoryConfigurationInterface.md#uris)

## Properties

### duplicates

• `Optional` **duplicates**: `boolean`

#### Defined in

[src/contract/RouteRepositoryConfigurationInterface.ts:6](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/contract/RouteRepositoryConfigurationInterface.ts#L6)

___

### extra

• `Optional` **extra**: `object`

#### Inherited from

[RouteRegistrarConfigurationInterface](RouteRegistrarConfigurationInterface.md).[extra](RouteRegistrarConfigurationInterface.md#extra)

#### Defined in

[src/contract/RouteRegistrarConfigurationInterface.ts:6](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/contract/RouteRegistrarConfigurationInterface.ts#L6)

___

### mutable

• `Optional` **mutable**: `boolean`

#### Defined in

[src/contract/RouteRepositoryConfigurationInterface.ts:5](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/contract/RouteRepositoryConfigurationInterface.ts#L5)

___

### registrationMiddleware

• `Optional` **registrationMiddleware**: [`RouteMiddlewareInterface`](RouteMiddlewareInterface.md)[]

#### Inherited from

[RouteRegistrarConfigurationInterface](RouteRegistrarConfigurationInterface.md).[registrationMiddleware](RouteRegistrarConfigurationInterface.md#registrationmiddleware)

#### Defined in

[src/contract/RouteRegistrarConfigurationInterface.ts:8](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/contract/RouteRegistrarConfigurationInterface.ts#L8)

___

### uris

• `Optional` **uris**: [`UriConfigurationInterface`](UriConfigurationInterface.md)

#### Inherited from

[RouteRegistrarConfigurationInterface](RouteRegistrarConfigurationInterface.md).[uris](RouteRegistrarConfigurationInterface.md#uris)

#### Defined in

[src/contract/RouteRegistrarConfigurationInterface.ts:7](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/contract/RouteRegistrarConfigurationInterface.ts#L7)
