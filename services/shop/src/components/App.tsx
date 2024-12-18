import { Outlet } from "react-router";


export const App = () => {
    return (
        <>  
            <div>I'm a shop</div>
            <Outlet />  
        </>
    )
}