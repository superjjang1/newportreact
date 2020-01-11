import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#Home" >Sean Yim</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link text-secondary btn-light" href="#Home">About me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary btn-light" href="#Projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary btn-light" href="#Skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary btn-light" href="#Links">Links</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;