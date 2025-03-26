const express = require('express');

function login(req, res, next) {
    res.send(`POST => /login/`)
}

function home(req, res, next) {
    res.send(`GET => /`)
}

module.exports = {login, home};
