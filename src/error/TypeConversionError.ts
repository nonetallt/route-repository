export default class TypeConversionError extends Error
{
    readonly previous?: Error

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, TypeConversionError.prototype);
        this.previous = previous
    }
}
