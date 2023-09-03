import React from "react";
import { ImMap2 } from "react-icons/im";

const Header = () => {
  return (
    <div className="bg-[rgb(35,36,37)] gap-4 text-white py-5 px-7 flex items-center">
      <div className="bg-white md:block hidden text-[#30b1ff] py-4 px-4 rounded-md">
        <ImMap2 size={32}/>
      </div>
      <div>
        <div className="md:text-left text-center font-[1.1rem]">Global Consultancy - Müşteri Kayıt Formu</div>
        <div className="font-normal text-center text-[0.88rem] opacity-60">
          Başvuru sürecinizi daha rahat takip edebilmek için, lütfen kaydınızı
          oluşturun.
        </div>
      </div>
    </div>
  );
};

export default Header;
