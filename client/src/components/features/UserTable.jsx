import * as React from 'react';
import { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { graduatesContext } from '../../contexts/graduates';

const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  {
    field: 'image',
    headerName: 'Image',
    width: 70,
    renderCell: (params) => (
      <img
        src={params.row.image}
        alt={params.row.firstName}
        style={{ width: 50, height: 50, borderRadius: '50%' }}
      />
    ),
  },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'userType', headerName: 'User Type', width: 100 },
  { field: 'service', headerName: 'Service', width: 130 },
  { field: 'employmentStatus', headerName: 'Status', width: 150 }
];

export default function DataTable() {
  const { graduates } = useContext(graduatesContext);
  const rows = graduates ? [...graduates] : [];

  return (
    <div style={{ height: 400, width: '100%', margin: 'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        pagination
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
        autoHeight
      />
    </div>
  );
}
