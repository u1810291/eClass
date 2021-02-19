import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ExternalWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);
  const width = window.outerWidth;
  const height = window.outerHeight;

  useEffect(() => {
    setContainer(document.createElement('div'));
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open('',
        '',
        `width=${width},height=${height},left=0,top=0`);
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
    return null;
  }, [container]);

  return container && createPortal(props.children, container);
};

export default ExternalWindow;
