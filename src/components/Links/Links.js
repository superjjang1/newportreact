import React, {Component} from 'react';
import './Links.css';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="links" id="Links">
                    <div className="row">
                        <div className="col">
                            <h2 className="heading shadow-sm p-3 mb-5 bg-transparent rounded">Find me here</h2>
                        </div>
                        <div className="w-100"></div>
                            <div className="col-sm">
                            <a href="https://www.linkedin.com/in/sean-yim-80b509118/" target="_blank">
                                <i className="fab fa-linkedin fa-1x"> Linkedin</i></a>
                            </div>
                            <div className="col-sm">
                            <a href="https://www.github.com/superjjang1" target="_blank">
                                <i class="fab fa-github fa-1x"> Github</i></a>
                            </div>
                            <div className="col-sm">
                                <a href="https://drive.google.com/file/d/1gA95uTM1_nhzHC5iWg40mQr1vuEAsNoV/view?usp=sharing" target="_blank">
                                    <i className="fas fa-paperclip fa-1x"> Resume</i>
                                </a>
                            </div>
                            <div className="col-sm">
                                <a href="mailto:seanyim515@gmail.com">
                                    <i className="fas fa-inbox fa-1x"> Email</i>
                                </a>
                            </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col text-left">
                                I would also like to take the time to shout-out a few people who have made my journey possible.<br/>
                                First, I would like to thank my mother, if it wasn't for her I wouldn't be here, and without her <br/>
                                support, I'm not sure I would have really made the jump to fully pursue the path that I'm on today.<br/>
                                Secondly, I would like to thank my friend Jae-ho, he introduced me to DigitalCrafts, and fully endorsed<br/>
                                them as a bootcamp, and what was really possible with it.<br/>
                                Third, I would like to thank the people that I met during my time at DigitalCrafts, my instructors, and<br/>
                                classmates. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Links;