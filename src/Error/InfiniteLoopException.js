export default class InfiniteLoopException extends Error
{
    constructor(message)
    {
        super(message);
        this.message = message;
    }
}
