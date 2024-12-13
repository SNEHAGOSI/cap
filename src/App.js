import React, { useState } from 'react';
import { Minus, Plus, Thermometer } from 'lucide-react';

const ACTemperatureControl = () => {
  const [temperature, setTemperature] = useState(22);
  const [secondaryTemperature, setSecondaryTemperature] = useState(24);
  const [isAutomated, setIsAutomated] = useState(false); // Automation mode state

  const handleIncrease = () => {
    setTemperature((prev) => Math.min(prev + 1, 30));
  };

  const handleDecrease = () => {
    setTemperature((prev) => Math.max(prev - 1, 16));
  };

  const toggleAutomation = () => {
    setIsAutomated((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans space-y-8">
      {/* Container 1: Interactive Temperature Control */}
      <div className="bg-white shadow-2xl rounded-3xl p-6 w-96 transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleDecrease}
            disabled={isAutomated} // Disable when automation is on
            className={`bg-blue-50 text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors ${
              isAutomated ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Minus size={24} />
          </button>

          <div className="flex items-center space-x-3">
            <Thermometer size={36} className="text-blue-500 animate-pulse" />
            <span className="text-5xl font-bold text-blue-800">
              {temperature}°C
            </span>
          </div>

          <button
            onClick={handleIncrease}
            disabled={isAutomated} // Disable when automation is on
            className={`bg-blue-50 text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors ${
              isAutomated ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Plus size={24} />
          </button>
        </div>

        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <p className="text-blue-700 font-semibold">
            Interactive Temperature Control
          </p>
        </div>
      </div>

      {/* Automate Button */}
      <button
        onClick={toggleAutomation}
        className={`bg-white text-blue-600 px-6 py-2 rounded-full font-bold transition-colors ${
          isAutomated ? 'bg-green-500 text-white' : 'hover:bg-blue-100'
        }`}
      >
        {isAutomated ? 'Automated On' : 'Enable Automation'}
      </button>

      {/* Hot and Cold Buttons */}
      <div className="flex space-x-4">
        <button
          disabled={isAutomated} // Disable when automation is on
          className={`bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition ${
            isAutomated ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Hot
        </button>
        <button
          disabled={isAutomated} // Disable when automation is on
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition ${
            isAutomated ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Cold
        </button>
      </div>

      {/* Container 2: Passive Temperature Display */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 shadow-2xl rounded-3xl p-6 w-96 transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div className="flex items-center justify-center space-x-3">
          <Thermometer size={36} className="text-white animate-bounce" />
          <span className="text-5xl font-bold text-white">
            {secondaryTemperature}°C
          </span>
        </div>

        <div className="bg-white/20 rounded-xl p-4 text-center mt-6">
          <p className="text-white font-semibold">
            Passive Temperature Display
          </p>
        </div>
      </div>
    </div>
  );
};

export default ACTemperatureControl;
