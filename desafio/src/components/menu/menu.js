import React, {Component} from 'react';
import Form from '../formulario/formulario';
import './style.scss';

class Menu extends Component{
    render(){
        return(
            <div className="menuContainer">
               
                <div className="menuSide">
                    <strong>PERFIL</strong>
                    <div className="btn">
                        <button type="button">
                            <strong>USUÁRIOS</strong>
                        </button>
                    </div>
                </div>
                
                <div className="menuPrincipal">
                    <Form />
                </div>  
            </div>
        )
    }
}

export default Menu;