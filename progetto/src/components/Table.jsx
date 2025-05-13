//import data from "../Data.json"
import Breadcrumbs from "./Breadcrumbs";
import Row from "./Row";
import RowDir from "./RowDir";
import { useState, useEffect } from "react";

let def_path = "/storage/";

export default function Table(){
    const [data, setData] = useState(0);
    const [dir, setDir] = useState(0);
    const [bcumbs, setCumbs] = useState(0);

    async function getData() {
        
        // const response = await fetch(def_path);
        // const message = await response.json();
        // setData(files);
        
        // let listFiles = nico.files.map(item => (
        //     <Row prop={item}></Row>
        // ))   
        // // let directs = message.dir.map(item => (
        // //     <RowDir prop={item} choosepath={choosepath}></RowDir>
        // // ))
        // let data = <Breadcrumbs fullpath={def_path.substring(1, def_path.length)} choosepath={choosepath}></Breadcrumbs>;
        // setData(listFiles);
        // setDir(directs);
        // setCumbs(data);
        

        fetch('http://localhost:3001/api/zprenotaioni')
        .then(res => res.json())
        .then(data => {
            const listFiles = data.map((item, index) => (
                <Row key={index} prop={item} />
            ));
            setData(listFiles);
            setCumbs(<Breadcrumbs fullpath="/prenotazioni" />);
        })
        .catch(err => console.error("Fetch error:", err));


    }

    // function choosepath(path){
    //     def_path = path;
    //     console.log("Dirpath: " + def_path);
    //     async function newData() {
    //         console.log("Richiesta");
    //         const response = await fetch(def_path);
    //         const message = await response.json();
    //         // setData(files);
            
    //         console.log("Richiesta done");
    //         let listFiles = message.files.map(item => (
    //             <Row prop={item}></Row>
    //         ))   
    //         let directs = message.dir.map(item => (
    //             <RowDir prop={item} choosepath={choosepath}></RowDir>
    //         ))
    //         setData(listFiles);
    //         setDir(directs);
    //         let data = <Breadcrumbs fullpath={def_path.substring(1, def_path.length)} choosepath={choosepath}></Breadcrumbs>;
    //         setCumbs(data);
    //     }
    //     newData();
    // }
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {bcumbs}
            <h2 className="text-5xl font-bold mt-16 mb-10">Files & Folders</h2>
            <div className="ml-8 flex flex-wrap mb-8">
                <div className="flex flex-nowrap overflow-x-auto items-center">
                    {(dir.length > 0) ? <div className="mr-4">Folder(s): </div> : <h3></h3>}
                    {(dir.length > 0) ? dir : <h3></h3>}
                    {/* {(data.dir.length > 0) ? data.dir.map(item => (
                        <RowDir prop={item} choosepath={choosepath}></RowDir>
                    )) : <h3></h3>} */}
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-24">
                <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Filename
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Filesize
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Download
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                    {data.length > 0
                        ? data.flat().map((item, i) => (
                            <Row key={i} prop={item} />
                        ))
                        : (
                            <tr>
                                <td className="px-6 py-3 text-center" colSpan={6}>No file present</td>
                            </tr>
                        )
                    }
                    
                    </tbody>
                </table>
            </div>
        </>
    )
}