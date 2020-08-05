import React, { InputHTMLAttributes} from 'react';
import './styles.css';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement>  {
    label: string,
    name: string,
    options: Array<{
        value: string,
        label: string,
    }>;
};

const Select: React.FC<SelectProps> = ({label, name, options, ...otherProps}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...otherProps} defaultValue="">
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;