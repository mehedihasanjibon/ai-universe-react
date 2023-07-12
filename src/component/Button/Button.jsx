import React, { Children } from 'react';

const Button = ({children}) => {
    // console.log(props);
    // const {children} = props;
    return (
        <div className='text-center'>
            <button className="btn btn-accent text-error my-6">{children}</button>
        </div>
    );
};

export default Button;