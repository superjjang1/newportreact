import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="home" id="Home">
                    <div className="row">
                        <div className="col">
                            <h2 className="heading shadow-sm p-3 mb-5 bg-white rounded">
                                About Me
                            </h2>
                        </div>
                        <div className="w-100"></div>
                        
                            <div className="col text-left">
                                My name is Sean Yim, a former English Teacher, and former assistant manager at a retail 
                                paint store. Now, I'm pursuing a career as a full-time software developer, hoping to create new 
                                and innovative applications. From a career in sales and a background in literature, to pursuing 
                                my true passion, software development.
                                I've always enjoyed learning new things, and software development is a landscape that's constantly changing. 
                            </div>
                        <div className="w-100"></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutMe;