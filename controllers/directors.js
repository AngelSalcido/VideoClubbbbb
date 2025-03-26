const express = require('express');


function create(req, res, next) {
    res.send(`POST => /directors`)
}

function list(req, res, next) {
    res.send(`GET => /directors`)
}

function replace(req, res, next) {
    res.send(`PUT => /directors/${req.params.id}`)
}

function update(req, res, next) {
    res.send(`PATCH => /directors/${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`DELETE => /directors/${req.params.id}`)
}

function index(req, res, next) {
  res.send(`GET => /directors/${req.params.id}`)
}


module.exports = {index, create, replace, update, destroy, list};
