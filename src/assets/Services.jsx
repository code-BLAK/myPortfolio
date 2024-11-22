const Services = () => {
  return (
    <div className="max-w-[1240px] justify-center items-center mx-auto border-t-2 border-t-[#278888]">
        <div className="items-center justify-center bg-green-500 border-t-8 border-green-700">
            <h1 className="flex justify-center text-4xl font-bold">Services</h1>
            <div className="justify-around pt-2 sm:bg-red-400">
                <div className="items-center justify-center p-4 mx-auto mb-6 text-white bg-black rounded-b-lg shadow-2xl h-80 shadow-emerald-600">
                    <h1 className="flex justify-center text-6xl">UI/UX Designs</h1>
                    <p className="mt-2 text-4xl text-center text-gray-200">
                        From wireframes to prototypes,<br /> I design interfaces that 
                        are both aesthetically pleasing and easy to navigate
                    </p>
                </div>
                <div className="items-center justify-center p-4 mx-auto mb-6 text-white bg-black rounded-b-lg shadow-2xl h-80 shadow-emerald-600">
                    <h1 className="flex justify-center text-6xl">Web Development</h1>
                    <p className="mt-2 text-4xl text-center text-gray-200">
                        From layout to functionality,<br /> I provide complete 
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
