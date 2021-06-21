import React, {Component} from 'react';
import './style.scss';

class Header extends Component {
    render(){
        return (
            <div className="headerContainer">
                <img src="imgs/logo.png" /> 
                <div className="headerPesquisa">
                    <input type="text" placeholder="Procurar" />
                    <a className="headerBtn" href="#">
                        <img src="imgs/loupe.png" />
                    </a>
                </div>
                <div className="headerAvatar">
                    <img src="imgs/Avatar.jpg"/>
                </div>
                <div className="headerUsuario">
                    <h2>
                        Seu nome
                    </h2>
                    <h3>
                        Seu cargo
                    </h3>
                </div>
            </div>
        );
    }
}

export default Header;