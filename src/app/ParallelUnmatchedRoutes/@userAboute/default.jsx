import Link from "next/link";
import React from "react";

const DefaultUserAboute = () => {
  return (
    <div>
      <h1>UserAboute</h1>
      <Link className="text-blue-400" href="/ParallelUnmatchedRoutes/detail">
        go to detail
      </Link>
    </div>
  );
};

export default DefaultUserAboute;
