export default class ConfigurationError extends Error
{
    constructor(message: string)
    {
        super(message)
        Object.setPrototypeOf(this, ConfigurationError.prototype);
    }
}
