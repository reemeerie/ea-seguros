import './App.css';
import Navbar from '../src/components/Navbar'
import Banner from './components/Banner';
import AboutServices from './components/AboutServices';
import Companies from './components/Companies';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
   <>
    <Navbar/>
    <Banner/>
    <AboutServices/>
    <Companies/>
    <Form/>
    <Footer/>
   </>
  );
}

export default App;
