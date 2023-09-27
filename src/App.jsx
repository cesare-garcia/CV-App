import { useState } from 'react'
import './App.css'
import Resume from './components/Resume';
import Form from './components/Form';

function App() {
  
  const [personal, setPersonal] = useState({
    name: "Cesar Garcia",
    email: "cegarcia003@gmail.com",
    phone: "859 806 6713",
    address: "2825 Main Street Buda, Texas 78610",
  });

  const [edEntry, setEdEntry] = useState({});

  const [edCollection, setEdCollection] = useState([{
    institution: "Centre College",
    focus: "IST",
    start: 2014,
    end: 2018,
    location: "Danville, KY"
  }]);

  const [workEntry, setWorkEntry] = useState({});

  const [workCollection, setWorkCollection] = useState([{
    institution: "Epic Systems",
    focus: "Project Manager",
    start: 2018,
    end: 2019,
    location: "Verona, WI",
    description: "Served as the Application Coordinator for the Cleveland Clinic Implementation of Willow Ambulatory."
  }])

  const clearAll = (e) => {
    e.preventDefault();
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
