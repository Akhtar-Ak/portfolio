import './App.css';
import Header from './Commponents/Header';
import Nav from './Commponents/Nav';
import Services from './Commponents/Services';
import { About } from './Commponents/About';
import { Prices } from './Commponents/Prices';
import { Contact } from './Commponents/Contact';
import { Skills } from './Commponents/Skills';

function App() {
  
  return (
    <>
       <Nav/>
      {/* <Switch>      
        <Route exact path = "/" component= {Header} />
        <Route exact path = "/Services" component= {Services} />
        <Route exact path = "/About" component= {About} />
        <Route exact path = "/Prices" component= {Prices} />
        <Route exact path = "/Contact" component= {Contact} />
        
        <Redirect to="/"/>
      </Switch>  */}

      <Header/>
     <About/>
     <Skills/>
     <Services/>
     <Prices/>
     <Contact/>
    </> 
  );
}

export default App;
