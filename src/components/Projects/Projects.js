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
                        <div className="col-m"></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Projects;