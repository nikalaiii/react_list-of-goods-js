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

  function setSort(goods, sortType, isReverse) {
    let sortedGoods = [...goods];

    switch (sortType) {
      case SORT_MODE_ALPHABET:
        sortedGoods.sort((a, b) => a.localeCompare(b));
        break;
      case SORT_MODE_LENGTH:
        sortedGoods.sort((a, b) => a.length - b.length);
        break;
      case SORT_MODE_RESET:
        sortedGoods = [...goodsFromServer];
        break;
      case SORT_MODE_REVERSE:
        break;
      default:
        break;
    }

    if (isReverse) {
      sortedGoods.reverse();
    }

    return sortedGoods;
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
            setVisibleGoods(setSort(visibleGoods, SORT_MODE_ALPHABET, false));
            setSortMode(SORT_MODE_ALPHABET);
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
            setVisibleGoods(setSort(visibleGoods, SORT_MODE_LENGTH, false));
            setSortMode(SORT_MODE_LENGTH);
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
            setVisibleGoods(setSort(visibleGoods, SORT_MODE_REVERSE, true));
            setSortMode(SORT_MODE_REVERSE)
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
              setVisibleGoods(setSort(visibleGoods, SORT_MODE_RESET, false));
              setSortMode(SORT_MODE_RESET);
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
