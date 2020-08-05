import React, { InputHTMLAttributes} from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    label: string,
    name: string
};

const Input: React.FC<InputProps> = ({label, name, ...otherProps}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...otherProps}/>
        </div>
    );
}

export default Input;