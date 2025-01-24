import react, { use, useEffect, useState } from "react";
import axios from 'axios';
const ApiCall = () =>{
    const[data,setData] = useState([]);
    const [page,setPage] =useState(0)
     const getData = async() =>{
        const result = await axios.get('https://dummyjson.com/products');
        console.log(result?.data?.products);
        setData(result?.data?.products);
    }

    useEffect(() => {
       getData()
      },[page]);

    return(
        <>
        <table border={1} cellSpacing={1} cellPadding={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th> products</th>
                </tr>
            </thead>
        <tbody>
        {data.map((product,i) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
        </tr>
        ))}
        </tbody>
        <div style={{justifyContent:'space-between'}}>
            <button onClick={() => setPage(e => e - 1)} disabled={page === 0} > previous</button>
            <button onClick={() => setPage( e => e + 1)}> next</button>
        </div>
        </table>
        </>
    )
}

export default  ApiCall;