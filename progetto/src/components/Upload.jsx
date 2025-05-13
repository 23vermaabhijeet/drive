import { useState, useEffect } from "react";
function Upload(){
    function changepath() {
        var default_path = document.getElementById("dropzone-file").files[0].name;
        document.getElementById("filepath").value = default_path;
    }

    function upload() {
        var filePath = document.getElementById("filepath").value;
        var upload_path = "/upload/" + filePath;
        var fileInput = document.getElementById("dropzone-file").files;

        if (fileInput.length == 0) {
            alert("No file selected!");
        } else if (filePath.length == 0) {
            alert("File path on server is not set!");
        } else if (filePath.indexOf(' ') >= 0) {
            alert("File path on server cannot have spaces!");
        } else if (filePath[filePath.length-1] == '/') {
            alert("File name not specified after path!");
        } else if (fileInput[0].size > 200*1024) {
            alert("File size must be less than 200KB!");
        } else {
            var file = fileInput[0];
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
    }


    function dropFile(){
        let elem = document.getElementById('dropzone-file');
        let box = document.getElementById('box');
        document.addEventListener('dragover', (e) => {
            box.classList.remove("border-gray-300");
            box.classList.add("border-blue-600");

            box.classList.remove("bg-gray-50");
            box.classList.add("bg-gray-100");
            console.log("dragover")
            e.preventDefault()
        });

        document.addEventListener('dragleave', (e) => {
            box.classList.remove("border-blue-600");
            box.classList.add("border-gray-300");
            
            box.classList.remove("bg-gray-100");
            box.classList.add("bg-gray-50");
            e.preventDefault()
        });

        document.addEventListener('drop', (e) => {
            box.classList.remove("border-blue-600");
            box.classList.add("border-gray-300");
            
            box.classList.remove("bg-gray-100");
            box.classList.add("bg-gray-50");
            elem.files = e.dataTransfer.files;
            changepath();
            e.preventDefault()
        });
    }

    useEffect(() => {
        dropFile();
    }, []);

    return (
        <>
        <h2 className="text-3xl font-bold mb-10">Upload a new file</h2>
        <div className="flex items-center justify-center w-full flex-col">
            <label id="box" for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">(MAX. 200KB)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={changepath}/>
            </label>

            <div className="w-full flex justify-around items-center mt-8">
                <div className="mb-6 w-9/12">
                    <label for="filepath" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change path or name</label>
                    <input type="text" id="filepath" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <button type="button" onClick={upload} className={`w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-auto`}>Upload</button>

            </div>
        </div> 
        </>
    )
}

export default Upload;