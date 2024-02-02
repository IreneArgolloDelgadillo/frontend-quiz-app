import './SwitchButton.css';
import React, { useState } from 'react';

const SwitchButton = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleToggle = () => {
    setSwitchOn((prevSwitchState) => !prevSwitchState);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isSwitchOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchButton;
