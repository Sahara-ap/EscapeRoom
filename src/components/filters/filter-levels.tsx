import { useState } from 'react';
import { TFilterLevels, TLevel } from '../../types/types';

type TFilterLevelsProps = {
  cb: (level: TLevel) => void;
}
function FilterLevels({cb}:TFilterLevelsProps): JSX.Element {
  const [selectedFilterId, setSelectedFilterId] = useState('any');

  const filterLevels: TFilterLevels[] = [
    {
      title: 'Любой',
      id: 'any',
    },
    {
      title: 'Легкий',
      id: 'easy',
    },
    {
      title: 'Средний',
      id: 'medium',
    },
    {
      title: 'Сложный',
      id: 'hard',
    },
  ];

  function handleFilterClick(filterId: TLevel) {
    setSelectedFilterId(filterId);
    cb(filterId);
  }

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {filterLevels.map((item) => (
          <li
            key={item.id}
            className="filter__item"
          >
            <input
              type="radio"
              name="level"
              id={item.id}
              defaultChecked={item.id === selectedFilterId}
              onClick={() => handleFilterClick(item.id)}
            />
            <label
              className="filter__label"
              htmlFor={item.id}
            >
              <span
                className="filter__label-text"
              >
                {item.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export { FilterLevels };
