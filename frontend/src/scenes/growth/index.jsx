import { Box } from "@mui/material";
import Header from "../../components/Header";
import GrowthChart from "../../components/GrowthChart";

const Growth = () => {
  return (
    <Box m="20px">
      <Header title="Growth Trends"  />
      <Box height="75vh">
        <GrowthChart />
      </Box>
    </Box>
  );
};

export default Growth;
