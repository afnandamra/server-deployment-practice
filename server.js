'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

app.get('/', homeHandler);
app.get('/bad', badHandler);
app.get('/data', testDataHandler);
app.use('*', notFoundHandler);
app.use(errorHandler);

function homeHandler(req, res) {
  res.send('Hello!');
}

function badHandler(req, res) {
  throw new Error('Something went wrong');
}

function testDataHandler(req, res) {
  let luke = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'http://swapi.dev/api/planets/1/',
    url: 'http://swapi.dev/api/people/1/',
  };
  res.json(luke);
}

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`);
  });
}

module.exports = {
  app: app,
  start: start,
};
