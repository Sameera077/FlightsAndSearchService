//BU
// Module Aggregation: It exports services from city-service.js.
// This allows other parts of the application to import all services from a single entry point, simplifying the import statements.

const FlightService = require('./flight-service');

module.exports = {
    CityService: require('./city-service'),
    FlightService: require('./flight-service')
}