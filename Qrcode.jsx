 import { useEffect, useState } from 'react';
 import qrImage from '../Images/qrimage.png';
 import image1 from '../Images/image1.png';


const Qrcode = () => {
  const[img, setImage] = useState("Images/qrimage.png");

 useEffect(()=>{
    setImage(qrImage)
 },[])

  return (
    <>
      <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        <img src={img} className="Qr-code-image" alt="react" />
      

        <div>
          <label htmlFor="dataInput" className="input-label">
            Data for QR code:
          </label>
          <input type="text" id="dataInput" placeholder="Enter data for QR code" />
          <label htmlFor="sizeInput" className="input-label">
            Image size:
          </label>
          <input type="text" id="sizeInput" placeholder="Enter image size" />
          <button className="generate-button" onClick={()=> setImage(image1)}>Generate QR Code</button>
          <button className="download-button">Download QR Code</button> 
        </div>
        <p className="footer">
          Designed By <a href="https://www.google.com/search?q=w3schools+javascript+array+methods&rlz=1C1GCEB_enIN1085IN1085&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQ04ODQ3OTM0MDhqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8">Aravinth</a>
        </p>
      </div>
    </>
  );
};

export default Qrcode;
