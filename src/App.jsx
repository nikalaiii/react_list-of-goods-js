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

export const App = () => {
  const [sortMode, setSortMode] = useState('');
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);

  function setSort(sortType) {
    let sortedGoods;

    switch (sortType) {
      case SORT_MODE_ALPHABET:
        sortedGoods = [...goodsFromServer] // Always start with start array
          .sort((good1, good2) => good1.localeCompare(good2));
        break;

      case SORT_MODE_LENGTH:
        sortedGoods = [...goodsFromServer].sort(
          (good1, good2) => good1.length - good2.length,
        );
        break;

      case SORT_MODE_REVERSE:
        sortedGoods = [...visibleGoods] // reverse start array
          .reverse();
        break;

      case SORT_MODE_RESET:
        sortedGoods = [...goodsFromServer]; // start array
        break;

      default:
        return;
    }

    setVisibleGoods(sortedGoods);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            sortMode === SORT_MODE_ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'
          }
          onClick={() => {
            setSortMode(SORT_MODE_ALPHABET);
            setSort(SORT_MODE_ALPHABET);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            sortMode === SORT_MODE_LENGTH
              ? 'button is-success'
              : 'button is-success is-light'
          }
          onClick={() => {
            setSortMode(SORT_MODE_LENGTH);
            setSort(SORT_MODE_LENGTH);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={
            sortMode === SORT_MODE_REVERSE
              ? 'button is-warning'
              : 'button is-warning is-light'
          }
          onClick={() => {
            setSortMode(SORT_MODE_REVERSE);
            setSort(SORT_MODE_REVERSE);
          }}
        >
          Reverse
        </button>

        {sortMode && (
          <button
            type="button"
            className={
              sortMode === SORT_MODE_RESET
                ? 'button is-danger'
                : 'button is-danger is-light'
            }
            onClick={() => {
              setSortMode(SORT_MODE_RESET);
              setSort(SORT_MODE_RESET);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
