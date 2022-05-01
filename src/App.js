import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = () => {
    QRCode.toDataURL(url, { width: 200, margin: 2 }, (error, url) => {
      if (error) {
        return console.error(error);
      } else {
        setQrCode(url);
      }
    });
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <div className="box">
        <input
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          onChange={handleChange}
        />
        <button onClick={generateQRCode}>
          <span>Generate</span>
        </button>
        {qrCode && (
          <div>
            <img src={qrCode} alt="qrcode" />
            <a href={qrCode} download="qrcode.png">
              Click to download QR Code
            </a>
          </div>
        )}
      </div>
      <div className="icons">
        <a href="https://github.com/mertoztat" className="icon">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://twitter.com/mertoztat" className="icon">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/mertoztat" className="icon">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
