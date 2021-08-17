import { useState } from 'react';

// styled
import GlobalStyles from './GlobalStyles.js';

// router
import { Route, Switch } from 'react-router-dom';

// components
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import CreateBug from './components/CreateIssue.js'; 

// pages
import HomePage from './pages/HomePage.js';
import HelpPage from './pages/HelpPage.js';
import AboutPage from './pages/AboutPage.js';



function App() {

  const [ issues, setIssues ] = useState([]);
  const [ name, setName ] = useState("");
  const [ date, setDate ] = useState("");
  const [ status, setStatus ] = useState("");
  const [ description, setDescription] = useState("");
  const [ file, setFile ] = useState("");

  return (
    <>
      <GlobalStyles />

      <Nav />
      <CreateBug 
        issues={issues}
        setIssues={setIssues}
        setDate={setDate}
        setFile={setFile}
        setDescription={setDescription}
        setName={setName}
        setStatus={setStatus}
        name={name}
      />

      <Switch>

        <Route to='/'>
          <HomePage 
          issues={issues}
          name={name}
          date={date}
          description={description}
          status={status}
          file={file}
          />
        </Route>

        <Route to="/AboutPage" exact>
          <AboutPage />
        </Route>

        <Route to='/HelpPage' exact>
          <HelpPage />
        </Route>

      </Switch>
      
      <Footer />
    </>
  );
}

export default App;
