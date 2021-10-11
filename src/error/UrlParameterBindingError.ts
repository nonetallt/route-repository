export default class UrlParameterBindingError extends Error
{
    readonly previous?: Error

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, UrlParameterBindingError.prototype);
        this.previous = previous
    }
}
