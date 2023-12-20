import { useState } from 'react';
import { FILTER_THEMES } from '../../consts';
import { TFilterThemes } from '../../types/types';

function FilterThemes(): JSX.Element {
  const [selectedFilterId, setSelectedFilterId] = useState('all');

  function handleFilterClick(filterId: TFilterThemes['id']) {
    setSelectedFilterId(filterId);
  }

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {FILTER_THEMES.map((item) => (
          <li key={item.id} className="filter__item">
            <input
              type="radio"
              name="type"
              id={item.id}
              checked={item.id === selectedFilterId}
              onClick={() => handleFilterClick(item.id)}
            />
            <label
              className="filter__label"
              htmlFor={item.id}
            >
              <svg className="filter__icon" width={item.logoWidth} height="30" aria-hidden="true">
                <use xlinkHref={item.logo}></use>
              </svg><span className="filter__label-text">{item.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export { FilterThemes };
