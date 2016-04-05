var express = require('express');
var router = express.Router();
var q = require('q');

var navigation = {
    id: 'pagelet_navigation',
    content: '<ul><li><a href="/basic/index">index</a></li><li><a href="/basic/userlist">userlist</a></li></ul>'
};

var userlist = {
    id: 'pagelet_main',
    content: '<table><thead><tr><th>name</th><th>e-mail</th></tr></thead><tbody><tr><td>liuhao</td><td>liuhao.02@bytedance.com</td></tr><tr><td>xxxx</td><td>xxxx@byteance.com</td></tr></tbody></table>'
};

var index = {
    id: 'pagelet_main',
    content: '<h1>Welcome to Big Pipe World</h1>'
};

router.get('/index', function(req, res, next) {
    getData1s().then(getData2s).then(function () {
        res.render('basic', {
            navigation: navigation,
            userlist: index
        });
    });
});

router.get('/userlist', function(req, res, next) {
    getData1s().then(getData2s).then(function () {
        res.render('basic', {
            navigation: navigation,
            userlist: userlist
        });
    });
});


function getData1s() {
    var dfd = q.defer();
    setTimeout(function () {
        dfd.resolve({
            success: 1
        });
    }, 1000);
    return dfd.promise;
}

function getData2s() {
    var dfd = q.defer();
    setTimeout(function () {
        dfd.resolve({
            success: 1
        });
    }, 2000);
    return dfd.promise;
}

module.exports = router;
