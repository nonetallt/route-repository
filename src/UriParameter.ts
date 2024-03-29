export default class UriParameter
{
    readonly name: string
    readonly required: boolean
    readonly placeholder: string

    constructor(placeholder: string)
    {
        this.placeholder = placeholder

        const signature = placeholder.slice(1, -1)
        const lastCharacter = signature.slice(-1)

        this.required = lastCharacter !== '?'
        this.name = lastCharacter === '?' ? signature.slice(0, -1) : signature
    }
}
