/**
 * _________________________________
 * Mongobd connection
 * __________________________________
 * 
 * 1.create an account
 * 2.create an account with user and password
 * 3. whitelist ip address
 * 4.database > connect > driver > view full code
 * 5. change the password uri
 * 
 * ---------------------------
 * CREATE --- POST
 * -------------------------------
 * 
 * ----SERVER SIDE-------
 * 2.app.post('/users', async (req, res)=> {})
 * 3. make the function async to use await inside it.
 * 4. make sure you use express.json() middleware
 * 5.access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user)
 * 7. res.send(result)
 * 
 * -----CLIENT SIDE-------
 * 1.create fetch
 * 2. add second parameter as an object
 * 3. provide method: "POST"
 * 4. add headers: { "content-type": "application/json"}
 * 5. add body: JSON.stringify(user)
 * 
 * 
 * 
 * -------------------------------
 * READ (for many) --- GET
 * -------------------------------
 * ----SERVER SIDE-------
 * 1.create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 3.res.send(result)
 * 
 * 
 * -------------------------------
 * DELETE --- DELETE
 * -------------------------------
 * ----SERVER SIDE-------
 * 1. create app.delete('/users/:id',async (req, res)=> {})
 * 2. specify unique ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)};
 * 4. const result = await userCollection.deleteOne(query)
 * 5. res.send(result)
 * 
 * 
 * -----CLIENT SIDE-------
 * 1.create dynamic url with id
 * 2.make sure to mention the DELETE method
 * 
 * 
 */