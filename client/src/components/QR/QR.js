import React from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';

function QR() {
  const { newCheck } = useSelector((state) => state);
  const { id } = newCheck;
  const location = `${process.env.REACT_APP_CLIENT_PATH}/bill/${id}`;
  return (
    <div style={{
      height: '1000px', margin: '50px', maxWidth: 800, width: '100%',
    }}
    >
      <QRCode
        value={location}
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        viewBox="0 0 256 256"
      />
    </div>
  );
}

export default QR;
