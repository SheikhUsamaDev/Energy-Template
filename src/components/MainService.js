import React from 'react'
import services1 from "../images/services1.png";
import services2 from "../images/services2.png";
import services3 from "../images/services3.png";
import services from "../images/services.jpeg"

export default function MainService() {
  return (
    <div className='py-4' style={{background:"#fff"}}>
      <div className="services-section" style={{marginTop : "100px", marginBottom : "100px"}}>
        <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
              We Drive The Transition To Reliable Energy
            </h1>
            <div className="services my-5 d-flex flex-column gap-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="services img"
                  style={{ width: "40%", height: "100%" }}
                >
                  <img
                    src={services1}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="services-content">
                  <h5 className="">Solar Panel Services</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    odit accusamus vel. Non illum deleniti architecto esse
                    exercitationem eveniet
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div
                  className="services img"
                  style={{ width: "40%", height: "100%" }}
                >
                  <img
                    src={services2}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="services-content">
                  <h5 className="">Hydropower Plants Services</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    odit accusamus vel. Non illum deleniti architecto esse
                    exercitationem eveniet
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div
                  className="services img"
                  style={{ width: "40%", height: "100%" }}
                >
                  <img
                    src={services3}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="services-content">
                  <h5 className="">Batery Material Services</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    odit accusamus vel. Non illum deleniti architecto esse
                    exercitationem eveniet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{width : "100%", height : "100%"}}>
            <img src={services} alt=""  style={{width : "100%", height : "100%", borderRadius : "10px"}}/>
            </div>
           
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
