import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import OptionDetail from './components/OptionDetail';
import Footer from './components/Footer'; 
 

const App = () => {
  const [currentStep, setCurrentStep] = React.useState('1/2');

  return (
    <Router>
      <div>
        <Header currentStep={currentStep} />
        <Routes>
          <Route
            path="/"
            element={<Body options={[
              { name: 'Anti Wrikle Treatment' },
    { name: 'Dermal Fillers' },
    { name: 'Secret RF' },
    { name: 'HarmonyCA' },
    { name: 'Prhofilo' },
    { name: 'Facials' },
    { name: 'Sclerotherapy' },
    { name: 'LED' },
            ]} />}
          />
          <Route path="/option/:id" element={<OptionDetail setCurrentStep={setCurrentStep} />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
