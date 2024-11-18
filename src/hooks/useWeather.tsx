import { useEffect, useState } from "react";
import { itemCity, WEATHER } from "../type";

const API_URL = import.meta.env.VITE_API_URL_ENV;

export const useWeather = () => {
  const [cityName, setCityName] = useState<string>("");
  const [values, setValues] = useState<itemCity>();
  const [icon, setIcon] = useState<WEATHER>({ main: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const URL =
    API_URL +
    `/data/2.5/weather?q=${cityName}&lang=es&units=metric&appid=3d17795cb3f31ca82e7105ee6af27b76`;
  const getWeather = async () => {
    setLoading(true);
    await fetch(URL)
      .then((response) => 
        response.json())
      .then((json) => {
        setError(null)
        setValues(json);
        setIcon(json.weather[0]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };
  const getDataWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const input = elements.namedItem("city");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || isInput == null) {
      return;
    }
    setCityName(input.value.trim());
  };
  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);
  return { values, icon, loading, error, getDataWeather };
};
