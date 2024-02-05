import './SwitchButton.css';
import React, { useState } from 'react';

const SwitchButton = ({onChangeHandler} ) => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleToggle = (event) => {
    setSwitchOn((prevSwitchState) => !prevSwitchState);
    onChangeHandler();
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
