import axios from "axios";

export const productsData = axios.get("https://fakestoreapi.com/products");

//  useEffect(() => {
//    async function fetchData() {
//      const { data } = await axios.get("https://fakestoreapi.com/products");

//      setMyData(data);

//      console.log(data);
//    }
//    fetchData();
//  }, []);
