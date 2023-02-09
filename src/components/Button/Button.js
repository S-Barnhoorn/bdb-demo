import React from 'react';
import styles from './Button.module.css'

const Button = ({type, className, disabled}) => {
    return (
        <buttongi
            type={type}
            className={styles[className]}
            disabled={disabled}
        >
            Sent
        </buttongi>
    );
};

export default Button;