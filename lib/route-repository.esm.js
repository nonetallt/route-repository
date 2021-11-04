import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';

class UriConfiguration {
    constructor(config = {}) {
        this.prependSlash = true;
        this.parameters = {};
        Object.assign(this, config);
    }
}

class UriParameter {
    constructor(placeholder) {
        this.placeholder = placeholder;
        const signature = placeholder.slice(1, -1);
        const lastCharacter = signature.slice(-1);
        this.required = lastCharacter !== '?';
        this.name = lastCharacter === '?' ? signature.slice(0, -1) : signature;
    }
}

/**
 * Error that is thrown when parameter syntax is incorrect
 *
 */
class UriParameterSyntaxError extends Error {
    constructor(message, previous) {
        super(message);
        Object.setPrototypeOf(this, UriParameterSyntaxError.prototype);
        this.previous = previous !== null && previous !== void 0 ? previous : null;
    }
}

const parseRegex$1 = new RegExp(/\{.*?\}/);
class UriParameterCollection extends Map {
    /**
     * Create a new uri parameter collection from parameter placeholders in a given uri string
     *
     * @throws UriParameterSyntaxError
     *
     */
    static fromUriString(uri) {
        const parameters = new UriParameterCollection;
        // Parse the uri parameter placeholders with surrounding {curiy braces}.
        let match = uri.match(parseRegex$1);
        let lastParameterOptional = false;
        while (match !== null) {
            const placeholder = match[0];
            const parameter = new UriParameter(placeholder);
            if (lastParameterOptional && parameter.required) {
                const msg = `Invalid parameters for uri: '${uri}', all optional parameters must be declared after required ones.`;
                throw new UriParameterSyntaxError(msg);
            }
            lastParameterOptional = !parameter.required;
            parameters.set(parameter.name, parameter);
            uri = uri.replace(placeholder, '');
            match = uri.match(parseRegex$1);
        }
        return parameters;
    }
    /**
     * Check if any uri parameters are required
     *
     */
    areRequired() {
        let required = false;
        for (const [index, parameter] of this.entries()) {
            if (parameter.required) {
                required = true;
                break;
            }
        }
        return required;
    }
    /**
     * Get a list of the required uri parameters
     *
     */
    getRequired() {
        return new UriParameterCollection(Array.from(this.values())
            .filter(parameter => {
            return parameter.required;
        })
            .map(parameter => {
            return [parameter.name, parameter];
        }));
    }
    /**
     * Get names of all parameters
     *
     */
    getNames() {
        return Array.from(this.values()).map(parameter => parameter.name);
    }
    /**
     * Get the parameter with the given name
     *
     */
    getParameter(name) {
        const parameter = Array.from(this.values()).find(param => param.name === name);
        if (parameter === undefined) {
            return null;
        }
        return parameter;
    }
    /**
     * Return the 'first' parameter as indicated by iterator keys
     *
     */
    first() {
        var _a;
        return (_a = this.get(Array.from(this.keys())[0])) !== null && _a !== void 0 ? _a : null;
    }
}

/**
 * Error that is thrown when parameter binding fails
 *
 */
class UriParameterBindingError extends Error {
    constructor(message, previous) {
        super(message);
        Object.setPrototypeOf(this, UriParameterBindingError.prototype);
        this.previous = previous !== null && previous !== void 0 ? previous : null;
    }
}

/**
 * Error that is thrown when parameter type conversion fails.
 *
 */
class TypeConversionError extends Error {
    constructor(message, previous) {
        super(message);
        Object.setPrototypeOf(this, TypeConversionError.prototype);
        this.previous = previous !== null && previous !== void 0 ? previous : null;
    }
}

class UriParameterBinderConfiguration {
    constructor(config = {}) {
        this.trailingSlashes = false;
        this.bindGetParameters = false;
        this.encodeUriParameters = true;
        this.encodeGetParameters = true;
        this.typeConversionFunction = (parameterValue) => {
            return String(parameterValue);
        };
        Object.assign(this, config);
    }
}

/**
 * A collection of query parameters. Note that QueryParameter singular class does not exist
 * because having a data object for a value with only 2 string keys would be redundant.
 *
 */
class QueryParameterCollection extends Map {
    /**
     * Create a new query parameter collection from a query string
     *
     */
    static fromQueryString(query) {
        const params = new QueryParameterCollection();
        for (const keyValuePair of query.split('&')) {
            const [key, value] = keyValuePair.split('=');
            params.set(key, value);
        }
        return params;
    }
    /**
     * Get the string representation of this object
     *
     */
    toString() {
        return this.stringify(true);
    }
    /**
     * Get the string representation of this object
     *
     */
    stringify(urlEncode) {
        const parts = new Array();
        for (const [name, value] of this) {
            let paramName = name;
            let paramValue = value;
            if (urlEncode) {
                paramName = encodeURIComponent(name);
                paramValue = encodeURIComponent(value);
            }
            parts.push(`${paramName}=${paramValue}`);
        }
        return parts.join('&');
    }
    /**
     * Merge this collection with multiple other collections or maps
     *
     */
    merge(...collections) {
        const newCollection = new QueryParameterCollection(this);
        for (const collection of collections) {
            for (const [name, value] of collection) {
                newCollection.set(name, value);
            }
        }
        return newCollection;
    }
}

var UriComponent;
(function (UriComponent) {
    UriComponent["Scheme"] = "scheme";
    UriComponent["Userinfo"] = "userinfo";
    UriComponent["Username"] = "username";
    UriComponent["Password"] = "password";
    UriComponent["Host"] = "host";
    UriComponent["Port"] = "port";
    UriComponent["Path"] = "path";
    UriComponent["Query"] = "query";
    UriComponent["Fragment"] = "fragment";
})(UriComponent || (UriComponent = {}));
var UriComponent$1 = UriComponent;

/**
 * Not part of the external API, use Uri as a wrapper
 *
 */
class UriParameterBinder {
    constructor(config = {}) {
        this.configuration = new UriParameterBinderConfiguration(config);
    }
    /**
     * Bind given values to the uri parameter placeholders
     *
     *  @throws UriParameterBindingError
     *
     */
    bind(uri, values, config = null) {
        const configuration = config !== null ? new UriParameterBinderConfiguration(config) : this.configuration;
        const parameters = UriParameterCollection.fromUriString(uri.toString());
        // Return base uri if there's nothing to bind.
        if (parameters.size === 0 && configuration.bindGetParameters === false) {
            return uri;
        }
        if (Array.isArray(values)) {
            return this.bindArray(uri, values, parameters, configuration);
        }
        if (typeof values === 'object' && values !== null) {
            return this.bindObject(uri, values, parameters, configuration);
        }
        return this.bindValue(uri, values, parameters, configuration);
    }
    /**
     * Bind each object property to a to the parameter with a matching name.
     *
     */
    bindObject(uri, object, parameters, config) {
        for (const [index, parameter] of parameters.entries()) {
            uri = this.bindParameter(uri, parameter, object[parameter.name], config);
            // Remove already bound values from the object's keys
            delete object[parameter.name];
        }
        // Bind rest of the parameters as get params if specified
        if (Object.keys(object).length > 0 && config.bindGetParameters) {
            uri = this.bindGetParameters(uri, object, config);
        }
        return uri;
    }
    /**
     * Bind values in given order without caring about keys.
     *
     */
    bindArray(uri, array, parameters, config) {
        let n = 0;
        for (const [index, parameter] of parameters.entries()) {
            uri = this.bindParameter(uri, parameter, array[n], config);
            n++;
        }
        return uri;
    }
    /**
     * Bind a given plain value
     *
     */
    bindValue(uri, value, parameters, config) {
        const required = Array.from(parameters.getRequired().keys());
        if (required.length > 1) {
            const msg = `Cannot bind a given ${typeof value} as uri parameters: this type is handled as a plain value and can only be bound to one parameter but there are ${required.length} required parameters.`;
            throw new UriParameterBindingError(msg);
        }
        const parameter = parameters.first();
        if (parameter === null) {
            return uri;
        }
        return this.bindParameter(uri, parameter, value, config);
    }
    /**
     * Bind given object's properties as key value pairs for GET parameters
     *
     */
    bindGetParameters(uri, values, config) {
        const uriObj = new Uri(uri);
        const oldQuery = uriObj.queryParameters ? uriObj.queryParameters : new QueryParameterCollection;
        const newQuery = new QueryParameterCollection();
        for (const [key, value] of Object.entries(values)) {
            newQuery.set(key, this.stringValue(key, value));
        }
        return uriObj.withComponent(UriComponent$1.Query, oldQuery.merge(newQuery).stringify(config.encodeGetParameters)).toString();
    }
    /**
     * Bind a single value to parameter of the given uri string
     *
     */
    bindParameter(uri, parameter, value, config) {
        if (value === undefined) {
            if (parameter.required) {
                const msg = `Cannot bind undefined value for required parameter '${parameter.name}'.`;
                throw new UriParameterBindingError(msg);
            }
            value = '';
        }
        const original = value;
        value = this.stringValue(parameter.name, value);
        if (parameter.required && value.length === 0) {
            if (typeof original === 'string') {
                const msg = `Cannot bind empty string for required parameter ${parameter.name}.`;
                throw new UriParameterBindingError(msg);
            }
            const msg = `Cannot bind given ${typeof original} value for required parameter ${parameter.name} because string conversion results in an empty string.`;
            throw new UriParameterBindingError(msg);
        }
        uri = uri.replace(parameter.placeholder, config.encodeUriParameters ? encodeURIComponent(value) : value);
        uri = config.trailingSlashes ? uri : this.removeTrailingSlashes(uri);
        return uri;
    }
    /**
     * Removes trailing slashes from a given string
     *
     */
    removeTrailingSlashes(uri) {
        let lastChar = uri.slice(-1);
        while (lastChar === '/') {
            uri = uri.slice(0, -1);
            lastChar = uri.slice(-1);
        }
        return uri;
    }
    /**
     * Convert a given value to string according to the configured parameter type conversion function
     *
     */
    stringValue(name, value) {
        try {
            if (typeof value !== 'string') {
                value = this.configuration.typeConversionFunction(value);
            }
        }
        catch (error) {
            if (error instanceof TypeConversionError) {
                const msg = `Cannot bind value for parameter '${name}', unable to convert ${typeof value} to string.`;
                throw new UriParameterBindingError(msg, error);
            }
            throw error;
        }
        return value;
    }
}

/**
 * Error that is returned when uri has incorrect syntax
 *
 */
class UriSyntaxError extends Error {
    constructor(message, previous) {
        super(message);
        Object.setPrototypeOf(this, UriSyntaxError.prototype);
        this.previous = previous !== null && previous !== void 0 ? previous : null;
    }
}

/**
 * Error that is thrown when configuration value is invalid
 *
 */
class ConfigurationError extends Error {
    constructor(message, previous) {
        super(message);
        Object.setPrototypeOf(this, ConfigurationError.prototype);
        this.previous = previous !== null && previous !== void 0 ? previous : null;
    }
}

class UriBuilderConfiguration {
    constructor(config) {
        this._baseUri = null;
        this.mergeQuery = false;
        this.defaultScheme = null;
        this.overrideScheme = null;
        Object.assign(this, config);
    }
    get baseUri() {
        return this._baseUri;
    }
    set baseUri(uri) {
        if (typeof uri !== 'string') {
            this._baseUri = uri;
            return;
        }
        try {
            this._baseUri = new Uri(uri);
        }
        catch (error) {
            if (error instanceof UriSyntaxError) {
                const msg = `Invalid base uri given. See previous error for more details.`;
                throw new ConfigurationError(msg, error);
            }
            throw error;
        }
    }
}

const parseRegex = new RegExp(/^((?<scheme>https?):\/\/)?((?<userinfo>(?<username>[^:]+):(?<password>[^@]+))?@)?(?<host>[^\/?#:]+)?(:(?<port>[0-9]+))?(\/(?<path>[^?#]+))?(\?(?<query>[^#]+))?(#(?<fragment>.+))?/);
/**
 * Internal, should not be part of the public API
 *
 */
class UriBuilder extends Map {
    constructor(components, config = {}) {
        super(components);
        this.configuration = new UriBuilderConfiguration(config);
        // Set base uri if uri is not absolute
        if (!this.has(UriComponent$1.Host) && this.configuration.baseUri !== null) {
            this.applyBaseUri(this.configuration.baseUri);
        }
        // Set uri scheme if missing or overwritten
        if (this.has(UriComponent$1.Host)) {
            if (this.configuration.overrideScheme !== null) {
                this.set(UriComponent$1.Scheme, this.configuration.overrideScheme);
            }
            else if (!this.has(UriComponent$1.Scheme) && this.configuration.defaultScheme !== null) {
                this.set(UriComponent$1.Scheme, this.configuration.defaultScheme);
            }
        }
    }
    /**
     * @throws UriSyntaxError
     *
     */
    static fromUriString(uri, config = {}) {
        const match = uri.match(parseRegex);
        if (match === null || match.groups === undefined) {
            const msg = `Cannot parse given uri string '${uri}'`;
            throw new UriSyntaxError(msg);
        }
        const parsed = new Map();
        Object.values(UriComponent$1).forEach(component => {
            if (match.groups !== undefined) {
                const value = match.groups[component];
                if (value !== undefined) {
                    parsed.set(component, value);
                }
            }
        });
        return new UriBuilder(parsed, config);
    }
    build() {
        let uri = '';
        uri += this.getComponentString('', UriComponent$1.Scheme, '://');
        uri += this.getComponentString('', UriComponent$1.Userinfo, '@');
        uri += this.getComponentString('', UriComponent$1.Host);
        uri += this.getComponentString(':', UriComponent$1.Port);
        uri += this.getComponentString('/', UriComponent$1.Path);
        uri += this.getComponentString('?', UriComponent$1.Query);
        uri += this.getComponentString('#', UriComponent$1.Fragment);
        return uri;
    }
    applyBaseUri(baseUri) {
        var _a, _b;
        const authorityComponents = [
            UriComponent$1.Scheme,
            UriComponent$1.Userinfo,
            UriComponent$1.Host,
            UriComponent$1.Port
        ];
        authorityComponents.forEach(component => {
            const value = baseUri.getComponent(component);
            if (value !== null) {
                this.set(component, value);
            }
        });
        // Set base uri path
        if (baseUri.hasComponent(UriComponent$1.Path)) {
            const basePath = (_a = baseUri.getComponent(UriComponent$1.Path)) !== null && _a !== void 0 ? _a : '';
            const uriPath = (_b = this.get(UriComponent$1.Path)) !== null && _b !== void 0 ? _b : '';
            this.set(UriComponent$1.Path, basePath + '/' + uriPath);
        }
        // Set base uri query
        let query = baseUri.queryParameters;
        if (this.configuration.mergeQuery && query !== null) {
            const uriQueryString = this.get(UriComponent$1.Query);
            if (uriQueryString !== undefined) {
                query = query.merge(QueryParameterCollection.fromQueryString(uriQueryString));
            }
            this.set(UriComponent$1.Query, query.toString());
        }
    }
    /**
     * Get an uri component with added content, internal build use
     *
     */
    getComponentString(prepend, component, append = '') {
        if (!this.has(component) || this.get(component) === null) {
            return '';
        }
        return prepend + this.get(component) + append;
    }
}

class Uri {
    /**
     * Create a new uri
     *
     *  @throws UriSyntaxError
     *
     */
    constructor(uri, config = {}) {
        this.configuration = new UriConfiguration(config);
        if (this.configuration.prependSlash &&
            typeof uri === 'string' &&
            uri.substr(0, 'http://'.length) !== 'http://' &&
            uri.substr(0, 'https://'.length) !== 'https://' &&
            uri.charAt(0) !== '/') {
            uri = '/' + uri;
        }
        this.builder = uri instanceof Map ? new UriBuilder(uri, config) : UriBuilder.fromUriString(uri, config);
        this.binder = new UriParameterBinder(this.configuration.parameters);
        if (!this.hasComponent(UriComponent$1.Host) && !this.hasComponent(UriComponent$1.Path)) {
            const msg = `Uris should have at least either host or path.`;
            throw new UriSyntaxError(msg);
        }
    }
    /**
     * Get a string representation
     *
     */
    toString() {
        return this.builder.build();
    }
    /**
     * Check if this uri is absolute
     *
     */
    isAbsolute() {
        return this.builder.has(UriComponent$1.Host);
    }
    /**
     * Check if this uri is relative
     *
     */
    isRelative() {
        return !this.isAbsolute();
    }
    /**
     * Get uri scheme component
     *
     */
    get scheme() {
        return this.getComponent(UriComponent$1.Scheme);
    }
    /**
     * Get uri userinfo component, containing both username and password
     *
     */
    get userinfo() {
        return this.getComponent(UriComponent$1.Userinfo);
    }
    /**
     * Get uri user component
     *
     */
    get username() {
        return this.getComponent(UriComponent$1.Username);
    }
    /**
     * Get uri password component
     *
     */
    get password() {
        return this.getComponent(UriComponent$1.Password);
    }
    /**
     * Get uri host component
     *
     */
    get host() {
        return this.getComponent(UriComponent$1.Host);
    }
    /**
     * Get uri port component
     *
     */
    get port() {
        const value = this.getComponent(UriComponent$1.Port);
        if (value === null) {
            return null;
        }
        return parseInt(value);
    }
    /**
     * Get uri path component
     *
     */
    get path() {
        return this.getComponent(UriComponent$1.Path);
    }
    /**
     * Get query string
     *
     */
    get queryString() {
        return this.getComponent(UriComponent$1.Query);
    }
    /**
     * Get query parameters
     *
     */
    get queryParameters() {
        if (this.queryString === null) {
            return null;
        }
        return QueryParameterCollection.fromQueryString(this.queryString);
    }
    /**
     * Get fragment component
     *
     */
    get fragment() {
        return this.getComponent(UriComponent$1.Fragment);
    }
    /**
     * Get all uri components
     *
     */
    get components() {
        return this.builder;
    }
    /**
     * Get the uri parameters
     *
     */
    get uriParameters() {
        return UriParameterCollection.fromUriString(this.toString());
    }
    /**
     * Bind given values as uri parameters
     *
     * @throws UriParameterBindingError
     *
     */
    bindParameters(values, config = null) {
        if (config !== null) {
            return this.binder.bind(this.toString(), values, config);
        }
        return this.binder.bind(this.toString(), values);
    }
    /**
     * Get uri component
     *
     */
    getComponent(component) {
        var _a;
        return (_a = this.builder.get(component)) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Check if the uri has the given component
     *
     */
    hasComponent(component) {
        return this.builder.has(component);
    }
    /**
     * Create a new instance of this uri with the given component uri component
     *
     */
    withComponent(component, value) {
        const instance = cloneDeep(this);
        instance.setComponent(component, value);
        return instance;
    }
    /**
     *  Set the value of a given component
     *
     */
    setComponent(component, value) {
        this.builder.set(component, value);
    }
}

class Route {
    constructor(name, method, uri, extra = {}) {
        this.name = name;
        this.method = method;
        this._uri = uri instanceof Uri ? uri : new Uri(uri);
        this.extra = extra;
    }
    /**
     * Create a new instance of this route with the given name
     *
     */
    withName(name) {
        return new Route(name, this.method, this.uri, this.extra);
    }
    /**
     * Create a new instance of this route with the given request method
     *
     */
    withMethod(method) {
        return new Route(this.name, method, this.uri, this.extra);
    }
    /**
     * Create a new instance of this route with the given uri
     *
     */
    withUri(uri) {
        return new Route(this.name, this.method, uri, this.extra);
    }
    /**
     * Create a new instance of this route with the given uri component
     *
     */
    withUriComponent(component, value) {
        const instance = cloneDeep(this);
        instance.setUriComponent(component, value);
        return instance;
    }
    /**
     * Create a new instnace of this route with the given extra
     *
     */
    withExtra(extra) {
        return new Route(this.name, this.method, this.uri, extra);
    }
    setUriComponent(component, value) {
        this.uri = this.uri.withComponent(component, value);
    }
    get uri() {
        return this._uri;
    }
    set uri(uri) {
        this._uri = uri;
    }
}

class RouteRegistrarConfiguration {
    constructor(config = {}) {
        this.extra = {};
        this.uris = {};
        this.registrationMiddleware = new Array();
        Object.assign(this, config);
    }
}

/**
 * Error that is thrown when route registration fails
 *
 */
class RegistrationError extends Error {
    constructor(message, previous) {
        super(message);
        Object.setPrototypeOf(this, RegistrationError.prototype);
        this.previous = previous !== null && previous !== void 0 ? previous : null;
    }
}

/**
 * Describes a class that can register routes
 *
 */
class RouteRegistrar {
    constructor(config) {
        this.configuration = new RouteRegistrarConfiguration(config);
    }
    /**
     * Create and register a new route from parameters
     *
     * @throws RegistrationError
     *
     */
    register(name, method, uri, extra = {}) {
        const uriObj = new Uri(uri, this.configuration.uris);
        let route = new Route(name, method, uriObj, merge(this.configuration.extra, extra));
        this.storeRoute(this.applyRegistrationMiddleware(route));
    }
    /**
     * Register all routes from a given schema
     *
     * @throws RegistrationError
     *
     */
    registerAll(routes) {
        if (typeof routes === 'string') {
            try {
                routes = JSON.parse(routes);
            }
            catch (error) {
                if (error instanceof SyntaxError) {
                    const msg = 'Could not load given json. See previous error for more details.';
                    throw new RegistrationError(msg, error);
                }
            }
            if (!Array.isArray(routes)) {
                const msg = `Could not load given json: expected array data, got ${typeof routes}.`;
                throw new RegistrationError(msg);
            }
        }
        for (const route of routes) {
            if (typeof route.uri === 'string') {
                this.register(route.name, route.method, route.uri, route.extra);
                continue;
            }
            const uri = new Map();
            for (const [key, value] of Object.entries(UriComponent$1)) {
                const tmp = route.uri[value];
                if (tmp !== undefined) {
                    uri.set(value, tmp);
                }
            }
            this.register(route.name, route.method, uri, route.extra);
        }
    }
    /**
     * Register a new get route
     *
     * @throws RegistrationError
     *
     */
    get(name, uri, extra = {}) {
        this.register(name, 'GET', uri, extra);
    }
    /**
     * Register a new post route
     *
     * @throws RegistrationError
     *
     */
    post(name, uri, extra = {}) {
        this.register(name, 'POST', uri, extra);
    }
    /**
     * Register a new put route
     *
     * @throws RegistrationError
     *
     */
    put(name, uri, extra = {}) {
        this.register(name, 'PUT', uri, extra);
    }
    /**
     * Register a new patch route
     *
     * @throws RegistrationError
     *
     */
    patch(name, uri, extra = {}) {
        this.register(name, 'PATCH', uri, extra);
    }
    /**
     * Register a new delete route
     *
     * @throws RegistrationError
     *
     */
    delete(name, uri, extra = {}) {
        this.register(name, 'DELETE', uri, extra);
    }
    /**
     * Apply registration middleware to a given route
     *
     */
    applyRegistrationMiddleware(route) {
        this.configuration.registrationMiddleware.forEach(middleware => {
            route = middleware.applyMiddleware(route);
        });
        return route;
    }
}

/**
 * This class acts as a container for temporary configuration that can be
 * used to register a group of routes for a given repository
 *
 */
class RouteGroupRegistrar extends RouteRegistrar {
    constructor(repository, config = {}) {
        super(new RouteRegistrarConfiguration(config));
        this.repository = repository;
    }
    storeRoute(route) {
        this.repository.storeRoute(route);
    }
}

class RouteRepositoryConfiguration extends RouteRegistrarConfiguration {
    constructor(config = {}) {
        super(config);
        this.mutable = false;
        this.duplicates = false;
        Object.assign(this, config);
    }
}

/**
 * A simple enum that contains valid HTTP methods
 *
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
    RequestMethod["PATCH"] = "PATCH";
    RequestMethod["DELETE"] = "DELETE";
    RequestMethod["HEAD"] = "HEAD";
    RequestMethod["CONNECT"] = "CONNECT";
    RequestMethod["OPTIONS"] = "OPTIONS";
    RequestMethod["TRACE"] = "TRACE";
})(RequestMethod || (RequestMethod = {}));
var RequestMethod$1 = RequestMethod;

class RouteRepository extends RouteRegistrar {
    constructor(config = {}) {
        const configuration = new RouteRepositoryConfiguration(config);
        super(configuration);
        this.routes = new Map();
        this.signatures = new Map();
        this.configuration = configuration;
    }
    /**
     * Stores a route. Note that this does not apply any registrar configuration or middlewares associated with registration.
     *
     * @throws RegistrationError
     * @internal
     *
     */
    storeRoute(route) {
        const oldRoute = this.routes.get(route.name);
        // Check if a route with this name is already registered and thus being modified
        if (oldRoute !== undefined) {
            if (this.configuration.mutable === false) {
                const msg = `Route '${route.name}' is already defined and immutable!`;
                throw new RegistrationError(msg);
            }
            // If existing route is being modified, remove the old signature
            this.signatures.delete(this.routeSignature(oldRoute.method, oldRoute.uri.toString()));
        }
        const signature = this.routeSignature(route.method, route.uri.toString());
        const duplicateRoute = this.signatures.get(signature);
        if (this.configuration.duplicates === false && duplicateRoute !== undefined) {
            const msg = `Route '${route.name}' is a duplicate of existing route '${duplicateRoute}'.`;
            const hint = "If you want to enable multiple aliases for the same uri and method combination, set 'duplicates' option as true.";
            throw new RegistrationError(msg + "\n" + hint);
        }
        this.signatures.set(signature, route.name);
        this.routes.set(route.name, route);
    }
    /**
     * Count the number of routes
     *
     */
    countRoutes() {
        return this.routes.size;
    }
    /**
     * Get a route with the given name
     *
     */
    getRoute(name) {
        const route = this.routes.get(name);
        return route !== undefined ? route : null;
    }
    /**
     * Check if a route with a given name exists
     *
     */
    hasRouteWithName(name) {
        return this.routes.has(name);
    }
    /**
     * Check if a route with a given uri and optionally method, exists
     *
     */
    hasRouteWithUri(uri, ...methods) {
        if (methods.length === 0) {
            methods = Object.values(RequestMethod$1);
        }
        for (const [index, method] of methods.entries()) {
            if (this.signatures.has(this.routeSignature(method, uri))) {
                return true;
            }
        }
        return false;
    }
    /**
     * Get a string representation of a given route's destination
     *
     */
    routeSignature(method, uri) {
        return `${method}:${uri}`;
    }
    /**
     * Register routes using same registrar settings for the whole group
     *
     */
    group(config, callback) {
        const registrar = new RouteGroupRegistrar(this, config);
        callback(registrar);
    }
    /**
     * Get a formatted list of all registered routes.
     *
     */
    listRoutes() {
        const rows = [['NAME', 'METHOD', 'URI']];
        for (const [signature, route] of this.routes) {
            rows.push([route.name, route.method, route.uri.toString()]);
        }
        const nameLen = Math.max(...rows.map(row => row[0].length));
        const methodLen = Math.max(...rows.map(row => row[1].length));
        const uriLen = Math.max(...rows.map(row => row[2].length));
        rows.splice(1, 0, [
            '-'.padEnd(nameLen, '-'),
            '-'.padEnd(methodLen, '-'),
            '-'.padEnd(uriLen, '-'),
        ]);
        const table = rows.map(row => {
            row[0] = row[0].padEnd(nameLen);
            row[1] = row[1].padEnd(methodLen);
            row[2] = row[2].padEnd(uriLen);
            return '| ' + row.join(' | ') + ' |';
        }).join("\n");
        return table;
    }
}

export { ConfigurationError, QueryParameterCollection, RegistrationError, RequestMethod$1 as RequestMethod, Route, RouteRegistrar, RouteRepository, TypeConversionError, Uri, UriComponent$1 as UriComponent, UriParameter, UriParameterBindingError, UriParameterCollection, UriParameterSyntaxError, UriSyntaxError };
