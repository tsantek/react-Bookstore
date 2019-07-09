import React from 'react';

import Books from './Books';


const Main =({books}) => {
    return ( 
        <div>
            <Books books={books} />
        </div>
    );
}
 
export default Main;