[route-repository](../README.md) / [Exports](../modules.md) / UriParameterCollection

# Class: UriParameterCollection

## Hierarchy

- `Array`<[`UriParameter`](UriParameter.md)\>

  ↳ **`UriParameterCollection`**

## Table of contents

### Constructors

- [constructor](UriParameterCollection.md#constructor)

### Properties

- [length](UriParameterCollection.md#length)
- [[species]](UriParameterCollection.md#[species])

### Methods

- [[iterator]](UriParameterCollection.md#[iterator])
- [[unscopables]](UriParameterCollection.md#[unscopables])
- [areRequired](UriParameterCollection.md#arerequired)
- [at](UriParameterCollection.md#at)
- [concat](UriParameterCollection.md#concat)
- [copyWithin](UriParameterCollection.md#copywithin)
- [entries](UriParameterCollection.md#entries)
- [every](UriParameterCollection.md#every)
- [fill](UriParameterCollection.md#fill)
- [filter](UriParameterCollection.md#filter)
- [find](UriParameterCollection.md#find)
- [findIndex](UriParameterCollection.md#findindex)
- [flat](UriParameterCollection.md#flat)
- [flatMap](UriParameterCollection.md#flatmap)
- [forEach](UriParameterCollection.md#foreach)
- [getNames](UriParameterCollection.md#getnames)
- [getParameter](UriParameterCollection.md#getparameter)
- [getRequired](UriParameterCollection.md#getrequired)
- [includes](UriParameterCollection.md#includes)
- [indexOf](UriParameterCollection.md#indexof)
- [join](UriParameterCollection.md#join)
- [keys](UriParameterCollection.md#keys)
- [lastIndexOf](UriParameterCollection.md#lastindexof)
- [map](UriParameterCollection.md#map)
- [pop](UriParameterCollection.md#pop)
- [push](UriParameterCollection.md#push)
- [reduce](UriParameterCollection.md#reduce)
- [reduceRight](UriParameterCollection.md#reduceright)
- [reverse](UriParameterCollection.md#reverse)
- [shift](UriParameterCollection.md#shift)
- [slice](UriParameterCollection.md#slice)
- [some](UriParameterCollection.md#some)
- [sort](UriParameterCollection.md#sort)
- [splice](UriParameterCollection.md#splice)
- [toLocaleString](UriParameterCollection.md#tolocalestring)
- [toString](UriParameterCollection.md#tostring)
- [unshift](UriParameterCollection.md#unshift)
- [values](UriParameterCollection.md#values)
- [from](UriParameterCollection.md#from)
- [fromUriString](UriParameterCollection.md#fromuristring)
- [isArray](UriParameterCollection.md#isarray)
- [of](UriParameterCollection.md#of)

## Constructors

### constructor

• **new UriParameterCollection**(...`items`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | [`UriParameter`](UriParameter.md)[] |

#### Overrides

Array&lt;UriParameter\&gt;.constructor

#### Defined in

[src/UriParameterCollection.ts:8](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/UriParameterCollection.ts#L8)

## Properties

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1224

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.\_\_@species@13

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`UriParameter`](UriParameter.md)\>

Iterator

#### Returns

`IterableIterator`<[`UriParameter`](UriParameter.md)\>

#### Inherited from

Array.\_\_@iterator@21

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

Array.\_\_@unscopables@62

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### areRequired

▸ **areRequired**(): `boolean`

Check if any uri parameters are required

#### Returns

`boolean`

#### Defined in

[src/UriParameterCollection.ts:51](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/UriParameterCollection.ts#L51)

___

### at

▸ **at**(`index`): `undefined` \| [`UriParameter`](UriParameter.md)

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`UriParameter`](UriParameter.md)

#### Inherited from

Array.at

#### Defined in

node_modules/@types/node/globals.d.ts:86

___

### concat

▸ **concat**(...`items`): [`UriParameter`](UriParameter.md)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<[`UriParameter`](UriParameter.md)\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`UriParameter`](UriParameter.md)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1248

▸ **concat**(...`items`): [`UriParameter`](UriParameter.md)[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`UriParameter`](UriParameter.md) \| `ConcatArray`<[`UriParameter`](UriParameter.md)\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

[`UriParameter`](UriParameter.md)[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1254

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`UriParameterCollection`](UriParameterCollection.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, [`UriParameter`](UriParameter.md)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, [`UriParameter`](UriParameter.md)]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`UriParameter`](UriParameter.md)<`S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1331

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1340

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`UriParameterCollection`](UriParameterCollection.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`UriParameter`](UriParameter.md) | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`UriParameter`](UriParameter.md)<`S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1367

▸ **filter**(`predicate`, `thisArg?`): [`UriParameter`](UriParameter.md)[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`UriParameter`](UriParameter.md)[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1373

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`UriParameter`](UriParameter.md)<`S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `obj`: [`UriParameter`](UriParameter.md)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| [`UriParameter`](UriParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `obj`: [`UriParameter`](UriParameter.md)[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| [`UriParameter`](UriParameter.md)

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `obj`: [`UriParameter`](UriParameter.md)[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number```1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1355

___

### getNames

▸ **getNames**(): `string`[]

Get names of all parameters

#### Returns

`string`[]

#### Defined in

[src/UriParameterCollection.ts:80](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/UriParameterCollection.ts#L80)

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

[src/UriParameterCollection.ts:91](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/UriParameterCollection.ts#L91)

___

### getRequired

▸ **getRequired**(): [`UriParameterCollection`](UriParameterCollection.md)

Get a list of the required uri parameters

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Defined in

[src/UriParameterCollection.ts:69](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/UriParameterCollection.ts#L69)

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`UriParameter`](UriParameter.md) | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`UriParameter`](UriParameter.md) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1316

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1259

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`UriParameter`](UriParameter.md) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1322

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1361

___

### pop

▸ **pop**(): `undefined` \| [`UriParameter`](UriParameter.md)

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`UriParameter`](UriParameter.md)

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1237

___

### push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`UriParameter`](UriParameter.md)[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1242

___

### reduce

▸ **reduce**(`callbackfn`): [`UriParameter`](UriParameter.md)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`UriParameter`](UriParameter.md), `currentValue`: [`UriParameter`](UriParameter.md), `currentIndex`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => [`UriParameter`](UriParameter.md) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`UriParameter`](UriParameter.md)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1379

▸ **reduce**(`callbackfn`, `initialValue`): [`UriParameter`](UriParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`UriParameter`](UriParameter.md), `currentValue`: [`UriParameter`](UriParameter.md), `currentIndex`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => [`UriParameter`](UriParameter.md) |
| `initialValue` | [`UriParameter`](UriParameter.md) |

#### Returns

[`UriParameter`](UriParameter.md)

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1380

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`UriParameter`](UriParameter.md), `currentIndex`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1386

___

### reduceRight

▸ **reduceRight**(`callbackfn`): [`UriParameter`](UriParameter.md)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`UriParameter`](UriParameter.md), `currentValue`: [`UriParameter`](UriParameter.md), `currentIndex`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => [`UriParameter`](UriParameter.md) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`UriParameter`](UriParameter.md)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1392

▸ **reduceRight**(`callbackfn`, `initialValue`): [`UriParameter`](UriParameter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`UriParameter`](UriParameter.md), `currentValue`: [`UriParameter`](UriParameter.md), `currentIndex`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => [`UriParameter`](UriParameter.md) |
| `initialValue` | [`UriParameter`](UriParameter.md) |

#### Returns

[`UriParameter`](UriParameter.md)

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1393

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`UriParameter`](UriParameter.md), `currentIndex`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1399

___

### reverse

▸ **reverse**(): [`UriParameter`](UriParameter.md)[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`UriParameter`](UriParameter.md)[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1264

___

### shift

▸ **shift**(): `undefined` \| [`UriParameter`](UriParameter.md)

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`UriParameter`](UriParameter.md)

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1269

___

### slice

▸ **slice**(`start?`, `end?`): [`UriParameter`](UriParameter.md)[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

[`UriParameter`](UriParameter.md)[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1279

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`UriParameter`](UriParameter.md), `index`: `number`, `array`: [`UriParameter`](UriParameter.md)[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1349

___

### sort

▸ **sort**(`compareFn?`): [`UriParameterCollection`](UriParameterCollection.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`UriParameter`](UriParameter.md), `b`: [`UriParameter`](UriParameter.md)) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`UriParameterCollection`](UriParameterCollection.md)

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1290

___

### splice

▸ **splice**(`start`, `deleteCount?`): [`UriParameter`](UriParameter.md)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

[`UriParameter`](UriParameter.md)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1297

▸ **splice**(`start`, `deleteCount`, ...`items`): [`UriParameter`](UriParameter.md)[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | [`UriParameter`](UriParameter.md)[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

[`UriParameter`](UriParameter.md)[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1305

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1232

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1228

___

### unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | [`UriParameter`](UriParameter.md)[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1310

___

### values

▸ **values**(): `IterableIterator`<[`UriParameter`](UriParameter.md)\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<[`UriParameter`](UriParameter.md)\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:72

▸ `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:80

▸ `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

▸ `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:91

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

[src/UriParameterCollection.ts:19](https://github.com/nonetallt/front-to-back-router/blob/7fcdd9c/src/UriParameterCollection.ts#L19)

___

### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1411

___

### of

▸ `Static` **of**<`T`\>(...`items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:86
