//BU
//The file city-service.js defines a service class, CityService,
// which acts as an intermediary between the application and the data layer (in this case, the CityRepository).

//1.City Management:The CityService class provides methods to manage city data, 
//including creating, deleting, updating, and retrieving city information!

//2. Error Handling: 
//Each method includes error handling to catch any issues that arise during database operations. 

const {CityRepository} = require('../repository/index');
   
class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async deleteCity(cityId) {
        try {
            const response = this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getCity(cityId) {
        try {
            const city = await this.cityRepository.updateCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CityService;