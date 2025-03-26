const express = require('express');


function create(req, res, next) {
    res.send(`POST => /users`)
}

function list(req, res, next) {
    res.send(`GET => /users`)
}

function replace(req, res, next) {
    res.send(`PUT => /users/${req.params.id}`)
}

function update(req, res, next) {
    res.send(`PATCH => /users/${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`DELETE => /users/${req.params.id}`)
}

function index(req, res, next) {
  res.send(`GET => /users/${req.params.id}`)
}


module.exports = {index, create, replace, update, destroy, list};
