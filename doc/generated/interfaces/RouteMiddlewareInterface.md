[route-repository](../README.md) / [Exports](../modules.md) / RouteMiddlewareInterface

# Interface: RouteMiddlewareInterface

## Table of contents

### Properties

- [applyMiddleware](RouteMiddlewareInterface.md#applymiddleware)

## Properties

### applyMiddleware

• **applyMiddleware**: (`route`: [`Route`](../classes/Route.md)) => [`Route`](../classes/Route.md)

#### Type declaration

▸ (`route`): [`Route`](../classes/Route.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `route` | [`Route`](../classes/Route.md) |

##### Returns

[`Route`](../classes/Route.md)

**`Throws`**

RegistrationError

Apply the middleware to a given route.

#### Defined in

[src/contract/RouteMiddlewareInterface.ts:11](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/contract/RouteMiddlewareInterface.ts#L11)
