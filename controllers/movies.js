const express = require('express');


function create(req, res, next) {
    res.send(`POST => /movies`)
}

function list(req, res, next) {
    res.send(`GET => /movies`)
}

function replace(req, res, next) {
    res.send(`PUT => /movies/${req.params.id}`)
}

function update(req, res, next) {
    res.send(`PATCH => /movies/${req.params.id}`)
}

function destroy(req, res, next) {
    res.send(`DELETE => /movies/${req.params.id}`)
}

function index(req, res, next) {
  res.send(`GET => /movies/${req.params.id}`)
}

function addActor(req, res, next) {
    res.send(`PATCH => /movies/actors/${req.params.id}`)
  }


module.exports = {index, create, replace, update, destroy, list, addActor};
