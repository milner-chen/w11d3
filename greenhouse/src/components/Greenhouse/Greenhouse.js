import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName, setThemeName } = useTheme();
  const img = () => themeName === "day" ? dayImage : nightImage;
  console.log(img());
  return (
    <section>
      <img  className='greenhouse-img'
            src={img()}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;