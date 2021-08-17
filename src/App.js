// styled
import GlobalStyles from './GlobalStyles.js'

// components
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import BugContainer from './components/BugContainer.js';
import NewBug from './components/NewBug.js';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Nav />
      
      <BugContainer />
      <NewBug />
      
      <Footer />
    </div>
  );
}

export default App;
