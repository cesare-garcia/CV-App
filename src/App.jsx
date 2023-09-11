import { useState } from 'react'
import './App.css'
import Resume from './components/Resume';
import Form from './components/Form';

function App() {
  
  const [resume, setResume] = useState({
    name: "Cesar Garcia",
    email: "cegarcia003@gmail.com",
    phone: "859 806 6713",
    address: "2825 Main Street Buda, Texas 78610",
    education: [{
      school: "Centre",
      major: "IST",
      start: "2014",
      end: "2018",
      location: "Danville"
    }],
    work: [{
      company: "Epic",
      role: "Project Manager",
      start: "2018",
      end: "2019"
    }]
  });

  const clearAll = (e) => {
    e.preventDefault();
    setResume({
      name: "",
      email: "",
      phone: "",
      address: "",
      education: [{
        school: "",
        major: "",
        start: "",
        end: "",
        location: ""
      }],
      work: [{
        company: "",
        role: "",
        start: "",
        end: ""
      }]
    })
  }

  return (
    <div className="appContainer">
      <Form information={resume} changer={setResume} clear={clearAll}></Form>
      <Resume information={resume}></Resume>
    </div>

  )
}

export default App
