import React, {Component} from 'react';
import './style.scss';

class Form extends Component{
    render(){
        return(
            <div className="formContainer">
                <div className="btnGroup">
                    <div className="btnUsuario">
                        <button type="button">
                            <strong>USUÁRIOS</strong>
                        </button>
                    </div>
                    <div className="btnAdm">
                        <button type="button">
                            <strong>ADMINISTRADORES</strong>
                        </button>
                    </div>
                    <div className="btnCad">
                        <button type="button">
                            <strong>CADASTRAR</strong>
                        </button>
                    </div>
                </div>
                <div className="tableGroup">
                    <table className="table">
                        <tr>
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th>STATUS</th>
                            <th>AÇÃO</th>
                        </tr>
                        <tr>
                            <td>LOREM IPSUM</td>
                            <td>LOREM@IPSUM.COM.BR</td>
                            <td>ATIVO</td>
                            <td>remover ou alterar</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Form;