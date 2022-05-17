import React from "react";
import gambar from "../assets/undraw_access_account_re_8spm.svg";

const Form = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-[#1C1E21] bg-[#0F172A] select-none">
      <div className="flex justify-center items-center">
        <div>
          <img src={gambar} alt="" className="w-full h-full pt-8 pb-16" />
        </div>
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 pb-8">
            <label htmlFor="email" className="text-base text-white font-bold px-8">
              Email
            </label>
            <input type="email" placeholder="egagofurtriwahana@gmail.com" className="input w-full text-white max-w-xs" />
          </div>
          <div className="w-full px-4 pb-8">
            <label htmlFor="password" className="text-base text-white font-bold px-4">
              Password
            </label>
            <input type="password" placeholder="your password" className="input w-full text-white max-w-xs" />
          </div>
          <div className="w-full px-8 pb-8">
            <div className="w-full font-bold">
              <p className="font-bold text-white ">Gender</p>
            </div>
            <div className="flex">
              <div className="form-check">
                <input type="radio" name="gender" className="input w-4" />
                <label className=" text-white font-bold px-8 border border-gray-500 rounded p-2">male</label>
              </div>
              <div className="form-check pl-8">
                <input type="radio" name="gender" className="input w-4" />
                <label className=" text-white font-bold px-8 border border-gray-500 rounded p-2">female</label>
              </div>
            </div>
          </div>
          <div className="text-gray-400 py-2">
            <select class="select select-primary w-full max-w-xs">
              <option disabled selected>
                Silahkan pilih orientasi minat
              </option>
              <option>Design Grafis</option>
              <option>Progammer Java</option>
              <option>Sistem Analis</option>
              <option>Ahli Jaringan</option>
            </select>
          </div>
          <div className="">
            <textarea class="textarea textarea-primary w-full text-white" placeholder="description"></textarea>
          </div>
          <div className="py-4">
            <label htmlFor="password" className="text-base text-white font-bold px-4">
              ingatkan saya
            </label>
            <input type="checkbox" className="checkbox checkbox-primary border-2" />
          </div>
          <div className="flex justify-center gap-4 py-4">
            <button className="btn btn-primary hover:bg-transparent">Login</button>
            <button className="btn border-2 border-gray-500 text-white hover:btn-primary bg-transparent">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
