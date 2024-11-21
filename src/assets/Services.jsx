const Services = () => {
  return (
    <div className="max-w-[1240px] justify-center items-center mx-auto border-t-2 border-t-[#278888]">
        <div className="items-center justify-center border-t-8 border-green-700">
            <h1 className="flex justify-center text-4xl font-bold">Services</h1>
            <div className="flex justify-around pt-4 mx-auto">
                <div className="items-center justify-center max-w-sm p-4 mx-auto text-white bg-black rounded-lg shadow-lg h-80 shadow-emerald-950">
                    <h1 className="flex justify-center">UI/UX Designs</h1>
                    <p className="mt-2 text-center text-gray-200">
                        From wireframes to prototypes, I design interfaces that 
                        are both aesthetically pleasing and easy to navigate
                    </p>
                </div>
                <div className="justify-center max-w-sm p-4 mx-auto overflow-hidden text-white bg-black rounded-lg shadow-lg shadow-emerald-950">
                    <h1 className="flex justify-center">Web Development</h1>
                    <p className="mt-2 text-center text-gray-200">
                        From layout to functionality, I provide complete 
                        web design services that deliver fast, secure, 
                        and visually appealing websites
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services
