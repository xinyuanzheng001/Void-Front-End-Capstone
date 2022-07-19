import React from 'react';

export default function Summary() {
  return (
    <div
      style={{
        marginLeft: '20px',
        width: '25%',
        border: '1px lightgrey solid'
      }}
    >
      <h1 style={{ textAlign: 'center', width: '100%' }}>Summary</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 25px'
        }}
      >
        <p>Items Price:</p>
        <p>$1000</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 25px'
        }}
      >
        <p>Tax:</p>
        <p>$5</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 25px'
        }}
      >
        <p>Delivery Charge:</p>
        <p>$10</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 25px'
        }}
      >
        <p>Discount: </p>
        <p>$0</p>
      </div>
    </div>
  );
}
