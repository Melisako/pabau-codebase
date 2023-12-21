import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/style.css';

const OptionDetail = ({ setCurrentStep }) => {
  const { id } = useParams();

  const options = [
    { name: 'Anti Wrikle Treatment' },
    { name: 'Dermal Fillers' },
    { name: 'Secret RF' },
    { name: 'HarmonyCA' },
    { name: 'Prhofilo' },
    { name: 'Facials' },
    { name: 'Sclerotherapy' },
    { name: 'LED' },
  ];

  const selectedOption = options[id - 1];

  useEffect(() => {
    if (selectedOption) {
      setCurrentStep('2/2');
      localStorage.setItem('currentStep', '2/2');
    } else {
      setCurrentStep('1/2');
      localStorage.setItem('currentStep', '1/2');
    }
  }, [id, selectedOption, setCurrentStep]);

  const handleBack = () => {
    setCurrentStep('1/2');
    localStorage.setItem('currentStep', '1/2');
  };

  return (
    <div className="container">
      {selectedOption ? (
        <div>
          <p className="option">{selectedOption.name}</p>
          <Link to="/" onClick={handleBack} className="back-link">Back</Link>

        </div>
      ) : (
        <p>Option not found</p>
      )}
    </div>
  );
};

export default OptionDetail;
