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
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a class="navbar-brand" href="#Home" >Sean Yim</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#Home">About me <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Links">Links</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;