import React, { useState } from 'react';

export default function ReviewSummary({ summary }) {
  let isLong = summary.length > 60;
  let viewableSummary;

  if (isLong) {
    let truncated = summary.substring(0, 60) + '...';
    viewableSummary = [<h4> {truncated}</h4>, <p>{summary.substring(60)}</p>];
  } else {
    viewableSummary = <h4>{summary}</h4>;
  }

  return viewableSummary;
}
