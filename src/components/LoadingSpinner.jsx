import React from 'react';


const LoadingSpinner = () => {

      return (
            <div className="fixed inset-0 bg-gray-50 dark:bg-slate-900 flex items-center justify-center z-50 transition-all duration-500">
                  <div className="text-center space-y-6">
                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 animate-pulse">Loading...</h2>
                  </div>
            </div>
      );
};

export default LoadingSpinner;
