const express = require('express');

const app = express();

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/api/path', (req, res, next) => {
    const posts = [{
            id: 'ss1',
            title: 'First Server side post',
            content: ' Hii I am 1st server side post '
        },
        {
            id: 'ss2',
            title: 'Second Server side post',
            content: ' Hii I am 2nd server side post '
        }
    ];

    res.status(200).json({
        message: 'Post fetch successfully.',
        posts: posts
    });

});

module.exports = app;