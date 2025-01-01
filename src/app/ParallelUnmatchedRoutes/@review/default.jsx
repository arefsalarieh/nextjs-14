import Link from "next/link";
import React from "react";

const DefaultReview = () => {
  return (
    <div>
      <h1>Review</h1>
      <Link className="text-blue-400" href="/ParallelUnmatchedRoutes/old">
        go to old
      </Link>
    </div>
  );
};

export default DefaultReview;
