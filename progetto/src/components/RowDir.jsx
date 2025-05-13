import Button from "./Button";
function RowDir({ prop, choosepath }){
    function changePath(){
        choosepath(prop.path);
    }

    function deleteFile() {
        var filePath = prop.path;
        filePath = filePath.substring(1, filePath.length);
        var delete_path = "/delete/" + filePath;
        if (confirm("Attention! The following action will permanently delete this directory and all the files it contains. Do you still want to continue?") == true) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        console.log("entered");
                        location.reload()
                    } else if (xhttp.status == 0) {
                        alert("Server closed the connection abruptly!");
                        location.reload()
                    } else {
                        alert(xhttp.status + " Error!\n" + xhttp.responseText);
                        location.reload()
                    }
                }
            };
            xhttp.open("POST", delete_path, true);
            xhttp.send(null);
        }
    }

    return(
        <>
            <button onClick={changePath} type="button" className={`mt-2 mb-2 ml-2 uppercase w-24 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}>{prop.dirname}</button>
            <button onClick={deleteFile} type="button" className={` uppercase w-8 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2 border-b-4 border-red-700 hover:border-red-500 rounded`}>X</button>
        </>


    )
}

export default RowDir;