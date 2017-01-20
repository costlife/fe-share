fis.match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://123.57.37.206:8999/receiver',
        to: '/root/workspace/bigpipe-demo'
    })
});

