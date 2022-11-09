import React from 'react'
import { useParams } from 'react-router-dom'
import ItemUser from '../components/itemUser'
import usersList from '../components/data'
import { Box } from '@mui/system'


const User = () => {
   const {id} = useParams()
   const singleUser = usersList.find(user => user.id === id)

  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly',
        margin: '24px 8px',
        height: '70vh'

    }}>
        <ItemUser user={singleUser}/>
    </Box>
  )
}

export default User