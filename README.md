<!-- /
    - src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    - tests/[later]
    - static/
    - temp/ -->


# Welcome to Flights Service
## Project setup
    - clone the project on ur local
    - execute `npm install` on the same pasth of ur root directory of the dnlded project
    - Create a '.env' file in the root directory and add the flng environment variables
        - `PORT=3000`
    - Inside the `src/config` folder, create a new file 'config.json' and then add the flng piece of json

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


    
