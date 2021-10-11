export default class UriParameterSyntaxError extends Error
{
    readonly previous?: Error

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, UriParameterSyntaxError.prototype);
        this.previous = previous
    }
}
