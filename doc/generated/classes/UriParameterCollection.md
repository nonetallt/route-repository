[route-repository](../README.md) / [Exports](../modules.md) / UriParameterCollection

# Class: UriParameterCollection

## Hierarchy

- `Map`\<`string`, [`UriParameter`](UriParameter.md)\>

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

Map\<string, UriParameter\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:53

• **new UriParameterCollection**(`iterable?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | ``null`` \| `Iterable`\<readonly [`string`, [`UriParameter`](UriParameter.md)]\> |

#### Inherited from

Map\<string, UriParameter\>.constructor

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

▸ **[iterator]**(): `IterableIterator`\<[`string`, [`UriParameter`](UriParameter.md)]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`string`, [`UriParameter`](UriParameter.md)]\>

#### Inherited from

Map.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### areRequired

▸ **areRequired**(): `boolean`

Check if any uri parameters are required

#### Returns

`boolean`

#### Defined in

[src/UriParameterCollection.ts:46](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/UriParameterCollection.ts#L46)

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

▸ **entries**(): `IterableIterator`\<[`string`, [`UriParameter`](UriParameter.md)]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`string`, [`UriParameter`](UriParameter.md)]\>

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

[src/UriParameterCollection.ts:104](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/UriParameterCollection.ts#L104)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`UriParameter`](UriParameter.md), `key`: `string`, `map`: `Map`\<`string`, [`UriParameter`](UriParameter.md)\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:31

___

### get

▸ **get**(`key`): `undefined` \| [`UriParameter`](UriParameter.md)

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`UriParameter`](UriParameter.md)

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:36

___

### getNames

▸ **getNames**(): `string`[]

Get names of all parameters

#### Returns

`string`[]

#### Defined in

[src/UriParameterCollection.ts:80](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/UriParameterCollection.ts#L80)

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

[src/UriParameterCollection.ts:89](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/UriParameterCollection.ts#L89)

___

### getRequired

▸ **getRequired**(): [`UriParameterCollection`](UriParameterCollection.md)

Get a list of the required uri parameters

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Defined in

[src/UriParameterCollection.ts:64](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/UriParameterCollection.ts#L64)

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

### set

▸ **set**(`key`, `value`): [`UriParameterCollection`](UriParameterCollection.md)

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

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

node_modules/typescript/lib/lib.es2015.collection.d.ts:44

___

### values

▸ **values**(): `IterableIterator`\<[`UriParameter`](UriParameter.md)\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<[`UriParameter`](UriParameter.md)\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

___

### fromUriString

▸ `Static` **fromUriString**(`uri`): [`UriParameterCollection`](UriParameterCollection.md)

Create a new uri parameter collection from parameter placeholders in a given uri string

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

**`Throws`**

UriParameterSyntaxError

#### Defined in

[src/UriParameterCollection.ts:14](https://github.com/nonetallt/front-to-back-router/blob/4aaeda5/src/UriParameterCollection.ts#L14)
