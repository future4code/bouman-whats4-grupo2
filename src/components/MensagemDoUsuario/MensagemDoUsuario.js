// import React from 'react';
// import './MensagemDoUsuario.css';

// class MensagemDoUsuario extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             usuario: "",
//             mensagem: "",
//             feedMensagens: [],
//         }
//     }


//     controlaInputUsuario = e => {
//         this.setState({
//             usuario: e.target.value,
//         })
//     }


//     controlaInputMensagem = e => {
//         this.setState({
//             mensagem: e.target.value,
//         })
//     }

    
//     enviarMensagem = () => {
//         const msg = {
//             nome: this.state.usuario,
//             msg: this.state.mensagem,
//         }
//         const copiaFeedMensagens = [...this.state.feedMensagens, msg]
//         this.setState({feedMensagens: copiaFeedMensagens})
//     }

//     render () {
//         return (
//             <div className="msg-usuario">
//                 <input placeholder="Usuário" value={this.state.usuario} onChange={this.controlaInputUsuario} />
//                 <input placeholder="Mensagem" value={this.state.mensagem} onChange={this.controlaInputMensagem} />
//                 <button onClick={this.enviarMensagem}> Enviar </button>
//             </div>
//         )
//     }
// }

// export default MensagemDoUsuario