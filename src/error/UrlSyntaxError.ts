export default class UrlSyntaxError extends Error
{
    readonly previous?: Error

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, UrlSyntaxError.prototype);
        this.previous = previous
    }
}
