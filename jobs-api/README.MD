#### Project Setup

In order to spin up the project, in the root create .env with these two variables,
with your own values.

MONGO_URI
JWT_SECRET

After that run this command

npm start


Email Validation

...regrex
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
...

### Register Route

-Validate -name, email, password -with mongoose
-Hash password (with bcryptjs)
-Create token
-Send response with token

### Mongoose Errors

-Required
-Duplicate Vlaues

### Login Route

-Validate -email, password -in controller
-Try to find user