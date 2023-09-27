import { useState } from 'react'
import './App.css'
import Resume from './components/Resume';
import Form from './components/Form';

function App() {
  
  const [personal, setPersonal] = useState({
    name: "Luke Dunphy",
    email: "ldunphy@gmail.com",
    phone: "980 748 2342",
    address: "Los Olives Avenue, Los Angeles, 84938",
  });

  const [edEntry, setEdEntry] = useState({});

  const [edCollection, setEdCollection] = useState([{
    institution: "University of Oregon",
    focus: "Real Estate",
    start: "2020",
    end: "2024",
    location: "Portland, OR"
  },
  {
    institution: "Udemy",
    focus: "SQL",
    start: "2020",
    end: "2024",
    location: "Portland, OR"
  },
  {
    institution: "Coursera",
    focus: "React",
    start: "2020",
    end: "2024",
    location: "Portland, OR"
  }
]);

  const [workEntry, setWorkEntry] = useState({});

  const [workCollection, setWorkCollection] = useState([{
    institution: "Los Angeles Golf Club",
    focus: "Waiter",
    start: "2018",
    end: "2020",
    location: "Los Angeles, CA",
    description: "Served as the head waiter for the golf club."
  },
  {
    institution: "Dunphy Magic Store",
    focus: "Assistant Manager",
    start: "2017",
    end: "2018",
    location: "Los Angeles, CA",
    description: "Assisted."
  },
  {
    institution: "Antarctic Labor",
    focus: "Driver",
    start: "2016",
    end: "2017",
    location: "Antarctica",
    description: "Drove."
  }
])

  const clearAll = (e) => {
    e.preventDefault();
    let name = document.querySelector("#my-name");
    name.value = "";
    let email = document.querySelector("#my-email");
    email.value = "";
    let phone = document.querySelector("#my-phone");
    phone.value = "";
    let address = document.querySelector("#my-address");
    address.value = "";
    setPersonal({});
    setEdEntry({});
    setEdCollection([]);
    setWorkEntry({});
    setWorkCollection([])
  }

  const changerObject = {
    pChanger: setPersonal,
    eChanger1: setEdEntry,
    eChanger2: setEdCollection,
    wChanger1: setWorkEntry,
    wChanger2: setWorkCollection,
    reset: clearAll
  }

  const infoObject = {
    pInfo: personal,
    eInfo1: edEntry,
    eInfo2: edCollection,
    wInfo1: workEntry,
    wInfo2: workCollection
  }

  return (
    <div className="appContainer">
      <Form allInfo={infoObject} allChangers={changerObject} ></Form>
      <Resume allInfo={infoObject} ></Resume>
    </div>

  )
  
}

export default App
