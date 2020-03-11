'use strict';

const express = require('express');

const PORT = 3001;
const HOST = '0.0.0.0';

const mysql = require('mysql2');
 
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rtlry',
  database: 'lpdip01'
});
 
const app = express();
app.get('/', (req, res) => {
  res.json({HelloWorld: 'HelloWorld'});
});
app.get('/users', (req, res) => {
  connection.execute(
    'SELECT * FROM user',
    function(err, results, fields) {
      res.json(results);
    });
});
app.get('/users/:id', (req, res) => {
  connection.execute(
    'SELECT * FROM `user` WHERE `id` = ?',
    [req.params.id],
    function(err, results, fields) {
      res.json(results);
    });
});
app.listen(PORT, HOST);
