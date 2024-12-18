const CriptoSearchForm = () => {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccione --</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Criptomoneda:</label>
        <select name="cryptocurrency" id="cryptocurrency">
          <option value="">-- Seleccione --</option>
        </select>
      </div>

      <input type="submit" value="Ver cotización" className="submit" />
    </form>
  );
};

export default CriptoSearchForm;
