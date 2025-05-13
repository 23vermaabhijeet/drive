// import data from "../Digi.json"
import { useState, useEffect } from "react";
import State from "./State";

function DigitalInput(){

    const [data, setData] = useState(0);
    
    async function getData() {
        let cont = 0;
        // console.log("Richiesta");
        const response = await fetch("/api/");
        const message = await response.json();
        // console.log("Richiesta done");
        let oper = message.states.map(item => (
            <tr >
                <td className="px-6 py-3 text-center">{`Digital Input ${cont++}`}</td>
                <td className="px-6 py-3 text-center">{(item) == 1 ? 
                    <State type="pos" prop="High"></State> : <State type="neg" prop="Low"></State>}</td>
            </tr>
        ))
        setData(oper);
    }

    
    useEffect(() => {
        setTimeout(() => {
          getData();
        }, 250);
    });

    return (
        <>
            
            <h3 className="text-3xl font-bold mt-16 mb-10">Input pins</h3>
            <div className="relative overflow-x-auto shadow-md w-full sm:rounded-lg mb-24">
                <table className="table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                PIN
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                STATE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {data.states.map(item => (
                            <tr >
                                <td className="px-6 py-3 text-center">{`Digital Input ${cont++}`}</td>
                                <td className="px-6 py-3 text-center">{(item) == 1 ? 
                                    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                        <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                                        High
                                    </span> : 
                                <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                    <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                                    Low
                                </span>}</td>
                            </tr>
                        ))} */}
                        {data}
                    </tbody>
                </table>
            </div>
        </>
    )

}

export default DigitalInput;