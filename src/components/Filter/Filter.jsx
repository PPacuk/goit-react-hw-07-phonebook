import css from './Filter.module.css';
import { setfilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    dispatch(setfilter(e.target.value));
  }
  
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        onChange={inputHandler}
      />
    </>
  );
};
