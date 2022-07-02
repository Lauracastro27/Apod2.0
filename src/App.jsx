import {useState,} from "react";
import "./assets/App.css";

function App() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState({});

  async function useFetch(Data) {
    try {
      const request = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=d5d7WzZHxBEEodFV4pu2U7VqoVRigPNUOlFHb01d&date=${Data}`
      );
      const resJson = await request.json();
      setResult(resJson);
    } catch (e) {
      console.log('[ERRO]',e);
    }
  }

  return (
    <>
    <header className="logo">
        <h1>Apod</h1>
    </header>
    <main className='container'>
    <div className="cx1">
      <input type='date' onChange={(event) => setDate(event.target.value)} className='input' />
      <button onClick={() => useFetch(date)} className='button'>Buscar</button>
      <h2 className="titulo">{result.title}</h2>
      <p className="descricao">{result.explanation}</p>
      </div>
      <div className="cx2">
        <img src={result.url} alt='' className="imgs" value='Discover the Cosmos!'/>
      </div>
    </main>
    </>
  );
}

export default App;
