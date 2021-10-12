import Uri from './Uri'
import UriComponent from './UriComponent'
import UriSyntaxError from './error/UriSyntaxError'
import BaseUriConfiguration from './config/BaseUriConfiguration'
import BaseUriConfigurationInterface from './contract/BaseUriConfigurationInterface'
import QueryParameterCollection from './QueryParameterCollection'

const parseRegex = new RegExp(/^((?<scheme>https?):\/\/)?((?<userinfo>(?<username>[^:]+):(?<password>[^@]+))?@)?(?<host>[^\/?#:]+)?(:(?<port>[0-9]+))?(\/(?<path>[^?#]+))?(\?(?<query>[^#]+))?(#(?<fragment>.+))?/)

/**
 * Internal, should not be part of the public API
 *
 */
export default class UriBuilder extends Map<UriComponent, string>
{
    constructor(components: Map<UriComponent, string>, baseConfig: BaseUriConfigurationInterface | null = null)
    {
        super(components)

        if(baseConfig !== null) {
            this.applyBaseUri(new BaseUriConfiguration(baseConfig))
        }
    }

    /**
     * @throws UriSyntaxError
     *
     */
    static fromUriString(uri: string, baseConfig: BaseUriConfigurationInterface | null = null) : UriBuilder
    {
        const match = uri.match(parseRegex)

        if(match === null || match.groups === undefined) {
            const msg = `Cannot parse given uri string '${uri}'`
            throw new UriSyntaxError(msg)
        }

        const parsed = new Map<UriComponent, string>()

        Object.values(UriComponent).forEach(component => {
            if(match.groups !== undefined) {
                const value = match.groups[component]

                if(value !== undefined) {
                    parsed.set(component, value)
                }
            }
        })

        return new UriBuilder(parsed, baseConfig)
    }

    build() : string
    {
        let uri = ''

        uri += this.getComponentString('', UriComponent.Scheme, '://')
        uri += this.getComponentString('', UriComponent.Userinfo, '@')
        uri += this.getComponentString('', UriComponent.Host)
        uri += this.getComponentString(':', UriComponent.Port)
        uri += this.getComponentString('/', UriComponent.Path)
        uri += this.getComponentString('?', UriComponent.Query)
        uri += this.getComponentString('#', UriComponent.Fragment)

        return uri
    }



    private applyBaseUri(config: BaseUriConfiguration)
    {
        if(! this.has(UriComponent.Scheme)) {

            const baseComponents = [
                UriComponent.Scheme,
                UriComponent.Userinfo,
                UriComponent.Username,
                UriComponent.Password,
                UriComponent.Host,
                UriComponent.Port
            ]

            baseComponents.forEach(component => {
                const baseValue = config.uri.getComponent(component)

                if(! this.has(component) && baseValue !== null) {
                    const componentValue = config.uri.getComponent(component)

                    if(componentValue !== null) {
                        this.set(component, componentValue)
                    }
                }
            })
        }

        if(config.uri.hasComponent(UriComponent.Path)) {
            const basePath = config.uri.getComponent(UriComponent.Path) ?? ''
            const uriPath = this.get(UriComponent.Path) ?? ''
            this.set(UriComponent.Path, basePath + '/' + uriPath)
        }

        let query = config.uri.queryParameters

        if(config.mergeQuery && query !== null) {

            const uriQueryString = this.get(UriComponent.Query)

            if(uriQueryString !== null) {
                query = query.merge(new QueryParameterCollection(uriQueryString))
            }

            this.set(UriComponent.Query, query.toString())
        }
    }

    /**
     * Get an uri component with added content, internal build use
     *
     */
    private getComponentString(prepend: string, component: UriComponent, append: string = '') : string
    {
        if(! this.has(component) || this.get(component) === null) {
            return ''
        }

        return prepend + this.get(component) + append
    }
}
