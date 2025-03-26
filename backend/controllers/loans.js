const express = require('express');


function create(req, res, next) {
    res.send(`POST => /loans`)
}

function list(req, res, next) {
    res.send(`GET => /loans`)
}

function update(req, res, next) {
    res.send(`PATCH => /loans/${req.params.id}`)
}


function index(req, res, next) {
  res.send(`GET => /loans/${req.params.id}`)
}


module.exports = {index, create, update, list};
