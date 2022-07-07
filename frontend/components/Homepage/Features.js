import React, { Component } from 'react';

class FeaturesStyleTwo extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="features-box">
                                <div className="icon">
                                    <i className='bx bx-conversation'></i>
                                </div>
                                <h3>Simplify Communication</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className="back-icon">
                                    <i className='bx bx-conversation'></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-box">
                                <div className="icon">
                                    <i className='bx bx-customize'></i>
                                </div>
                                <h3>Drag and Drop Widgets</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className="back-icon">
                                    <i className='bx bx-customize'></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-box">
                                <div className="icon">
                                    <i className='bx bx-slider-alt'></i>
                                </div>
                                <h3>Naudokitės šablonais</h3>
                                <p>Mes paruošėm standartinių spaudos gaminių, tokių kaip vizitinės kortelės, lankstinukai, skrajutės ir kt. šablonus AI, CDR ir PDF formatais. Juose jau sužymėtos užlaidos ir pjovimo linijos. Informuokite mus, kokių gaminių šablonų pageidautumėt ir mes papildysim duombazę.</p>

                                <div className="back-icon">
                                    <i className='bx bx-slider-alt'></i>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesStyleTwo;