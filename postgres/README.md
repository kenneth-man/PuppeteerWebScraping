# Local Postgres Server Initialisation
### This directory contains a dockerfile that's used to get a local postgres server running in 2 commands (steps in `rootDir/README.md`)
- ### It uses the `init.sql` file to initialize a `users` table and add a row of data with the following sign-in credentials that can be used in the `/auth/signIn` backend endpoint
	- ### `email` = `kenneth.waikin.man@outlook.com`
	- ### `password` = `password45678`