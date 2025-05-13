import './Heading.css'
function Heading({ prop }){
    return (
        <div className="flex">
            <h1 id="head" className="w-full pb-32 pt-32 pl-32 pr-32 text-8xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">{prop}</h1>
        </div>
    )
}

export default Heading;