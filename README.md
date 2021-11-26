# My Wallet

An easy to use financial manager. Track your revenues and expenses to learn how you spend your money and know all the time how much you have.

<img width="350px" heigth="350px" src="/src/assets/images/MyWallet.gif" />
<!-- Try it out now at https://link-to-my-project-deployed.herokuapp.com -->

## About

This is an web application with which lots of people can manage their own expenses and revenues. Below are the implemented features:

- Sign-up
- Login
- Logout
- List all financial events for a user
- Add expense
- Add revenue

By using this app any user can learn how they've been using their money and always keep track of your balance.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img src="https://img.shields.io/badge/-Javascript-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-React-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Styled_components-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-React_router-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Axios-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Cypress-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/-Trello-purple?style=for-the-badge" />
</p>

## How to run

1. Create a root project folder named MyWallet
```sh
mkdir MyWallet
```
2. Clone the front-end repo
```sh
git clone https://github.com/PMafra/MyWallet_front.git
```
3. Install NPM packages for the front-end repo
```sh
npm install
```
4. Clone the back-end repo as a sibling to the front-end (within the /MyWallet folder)
```sh
git clone https://github.com/PMafra/projeto_14_my_wallet_back.git
```
5. Install NPM packages for the back-end repo
```sh
npm install
```
6. Follow instructions to fully run back-end at https://github.com/PMafra/projeto_14_my_wallet_back

7. Run the front-end with
```bash
npm start
```
8. You can optionally build the project running (See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information)
```bash
npm run build
```
9. Finally access http://localhost:3000 on your favorite browser (unless it is Internet Explorer. In this case, review your life decisions :eyes:)

## Running tests with cypress

1. Run the front-end with
```bash
npm start
```
2. Run the back-end server with
```bash
npx nodemon /src/server.js
```
3. Open Cypress test runner window
```sh
npx cypress open
```
   or: 
```sh
node_modules/.bin/cypress open
```
4. Finally click on "Run X integration spec" in the upper right corner to run integration tests

More information: [Follow these instructions to run the tests in CI.](https://on.cypress.io/continuous-integration)

**If you get stuck, here is more help: [Cypress Support](https://on.cypress.io/support)**




