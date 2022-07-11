import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function RelatedCard() {
  return (
    <Link to="/37320">
      <div>
        Infinity Stones
        <p className="placeholder">Hey, I&apos;m a related card!</p>
        {/* <Img src="" Alt="" className="relatedProducts" */}
      </div>
    </Link>
  );
}
