import './App.css';
import Header from './component/common/header/Header';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router } from "react-router-dom"
import Main from './component/home/Main';

function App() {
  return (
  <>
     <Router>
        <Header />
        <Main/>
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer /> */}
      </Router>
  </>
  );
}

export default App;
