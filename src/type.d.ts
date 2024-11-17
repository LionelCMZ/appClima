type SYS = {
  country: string;
};
interface MAIN {
  temp: number;
  humidity: number;
}
export interface WEATHER {
  main: string;
  description: string;
}
export interface itemCity {
  id: number;
  name: string;
  sys: SYS;
  main: MAIN;
  weather: WEATHER[];
}
