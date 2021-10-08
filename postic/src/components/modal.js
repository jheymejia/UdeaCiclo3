import React from "react";

function Modal() {
  return (
    <div className="">
      <button className="btn btn-lg btn-success">Ejecutar modal</button>
      <div className="d-none" id="modal">
        <div className="d-flex justify-content-center " id="header"></div>
        <div className="" id="body">

        </div>
        <div className="" id="footer">
            
        </div>
      </div>
    </div>
  );
}

export default Modal;
