const ClientErrorCodes = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORISED: 401,
    NOT_FOUND: 404
});

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501
});

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201
});

module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}


//When an object is frozen, you cannot add new properties, remove existing properties, or change the values of existing properties. This is useful for creating immutable objects, which can help prevent accidental changes to data.
