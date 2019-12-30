import React, {Component} from 'react';
import './Skills.css';


class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="skills" id="Skills">
                <div className="row">
                        <div className="col">
                            <h2 className="heading shadow-sm p-3 mb-5 bg-white rounded">
                                Skills
                            </h2>
                        </div>
                        <div className="w-100"></div>
                        
                            <div className="col-m text-left">
                                 I became interested in learning about programming a few years ago, but I always finding myself unable to make
                                 the time and the commitment to learn. It wasn't until May 2019, that I found myself in a state of unhappiness while working at a 
                                 retail job as an assistant manager. I wasn't happy, I was unfulfilled, and I found myself hating the fact that I was working
                                 a job I had no passion for.<p/>
                                 It took a little bit of time, meditation, and a lot of soul searching to find what I was passionate about. What was going 
                                 to make me feel like what I was doing was fulfilling. Software Development,creating, making something that I could say, "Yes, I built that."
                                 And now, here I am, putting myself out there with the things that I've learned, and created.
                            </div>
                        <div className="col">
                            <div className="row">
                                <div className="w-100"></div>
                                <div className="col-sm"><i class="fab fa-js-square fa-2x">javascript</i></div>
                                <div className="col-sm"><i class="fab fa-react fa-2x"> react </i></div>
                                <div className="col-sm"><i class="fab fa-node-js fa-2x"> Node.js </i></div>
                                <div className="col-sm"><i class="fab fa-html5 fa-2x"> HTML5 </i></div>
                                <div className="col-sm"><i class="fab fa-css3-alt fa-2x"> css </i></div>
                                <div className="col-sm"><i class="fab fa-npm fa-2x"> npm</i></div>
                                <div className="col-sm"><i class="fab fa-aws fa-2x"> aws </i></div>
                                <div className="col-sm"><i class="fab fa-bootstrap fa-2x">bootstrap</i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Skills;