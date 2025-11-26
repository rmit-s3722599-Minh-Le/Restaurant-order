# React + TypeScript + Vite

This is my submission for the RedCat's coding challenge built using React, Typescript and Vite.

The user is able to select their desired amount of food items, and place an order. 

They can also reset their input while ordering. It also resets input after ordering.

A record of their latest receipt is shown after the order.

## Example of App

<img width="400" alt="image" src="https://github.com/user-attachments/assets/9282abb0-296a-40b1-b404-5550d119841a" />


## Features
- Menu items (Cheeseburger, Chicken Burger, Soft drinks) displayed with their resepective name, price and quantity
- Number inputs available for each item when placing order
- Place Order and Reset buttons
- Validations including:
  - disabling order and reset button with 0 total quantities of items
  - inputs only allowing positive whole numbers
- Dynamic Quantity, GST and Total shown when modifying the order before submitting order
- Unit tests with App/Components    

## Tech Stack
- React
- Typescript
- Vite
- Material UI (MUI)
- React Test Library (RTL)
- Vitest

## Prerequisites
- Node and Npm
- Yarn

## Running Project
### Installing packages
From the root of project, run:
```
yarn install
```
### Staring up local host
From the root of project, run: 
```
yarn run dev
```
Port is set to run at [localhost:8080](http://localhost:8080/)

To update localhost port, update at vite.config.ts:
```
  server: {
    port: 8080,
  }
```

### Running unit test
From the root of project, run: 
```
yarn test
```
it will automatically run all unit tests.

## Project Structure
```
...
├── README.md
├── package.json
├── setup.ts              # Testing setup file
└── src/
    ├── App.tsx           # Main app entry
    ├── constants.ts      # Shared constants used across components and app
    ├── components/       # UI components + their unit tests
    └── utils/
        └── priceCalculator.ts  # price calculation utils used for components and app
```

