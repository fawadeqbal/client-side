import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import { ApiSlides } from "../../api/ApiSlides";
import './Slider.css'
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const nav=useNavigate();
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlide = ()=> {
    if(activeSlide ===0){
        setActiveSlide(slides.length-1);
    }else{
        setActiveSlide(activeSlide-1)
    }
}
  const nextSlide = ()=> {
        if(activeSlide === slides.length-1){
            setActiveSlide(0);
        }else{
            setActiveSlide(activeSlide+1)
        }
  }
  const handleClick =()=>{
    nav('/catagory')
  }

  const style = {
    parentDiv: "parentDiv h-[540px] bg-white flex justify-between items-center ",
    arrow:
      "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer",
    slideParent:
      "wrapper flex w-[100%] h-[500px] justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ",
    slide: "slide flex items-center justify-center h-[100%]",
    forImage: "forImage flex flex-1 justify-center itmes-center h-[100%]",
    des: "des flex flex-col flex-1 place-items-start justufy center -ml-11",
  };
  return (
    <div className={style.parentDiv}>
      {/* leftarrow div */}
      <div className={style.arrow}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prevSlide}/>
      </div>
      {/* slide div*/}
      {slides.map((slide, index) => {
        if (index === activeSlide) 
          return (
            <div className={style.slideParent+slide.background}>
              <div className={style.slide}>
                <div className={style.forImage}>
                  <img className="h-[100%] object-cover" src={slide.src} alt="" />
                </div>
                <div className={style.des}>
                  <h2 className="text-[55px] ">
                    {slide.content.h2}
                  </h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn" onClick={handleClick}>Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      )}
      {/* rightarrow div */}
      <div className={style.arrow}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide}/>
      </div>
    </div>
  );
};

export default Slider;
