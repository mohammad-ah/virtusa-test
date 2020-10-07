# virtusa-test

# virtusa-challenge

This project is meant to slove a challenge:


### Technology
Technology stack is:

* Node.js
* TypeScript
* Express


## Steps to run this project locally on windows:

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/mohammad-ah/virtusa-test.git
# Install dependencies
npm install
# Run the app
npm start
```

> **You then can test the APIs using Postman or other tools**

> ## Mainly there will be thsoe APIs
```
/* Version 1 Parser */
POST: /api/v1/parse

/* Version 2 Parser */
POST: /api/v2/parse
``` 
----------------
## Design
The project is based on MVC architectural design pattern.
* As you can see, there is a routes folder, which will serve with the controller as controller part.
* Then a models folder, can be added to serve as a model, but we don't need it in our case.
* a view can be added to recieve API endpoint requests.

Controllers are made as singletons to assure only one and same instance of object every time.
 
## Interfaces and Enums are created under `lib` folder
* We have IParsedInterface to control the object properties
* We have EStatusCodes to control the status codes returned

## versioning
For the versioning we used **Express API versioning** which is an express middleware that dynamically loads different API versions seamlessly depending on the version number specified in the request url.
It is written in Javascript ES6 syntax and it is further transpiled down to Javascript ES5 using babel.
It is simple and easy to use:

```
app.use(expressApiVersioning({
 	apiPath: path.join(__dirname, './api'),// absolute path to the api directory
 	test: /\/api\/(v[0-9]+).*/, // regular expression to get the version number from the url
 	entryPoint: 'index.js', // entry point exports a function which takes an instance of express as parameter.
 	instance: app // passes an instance of express to the entry point
}, (error, req, res, next) => {
 // Do something here
 next(); // calls the next middleware
}));
```
A full documnetation abiut it can be found on [LINK](https://github.com/adesege/express-api-versioning)  

## Testing
I used 
* Supertest
* Chai

the tests are easy forward:
```
describe("Post /api/v2/parse with body data", () => {
    it("All data should be correct", async () => {
        const res = await request(app).post(apiEndPoint).send(data});
        // expect....
    });
});
```
**You can run tests using the command**
```
npm test
```

**You can run a test coverage using the command**
```
npm test -- --code-coverage
```

I just included 2 test cases, there are many test cases can be added to only those 2 API's

Used `junit-report-builder` for generatign test reports

----------------
 
> ## **Addition, Swagger is integrated to document APIs**

Swagger is a framework for describing your API using a common language that everyone can understand. Think of it as a blueprint for a house.

```
GET: /api-docs
```




