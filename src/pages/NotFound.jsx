import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div  className='grid'>
            <h1>Ups, your link seems wrong..</h1>
            <h2> Error 404... </h2>
            <input className='primary-button' type="button" value="Go back!" />
            </div>
        </div>
    );
}

export default NotFound;