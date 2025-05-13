import Tick from "./Tick";

function Line({ content }){
    return (
        <>
            <li className="flex items-center space-x-3 rtl:space-x-reverse text-lg text-center">
                <Tick></Tick>    
                <span className="font-semibold text-gray-900 dark:text-white">{ content }</span>
            </li>
        </>
    )
}

export default Line;