# CrypticzXI's Portfolio / Frontend


What this project does:
* Use Sanity.io for a database to hold all of your wonderful artwork!
* Allows you to show your amazing artwork off.
* Manage buttons, add new buttons.
* Have a custom experiance.

and much more!

## Getting Started

# Please start with the Sanity Repo [(CrypticzXI-Portfolio-Backend)](https://github.com/CrypticzXI/crypticzxi-portfolio-backend)

once you have done that you can do this,

First, install the packages:
```bash
npm i
```

Second, create a .env and edit the files.:

```.env
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=ADD_YOUR_SANITY_PROJECT_ID_HERE
NODE_ENV=production
```

# Remember! You must allow your domain or your localhost:8080 on Sanity's Dashboard!

https://www.sanity.io/manage/ => API => CORS origins => http://localhost:8080 => CREDENTIALS => NOT ALLOWED


Third, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

