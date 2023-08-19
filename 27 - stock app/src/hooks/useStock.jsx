
import {
  fetchStart,
  fetchFail,
  getSuccess,
} from "../features/stockSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";




const useStock = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const addStocks = async (stockName, newFirm) => {
    
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/stock/${stockName}/`, newFirm);
      getStocks(stockName)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const getStocks = async (stockName) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/stock/${stockName}/`);
      dispatch(getSuccess({ stockName, data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStocks = async (stockName, id) => {
    dispatch(fetchStart());
    
    try {
      await axiosWithToken.delete(`/stock/${stockName}/${id}/`);
      getStocks(stockName);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const editStocks = async (stockName, id, updatedFirm) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/stock/${stockName}/${id}/`, updatedFirm);
      getStocks(stockName);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  // http://14184.fullstack.clarusway.com/stock/firms/{id}/
  //http://14184.fullstack.clarusway.com/stock/firms/{id}/

  return { getStocks, deleteStocks, editStocks, addStocks };
};

export default useStock;
