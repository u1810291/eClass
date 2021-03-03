import React from 'react';
import MeetingWindow from '../../components/MeetingWindow';

<<<<<<< HEAD
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
  // eslint-disable-next-line react/jsx-props-no-spreading
  return container && createPortal(<MeetingWindow {...props} />, container);
};
=======
const ExternalWindow = (props) => <MeetingWindow data={props} />;
>>>>>>> aab3859407d5b16c61d7bccd22e7e8faed6ccdf8

export default ExternalWindow;
