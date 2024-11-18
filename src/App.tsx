import ImageWeather from "./assets/logo-clima.avif";
import "./App.css";
import Icons from "./components/Icon.tsx";
import { useWeather } from "./hooks/useWeather.tsx";

function App() {
  const { values, icon, getDataWeather, loading, error } = useWeather();
  return (
    <section className="background">
      <header>
        <nav className="navbar">
          <img src={ImageWeather} alt="" />
          <h1>App del Clima</h1>
        </nav>
      </header>
      <main className="card">
        <div>
          <form onSubmit={getDataWeather}>
            <label>
              Ingrese el nombre de la ciudad:
              <input type="text" name="city" />
            </label>
            <button type="submit">Buscar</button>
          </form>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <div>Por favor ingresa el nombre de una ciudad</div>
        ) : (
          <div className="info-card-city">
            <h2>
              {values?.name}, {values?.sys?.country}
            </h2>
            <p></p>
            <h1>{values?.main?.temp}°c</h1>
            <Icons icon={icon.main} />
            <h2 className="description-weather">{icon?.description}</h2>
            <h2>Humedad: {values?.main?.humidity}</h2>
          </div>
        )}
      </main>
    </section>
  );
}

export default App;
