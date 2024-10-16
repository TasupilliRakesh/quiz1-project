const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;
    return <div style={{ width: `${progress}%`, background: 'green', height: '10px' }}></div>;
  };
  
  export default ProgressBar;
  