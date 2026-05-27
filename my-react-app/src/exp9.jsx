import { useState } from 'react'
import './exp9.css'

function Exp9() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function showData() {
    if (name === "" || email === "" || password === "") {
      alert("Please Fill All Fields")
    } else {
      alert("Registered Successfully")
    }
  }

  return (
    <div className="page">
      <h1 className="page-title">Output</h1>

      <div className="form-card">
        <h2 className="form-title">Registration Form</h2>

        <input
          className="input"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="passwordq"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="button-wrap">
          <button className="submit" onClick={showData}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Exp9