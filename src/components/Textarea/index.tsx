import React, { InputHTMLAttributes} from 'react';
import './styles.css';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement>  {
    label: string,
    name: string
};

const Textarea: React.FC<TextareaProps> = ({label, name, ...otherProps}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea type="text" id={name} {...otherProps}/>
        </div>
    );
}

export default Textarea;