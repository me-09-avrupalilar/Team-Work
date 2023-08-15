import axios from "axios";
import {
  fetchStart,
  getFirmFail,
  getFirmSuccess,
} from "../features/stockSlice";
import { useDispatch, useSelector } from "react-redux";



const useStock = () => {
     const dispatch = useDispatch();
       const { token } = useSelector((state) => state.auth);
  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "http://14184.fullstack.clarusway.com/stock/firms/",
        { headers: { Authorization: `Token ${token}` } }
      );
      dispatch(getFirmSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getFirmFail());
    }
  };
  return { getFirms };
};

export default useStock;
