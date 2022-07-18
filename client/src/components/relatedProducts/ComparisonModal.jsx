import React from 'react';


export default function ComparisonModal({show, onClose}) {
  if (!show) {
    return null
  }

  return (
    <div style={{backgroundColor: 'pink', position: "absolute", top: '0', right: '0', bottom: '0', left: '0'}}>
    <div>Comparison</div>
    <button onClick = {onClose}>Close</button>
    </div>
  )
}

//get product comparison details can do that from state
//