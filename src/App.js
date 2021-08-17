// styled
import GlobalStyles from './GlobalStyles.js'

// components
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Pending from './components/Pending.js';
import InProgress from './components/InProgress.js';
import ToBeReviewed from './components/ToBeReviewed.js';
import Published from './components/Published.js';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      
      <Nav />
      
      <Pending />
      <InProgress />
      <ToBeReviewed />
      <Published />

      <Footer />
    </div>
  );
}

export default App;
