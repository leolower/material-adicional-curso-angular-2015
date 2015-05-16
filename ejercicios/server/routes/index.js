'use strict';

var express = require('express');
var _ = require('lodash');
var router = express.Router();

var users = [{id: 1, username: 'USERNAME90', name: 'name0 lastName0', balance: 111.11, role: 'admin', createdAt: new Date('2015-04-06 12:05:00'), disabled: true, url: 'http://github.com/username0', image: 'http://placehold.it/50x50', }, {id: 2, username: 'USERNAME1', name: 'name1 lastName1', balance: 222.22, role: 'user', createdAt: new Date('2015-04-06 12:05:00'), disabled: true, url: 'http://github.com/username1', image: 'http://placehold.it/50x50', }, {id: 3, username: 'USERNAME2', name: 'name2 lastName2', balance: 333.33, role: 'editor', createdAt: new Date('2015-04-06 12:05:00'), disabled: true, url: 'http://github.com/username2', image: 'http://placehold.it/50x50', }, {id: 4, username: 'USERNAME3', name: 'name3 lastName3', balance: 444.44, role: 'user', createdAt: new Date('2015-04-06 12:05:00'), disabled: false, url: 'http://github.com/username3', image: 'http://placehold.it/50x50', }, {id: 5, username: 'USERNAME4', name: 'name4 lastName4', balance: 555.55, role: 'admin', createdAt: new Date('2015-04-06 12:05:00'), disabled: false, url: 'http://github.com/username4', image: 'http://placehold.it/50x50', }, {id: 6, username: 'USERNAME5', name: 'name5 lastName5', balance: 666.66, role: 'user', createdAt: new Date('2015-04-06 12:05:00'), disabled: false, url: 'http://github.com/username5', image: 'http://placehold.it/50x50', }, {id: 7, username: 'USERNAME6', name: 'name6 lastName6', balance: 777.77, role: 'editor', createdAt: new Date('2015-04-06 12:05:00'), disabled: false, url: 'http://github.com/username6', image: 'http://placehold.it/50x50', }, {id: 8, username: 'USERNAME7', name: 'name7 lastName7', balance: 888.88, role: 'editor', createdAt: new Date('2015-04-06 12:05:00'), disabled: false, url: 'http://github.com/username7', image: 'http://placehold.it/50x50', }, {id: 9, username: 'USERNAME8', name: 'name8 lastName8', balance: 999.99, role: 'user', createdAt: new Date('2015-04-06 12:05:00'), disabled: false, url: 'http://github.com/username8', image: 'http://placehold.it/50x50', }, {id: 10, username: 'USERNAME9', name: 'name9 lastName9', balance: 101010.1010, role: 'user', createdAt: new Date('2015-04-06 12:05:00'), disabled: false, url: 'http://github.com/username9', image: 'http://placehold.it/50x50', }];

function getUsers(req, res) {
    res.send(users);
}

function getUser(req, res) {
    var id = req.params.id;
    var filtered = users.filter(function(item) {
        return item.id == id;
    });

    if (filtered.length) {
        res.send(filtered[0]);
    }

    res.send({});
}

function updateUser(req, res) {
    var id = req.params.id;
    var filtered = users.filter(function(item) {
        return item.id == id;
    });

    if (filtered.length) {
        _.extend(filtered[0], req.body);
        res.send(filtered[0]);
    }

    res.send({});
}

function saveUser(req, res) {
    var newUser = req.body;
    newUser.id = Math.floor(Math.random() * 123123);

    users.push(newUser);

    res.send(newUser);
}

router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.get('/users', getUsers);
router.post('/users', saveUser);

module.exports = router;
