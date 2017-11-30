export default class LaravelRoutesSettings
{
    constructor(settings = {})
    {
        this.defaultSettings = {
            registration: {
                strict: false,
                explicit: false,
                actionDefault: 'controller'
            },
            logging: {
                warnings: true,
                suggestions: true
            }
        }
        this.settings = settings;
    }

    setting(setting)
    {
        return this.findSetting(this.settings, setting, false);
    }

    // Get a default value for specified setting
    default(setting)
    {
        return this.findSetting(this.defaultSettings, setting, true);
    }

    findSetting(tree, queryString, searchDefault)
    {
        let query = queryString.split('.');
        let setting = null;

        for(let n = 0; n < query.length; n++)
        {
            let currentQuery = query[n];
            setting = this.initializeQuery(currentQuery, tree, searchDefault);

            // If no setting was found, try resetting the search from default
            // settings
            if(setting === null && searchDefault === false)
            {
                this.default(queryString);
                break;
            }
            tree = setting;
        }
        return setting;
    }

    initializeQuery(query, settings, searchDefault)
    {
        // Check that given query is a string
        if(typeof query !== 'string') throw new Error(`Queried setting must be a string. '${query}' given.`);

        // Check if setting exists
        if(settings !== undefined && settings[query] !== undefined) return settings[query];

        // Give an error if searching from default values and the value is not
        // found
        if(searchDefault) throw new Error(`Value of queried setting '${query}' does not exist.`);

        // Return null if checking didn't exist
        return null;
    }
}
