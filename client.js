const express = require('express');
const soap = require('soap');
const url = 'http://localhost:3030/bmicalculator?wsdl';
const args = { weight: 65.7 };
soap.createClient(url,"disableCache", function(err, client) {
  if (err) console.error(err);
  else {
    client.calculateBMI(args, function(err, response) {
        console.log('client :', client);
      if (err) console.error(err);
      else {
        console.log(response);
        // res.send(response);
      }
    });
  }
});