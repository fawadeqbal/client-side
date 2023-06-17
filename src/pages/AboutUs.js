import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const nav=useNavigate();

  const handleClick = ()=>{
    nav('/catagory');
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/2 px-4 lg:mb-0 mb-6">
            <h2 className="text-4xl font-medium text-gray-900 mb-4">Welcome to Our Store</h2>
            <p className="leading-relaxed text-lg">
              We are a team of passionate individuals dedicated to providing high-quality products and exceptional customer service. Our mission is to deliver an enjoyable and seamless shopping experience to our valued customers.
            </p>
            <p className="leading-relaxed text-lg mt-4">
              With a wide range of carefully curated products, we strive to meet the diverse needs and preferences of our customers. Whether you're looking for the latest fashion trends, innovative gadgets, or unique home decor, we've got you covered.
            </p>
            <p className="leading-relaxed text-lg mt-4">
              We believe in the power of customer satisfaction and continuously work towards exceeding expectations. Shop with us and experience excellence in every aspect of your journey.
            </p>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 mt-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>Shop Now</button>
          </div>
          <div className="lg:w-1/2 px-4">
            <div className="flex justify-center">
              <img className="h-160 w-120 object-cover object-center rounded" src="pics/mens3.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
