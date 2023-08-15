
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
       
  const getStocks = async (stockName) => {

    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/stock/${stockName}/`)

      dispatch(getSuccess({stockName, data}));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  return { getStocks };
};

export default useStock;
