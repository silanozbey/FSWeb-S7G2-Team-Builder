import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Uye from "./Uye";

const takimUyeleri = [
  {
    name: "Burhan Altıntop", 
    role: "Designer", 
    mailAddress: "burhan@gmail.com", 
  },
  {
    name: "Şahika Koçarslanlı", 
    role: "Frontend Engineer", 
    mailAddress: "sahika@gmail.com",
  }
];

function App() {
  const [uye, setUye] = useState(takimUyeleri);

  return (
    <div className="App">
      <div className="main-box">
        <div className="uye-box">
          <h2 className="uye-baslik">Team Members</h2>

          <div className="uye-list">
            {uye.map((herbiri, index) => (
              <Uye key={index} kisi={herbiri} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="uye-baslik">Add New Team Member</h2>
          <div className="boxes">
            <Form formSubmitClick={setUye} teamMembers={uye} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;