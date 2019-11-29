import React from 'react';
import './MensagensEnviadas.css';

class MensagensEnviadas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeUsuario: props.nome,
            mensagem: props.mensagem,
        }
    }

    render () {
        return (
            <div className="msg-enviada">
                <span><strong>{ this.state.nomeUsuario + ": "}</strong></span>
                <span>{ this.state.mensagem }</span>
            </div>
        )
    }
}

export default MensagensEnviadas