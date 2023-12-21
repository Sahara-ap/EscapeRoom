import { useState } from 'react';
import { TFilterThemes, TTheme } from '../../types/types';

type TFilterThemesProps = {
  cb: (theme: TTheme) => void;
}

function FilterThemes({cb}: TFilterThemesProps): JSX.Element {
  const [selectedFilterId, setSelectedFilterId] = useState('all');

  const filterThemes: TFilterThemes[] = [
    {
      title: 'Все квесты',
      theme: 'all',
      logo: '#icon-all-quests',
      logoWidth: '26',
      id: 'all',
    },
    {
      title: 'Приключения',
      theme: 'adventures',
      logo: '#icon-adventure',
      logoWidth: '36',
      id: 'adventure',
    },
    {
      title: 'Ужасы',
      theme: 'horror',
      logo: '#icon-horror',
      logoWidth: '30',
      id: 'horror',
    },
    {
      title: 'Мистика',
      theme: 'mystic',
      logo: '#icon-mystic',
      logoWidth: '30',
      id: 'mystic',
    },
    {
      title: 'Детектив',
      theme: 'detective',
      logo: '#icon-detective',
      logoWidth: '40',
      id: 'detective',
    },
    {
      title: 'Sci-fi',
      theme: 'sci-fi',
      logo: '#icon-sci-fi',
      logoWidth: '28',
      id: 'sciFi',
    },
  ];

  function handleFilterClick(filterId: TFilterThemes['id'], filterTheme:TTheme) {
    setSelectedFilterId(filterId);
    cb(filterTheme);
  }

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {filterThemes.map((item) => (
          <li key={item.id} className="filter__item">
            <input
              type="radio"
              name="type"
              id={item.id}
              defaultChecked={item.id === selectedFilterId}
              onClick={() => handleFilterClick(item.id, item.theme)}
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
