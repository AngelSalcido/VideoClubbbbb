const express = require('express');


function create(req, res, next) {
    res.send(`POST => /copies`)
}

function list(req, res, next) {
    res.send(`GET => /copies`)
}

function replace(req, res, next) {
    res.send(`PUT => /copies/${req.params.id}`)
}

function update(req, res, next) {
    res.send(`PATCH => /copies/${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`DELETE => /copies/${req.params.id}`)
}

function index(req, res, next) {
  res.send(`GET => /copies/${req.params.id}`)
}


module.exports = {index, create, replace, update, destroy, list};
