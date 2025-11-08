import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import texts from '../../i18n/texts';
import { isMobileDevice } from '../../utils/deviceDetection';
import './MobileGuard.css';

interface MobileGuardProps {
  children: React.ReactNode;
}

export const MobileGuard: React.FC<MobileGuardProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(isMobileDevice());
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="mobile-guard">
        <div className="mobile-guard-content">
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            className="mobile-guard-icon"
          />
          <h1>{texts.mobileGuard.title}</h1>
          <p>{texts.mobileGuard.description}</p>
          <p>{texts.mobileGuard.instruction}</p>
          <div className="mobile-guard-footer">
            <p>{texts.mobileGuard.footer}</p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
