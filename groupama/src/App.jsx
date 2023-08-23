import './App.css';
import Header from './components/Header.jsx';
import Signee from './components/Signee.jsx';
import Details from './components/Details.jsx';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Open+Sans:wght@300;400;500;600;700;800&family=Overpass:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <Signee />
      <Details />
    </>
  );
}

export default App;
