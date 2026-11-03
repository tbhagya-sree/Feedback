import React, { useState } from 'react'
import '../App.css'

const Form = () => {
  // Step 3: State
  const [formData, setFormData] = useState({
    name: "",
    feedback: ""
  })

  const [arr, setArr] = useState([])

  // Step 5: Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Step 6: Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault() // stops page reload
    setArr([...arr, formData])
    setFormData({ name: "", feedback: "" }) // reset
  }

  return (
    <div className="main-container">
      <h1 className="title">Feedback Form</h1>

      {/* Step 4: Form UI */}
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="feedback"
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Step 7: Display List */}
      <div className="feedback-list">
        {arr.map((item, index) => (
          <div key={index} className="feedback-card">
            <h3>{item.name}</h3>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Form