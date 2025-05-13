function Breadcrumbs({ fullpath, choosepath }){

    let arr = fullpath.split("/");
    arr.pop();
    let paths = [];
    paths[0] = "/" + arr[0] + "/";
    for(let i = 1; i < arr.length; i++){
        paths[i] = paths[i - 1] + arr[i] + "/";
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    arr[0] = "files";
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
    function changePath(e){
        choosepath(e.target.id);
    }
    let cont = 0;

    return (
        <>
            <div className="flex w-fit m-auto items-center align-center px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol key={"/home"} className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li key={"/home"} className="inline-flex items-center">
                <a href="/home" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Home
                </a>
                </li>


                {paths.map(path => (
                    <li key={path} className="inline-flex items-center"> 
                    <div className="flex items-center">
                        <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span onClick={changePath} id={path} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white cursor-pointer">{arr[cont++]}</span>
                    </div>
                    </li>
                ))}
            </ol>
            </div>
        </>
    )
}

export default Breadcrumbs;