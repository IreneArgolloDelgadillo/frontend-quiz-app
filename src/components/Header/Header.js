import './Header.css';
import { useTheme } from "../../ThemeContext.js";
import SwitchButton from '../SwitchButton/SwitchButton.js';
import { ReactComponent as MoonIcon_Light } from '../../assets/images/icon-moon-light.svg';
import { ReactComponent as MoonIcon_Dark } from '../../assets/images/icon-moon-dark.svg';
import { ReactComponent as SunIcon_Light } from '../../assets/images/icon-sun-light.svg';
import { ReactComponent as SunIcon_Dark } from '../../assets/images/icon-sun-dark.svg';

function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const moonIcon = (isDarkTheme)?  <MoonIcon_Light /> : <MoonIcon_Dark />;
  const sunIcon = (isDarkTheme)? <SunIcon_Light /> : <SunIcon_Dark />;
  return (
    <div className="App-header">
      <div className='menu-nav-item'>Accessibility</div>
      
      <div className='menu-nav'>
        <div className='menu-nav-item'>{sunIcon}</div>
        <div className='menu-nav-item' onClick={toggleTheme} ><SwitchButton /></div>
        <div className='menu-nav-item'>{moonIcon}</div>
      </div>
    </div>
  );
}

export default Header;
