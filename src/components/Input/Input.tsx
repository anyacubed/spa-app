import { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setInputValue } from '../../store/reducers/inputBarSlice';
import { inputErrorMessage } from '../../utils/constants';

import styles from './Input.module.css';

const Input: FC = () => {
  const inputValue = useAppSelector(state => state.inputBarReducer);
  const dispatch = useAppDispatch();
  const [isCorrect, setIscorrect] = useState(true);

  const handleChange = (event: { target: { value: string } }) => {
    const result = event.target.value.replace(/\D/g, '');
    if (event.target.value !== result) {
      setIscorrect(false);
    } else {
      setIscorrect(true);
    }
    dispatch(
      setInputValue(result),
    );
  };
  
  return (
    <>
      <input
        value={inputValue}
        className={styles.inputBar}
        type='text'
        placeholder='Enter id to filter by it'
        autoFocus
        data-testid='input-test'
        onChange={handleChange}
      />
      {!isCorrect && 
      <span className={styles.errorMessageSpan}>
        {inputErrorMessage}
      </span>}
    </>
  )
}

export default Input;
