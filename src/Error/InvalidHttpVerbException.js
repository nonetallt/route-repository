export default class InvalidHttpVerbException extends Error
{
    constructor(message)
    {
        super(message);
        this.message = message;
    }
}
