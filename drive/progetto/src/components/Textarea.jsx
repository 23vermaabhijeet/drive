import Button from "./Button";
import { useState, useEffect } from "react";

function Textarea(){
    
    let url = window.location.href;
    let len = url.split("/").length;
    let filepath = "/" + url.split("/")[len - 2] + "/" + url.split("/")[len - 1];
    let filename = url.split("/")[len - 1];
    const [data, setData] = useState(0);
    async function getData() {
        console.log("Getting data of: ", filepath);
        const response = await fetch(filepath);
        const message = await response.text();
        console.log(message);
        let box = <textarea id="editor" rows="8" className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Add something to file..." required >{message}</textarea>
        setData(box);
    }
    
    useEffect(() => {
        getData();
    }, []);




    function upload() {
        let textToWrite = document.getElementById('editor').value;
        var file = new File([ textToWrite ], filename, { type: "text/plain"});
        var upload_path = "/upload/" + filename;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    location.replace("/storage");
                } else if (xhttp.status == 0) {
                    alert("Server closed the connection abruptly!");
                    location.reload()
                } else {
                    alert(xhttp.status + " Error!\n" + xhttp.responseText);
                    location.reload()
                }
            }
        };
        xhttp.open("POST", upload_path, true);
        xhttp.send(file);
    }


    function copyText(){
        navigator.clipboard.writeText(document.getElementById("editor").value);
    }

    function boldText(){
        let elem = document.getElementById("editor");
        if(elem.style.fontWeight == 800)
            elem.style.fontWeight = 500;
        else
            elem.style.fontWeight = 800;
    }

    function underlineText(){
        let elem = document.getElementById("editor");
        if(elem.style.textDecoration == "underline")
            elem.style.textDecoration = "none";
        else
            elem.style.textDecoration = "underline";
    }

    function italicText(){
        let elem = document.getElementById("editor");
        if(elem.style.fontStyle == "italic")
            elem.style.fontStyle = "normal";
        else
            elem.style.fontStyle = "italic";
    }
    
    return (
            <form>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                                <span id="filename">{filename}</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                            <button type="button" onClick={underlineText} className=" ml-4 p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <span className="w-4 h-4 font-bold underline underline-offset-2">U</span>
                                <span className="sr-only">Underline</span>
                            </button>
                            <button type="button" onClick={italicText} className=" ml-4 p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <span className="w-4 h-4 font-bold italic">I</span>
                                <span className="sr-only">Italic</span>
                            </button>
                            <button type="button" onClick={boldText} className=" ml-4 p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <span className="w-4 h-4 font-bold">B</span>
                                <span className="sr-only">Bold</span>
                            </button>
                            <button type="button" onClick={copyText} className="ml-4 p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                        {data}
                    </div>
                </div>
                <button type="button" onClick={upload} className={`w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto`}>Update</button>
            </form>
    )
}

export default Textarea;