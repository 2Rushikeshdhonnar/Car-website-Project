
import './App.css';
import CardsOne from './components/CardsOne';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import PageFooter from './components/PageFooter';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <CardsOne/>

      <LoginForm/>

      <PageFooter/>
      
     
    </div>
  );
}

export default App;
