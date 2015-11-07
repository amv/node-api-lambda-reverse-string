exports.handler = function( event, context ) {
    if ( ! ( event instanceof Object ) || ( typeof event.string != 'string' ) ) {
        context.done( new Error( "Event attribute 'string' did not exist or was not of type string" ) );
    }
    else {
        context.done( null, event.string.split("").reverse().join("") );
    }
};
