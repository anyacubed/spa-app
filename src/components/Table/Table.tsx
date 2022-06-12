import { FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { fetchData } from "../../services/apiData";
import { setData } from "../../store/reducers/dataSlice";
import { ApiResponseData, ApiResponse } from "../../interfaces/interfaces";
import { columns, tableErrorMessage } from "../../utils/constants";
import Pagination from "../Pagination";
import Input from "../Input";

import styles from './Table.module.css';

const Table: FC = () => {
  const data = useAppSelector(state => state.dataReducer);
  const { currentPage } = useAppSelector(state => state.pageReducer);
  const dispatch = useAppDispatch();
  const rowsPerPage: number = 5;
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<ApiResponseData[]>([]);
  const { inputValue } = useAppSelector(state => state.inputBarReducer);

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
    const callFunctions = (data: ApiResponseData[]) => {
      const range = calculateRange(data, rowsPerPage);
      setTableRange([...range]);
  
      const slice = sliceData(data, rowsPerPage, currentPage);
      setSlice([...slice]);
    };

    if (data.length > 0 && inputValue === '') {
      callFunctions(data);
    } else if (data.length > 0 && Number(inputValue) > 0) {
      const filteredData = data.filter(item => item.id === Number(inputValue));
      callFunctions(filteredData);
    }
  }, [currentPage, data, dispatch, inputValue])

  
  return (
    <>
    <Input />
    {slice.length > 0 ?
    <table className={styles.table}>
    <thead data-testid="table-thead-test">
      <tr>
        {columns.map((column: string) => {
          return <th key={column}>{column}</th>;
        })}
      </tr>
    </thead>
    <tbody>
      {slice.map((item: ApiResponseData) => {
        return (
          <tr key={item.id} style={{ backgroundColor: `${item.color}` }} data-testid="table-row-test">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.year}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  :
  tableErrorMessage}
    <Pagination pagesCount={tableRange.length} />
    </>
  );
}

export default Table;
