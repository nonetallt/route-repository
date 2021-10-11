export default class UriParameterBindingError extends Error
{
    readonly previous?: Error

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, UriParameterBindingError.prototype);
        this.previous = previous
    }
}
