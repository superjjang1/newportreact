import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="projects" id="Projects">
                    <div className="row">
                        <div className="col">
                            <h2 className="heading shadow-sm p-3 mb-5 bg-white rounded">Projects</h2>
                        </div>
                        <div className="w-100"></div>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i.imgur.com/nvLNmz7.png" className="d-block w-100 h-100" alt="sweets"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.imgur.com/GFGtoR3.png" className="d-block w-100 h-100" alt="gametime"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    
                    <hr/>
                    <div className="row">
                        <div className="col-sm">
                            <a href="https://github.com/superjjang1/desserts-app" target="_blank">
                            <i className="fab fa-github fa-1x">SweetHub Github</i></a>  
                            <a href="https://sweethub.seanyim.com/" target="_blank">
                                <i className="fas fa-external-link-square-alt 1x"> SweetHub Link</i>
                            </a>
                        </div>
                        
                        <div className="col-sm">
                            <a href="https://github.com/superjjang1/gaming-frontend" target="_blank">
                            <i class="fab fa-github fa-1x">Gametime Github</i></a>  
                            <a href="https://gametime.seanyim.com" target="_blank">
                                <i className="fas fa-external-link-square-alt 1x"> Gametime Link</i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Projects;