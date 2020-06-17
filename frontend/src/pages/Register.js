import React, { useState } from 'react';
import api from '../services/api';

import './Register.css';

import logo from '../assets/logo.svg';

export default function Register({ history }) {

    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            user: username,
        });

        alert(`Seja bem vindo ${username}`);
        history.push('/');
    }

    return (
        <div className='register-container'>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev" />
                <input
                    placeholder="Digite seu usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}