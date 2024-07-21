import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='bg-light'>
       
        <div className="container py-3">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout