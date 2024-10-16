import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the cookie consent has already been accepted
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setIsVisible(true); // Show the banner if consent has not been given
    }
  }, []);

  const handleAccept = () => {
    // Set the cookie to indicate consent
    Cookies.set('cookieConsent', 'true', { expires: 365 }); // Expires in 365 days
    setIsVisible(false); // Hide the banner
  };

  if (!isVisible) return null; // Do not render anything if not visible

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
      <p>This website uses cookies to enhance the user experience.</p>
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
