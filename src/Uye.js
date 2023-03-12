import React from "react";

function Uye(props) {
  const { kisi } = props;

  return (
    <div className="uye-kutusu boxes">
      <h3 className="uye-isim">{kisi.name}</h3>
   
      <div className="uye-ozellik">
        <div className="uye-icbaslik">Mail Address:</div>
        <div className="uye-tag">{kisi.mailAddress}</div>
      </div>

      <div className="uye-ozellik">
        <div className="uye-icbaslik">Role:</div>
        <div  className="uye-tag">{kisi.role}</div>
      </div>
    </div>
  );
}

export default Uye;