var express = require('express');
var router = express.Router();
var q = require('q');

var navigation = {
    id: 'pagelet_navigation',
    content: '<ul><li><a href="/index">index</a></li><li><a href="/userlist">userlist</a></li></ul>'
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
    if (req.headers['x-pjax']) {
        res.send(index.content);
    } else {
        bigPipe(res, index);
    }
});

router.get('/userlist', function(req, res, next) {
    if (req.headers['x-pjax']) {
        res.send(userlist.content);
    } else {
        bigPipe(res, userlist);
    }
});

function bigPipe(res, pagelet_main) {
    renderSection(res, 'header', {});
    res.pipeCount = 2;
    getData1s().then(function () {
        renderSection(res, 'pagelet', navigation);
    });
    getData2s().then(function () {
        renderSection(res, 'pagelet', pagelet_main);
    });
}

function renderSection(res, view, option) {
    res.render(view, option, function (err, html) {
        res.write(html);
        if (--res.pipeCount === 0) {
            res.end();
        }
    })
}

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
