import { Outlet } from "react-router";


export const App = () => {
    return (
        <>
            <div>i'm an admin panel</div>
            <Outlet />  
        </>
    )
}