export default class ConfigurationError extends Error
{
    readonly previous: Error | null

    constructor(message: string, previous?: Error)
    {
        super(message)
        Object.setPrototypeOf(this, ConfigurationError.prototype);
        this.previous = previous ?? null
    }
}
