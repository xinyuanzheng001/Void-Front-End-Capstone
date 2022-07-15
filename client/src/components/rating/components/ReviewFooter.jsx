import React from 'react';
import { useSelector } from 'react-redux';

//Helper Functions
import totalReviews from '../helpers/totalReviews';

export default function ReviewFooter() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  return (
    <>
      <button>
        More Reviews
      </button>
      <button>
        Add a Review
      </button>
    </>
  );
}
