export interface ConfigurationInterface
{
    mutable?: boolean
    duplicates?: boolean
};

export class RepositoryConfiguration implements ConfigurationInterface
{
    mutable: boolean
    duplicates: boolean

    constructor(options : ConfigurationInterface = {}) {

        this.mutable = false;
        this.duplicates = false;

        Object.assign(this, options);
    }
}
