

# Welcome to Flights Service
## Project setup
    - clone the project on your local
    - execute `npm install` on the same path of your root directory of the downloaded project
    - Create a `.env` file in the root directory and add the following environment variables
        - `PORT=3000`
    - Inside the `src/config` folder, create a new file `config.json` and then add the following piece of JSON

    ...
        {
        "development": {
            "username": <YOUR_DB_LOGIN_NAME>,
            "password": <YOUR_DB_PASSWORD>,
            "database": "Flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
            }
        }
    ...

    - Once u have added ur db config as listed above, go to the src folder from ur terminal and execute `npx sequelize db:create` 
