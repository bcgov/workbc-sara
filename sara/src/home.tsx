import React from 'react';
import fileIcon from './icons/light/file-invoice.svg'
import requestsIcon from './icons/light/pen-field.svg'
import tempIcon from './icons/light/space-station-moon-construction.svg'

function Home(){
    return(
        <main className="flex-shrink-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card w-100 h-100 text-center">
                            <div className="card-body d-flex">
                            <button className="btn btn-lg">
                                <img  src={fileIcon} alt="Form Icon" className="buttonImage"/>
                                <h2 className="buttonTitle">Forms</h2>
                                <p className="buttonInfo">Launch, fill out, send and download completed WorkBC Forms</p>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card w-100 h-100 text-center">
                            <div className="card-body d-flex">
                            <button className="btn btn-lg">
                                <img src={requestsIcon} alt="Requests Icon" className="buttonImageRequests"/>                            
                                <h2 className="buttonTitle">System Requests</h2>
                                <p className="buttonInfo">Have a system issue, question or service request? Submit it now!</p>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card h-100 w-100 text-center">
                            <div className="card-body d-flex justify-content-center">
                            <button className="btn btn-lg">
                            <img src={tempIcon} alt="Temp Icon" className="buttonImage"/>
                                <h2 className="buttonTitle">Something Else</h2>
                                <p className="buttonInfo">Lorem ipsum dolor sit amet, consectetue adipiscing elit, sed do siusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card h-100 w-100 text-center">
                            <div className="card-body d-flex justify-content-center">
                            <button className="btn btn-lg">
                            <img src={tempIcon} alt="Temp Icon" className="buttonImage"/>
                                <h2 className="buttonTitle">Another Thing</h2>
                                <p className="buttonInfo">Lorem ipsum dolor sit amet, consectetue adipiscing elit, sed do siusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home