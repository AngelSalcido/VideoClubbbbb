const express = require('express');


function create(req, res, next) {
    res.send(`POST => /members`)
}

function list(req, res, next) {
    res.send(`GET => /members`)
}

function replace(req, res, next) {
    res.send(`PUT => /members/${req.params.id}`)
}

function update(req, res, next) {
    res.send(`PATCH => /members/${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`DELETE => /members/${req.params.id}`)
}

function index(req, res, next) {
  res.send(`GET => /members/${req.params.id}`)
}


module.exports = {index, create, replace, update, destroy, list};
