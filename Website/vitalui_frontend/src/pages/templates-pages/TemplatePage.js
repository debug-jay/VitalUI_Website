import React from "react";
import Navigation from "../../components/Navigation";

const TemplatePage = (props) => {
    return(
        <>
        <Navigation />
    
            <div className='border border-transparent mx-3 lg:mx-64'>
                <p className=" w-full flex justify-center mt-28 mb-20 text-white text-4xl font-bold">{props.sectionName}</p>
                <p className="text-white flex ml-5 text-2xl">Simplest</p>
                <div className=" mt-5 space-x-5 mx-5 flex">
                    <div className="flex space-x-5 w-full">
                    <div className=" p-1 shadow-lg text-white border border-purple-500 hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 rounded-md w-16 flex justify-center">
                        <button>View</button>
                    </div>
                    <div className="shadow-lg text-white border border-purple-500 hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 rounded-md w-16 flex justify-center">
                        <button>Copy</button>
                    </div>
                    <div className=" w-full justify-end space-x-5 hidden lg:flex">
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Mobile</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Small</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Medium</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Large</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Full</button>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    <div className="border-2  mx-5 mt-5 rounded-lg shadow-lg" id="box_temp"></div>

                    <p className="text-white flex ml-5 text-2xl mt-40">Simplest</p>
                <div className=" mt-5 space-x-5 mx-5 flex">
                    <div className="flex space-x-5 w-full">
                    <div className=" p-1 shadow-lg text-white border border-purple-500 hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 rounded-md w-16 flex justify-center">
                        <button>View</button>
                    </div>
                    <div className="shadow-lg text-white border border-purple-500 hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 rounded-md w-16 flex justify-center">
                        <button>Copy</button>
                    </div>
                    <div className=" w-full justify-end space-x-5 hidden lg:flex">
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Mobile</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Small</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Medium</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Large</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Full</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="border-2  mx-5 mt-5 rounded-lg shadow-lg" id="box_temp"></div>

                    <p className="text-white flex ml-5 text-2xl mt-40">Simplest</p>
                <div className=" mt-5 space-x-5 mx-5 flex">
                    <div className="flex space-x-5 w-full">
                    <div className=" p-1 shadow-lg text-white border border-purple-500 hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 rounded-md w-16 flex justify-center">
                        <button>View</button>
                    </div>
                    <div className="shadow-lg text-white border border-purple-500 hover:border-transparent hover:text-teal-500 hover:bg-black hover:bg-opacity-30 rounded-md w-16 flex justify-center">
                        <button>Copy</button>
                    </div>
                    <div className=" w-full justify-end space-x-5 hidden lg:flex">
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Mobile</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Small</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Medium</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Large</button>
                        </div>
                        <div className="shadow-lg text-white border hover:border-transparent hover:text-teal-500 hover:bg-white rounded-md w-16 flex justify-center">
                            <button>Full</button>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="border-2  mx-5 mt-5 rounded-lg mb-40 shadow-lg" id="box_temp"></div>
            </div>
        </>
    );
}

export default TemplatePage;