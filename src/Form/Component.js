import React, { useState } from 'react';

export default function Form() {
  const [ownerState, setOwnerState] = useState({ owner: "", description: "" });

  function handleOwnerChange(e) {
    setOwnerState({
      ...ownerState,
      [e.target.name]: e.target.value,
    });
  }

  const blankCat = { name: "", age: "" };
  const [catState, setCatState] = useState([]);

  function addCat() {
    setCatState([...catState, { ...blankCat }]);
  }

  function handleCatChange(e) {
    const updatedCats = [...catState];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setCatState(updatedCats);
  };

  return (
    <form>
      <div className="formInput">
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          name="owner"
          id="owner"
          onChange={handleOwnerChange}
        />
      </div>

      <div className="formInput">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleOwnerChange}
        />
      </div>

      <div className="formInput">
        <input
          type="button"
          value="Add new cat"
          onClick={addCat}
        />
      </div>

      {catState.map((val, idx) => {
        const catId = `name-${idx}`;
        const ageId = `age-${idx}`;
        return (
          <div key={`cat-${idx}`} className="formGroup">
            <div className="formInput">
              <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
              <input
                type="text"
                name={catId}
                data-idx={idx}
                id={catId}
                className="name"
                value={catState[idx].name}
                onChange={handleCatChange}
              />
            </div>

            <div className="formInput">
              <label htmlFor={ageId}>Age</label>
              <input
                type="text"
                name={ageId}
                data-idx={idx}
                id={ageId}
                className="age"
                value={catState[idx].age}
                onChange={handleCatChange}
              />
            </div>
          </div>
        );
      })}

      <div className="formInput">
        <button type="submit">Submit form</button>
      </div>
    </form>
  );
}