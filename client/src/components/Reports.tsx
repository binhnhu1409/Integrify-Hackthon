import React from 'react'
import { DataGrid, GridColDef, GridColumnHeaderParams, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";


const Reports = () => {
  const columns: GridColDef[] = [
    {field: 'user', 
    width: 300, 
    renderHeader: (params: GridColumnHeaderParams) => (<strong>{'User'}</strong>), renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value.avatar} />
          {params.value.username}
        </>
      );
    }},
    {field: 'recentProject', width: 300, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Recent Project'}</strong>)},
    {field: 'revenue', width: 200, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Revenue'}</strong>)},
    {field: 'profit', width: 200, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Profit'}</strong>)},
    {field: 'activity', 
    width: 250, 
    renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Activity'}</strong>),
    renderCell: (params) => {
      return (
        params.value.activity == 'Sick leave' ? (
          <div className='reports__user__activity' style={{ backgroundColor: '#6F6f6f', color: '#ffffff'}}>
          {params.value.activity}
          </div>
        ):(
          <div className='reports__user__activity' style={{ backgroundColor: '#61dbfb' }}>
          {params.value.activity}
          </div>
        )
        
      );
    }}
  ];

  const rows:any = [
    {id: 1, 
      user: {username: 'Aaro Leppänen', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'}, 
      recentProject: 'FeetB', revenue: '$5,447.00', profit: '$5,447.00', 
      activity: {activity: 'Development'}},
    {id: 2, 
      user: {username: 'Jeanette Trandholm', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'} , recentProject: 'UX design', revenue: '$4,965.00', profit: '$4,965.00', 
      activity: {activity: 'Sick leave'}},
    {id: 3, 
      user: {username: 'Kalle Virtanen', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'}, recentProject: 'Space shuttle control panel', revenue: '$5,875.00', profit: '$5,875.00', activity: {activity: 'Development'}}
  ];

  return (
    <div className='reports__container'>
      <p className='reports__container__header'>Reports</p>
      <DataGrid aria-label='table'
        rowHeight={80}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}

export default Reports