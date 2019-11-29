import React from 'react';
import MensagensEnviadas from './components/MensagensEnviadas/MensagensEnviadas';
import styled from 'styled-components';


//       Styled-Component    //
const MainContainer = styled.div`
  text-align: center;
  width: 70vh;
  margin: 0 auto;
  height: 100%;
  border: 1px solid black;
`

const ContainerMensagem = styled.div `
  width: auto;
  height: 93vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

const MsgUsuario = styled.div`
  position: relative;
  bottom: 0;
  margin-top: 1em;
`

const InputNome = styled.input `
  width: 15%;
  height: 1.5em;
  text-indent: 0.5em;
`

const InputMensagem = styled.input `
  width: 70%;
  height: 1.5em;
  text-indent: 0.5em;
`

const BotaoEnviar = styled.button`
  width: auto;
  height: 1.95em;
  color: white;
  border: none;
  background-color: black;
  &:hover {
    background-color: #8D8D8D;
  }
  &:active {
    background-color: black;
  }
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      mensagem: "",
      feedMensagens: [],
    }
  }


  controlaInputUsuario = e => {
    this.setState({
      usuario: e.target.value,
    })
  }


  controlaInputMensagem = e => {
    this.setState({
      mensagem: e.target.value,
    })
  }


  enviarMensagem = () => {
    const msg = {
      nome: this.state.usuario,
      msg: this.state.mensagem,
    }
    const copiaFeedMensagens = [...this.state.feedMensagens, msg]
    this.setState({ feedMensagens: copiaFeedMensagens })
  }


  render() {
    return (
      <MainContainer>
        <ContainerMensagem>
          {this.state.feedMensagens.map(msg => {
            return <MensagensEnviadas key={this.state.feedMensagens.indexOf(msg)} nome={msg.nome} mensagem={msg.msg}></MensagensEnviadas>
          })}
        </ContainerMensagem>
        <MsgUsuario>
          <InputNome placeholder="Usuário" value={this.state.usuario} onChange={this.controlaInputUsuario} />
          <InputMensagem placeholder="Mensagem" value={this.state.mensagem} onChange={this.controlaInputMensagem} />
          <BotaoEnviar onClick={this.enviarMensagem}> Enviar </BotaoEnviar>
        </MsgUsuario>
      </MainContainer>
    )
  }
}


export default App;