

### Technologies used on the backend.
- `Nodejs`
- `Express`
- `Sequelize`
- `Mysql`
- `Npm`

### Installing project dependencies
1. Install Mysql on version 5.7 (recommended). Obs: If you use docker, you go to the /devops folder and run ```docker-compose up``` or ```docker-compose up -d``` that will install and configure.
2. Database credentials:
   - **user**: root
   - **password**: root
   - **hostname**: localhost  
2. Install Node.js on version 15.8.0 (recommended).
3. Then run the ```npm install``` command.
4. Run the command ```npx sequelize db:create``` (create your database).
5. Run the command ```npx sequelize db:migrate``` (create yours tables in database).
6. Finally, run the ```npm start``` command to bring up the backend.
7. Access http://localhost:3000/category or http://localhost:3000/device for test.

application link on heroku: https://api-device-test.herokuapp.com (backend)

application link on heroku: https://app-device-test.herokuapp.com (frontend)
