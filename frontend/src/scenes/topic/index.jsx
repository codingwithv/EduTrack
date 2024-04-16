import { Box } from "@mui/material";
import Header from "../../components/Header";
import TopicSales from "../../components/TopicSales";

const topic = () => {
  return (
    <Box m="20px">
      <Header title="Topic-Wise Sales Ditribution"  />
      <Box height="75vh">
        <TopicSales />
      </Box>
    </Box>
  );
};

export default topic;
