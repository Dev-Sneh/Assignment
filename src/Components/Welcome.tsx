import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import "./data.css"
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "body", headerName: "Body", width: 300 },
]
const Welcome: React.FC = () => {
  const [data, setdata] = useState<Post[]>([]);

  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const phoneNumber = localStorage.getItem("phoneNumber");
  const email = localStorage.getItem("email");

  if (!userName || !phoneNumber || !email) {
    const error = "First Enter Your Details!";
    alert(error);
    navigate("/", { state: { error } });
    return null;
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
      setdata(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center" }}> All Data Table</h3>
      <div className="data-grid-container" style={{ padding: 20, height: 600 }}>
        <DataGrid
          columns={columns}
          rows={data}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>
    </>
  );
};

export default Welcome;
