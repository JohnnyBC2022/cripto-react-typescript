import { useCryptoStore } from "../store";
import {currencies} from "../data"

const CriptoSearchForm = () => {
  const cryptocurrencies = useCryptoStore(state=> state.cryptocurrencies)

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccione --</option>
          {currencies.map(currency =>
            (<option key={currency.code} value={currency.code}>{currency.name}</option>)
          )}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Criptomoneda:</label>
        <select name="cryptocurrency" id="cryptocurrency">
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map(crypto => (
            <option
              key={crypto.CoinInfo.Name}
              value={crypto.CoinInfo.Name}
            >{crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Ver cotización" className="submit" />
    </form>
  );
};

export default CriptoSearchForm;
