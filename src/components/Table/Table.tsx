import { FC, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { fetchData } from '../../services/apiData';
import { setData } from '../../store/reducers/dataSlice';
import { ApiResponseData, ApiResponse } from '../../interfaces/interfaces';
import { columns, tableErrorMessage } from '../../utils/constants';
import Pagination from '../PaginationPanel';
import Input from '../Input';
import TableComponent from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Table: FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.dataReducer);
  const currentPage = useAppSelector(state => state.pageReducer);
  const inputValue = useAppSelector(state => state.inputBarReducer);
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<ApiResponseData[]>([]);
  const rowsPerPage: number = 5;

  const calculateRange = (data: ApiResponseData[], rowsPerPage: number) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  const sliceData = (data: ApiResponseData[], rowsPerPage: number, currentPage: number) => {
    return data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  };

  useEffect(() => {
    if (data.length === 0) {
      (async (): Promise<void> => {
        await fetchData().then((apiData: ApiResponse) => {
          dispatch(
            setData(apiData.data),
          );
        })
      })()
    }
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      if (inputValue === '') {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);
    
        const slice = sliceData(data, rowsPerPage, currentPage);
        setSlice([...slice]);
      } else if (Number(inputValue) > 0) {
        const filteredData = data.filter(item => item.id === Number(inputValue));
        setSlice([...filteredData]);
      }
    }
  }, [currentPage, data, dispatch, inputValue]);

  return (
    <>
      <Input />
      {slice.length > 0 ?
      <TableComponent sx={{ maxWidth: 650 }}>
      <TableHead data-testid='table-thead-test'>
        <TableRow sx={{ textTransform: 'uppercase', height: 40 }}>
          {columns.map((column: string) => (
            <TableCell key={column} align='center' sx={{ fontSize: 20 }}>
              {column}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <tbody>
        {slice.map((item: ApiResponseData) => (
          <TableRow
          key={item.id}
          sx={{ height: 60, backgroundColor: `${item.color}` }}
          data-testid='table-row-test'
        >
          <TableCell align='center' sx={{ fontSize: 20 }}>{item.id}</TableCell>
          <TableCell align='center' sx={{ fontSize: 20 }}>{item.name}</TableCell>
          <TableCell align='center' sx={{ fontSize: 20 }}>{item.year}</TableCell>
        </TableRow>
        ))}
      </tbody>
      </TableComponent>
      :
      tableErrorMessage}
      <Pagination pagesCount={tableRange.length} />
    </>
  );
}

export default Table;
