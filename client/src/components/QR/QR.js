import React from 'react';
import QRCode from 'react-qr-code';

function QR() {
  const createQR = (url) => (
    <div>
      <QRCode value={url} />
    </div>
  );
  const location = window.location.href;
  console.log(location);
  return (
    <div>
      <QRCode value={location} />
    </div>
  );
}

export default QR;
