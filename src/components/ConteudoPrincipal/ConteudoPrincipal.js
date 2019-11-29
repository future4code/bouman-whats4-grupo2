import React from 'react';
import './ConteudoPrincipal.css';
import MensagensEnviadas from '../MensagensEnviadas/MensagensEnviadas';
import MensagemDoUsuario from '../MensagemDoUsuario/MensagemDoUsuario'

class ConteudoPrincipal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <MensagensEnviadas />
                <MensagemDoUsuario />
            </div>
        )
    }
}

export default ConteudoPrincipal