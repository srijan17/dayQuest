import express, { Express, NextFunction, Request, Response, } from 'express';
import { json } from 'body-parser'
// import fetchRoutes from './routes'
// import isAuthenticated from './common/Auth/isAuthenticated';
import router from './routes'
// const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');



// const { auth } = require('express-openid-connect');

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3000',
//   clientID: '1gQ1olvBRT0CeUxa98tp4JrciBuFZoYy',
//   issuerBaseURL: 'https://dev-dayquest.eu.auth0.com'
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });


// const checkJwt = auth({
//   audience: '{yourApiIdentifier}',
//   issuerBaseURL: `https://dev-dayquest.eu.auth0.com/`,
// });


// fetchRoutes().then(routes => {

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(json());

// import {auth,requiresAuth } from "express-openid-connect"

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3000',
//   clientID: '1gQ1olvBRT0CeUxa98tp4JrciBuFZoYy',
//   clientSecret: 'ONmRTzl2z9on0Quzsf41wKVISYJGTtKxlrL7D9y09hAB-nhlh35imtZ0GF0xvIIP',
//   issuerBaseURL: 'https://dev-dayquest.eu.auth0.com'
// };



// app.use(auth(config));

app.get('/', (req, res) => {
  // console.log(req.oidc)
  // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  res.send("ok boss")
});


// app.get('/home', isAuthenticated, (req: Request, res: Response) => {
//   console.log(req.oidc.user)
//   res.send("home")

// });



app.use('/', router);
console.log(app.routes)
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// })