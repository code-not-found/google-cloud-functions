'use strict';

exports.helloWorld = function helloWorld(request, response) {
    const name = request.query.name

    const greeting = `Hello ${name || 'World'}!`;
    console.log(greeting);

    response.status(200).send(greeting);
};