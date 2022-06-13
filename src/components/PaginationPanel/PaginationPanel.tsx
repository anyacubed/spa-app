import { FC } from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationProps } from '../../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentPage } from '../../store/reducers/pageSlice';

const PaginationPanel: FC<PaginationProps> = ({ pagesCount }) => {
  const currentPage = useAppSelector(state => state.pageReducer);
  const dispatch = useAppDispatch();

  return (
  <Pagination
    count={pagesCount}
    page={currentPage}
    size='large'
    shape='rounded'
    style={{ margin: '20px' }}
    onChange={(_, newPage: number) => {
      dispatch(
        setCurrentPage(newPage),
      );
    }} 
  />);
}

export default PaginationPanel;
