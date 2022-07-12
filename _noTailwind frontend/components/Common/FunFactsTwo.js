import React, { Component } from 'react';

class FunFactsTwo extends Component {
    render() {
        return (
            <div className="funfacts-inner">
                <div className="row">
                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts">
                            <h3>
                                850
                                <span className="sign-icon">k</span>
                            </h3>
                            <p>Downloaded</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts">
                            <h3>
                                20
                                <span className="sign-icon">k</span>
                            </h3>
                            <p>Feedback</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts">
                            <h3>
                                500
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Workers</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 col-sm-6">
                        <div className="single-funfacts">
                            <h3>
                                70
                                <span className="sign-icon">+</span>
                            </h3>
                            <p>Contributors</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FunFactsTwo;