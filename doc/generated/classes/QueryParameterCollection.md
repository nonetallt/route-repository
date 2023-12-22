[route-repository](../README.md) / [Exports](../modules.md) / QueryParameterCollection

# Class: QueryParameterCollection

A collection of query parameters. Note that QueryParameter singular class does not exist
because having a data object for a value with only 2 string keys would be redundant.

## Hierarchy

- `Map`\<`string`, `string`\>

  ↳ **`QueryParameterCollection`**

## Table of contents

### Constructors

- [constructor](QueryParameterCollection.md#constructor)

### Properties

- [[toStringTag]](QueryParameterCollection.md#[tostringtag])
- [size](QueryParameterCollection.md#size)
- [[species]](QueryParameterCollection.md#[species])

### Methods

- [[iterator]](QueryParameterCollection.md#[iterator])
- [clear](QueryParameterCollection.md#clear)
- [delete](QueryParameterCollection.md#delete)
- [entries](QueryParameterCollection.md#entries)
- [forEach](QueryParameterCollection.md#foreach)
- [get](QueryParameterCollection.md#get)
- [has](QueryParameterCollection.md#has)
- [keys](QueryParameterCollection.md#keys)
- [merge](QueryParameterCollection.md#merge)
- [set](QueryParameterCollection.md#set)
- [stringify](QueryParameterCollection.md#stringify)
- [toString](QueryParameterCollection.md#tostring)
- [values](QueryParameterCollection.md#values)
- [fromQueryString](QueryParameterCollection.md#fromquerystring)

## Constructors

### constructor

• **new QueryParameterCollection**(`entries?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`string`, `string`][] |

#### Inherited from

Map\<string, string\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:53

• **new QueryParameterCollection**(`iterable?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | ``null`` \| `Iterable`\<readonly [`string`, `string`]\> |

#### Inherited from

Map\<string, string\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:161

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.[toStringTag]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:48

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.[species]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`string`, `string`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`string`, `string`]\>

#### Inherited from

Map.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### entries

▸ **entries**(): `IterableIterator`\<[`string`, `string`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`string`, `string`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `map`: `Map`\<`string`, `string`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:31

___

### get

▸ **get**(`key`): `undefined` \| `string`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `string`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:36

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:40

___

### keys

▸ **keys**(): `IterableIterator`\<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### merge

▸ **merge**(`...collections`): [`QueryParameterCollection`](QueryParameterCollection.md)

Merge this collection with multiple other collections or maps

#### Parameters

| Name | Type |
| :------ | :------ |
| `...collections` | `Map`\<`string`, `string`\>[] |

#### Returns

[`QueryParameterCollection`](QueryParameterCollection.md)

#### Defined in

[src/QueryParameterCollection.ts:60](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/QueryParameterCollection.ts#L60)

___

### set

▸ **set**(`key`, `value`): [`QueryParameterCollection`](QueryParameterCollection.md)

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`QueryParameterCollection`](QueryParameterCollection.md)

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:44

___

### stringify

▸ **stringify**(`urlEncode`): `string`

Get the string representation of this object

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlEncode` | `boolean` |

#### Returns

`string`

#### Defined in

[src/QueryParameterCollection.ts:37](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/QueryParameterCollection.ts#L37)

___

### toString

▸ **toString**(): `string`

Get the string representation of this object

#### Returns

`string`

#### Defined in

[src/QueryParameterCollection.ts:28](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/QueryParameterCollection.ts#L28)

___

### values

▸ **values**(): `IterableIterator`\<`string`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

___

### fromQueryString

▸ `Static` **fromQueryString**(`query`): [`QueryParameterCollection`](QueryParameterCollection.md)

Create a new query parameter collection from a query string

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

[`QueryParameterCollection`](QueryParameterCollection.md)

#### Defined in

[src/QueryParameterCollection.ts:12](https://github.com/nonetallt/front-to-back-router/blob/efe5427/src/QueryParameterCollection.ts#L12)
