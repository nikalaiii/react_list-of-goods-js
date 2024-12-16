import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];
const SORT_MODE_ALPHABET = 'alphabet';
const SORT_MODE_LENGTH = 'length';
const SORT_MODE_REVERSE = 'reverse';
const SORT_MODE_RESET = 'reset';

function setSort(goods, sortMode) {
  let sortedGoods = [...goods];

  if (goods && sortMode) {
    switch (sortMode) {
      case SORT_MODE_ALPHABET:
        sortedGoods.sort((good1, good2) => good1.localeCompare(good2));
        break;

      case SORT_MODE_LENGTH:
        sortedGoods.sort((good1, good2) => good1.length - good2.length);
        break;

      case SORT_MODE_REVERSE:
        sortedGoods.reverse();
        break;

      case SORT_MODE_RESET:
        sortedGoods = goodsFromServer;
        break;
      default:
        return 'error!';
    }
  }

  return sortedGoods;
}

export const App = () => {
  const [sortMode, setSortMode] = useState('');
  const visibleGoods = setSort(goodsFromServer, sortMode);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={() => {setSortMode(SORT_MODE_ALPHABET)}}
        >
          Sort alphabetically
        </button>

        <button type="button" className="button is-success is-light">
          Sort by length
        </button>

        <button type="button" className="button is-warning is-light">
          Reverse
        </button>

        <button type="button" className="button is-danger is-light">
          Reset
        </button>
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li data-cy="Good">{good}</li>
        ))}
      </ul>
    </div>
  );
};
