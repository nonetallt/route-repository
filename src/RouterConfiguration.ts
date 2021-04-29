interface Registration {
    immutable: boolean
}

interface Configuration {
    registration: Registration
}

export default class RouterConfiguration implements Configuration
{
    registration = {
        immutable: true
    }

    constructor(configuration: object = {})
    {
        Object.keys(configuration).forEach((key) => {
            this[key] = configuration[key]
        })
    }
}
