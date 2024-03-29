import ConfigurationInterface from '../contract/RouteRepositoryConfigurationInterface'
import RouteRegistrarConfiguration from './RouteRegistrarConfiguration'

export default class RouteRepositoryConfiguration extends RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly mutable: boolean
    readonly duplicates: boolean

    constructor(config : ConfigurationInterface = {})
    {
        super(config)

        this.mutable = false
        this.duplicates = false

        Object.assign(this, config);
    }
}
