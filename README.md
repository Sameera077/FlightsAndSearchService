# welcome to Flight Service

## project setup
- clone the project on ur local
- execute 'npm install on the same path as of ur     root directory of the dnladed project
- create a '.env file in root dir and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the flng piece of json

-----
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 
}


-----

- Once you have added ur db config as listed above, go to the src folder from terminal and execute `npx-sequelize-db:create`
-----
