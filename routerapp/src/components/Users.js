import React from 'react'
import { Link, Outlet} from 'react-router-dom';

function Users() {
  return (
    <div>
      <h1>Users Details Page</h1>
      <h2>
        <Link to='/users/1'>User 1</Link>
      </h2>
      <h2>
        <Link to='/users/2'>User 2</Link>
      </h2>
      <h2>
        <Link to='/users/3'>User 3</Link>

      </h2>
      <h2>
        <Link to='/users/4'>User 4</Link>

      </h2>
      <h2>
        <Link to='/users/5'>User 5</Link>

      </h2>
      {/* outlet childer component ko kaha render krwana h is liye use hota h */}
   <Outlet/>
    </div>
  
  )
}

export default Users;
