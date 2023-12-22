export default class QueryParameter
{
    public readonly key: string;
    public readonly value: string;
    public readonly arrayAccessor?: string;

    constructor(key: string, value: string, arrayAccessor?: string)
    {
        this.key = key
        this.value = value
        this.arrayAccessor = arrayAccessor
    }
}
