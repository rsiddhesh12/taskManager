import react from "react";

function ChildComponent({onData}){
    const sendDataToParent = () =>{
        const data = 'Hello from child';
        onData(data);
    }

    return(
        <>
        <button onClick={sendDataToParent}>Send Data to Parent</button>
        </>
    );
}

export default ChildComponent;

