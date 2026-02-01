import { useEffect, useRef } from 'react';

// Declaration to silence TypeScript errors regarding the custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': any;
    }
  }
}

const Superstore = () => {
  const vizRef = useRef<any>(null);

  useEffect(() => {
    // 1. Load the Modern Tableau v3 Script
    const scriptUrl = "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!existingScript) {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.type = 'module'; // v3 uses ES modules
      scriptElement.async = true;
      document.body.appendChild(scriptElement);
    }
  }, []);

  return (
    <div className="w-full h-[85vh] p-4 bg-white rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* 2. Use the Modern Web Component */}
      {/* @ts-ignore */}
      <tableau-viz 
        ref={vizRef}
        id="tableauViz"
        src="https://public.tableau.com/views/SuperstoreDashboard_16709573699130/SuperstoreDashboard"
        toolbar="bottom"
        hide-tabs
        // FIX: Force the height here using inline styles
        style={{ width: "100%", height: "100%", display: "block" }}
      >
     {/* @ts-ignore */}
      </tableau-viz>
    </div>
  );
};

export default Superstore;