import React from 'react';
import './MensagemDoUsuario.css';

class MensagemDoUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <input placeholder="Usuário" />
                <input placeholder="Mensagem" />
                <button> Enviar </button>
            </div>
        )
    }
}

export default MensagemDoUsuario