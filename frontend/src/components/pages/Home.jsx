import React from 'react';
import { useLocation } from 'react-router-dom';
import DUMMY_DATA from '../utils/Home_products';
import Homecard from '../Homecard';
import Logo from "../assets/home-1.jpeg";
import img1 from "../assets/delivery-van.svg"
import img2 from "../assets/money-back.svg"
import img3 from "../assets/service-hours.svg"
const Home = () => {

  const location=useLocation();

  return (
    <div class="flex justify-center items-center flex-col">
      {/* <h1>{location.state.id}</h1> */}
    <section style={{width:"100%", maxWidth:"1350px", backgroundColor:"#0a192f"}} class="md:w-4/5 lg:w-4/5 xl:w-3/4 h-[400px] border border-black flex mt-11">
      <div class="w-full md:w-2/3 p-8 md:mt-16">
        <p class="text-5xl text-white mb-4" style={{fontFamily:"'Roboto', sans-serif"}}>Shop everything with Quality</p>
        <p class="text-white mb-10" style={{fontFamily:"'Roboto', sans-serif"}} >Shopping for nutritious grains should leave you feeling satisfied and energized, with savings in your wallet. From a variety of multi-grains, including quinoa, barley, millet, and more, we've got your pantry essentials covered.</p>
        <a href='/products'><button   class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">Shop Now</button></a>
      </div>
      <div class="hidden md:block md:w-1/3  justify-center items-center">
        <img src={Logo} alt="Placeholder" class="h-full object-cover" />
      </div>
    </section>

    <section>
    <div class="container py-16">
        <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src={img1} alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                    <p class="text-gray-500 text-sm">Order over ₹5000</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src={img2} alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">Money Rturns</h4>
                    <p class="text-gray-500 text-sm">7 days money returs</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src={img3} alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">24/6 Support</h4>
                    <p class="text-gray-500 text-sm">Customer support</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    <h1 style={{fontSize:"2em",fontWeight:"bold",justifyContent:"left",width:"100%",marginLeft:"80px",fontFamily:"font-family: Tajawal, Helvetica, Arial, sans-serif"}}>Our products</h1>
    <section class="w-full mt-8 md:mt-20 mb-16 md:mb-20">
  <a href='/products'><div class="card-container flex flex-wrap justify-center gap-8">
    {DUMMY_DATA.map((data, index) => (
      <Homecard key={index} myImage={data.image} myTitle={data.title} />
    ))}
  </div></a>
</section>
{/* <h1 style={{fontSize:"2em",fontWeight:"bold",justifyContent:"left",width:"100%",marginLeft:"80px",fontFamily:"font-family: Tajawal, Helvetica, Arial, sans-serif"}}>Recommended 
</h1> */}
{/* <section class="w-full mt-8 md:mt-20 mb-16 md:mb-20 flex justify-center">
  <div class="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 xl:gap-16 max-w-screen-xl">
    {RECOMMENDED_PRODUTS_DATA.map((data, index) => (
      <Recommendedcard key={index} productImage={data.image} productTitle={data.title} productRate={data.price} />
    ))}
  </div>
</section> */}




  </div>
  
  );
};

export default Home;
