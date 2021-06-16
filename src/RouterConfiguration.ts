export interface ConfigurationInterface
{
    immutable?: boolean
    duplicates?: boolean
};

export class RouterConfiguration implements ConfigurationInterface
{
    immutable: boolean
    duplicates: boolean

    constructor(options : ConfigurationInterface = {}) {

        this.immutable = true;
        this.duplicates = false;

        Object.assign(this, options);
    }
}
