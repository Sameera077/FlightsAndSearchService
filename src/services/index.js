//BU
// Module Aggregation: It exports services from city-service.js.
// This allows other parts of the application to import all services from a single entry point, simplifying the import statements.

const AirportService = require('./airport-service');
const CrudService = require('./crud-service');
const FlightService = require('./flight-service');

module.exports = {
    CityService: require('./city-service'),
    FlightService: require('./flight-service'),
    AirportService: require('./airport-service'),
    CrudService: require('./crud-service')
}