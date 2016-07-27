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

Run the script
```bash
node app
```

Run the tests
```bash
node run test
```

Get the test coverage
```bash
node run coverage
```
