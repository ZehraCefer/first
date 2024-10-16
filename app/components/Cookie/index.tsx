import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setIsVisible(true); 
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 }); 
    setIsVisible(false);
  };

  if (!isVisible) return null; 

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '10px',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      width: '90%',
      maxWidth: '400px',
      textAlign: 'center'
    }}>
      <p style={{ color: '#000000' }}>This website uses cookies to enhance the user experience.</p>
      <button onClick={handleAccept} style={{
        padding: '8px 16px',
        backgroundColor: '#961212',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Accept Cookies
      </button>
    </div>
  );
};

export default CookieConsent;
