import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Page = ({handlePageChange, totalPages, selectedPage}) => {

  return (
    <Stack spacing={2}
    alignItems="center">  
      <Pagination 
      page={selectedPage}
      onChange={handlePageChange}
      count={totalPages}
      showFirstButton showLastButton 
      shape="rounded" 
        sx={{
          '& .MuiPaginationItem-root': {
            background: 'linear-gradient(90deg, #D6C7FF, #AB8BFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'white',
            borderColor: '#AB8BFF',
          },
          '& .Mui-selected': {
            background: 'linear-gradient(90deg, #D6C7FF, #AB8BFF)',
            color: 'black',
            WebkitTextFillColor: 'black',
            borderColor: '#D6C7FF',
            fontWeight: 'bold',
          },
          '& .MuiPaginationItem-icon': {
            color: 'white', 
          },
        }}
      />
    </Stack>
  )
}

export default Page
