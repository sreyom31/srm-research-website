/* eslint-disable prettier/prettier */
import './App.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';

function App() {
  //  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return (
    <div className="App">
      <Header />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}

export default App;
