import Button from "./Button";
import Edit from "../Edit";
function Row({ prop }){
    function deleteFile() {
        var filePath = prop.path;
        var delete_path = "/delete/" + filePath;
        if (confirm("Delete this file permanently") == true) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        location.reload();
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
            <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4"><a href={prop.path} style={{textDecoration: "none", all: "unset", cursor: "pointer"}}>{prop.filename}</a></td>
                <td className="px-6 py-4">{prop.filesize}</td>
                <td className="px-6 py-4 uppercase">{prop.type}</td>
                <td className="px-6 py-4">{
                    <a href={prop.path} download>
                        <button type="button" className={`w-32 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>Download</button>
                    </a>
                }</td>
                <td className="px-6 py-4">{<Button text="Edit" ahref={("/edit").concat(prop.path)} color="blue" wid="32"></Button>}</td>
                <td className="px-6 py-4">{
                    <button type="button" onClick={deleteFile} className={`w-32 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}>Delete</button>
                }</td>
            </tr>
        </>
    )
}

export default Row;