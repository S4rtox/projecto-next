import axios from "axios";
const CountPage = async () => {
  const countLocations = await axios.get("http://localhost:4000/locations");
  console.log(countLocations?.data?.length);
  return `Hay ${countLocations?.data?.length} ubicaciones`;
};

export default CountPage;
