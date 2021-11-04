[route-repository](../README.md) / [Exports](../modules.md) / UriParameterCollection

# Class: UriParameterCollection

## Hierarchy

- `Map`<`string`, [`UriParameter`](UriParameter.md)\>

  ↳ **`UriParameterCollection`**

## Table of contents

### Constructors

- [constructor](UriParameterCollection.md#constructor)

### Properties

- [[toStringTag]](UriParameterCollection.md#[tostringtag])
- [size](UriParameterCollection.md#size)
- [[species]](UriParameterCollection.md#[species])

### Methods

- [[iterator]](UriParameterCollection.md#[iterator])
- [areRequired](UriParameterCollection.md#arerequired)
- [clear](UriParameterCollection.md#clear)
- [delete](UriParameterCollection.md#delete)
- [entries](UriParameterCollection.md#entries)
- [first](UriParameterCollection.md#first)
- [forEach](UriParameterCollection.md#foreach)
- [get](UriParameterCollection.md#get)
- [getNames](UriParameterCollection.md#getnames)
- [getParameter](UriParameterCollection.md#getparameter)
- [getRequired](UriParameterCollection.md#getrequired)
- [has](UriParameterCollection.md#has)
- [keys](UriParameterCollection.md#keys)
- [set](UriParameterCollection.md#set)
- [values](UriParameterCollection.md#values)
- [fromUriString](UriParameterCollection.md#fromuristring)

## Constructors

### constructor

• **new UriParameterCollection**(`entries?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`string`, [`UriParameter`](UriParameter.md)][] |

#### Inherited from

Map<string, UriParameter\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new UriParameterCollection**(`iterable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<readonly [`string`, [`UriParameter`](UriParameter.md)]\> |

#### Inherited from

Map<string, UriParameter\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:160

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@23

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@13

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, [`UriParameter`](UriParameter.md)]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, [`UriParameter`](UriParameter.md)]\>

#### Inherited from

Map.\_\_@iterator@21

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### areRequired

▸ **areRequired**(): `boolean`

Check if any uri parameters are required

#### Returns

`boolean`

#### Defined in

[src/UriParameterCollection.ts:46](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/UriParameterCollection.ts#L46)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, [`UriParameter`](UriParameter.md)]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, [`UriParameter`](UriParameter.md)]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### first

▸ **first**(): ``null`` \| [`UriParameter`](UriParameter.md)

Return the 'first' parameter as indicated by iterator keys

#### Returns

``null`` \| [`UriParameter`](UriParameter.md)

#### Defined in

[src/UriParameterCollection.ts:104](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/UriParameterCollection.ts#L104)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`UriParameter`](UriParameter.md), `key`: `string`, `map`: `Map`<`string`, [`UriParameter`](UriParameter.md)\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`key`): `undefined` \| [`UriParameter`](UriParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`UriParameter`](UriParameter.md)

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### getNames

▸ **getNames**(): `string`[]

Get names of all parameters

#### Returns

`string`[]

#### Defined in

[src/UriParameterCollection.ts:80](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/UriParameterCollection.ts#L80)

___

### getParameter

▸ **getParameter**(`name`): ``null`` \| [`UriParameter`](UriParameter.md)

Get the parameter with the given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`UriParameter`](UriParameter.md)

#### Defined in

[src/UriParameterCollection.ts:89](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/UriParameterCollection.ts#L89)

___

### getRequired

▸ **getRequired**(): [`UriParameterCollection`](UriParameterCollection.md)

Get a list of the required uri parameters

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Defined in

[src/UriParameterCollection.ts:64](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/UriParameterCollection.ts#L64)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [`UriParameterCollection`](UriParameterCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`UriParameter`](UriParameter.md) |

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<[`UriParameter`](UriParameter.md)\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<[`UriParameter`](UriParameter.md)\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

___

### fromUriString

▸ `Static` **fromUriString**(`uri`): [`UriParameterCollection`](UriParameterCollection.md)

Create a new uri parameter collection from parameter placeholders in a given uri string

**`throws`** UriParameterSyntaxError

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Defined in

[src/UriParameterCollection.ts:14](https://github.com/nonetallt/front-to-back-router/blob/f030813/src/UriParameterCollection.ts#L14)
