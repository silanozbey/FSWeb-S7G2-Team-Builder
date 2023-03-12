import React from "react";
import { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    mailAddress: "",
  });

  const { formSubmitClick, teamMembers } = props;

  const handleFormChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form
        style={{
          margin: "0 auto",
          padding: "10px",
        }}
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          formSubmitClick([...teamMembers, formData]);
          console.log(formData);
        }}
      >
        <p>
          <label htmlFor="name" style={{"marginRight":"49px"}} >Name: </label>
          <input
            type={"text"}
            id="name"
            name="name"
            placeholder="Enter the Name Here"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </p>

        <p>
          <label htmlFor="role" style={{"marginRight":"60px" }} >Role: </label>
          <select
            id="role"
            name="role"
            onChange={handleFormChange}
            value={formData.role}
            required
          >
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Designer">Designer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            
          </select>
        </p>
        <p>
          <label htmlFor="mailAddress" >Mail Address: </label>
          <input
            type={"text"}
            id="mailAddress"
            name="mailAddress"
            placeholder=".......................@gmail.com"
            value={formData.mailAddress}
            onChange={handleFormChange}
            required
          />
        </p>
        <p>
          <input type="submit" value={"Submit"} style={{"marginLeft":"300px", "width":"100px"}} />
        </p>
      </form>
    </div>
  );
}

export default Form;


  /* <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            /> */
