'use strict';

exports.helloWorld = function helloWorld(request, response) {
    const firstName = request.query.firstName
    console.log('firstName=' + firstName);
    const lastName = request.query.lastName
    console.log('lastName=' + lastName);

    const greeting = { greeting: 'Hello ' + firstName + ' ' + lastName + '!' };
    console.log('greeting=' + JSON.stringify(greeting));

    response.status(200).send(greeting);
};