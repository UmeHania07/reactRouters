import React from 'react'
import { useParams } from 'react-router-dom'

function Usersdetails() {
  // useparam humhy current url deta h or wohi hum apne <h1> mai display kahy hn

  // const  userid =useParams();
  // const id = userid.id;
  const {id} = useParams();
   return ( 
    <div>
      {/* <h1>{id}</h1> */}
      <h2>User details page..{id}</h2>
    </div>
  )
}

export default Usersdetails
