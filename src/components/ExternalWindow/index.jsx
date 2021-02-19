import ReactDOM from 'react-dom';

export default (props) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const externalWindow = window.open('', '', `width=${width},height=${height},left=50,top=50`);
  const containerEl = externalWindow.document.createElement('div');
  if (!containerEl) {
    return null;
  }
  externalWindow.document.body.appendChild(containerEl);
  return ReactDOM.createPortal(props.children, containerEl);
};
