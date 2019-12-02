import React from 'react';
import styled from 'styled-components'
import PropsTypes from 'prop-types';


const MensagemEnviada = styled.div`
    width: auto;
    height: auto;
    display: flex;
    padding: 15px;
    justify-content: flex-start;
    align-items: flex-end;
`


const SpanMensagem = styled.span`
    padding-left: 0.5em;
`


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
            <MensagemEnviada>
                <SpanMensagem><strong>{ this.state.nomeUsuario + ": "}</strong></SpanMensagem>
                <SpanMensagem>{ this.state.mensagem }</SpanMensagem>
            </MensagemEnviada>
        )
    }
}


MensagemEnviada.propTypes = {
  nome: PropsTypes.string,
  msg: PropsTypes.string,
}


export default MensagensEnviadas