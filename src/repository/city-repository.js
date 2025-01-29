/**
 CRUD Operations: on city records
    createCity: Adds a new city to the database.
    deleteCity: Removes a city from the database using its ID.
    updateCity: Updates the details of an existing city based on its ID.
    getCity: Retrieves a city record by its ID.
 */


//Integration with Models: 
    //The repository interacts with the City model, allowing efficient and organized interaction with the database.



const { Op } = require('sequelize');

const { City }= require('../models/index');

class CityRepository {

    async createCity({ name }) { // {name: "New Delhi"}
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository later");
            throw {error};  
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository later");
            throw {error};
        }
    }

    async updateCity(cityId, data) { // {name: " Sameera"}
        try {
            const city = await City.update(data, {
                where : {
                    id: cityId
                }
            });
            //This below method will return updated object
            // const city = await City.findByPk(cityId);
            // city.name = data.name;
            // await city.save();

            return city;
            
        } catch (error) {
            console.log("Something went wrong in the repository later");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository later");
            throw {error};
        }
    }
    
    async getAllCities(filter) { //filter can be empty also
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }

            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository later");
            throw {error};
            
        }
    }
}

module.exports = CityRepository;

