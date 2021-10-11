export default class UrlParameterSyntaxError extends Error
{
    readonly previous?: Error

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, UrlParameterSyntaxError.prototype);
        this.previous = previous
    }
}
