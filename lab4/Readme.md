#NPM Project 
1. goto project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type: module`
5. install nodemon ` npm i nodemon -D`
6. update script in package.json
``` 
script{
    "start" : "node app.js"
    "dev" : "nodemon prg7.js"
}
```
7. add node_module to .gitignore 
8. to run use `npm run dev`

## REST API( Representational State Transfer  Application Programming Interface.)
- any backend server return only data not html file
- REST API uses (get,post,put,patch,delete ) method to communicate with client
- any browser can check only get mehod 
- for other method type we use third party party API Tester like postman,thunder client,echo api etc

## Request type
1. GET -> get all(/api/products) ,getbyid(/api/products/1)
2. POST -> form help of this method we add any product in db.(/api/useers), data will be share by echo api body section
3. PATCH/PATCH -> /api/products/908 .data will be share by echo api body section
4. DELETE -> api/prodcuts/110 
5. helper function -> exported function can be used by any imported function.
