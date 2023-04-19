Access this API at : https://frail-boa-headscarf.cyclic.app

# Description 
This is a RestFul API that provides JSON representation of data stored in mongoDB database : Rankwise data of top 10 T20 batsmen

## Access this API in your website
You can use browser library like Fetch-API method to retrieve data from this API

## Run locally
To run the API server locally, you can follow these steps:

1. Clone this repository to your local machine.
2. Open the project folder in text editor like Visual Studio Code 
3. Install required packages and dependencies using : **npm install**
4. The entry point of the app is **app.js**
5. The routers are defined in **men.js** in routers directory in root. All four CRUD features are provided at index route. You can change the routes as per your need. 
6. The database schema is defined in **batsmen.js** file in models directory. You change change the schema as per your need
7. The connection between nodeJs webserver and the database (mongoDB here) is defined in conn.js in db directory. Kindly change the **MONGO_URI** address to your respective Mongo URI and define it in the **.env** file in the root of the project. You can also setup a local mongo composs as a backend data base. Use MONGO_URI accordinlgy
8. You can run the development server using : **npm run start** or **npm run dev** (for nodemon)
9. I have used POSTMAN to populate the mongoDB database. You can develop a front end and interact with the API to populate and do CRUD operations with the data base accordingly. 
10. I have also made a front end webapp to use the API. Check that out at : https://swpnilpndey.github.io/T20-batsmen-ratings.github.io/ 

## Technologies Used
This API was built using:

- NodeJS
- ExpressJS
- MongoDB
- Mongoose
- POSTMAN

## Contributions
If you find any issues with this API or want to contribute, feel free to submit a pull request.

## Policy
The API uses CORS policy to allow third party websites which have different origins than this API server, to access this API
