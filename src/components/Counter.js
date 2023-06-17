import React from "react";

function Counter({ incrQuan, decrQuan,quantity }) {
  return (
    <div>
      <div className="counter flex items-end text-xl justify-end">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div onClick={decrQuan} className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
            <button >-</button>
          </div>
          <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
           {quantity}
          </div>
          <div onClick={incrQuan} className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
          <button >+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
