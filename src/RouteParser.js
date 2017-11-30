import InvalidRouteException from './exceptions/InvalidRouteException';

export default class RouteParser
{
    // Checks that a given route name is valid and returns an object containing
    // the parsed data.
    static parseName(string)
    {
        if(typeof string !== 'string') return null;

        let parts = string.split('.');
        if(parts.length > 2) throw new InvalidRouteException('Route name syntax with more than a single dot is not supported.');

        // Return the headless route
        if(parts.length === 1) return {group: null, action: parts[0]};

        // Return route belonging to a group
        return {group: parts[0], action: parts[parts.length - 1]};
    }

    static parseLaravelAction(action, format = 'controller')
    {
        if(typeof action !== 'string') return null;
         
        // Malformed if action does not contain the @ symbol
        if(action.indexOf('@') === -1) throw new Error(`Laravel style action '${action}' is malformed. The string must contain the @ character, for example: Controller@action`);

        // Select the last part of the string delimited by @
        let parts = action.split('@');

        if(parts.length > 2) throw new Error("Laravel style action should contain only one '@' character");

        // Default parse is in controller format
        let parsedGroup = parts[0];
        let parsedAction = parts[parts.length - 1];

        if(format === 'object') parsedGroup = RouteParser.objectCase(parsedGroup).toLowerCase();
        if(format === 'object_snake') parsedGroup = RouteParser.appendCase(parsedGroup, '_');
        if(format === 'object_kebab') parsedGroup = RouteParser.appendCase(parsedGroup, '-');

        return {
            group: parsedGroup,
            action: parsedAction
        };
    }

    static objectCase(string)
    {
        // Do not try formatting if the object is simply controller
        if(string !== 'controller') string = string.replace(/controller/ig, '');

        return string;
    }

    static appendCase(string, appendChar)
    {
        string = RouteParser.objectCase(string);
        let newString = '';

        for(let n = 0; n < string.length; n++)
        {
            let charAt = string.substring(n, n+1);

            // Append the given character before each uppercase character
            // except for the first one
            if(n !== 0 && charAt === charAt.toUpperCase()) newString += appendChar;
            newString += charAt.toLowerCase();
        }
        return newString;
    }

}
