const express = require('express');


function create(req, res, next) {
    res.send(`POST => /actors`)
}

function list(req, res, next) {
    res.send(`GET => /actors`)
}

function replace(req, res, next) {
    res.send(`PUT => /actors/${req.params.id}`)
}

function update(req, res, next) {
    res.send(`PATCH => /actors/${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`DELETE => /actors/${req.params.id}`)
}

function index(req, res, next) {
  res.send(`GET => /actors/${req.params.id}`)
}


module.exports = {index, create, replace, update, destroy, list};
