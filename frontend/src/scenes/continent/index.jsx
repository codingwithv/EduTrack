import { Box } from "@mui/material";
import Header from "../../components/Header";
import ContinentSales from "../../components/ContinentSales";

const continent = () => {
  return (
    <Box m="20px">
      <Header title="Continent-Wise Sales Ditribution"  />
      <Box height="75vh">
        <ContinentSales />
      </Box>
    </Box>
  );
};

export default continent;
