import React from 'react'
import SKU from './images/SKU.jpg'
import Kashyap from './images/Kashyap.jpg'
import Umesh from './images/Umesh1.jpg'
import Urva from './images/Urva.jpg'
import Group from './images/Group.jpg'
import UUS from './images/UUS.jpg'

const Pics = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-12 mx-auto">
                <div className="gallery" id="gallery">

                    <div className="mb-3 pics animation all 2">
                        <img className="img-fluid" src={SKU} alt="" />
                    </div>

                    <div className="mb-3 pics animation all 1">
                        <img className="img-fluid" src={Umesh} alt="" />
                    </div>

                    <div className="mb-3 pics animation all 1">
                        <img className="img-fluid" src={Kashyap}  alt="" />
                    </div>

                    <div className="mb-3 pics animation all 2">
                        <img className="img-fluid" src={UUS} alt="" />
                    </div>

                    <div className="mb-3 pics animation all 2">
                        <img className="img-fluid" src={Group} alt="" />
                    </div>

                    <div className="mb-3 pics animation all 1">
                        <img className="img-fluid" src={Urva} alt="" />
                    </div>
                    

                </div>
            </div>

            </div>
        </div>

        </>
    )
}

export default Pics
