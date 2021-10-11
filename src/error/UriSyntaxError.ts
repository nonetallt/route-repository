export default class UriSyntaxError extends Error
{
    readonly previous?: Error

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, UriSyntaxError.prototype);
        this.previous = previous
    }
}
