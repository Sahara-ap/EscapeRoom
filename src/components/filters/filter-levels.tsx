import { useState } from 'react';
import { TFilterLevels } from '../../types/types';

function FilterLevels(): JSX.Element {
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
      id: 'middle',
    },
    {
      title: 'Сложный',
      id: 'hard',
    },
  ];

  function handleFilterClick(filterId: TFilterLevels['id']) {
    setSelectedFilterId(filterId);
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
              checked={item.id === selectedFilterId}
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
