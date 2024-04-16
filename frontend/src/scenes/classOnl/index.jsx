import { Box } from "@mui/material";
import Header from "../../components/Header";
import ClassOnline from "../../components/ClassOnline";

const ClassOnl = () => {
  return (
    <Box m="20px">
      <Header title="Classroom vs. Online"  />
      <Box height="75vh">
        <ClassOnline />
      </Box>
    </Box>
  );
};

export default ClassOnl;
