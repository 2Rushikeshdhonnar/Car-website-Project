import { Outlet } from 'react-router-dom'
// import Monkey from './Monkey';

const Car = () => {

    return  (
        <div>
            {/* <Monkey/> */}
            <Outlet/>
            {/* <h1>Trending Cars Section</h1> */}
        </div>
    )
   
}
export default Car;