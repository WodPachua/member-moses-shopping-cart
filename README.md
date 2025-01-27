# Shopping Chart  

This project is mock Shopping Cart as used in modern e-commerce sites using React and TypeScript.

## Table of Contents  

- [Installation](#setup--install)  
- [Running](#Run)  
- [Features](#features)  
- [Contributing](#contributing)  
- [License](#license)  
- [Acknowledgements](#acknowledgements)  

## Setup & Install  

To get started with the project, clone the repository and install the dependencies:  

```bash
git clone https://github.com/agile-learning-institute/member-moses-shopping-cart.git   
cd member-moses-shopping-cart  
npm install  
```

## Run  

To run and test the app:  

```bash
npm run dev   
```

Open your browser and navigate to `http://localhost:5173` to see the application in action.  

Checkout a [live preview here](https://shopping-cart-wodpachua.netlify.app/)  

## Features

- **Product Listing**: Browse through a list of products with detailed information.
- **Product Search**: Search for products by name or category.
- **Product Details**: View detailed information about each product, including images, description, price, and reviews.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.
- **Checkout Process**: Complete the checkout process with multiple steps including delivery options and payment methods.
- **Responsive Design**: The application is fully responsive and works on all device sizes.
- **Cypress Testing**: End-to-end testing with Cypress to ensure the application works as expected.

## Testing

### Prerequisites

Ensure you have [Cypress](https://docs.cypress.io/app/get-started/install-cypress) installed.

### Running Cypress Tests

To open the Cypress Test Runner UI Interface:

```bash
npm run cypress:open
```

To run Cypress tests in headless mode:

```bash
npm run cypress:run
```

## Contributing  

Contributions are welcome! Please fork the repository and create a pull request with your changes. Would be nice to add appropriate tests 😎 

## License  

This project is licensed under the MIT License. See the [LICENSE](https://mit-license.org/) file for more details.  

## Acknowledgements  

- [React documentation](https://react.dev/learn)  
- [TypeScript documentation](https://www.typescriptlang.org/docs/)    
- [Cypress Testing Library](https://docs.cypress.io/app/get-started/why-cypress)
- Open-source libraries, tools and resources  

## Known Issues

- **Initial Page Load Time**: The page takes a long time to load initially. This affects the user experience and the performance of the application.
- **Test Execution Time**: The Cypress tests take a long time to run due to the slow page load times.

## Help Needed

- **Improving Page Load Time**: Assistance is needed to optimize the application's initial page load time. Any suggestions or contributions to improve the performance are welcome.
- **Speeding Up Tests**: Help on how to speed up the execution of Cypress e2e & component tests.
- **Test Coverage**: I tried setting up to see test coverage, but wasn't successful, the configs kept taking me in circles. Would appreciate help on this too.