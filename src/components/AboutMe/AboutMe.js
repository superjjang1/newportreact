import React, {Component} from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="home" id="Home">
                    <div className="row">
                        <h2 className="heading">
                            About Me
                        </h2>
                        <div>
                            My name is Sean Yim, a former English Teacher, and former assistant manager at a retail <p/>
                            paint store. Now, I'm pursuing a career as a full-time software developer, hoping to create new <p/>
                            and innovative applications. From a career in sales and a background in literature, to pursuing <p/>
                            my true passion, software development.<p/>
                            I've always enjoyed learning new things, and software development is a landscape that's constantly changing. 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutMe;