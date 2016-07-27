# nodeTest
Based on the following tutorial - http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/

## Required Ingredients
- Git: http://git-scm.com/
- Node.js: https://nodejs.org/
- Mongo: https://docs.mongodb.com/manual/installation/

## Setup
Clone the repositry using git.
```bash
git clone https://github.com/thombaynes/nodeTest.git
```

Install the necessary node modules

```bash
npm install
```

In your project directory, create a ```data``` folder (or anywhere else, just know the location of this folder). Then start the mongo database, pointing it to your ```data``` folder

```bash
mongod --dbpath ~/nodetest/data
```

Run the app
```bash
npm start
```

## The Test

Write tests for this application, building on the skeleton that has been provided for you. All back-end tests are stored in the ```test``` directory, and can be run using the following commands

Run the tests
```bash
npm run test
```

Get the test coverage
```bash
npm run coverage
```

# Feel free to use any other npm libraries of your choosing, and/or not use what libraries are included.
# Feel free to rewrite the application code itself.

## Submitting the test

Either provide the contents of the ```test``` directory, or clone the repository yourself on GitHub, and provide the URL of the repo.