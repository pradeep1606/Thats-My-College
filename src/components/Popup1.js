import React from 'react';

const Popup1 = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-full h-full md:h-auto md:w-7/12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-950">{title}</h2>
          <button onClick={onClose} className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup1;
