import React from 'react';

const Button = () => {
    return (
        <>
            <div >
                <h1 className='text-black text-center p-5 '> Ready ?</h1>

            </div>
            <div className="navbar navbar fixed-top">
                <div className="container-fluid">


                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        
                    </button>
                    <div className="offcanvas offcanvas-start w-100 bg-black text-white" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title " id="offcanvasDarkNavbarLabel">Gooo</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                        </div>
                        <div className="offcanvas-body">

                            <div class="rocket">
                                <div class="rocket-body">
                                    <div class="body"></div>
                                    <div class="fin fin-left"></div>
                                    <div class="fin fin-right"></div>
                                    <div class="window"></div>
                                </div>
                                <div class="exhaust-flame"></div>
                                <ul class="exhaust-fumes">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <ul class="star">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Button;