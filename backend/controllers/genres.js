const express = require('express');


function create(req, res, next) {
    res.send(`POST => /genres`)
}

function list(req, res, next) {
    res.send(`GET => /genres`)
}

function replace(req, res, next) {
    res.send(`PUT => /genres/${req.params.id}`)
}

function update(req, res, next) {
    res.send(`PATCH => /genres/${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`DELETE => /genres/${req.params.id}`)
}

function index(req, res, next) {
  res.send(`GET => /genres/${req.params.id}`)
}


module.exports = {index, create, replace, update, destroy, list};
