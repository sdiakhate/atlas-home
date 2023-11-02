import "../assets/styles/filter.css";

function Filter({ setCheckboxHome, setCheckboxApartment, setCheckboxVilla }) {
  const handleCheckbox = (e) => {
    setCheckboxHome(e.target.checked);
  };
  const handleCheckboxApartment = (e) => {
    setCheckboxApartment(e.target.checked);
  };
  const handleCheckboxVilla = (e) => {
    setCheckboxVilla(e.target.checked);
  };

  return (
    <div className="filter d-flex ">
      <div>
        <input
          onChange={handleCheckboxVilla}
          type="checkbox"
          name="villa"
          id="villa"
        />
        <label htmlFor="villa">villa</label>
      </div>
      <div>
        <input
          onChange={handleCheckboxApartment}
          type="checkbox"
          name="apartment"
          id="apartment"
        />
        <label htmlFor="apartment">appartement</label>
      </div>
      <div>
        <input
          onChange={handleCheckbox}
          type="checkbox"
          name="home"
          id="home"
        />
        <label htmlFor="home">maison</label>
      </div>
    </div>
  );
}

export default Filter;
