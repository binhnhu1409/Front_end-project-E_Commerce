# E-Commerce :convenience_store: [Live website](https://nhu-store-front-end-project.vercel.app/)

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4.9-green)
![SASS](https://img.shields.io/badge/SASS-v.4.9-hotpink)

This project focuses on demonstrating my front-end tech stacks by creating an e-commerce website using the API endpoint from [https://fakeapi.platzi.com/]. In the following section, I will list the available features. 

## Feature included:
- Clicking on logo redirects to home page
- Validate sign up and login input and display error message
- New users will be able to create their own accounts.
- After logging in, redirect the user to their profile page.
- User logout
- Search and sorting by name and price of products.
- Click on any product will take your to product detail page.
- In Products page displaying the list of clickable products on clicked take you to product detail page.
- Adding product to cart

### Other tasks have been done
- Unit testing for reducers
- Design and styling without any library, using vanilla SASS.

## Project structure
```
│   App.tsx
│   index.tsx
│   setupTests.ts
│
├───assets
│   └───img
│
├───common
│       axiosIntance.ts
│
├───compiled
│       style.css
│       style.css.map
│
├───components
│       AddButton.tsx
│       Footer.tsx
│       Header.tsx
│       Loading.tsx
│       ShopButton.tsx
│
├───hooks
│       reduxHook.ts
│
├───pages
│       Account.tsx
│       Cart.tsx
│       Categories.tsx
│       Home.tsx
│       Login.tsx
│       NotFound.tsx
│       Product.tsx
│       Products.tsx
│       Profile.tsx
│       Register.tsx
│       Root.tsx
│
├───redux
│   │   store.ts
│   │
│   └───reducers
│           authenticationReducer.ts
│           cartReducer.ts
│           categoryReducer.ts
│           productReducer.ts
│           userReducer.ts
│
├───SASS
│   │   style.scss
│   │
│   ├───abstract
│   │       _mixins.scss
│   │       _variables.scss
│   │
│   ├───base
│   │       _animation.scss
│   │       _typography.scss
│   │
│   ├───components
│   │       button.scss
│   │       footer.scss
│   │       header.scss
│   │       loading.scss
│   │
│   └───pages
│           cart.scss
│           categories.scss
│           home.scss
│           loginAndRegister.scss
│           notfound.scss
│           product.scss
│           products.scss
│           profile.scss
│
├───test
│   ├───reducers
│   │       authenticationReducer.test.ts
│   │       cartReducer.test.ts
│   │       categoryReducer.test.ts
│   │       productReducer.test.ts
│   │       userReducer.test.ts
│   │
│   └───shared
│           authenticationServer.ts
│           categoryServer.ts
│           productServer.ts
│           userServer.ts
│
└───types
        cart.ts
        category.ts
        product.ts
        store.ts
        user.ts
```

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
