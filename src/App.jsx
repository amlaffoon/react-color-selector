import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [formData, saveFormData] = useState([])

  const handleFormSubmission = (red, blue, yellow) => {
    saveFormData([
      ...formData,
      {
        red: red,
        blue: blue,
        yellow: yellow
      }
    ])
  }

  const results = formData.map((data, index) => (
    <li key={index}>
      {data.red ? "red" : ""}
      {data.blue ? "blue" : ""}
      {data.yellow ? "yellow" : ""}
    </li>
  ))

  return (
    <div className="App">
      <Form submitForm={handleFormSubmission}></Form>
      <ul>
        {results}
      </ul>
    </div>
  )
}

export default App
