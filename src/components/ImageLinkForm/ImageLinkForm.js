import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, input }) => {
  return (
    <div>
      <p className="f3 white">
        {"This magic app will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 w-70">
          <input className="f4 pa2 w-90 center" type="text" onChange={onInputChange} value={input} />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
