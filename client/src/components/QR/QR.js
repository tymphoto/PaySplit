import React from 'react';
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';

function QR() {
  const { newCheck } = useSelector((state) => state);
  const { id } = newCheck;
  const location = `${process.env.REACT_APP_CLIENT_PATH}/bill/${id}`;
  return (
    <div>
      <QRCode value={location} />
    </div>
  );
}

export default QR;
