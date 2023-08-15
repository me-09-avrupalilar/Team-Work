import axios from "axios";
import {
  fetchStart,
  fetchFail,
  getSuccess,
} from "../features/stockSlice";
import { useDispatch, useSelector } from "react-redux";




const useStock = () => {
     const dispatch = useDispatch();
       const { token } = useSelector((state) => state.auth);
  const getStocks = async (stockName) => {

    dispatch(fetchStart());
    try {
      const { data } = await axios.get(

        `http://14184.fullstack.clarusway.com/stock/${stockName}`,
        { headers: { Authorization: `Token ${token}` } }
      );
      dispatch(getSuccess({stockName, data}));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  return { getStocks };
};

export default useStock;
