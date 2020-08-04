import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://thispersondoesnotexist.com/image" alt="Fulano"/>
                <div>
                    <strong>Walter Cruz</strong>
                    <span>Angular JS</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero tempore tempora magni magnam ab sapiente mollitia animi temporibus commodi fuga ut esse, veritatis impedit alias earum excepturi sequi illo beatae.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entre em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;