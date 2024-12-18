import { Link, Outlet } from "react-router";


export const App = () => {
    return (
        <>  
            <div>host app btw</div>
            <Link to='/shop'>Shop!</Link>
            <Link to='/admin'>Admin!  </Link>
            <Outlet />  
        </>
    )
}