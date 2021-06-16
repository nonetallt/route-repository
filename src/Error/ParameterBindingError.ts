export default class ParameterBindingError extends Error
{
    constructor(message: string)
    {
        super(message)
        Object.setPrototypeOf(this, ParameterBindingError.prototype);
    }
}
