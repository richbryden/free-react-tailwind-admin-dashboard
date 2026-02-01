import { useEffect, useRef } from 'react';

const Superstore = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = vizRef.current;
    if (!divElement) return;

    const url = "https://public.tableau.com/javascripts/api/viz_v1.js";
    const existingScript = document.querySelector(`script[src="${url}"]`);

    if (!existingScript) {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;
      scriptElement.async = true;
      divElement.parentNode?.insertBefore(scriptElement, divElement);
    }
  }, []);

  return (
    <div className="h-screen w-full p-4 bg-white rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
      <div 
        className='tableauPlaceholder' 
        id='viz1769981011138' 
        style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }} 
        ref={vizRef}
      >
        <noscript>
          <a href='#'>
            <img 
              alt='Superstore Dashboard' 
              src='https://public.tableau.com/static/images/Su/SuperstoreDashboard_16709573699130/SuperstoreDashboard/1_rss.png' 
              style={{ border: 'none' }} 
            />
          </a>
        </noscript>
        <object className='tableauViz' style={{ display: 'none' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='SuperstoreDashboard_16709573699130/SuperstoreDashboard' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/Su/SuperstoreDashboard_16709573699130/SuperstoreDashboard/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
    </div>
  );
};

export default Superstore;