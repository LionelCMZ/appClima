import ThunderstormsRain from '../assets/thunderstorms-rain.svg'
import Drizzle from '../assets/drizzle.svg'
import Snowy from '../assets/snow.svg'
import Rain from '../assets/rain.svg'
import ClearDay from '../assets/clear-day.svg'
import Fog from '../assets/fog.svg'
import Atmosphere from '../assets/thunderstorms-rain.svg'
import Haze from '../assets/haze.svg'
import Smoke from '../assets/smoke.svg'

interface ImageProps {
  icon: string;
}

const Icons: React.FC<ImageProps> = ({ icon }) => {
  const renderImage = () => {
    switch (icon) {
      case "Thunderstorm":
        return <img src={ThunderstormsRain} alt="Icon thunderstorms rain"/>;
        break;
      case "Drizzle":
        return <img src={Drizzle} alt="Icon drizzle"/>;
        break;
      case "Rain":
        return <img src={Rain} alt="Icon rain"/>;
        icon = "../assets/rain.svg";
        break;
      case "Snow":
        return <img src={Snowy} alt="Icon rain"/>;
        icon = "../assets/snowy.svg";
        break;
      case "Clear":
        return <img src={ClearDay} alt="Icon rain"/>;
        icon = "../assets/clear-day.svg";
        break;
      case "Atmosphere":
        return <img src={Atmosphere} alt="Icon rain"/>;
        break;
      case "Clouds":
        return <img src={Fog} alt="Icon fog"/>;
        icon = "../assets/fog.svg";
        break;
      case "Fog":
        return <img src={Fog} alt="Icon fog"/>;
        icon = "../assets/fog.svg";
        break;
      case "Haze":
        return <img src={Haze} alt="Icon rain"/>;
        icon = "../assets/haze.svg";
        break;
      case "Smoke":
        return <img src={Smoke} alt="Icon rain"/>;
        icon = "../assets/smoke.svg";
        break;
      default:
        return <img src={ClearDay} alt="Icon rain"/>;
        icon = "../assets/clear-day.svg";
    }
  };

  return <div> {renderImage()}</div>
};

export default Icons;
