import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  const [currentItem, setCurrentItem] = useState('About');
  // const [navItems] = useState([
  //   {
  //     name: 'Portfolio',
  //     description: 'A collection of my projects'
  //   },
  //   {
  //     name: 'Contact',
  //     description: 'Personal contact info'
  //   },
  //   {
  //     name: 'Resume',
  //     description: 'A link to my resume'
  //   }
  // ]);

  const renderPage = () => {
    switch (currentItem) {
      case 'About':
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Resume':
        return <Resume/>;
      case 'Contact':
        return <Contact/>
      default: <About/>
    }
  }

  return (
    <div>
      <main>
        <Navigation
          currentItem={ currentItem }
          setCurrentItem={ setCurrentItem}
        />
        
        <div>
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;
