/**
 * @format
 */
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

function useDecodedData(): any {
  const storeData: any = useSelector((state: RootState) => state.user);
  const { userInfo } = storeData;
  return userInfo;
}

export default useDecodedData;
