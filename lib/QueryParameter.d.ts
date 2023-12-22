export default class QueryParameter {
    readonly key: string;
    readonly value: string;
    readonly arrayAccessor?: string;
    constructor(key: string, value: string, arrayAccessor?: string);
}
