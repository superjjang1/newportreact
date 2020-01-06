import React, {Component} from 'react';
import './Links.css';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="links" id="Links">
                    <div className="row">
                        <div className="col">
                            <h2 className="heading shadow-sm p-3 mb-5 bg-white rounded">Find me here</h2>
                        </div>
                        <div className="w-100"></div>
                            <div className="col-sm">
                            <a href="https://www.linkedin.com/in/sean-yim-80b509118/" target="_blank">
                                <i className="fab fa-linkedin fa-1x"> Linkedin</i></a>
                            </div>
                            <div className="col-sm">
                            <a href="https://www.github.com/superjjang1" target="_blank">
                                <i class="fab fa-github fa-2x"> Github</i></a>
                            </div>
                            <div className="col-sm">
                                <a href="https://drive.google.com/file/d/1AQ1vP46IL_B9A4BbhDlkuPD1k3m8cBEg/view?usp=sharing" target="_blank">
                                    <i className="fas fa-paperclip fa-1x"> Resume</i>
                                </a>
                            </div>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Links;