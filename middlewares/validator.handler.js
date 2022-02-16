const boom = require('@hapi/boom');

function ValidatorHandler (schema, property) {
    return (req, resp, next) => {
        const data = req[property];
        const { error } = schema.validate(data);
        if(error) {
            boom.badRequest(error);
            next(error);
        }
        next();
    }
}

module.exports = ValidatorHandler;