import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore} from "./store"
import CriptoPriceDisplay from "./components/CriptoPriceDisplay";
import './spinner.css'

function App() {
  const fetchCryptos = useCryptoStore(state => state.fetchCryptos)

  useEffect(()=>{
    fetchCryptos()
  },[])

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Visualización de valores de<span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
          <CriptoPriceDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
