import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataStudents} from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";


const Students = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:4000/api/v1/students')
  //     .then(response => {
  //       console.log(response.data.students);
  //       const formattedStudents = response.data.students.map(student => ({ ...student, id: student._id }));
  //       setStudents(formattedStudents);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching students data:", error);
  //     });
  // }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    
    {
      field: "Corses",
      headerName: "Course",
      flex: 1,
    },
  
  ];

  return (
    <Box m="20px">
      <Header
        title="Students"
        subtitle="List of Students"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          // rows={students}
          rows = {mockDataStudents}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Students;
