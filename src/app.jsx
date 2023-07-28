import QRCode from 'react-qr-code';
import Footer from "./components/footer"
import NavBar  from "./components/navbar";
import { useState } from 'react';

function App (){

    const [txt , setText] = useState("jj");

    function handleChange(e){
        setText(e.target.value);
    }

    return  <>
    <div className="main">

    <NavBar/>

    <h1> QR Code Generator </h1>

    <QRCode  value={txt}  
        fgColor= "#020024"
        size={"5vw"}
    style={{ height: "auto", maxWidth: "50%", width: "20%" }}
    />

    <center>
    <input  type="text" value={txt} placeholder="Text \ URL" className="ip"  onChange={(e) =>handleChange(e)}
    /> 
    </center>

    <Footer />
    </div>
</>

}

export default App;