import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarNavBar from './CarNavBar'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'
import FeaturedCars from '../components/featuredcars/FeaturedCars'
// import ExploreCars from '../components/explorecars/ExploreCars'
import AboutUs from '../components/aboutus/aboutus'
import ContactUs from '../components/contactus/ContactUs'
import Car from '../components/featuredcars/Car'
import CarGallary from '../components/featuredcars/CarGallary'
import CarDetail from '../components/featuredcars/CarDetails'
import AllBrands from '../components/allbrands/AllBrands'
import Bmw from '../components/allbrands/Bmw'
import Kia from '../components/allbrands/Kia'
import Audi from '../components/allbrands/Audi'
import Hyundai from '../components/allbrands/Hyundai'
import Landrover from '../components/allbrands/Landrover'
import Mahindra from '../components/allbrands/Mahindra'
import Maruti from '../components/allbrands/Maruti'
import Mercedes from '../components/allbrands/Mercedes'
import Mg from '../components/allbrands/Mg'
import Skoda from '../components/allbrands/Skoda'
import Tata from '../components/allbrands/Tata'
import Toyota from '../components/allbrands/Toyota'
import AudiCarGallary from '../components/allbrands/audi/AudiCarGallary'
import AudiCarDetails from '../components/allbrands/audi/AudiCarDetails'
import BmwCarGallary from '../components/allbrands/bmw/BmwCarGallary'
import BmwCarDetails from '../components/allbrands/bmw/BmwCarDetails'
import HyundaiCarGallary from '../components/allbrands/hyundai/HyundaiCarGallary'
import HyundaiCarDetails from '../components/allbrands/hyundai/HyundaiCarDetails'
import UserProfileForm from '../components/zform/UserProfileForm'
import ReviewComponent from '../components/zreviews/ReviewComponent'



const CarRouter = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CarNavBar />} >
                    <Route index element={<Home />} />
                    <Route path='/featuredcars' element={< FeaturedCars />} >
                        <Route path='trending-car' element={<Car />} >
                            {/* Child Routes of Car */}
                            <Route path='' element={<CarGallary />} />
                            <Route path='trending-car-detail/:id' element={<CarDetail />} />
                        </Route>
                        
                    </Route>
                    {/* <Route path='/explorecars' element={< ExploreCars />} /> */}
                    <Route path='/allbrands' element={< AllBrands />} >
                        <Route path='audi' element={<Audi />}>
                            <Route path='' element={<AudiCarGallary />} />
                            <Route path='audi-car-detail/:id' element={<AudiCarDetails />} />
                        </Route>
                        <Route path='bmw' element={<Bmw />} >
                            <Route path='' element={<BmwCarGallary />} />
                            <Route path='bmw-car-detail/:id' element={<BmwCarDetails />} />
                        </Route>
                        <Route path='hyundai' element={<Hyundai />} >
                            <Route path='' element={<HyundaiCarGallary />} />
                            <Route path='hyundai-car-detail/:id' element={<HyundaiCarDetails />} />
                        </Route>
                        <Route path='kia' element={<Kia />} />
                        <Route path='landrover' element={<Landrover />} />
                        <Route path='mahindra' element={<Mahindra />} />
                        <Route path='maruti' element={<Maruti />} />
                        <Route path='mercedes' element={<Mercedes />} />
                        <Route path='mg' element={<Mg />} />
                        <Route path='skoda' element={<Skoda />} />
                        <Route path='tata' element={<Tata />} />
                        <Route path='toyota' element={<Toyota />} />
                    </Route>
                    <Route path='/aboutus' element={< AboutUs />} />
                    <Route path='/contactus' element={< ContactUs />} />
                    <Route path='/review' element={< ReviewComponent />} />
                    <Route path='/userprofileform' element={< UserProfileForm />} />
                    <Route path='*' element={< PageNotFound />} />
                </Route>


            </Routes>
        </BrowserRouter>



    )
}
export default CarRouter