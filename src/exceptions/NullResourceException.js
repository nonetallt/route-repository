export default class NullResouceException extends Error
{
    constructor(message)
    {
        super(message);
        this.message = message;
    }
}
