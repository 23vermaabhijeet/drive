// import data from "../Digi.json"
import { createElement } from 'react';
import { useState, useEffect } from "react";
import State from "./State";
import Button from './Button';
function DigitalOutput(){

    const [data, setData] = useState(0);
    const [state, setState] = useState(0);

    async function getData() {
        let cont = -1;
        // console.log("Richiesta");
        const response = await fetch("/api/");
        const message = await response.json();
        // console.log("Richiesta done");
        let oper = message.states.map(item => (
            <tr >
                <td className="px-6 py-3 text-center">{`Digital Input_Output ${++cont}`}</td>
                <td className="px-6 py-3 text-center">
                    <button onClick={turnOn} value={cont} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Turn on</button>
                </td>
                <td className="px-6 py-3 text-center">
                    <button onClick={turnOff} value={cont} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Turn off</button>
                </td>
                <td className="px-6 py-3 text-center">
                <button onClick={switchState} value={cont} name={item} type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Switch state</button>
                </td>
            </tr>
        ))
        setData(oper);
    }
    async function hello(){
        setState(<State type="neg" prop="Disabled"></State>);
    }

    useEffect(() => {
        hello();
    }, []);

    useEffect(() => {
        setTimeout(() => {
          getData();
        }, 250);
    });

    function turnOn(e){
        var upload_path = "/api/turnOn";
        console.log("In turn on");
        console.log(e.target.value);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                } else if (xhttp.status == 0) {
                    alert("Server closed the connection abruptly!");
                    location.replace("/storage")
                } else {
                    alert(xhttp.status + " Error!\n" + xhttp.responseText);
                    location.reload()
                }
            }
        };
        xhttp.open("POST", upload_path, true);
        xhttp.send(e.target.value);
    }

    function turnOff(e){
        var upload_path = "/api/turnOff";
        console.log("In turn off");
        console.log(e.target.value);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                } else if (xhttp.status == 0) {
                    alert("Server closed the connection abruptly!");
                    location.replace("/storage")
                } else {
                    alert(xhttp.status + " Error!\n" + xhttp.responseText);
                    location.reload()
                }
            }
        };
        xhttp.open("POST", upload_path, true);
        xhttp.send(e.target.value);
    }

    function switchState(e){
        console.log("In switch");
        console.log("Target value: " + e.target.name);
        if(e.target.name == 0){
            console.log("In switch if yes");
            turnOn(e);
        } else {
            console.log("In switch if no");
            turnOff(e);
        }
    }

    function logsome(e){
        for(let i = 0; i < e.target.length; i++){
            if(e.target[i]){
                console.log(e.target[i]);
            }
        }
    }

    function changeState(e){

        let pin = Number(document.getElementById("pins").value)
        if(e.target.value == "on"){
            setState(<State type="pos" prop="Enabled"></State>);
            e.target.textContent = "Disable";
            e.target.classList = "w-32 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
            e.target.value = "off";
        } else {
            setState(<State type="neg" prop="Disabled"></State>);
            e.target.textContent = "Enable";
            e.target.value = "on";
            e.target.classList = "w-32 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
        }
    }

    return (
        <>
            
            <h3 className="text-3xl font-bold mt-16 mb-10">Output pins</h3>
            <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg mb-24">
                <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="col-span-2 px-6 py-3 text-center">
                                PIN
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                HIGH
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                LOW
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                SWITCH
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>


            <h3 className="text-3xl w-full font-bold mt-16 mb-10">PWM</h3>
            <div className="relative overflow-x-auto w-fit shadow-md sm:rounded-lg mb-24">
                <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="col-span-2 px-6 py-3 text-center">
                                PWM
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                DUTY CYCLE
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                PIN SELECTOR
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                STATE
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                ENABLE/DISABLE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="col" className="col-span-2 px-6 py-3 text-center">
                                PWM
                            </td>
                            <td scope="col" className="px-6 py-3 text-center">
                                <input type="number" min="0" max="100" className="border-2 p-2 rounded"/>
                            </td>
                            <td scope="col" className="px-6 py-3 text-center">
                                
                                <form class="max-w-sm mx-auto">
                                <select id="pins" onChange={logsome} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a pin</option>
                                    <option value="0">DO_01</option>
                                    <option value="1">DO_02</option>
                                    <option value="2">DO_03</option>
                                    <option value="3">DO_04</option>
                                </select>
                                </form>

                            </td>
                            <td id="state" scope="col" className="px-6 py-3 text-center">
                                {state}
                            </td>
                            <td scope="col" className="px-6 py-3 text-center">
                                <button onClick={changeState} value="on" type="button" class="w-32 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enable</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    )

}

export default DigitalOutput;