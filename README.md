First:

npm install

Second:

create yourself an MongoDB Database

Set the network access to 0.0.0.0/0

create a new user and save the password

Create a new .env file and store the connection link to MongoDB like so:

MONGODB_URI=THELINK/authapp

also create this in the file

NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000/ or whatever the url is where you host it.

make shure that the .env is in the .gitignore to prevent leaking your keys

when your done with this you can start the dev server using:

npm run dev
