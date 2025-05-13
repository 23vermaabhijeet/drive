import Heading from "./components/Heading";
import DigitalInput from "./components/DigitalInput";
import DigitalOutput from "./components/DigitalOutput";
function Gpios(){
    return (
        <>
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <a href="/home"><button  type="button" className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    Home page
                </button></a>
                <a href="/storage"><button  type="button" className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    Go to files
                </button></a>
                <a href="/upload"><button  type="button" className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    Upload a new file
                </button></a>
                <a href="/gpios"><button  type="button" className="mr-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg bg-gray-100 text-blue-700 z-10 ring-2 ring-blue-700 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    GPIOS
                </button></a>
            </div>
            <Heading prop="GPIOS"></Heading>

            <h2 className="text-5xl font-bold mt-16 mb-10">Digital pins</h2>
            <div className="flex flex-nowrap overflow-x-auto">
                <div className="m-8 mr-16">
                    <DigitalInput></DigitalInput>
                </div>
                <div className="m-8 ml-16">
                    <DigitalOutput></DigitalOutput>
                </div>
            </div>
        </>
    )
}

export default Gpios;