# node-api-lambda-reverse-string
AWS API gateway compatible AWS Lambda module for reversing a string.

This module exists mainly for testing purposes.

Expects to be called through the exported handler -function:

    var result = require("api-lambda-reverse-string").handler( event, context )

Expects *_event_* to contain attribute "string":

    {
        "string" : "my fancy string"
    }

Expects *_context_* to have a function called "done":

    {
        "done" : function( error, result ) {
            ...
        }
    }

On success calls "done" with a null error and a JSON struct:

    {
        "string" : "gnirts ycnaf ym"
    }

On error calls "done" with an error:

    new Error( "Event attribute 'string' did not exist or was not of type string" )
