// import AudiCarGallary from './audi/AudiCarGallary'

import { Outlet } from 'react-router-dom'



const Audi = () => {

    return (
        <div>
            {/* <AudiCarGallary/> */}
            <Outlet/>
        </div>

    )
}
export default Audi;