import Link from "next/link";
import React from "react";

const Test = () => {
  return (
    <>
      <div className="flex gap-5">
        <h2>1 - simple route handler</h2>
        <Link href="/aboute" className="text-blue-400">
          go aboute
        </Link>
      </div>

      <div className="flex gap-5">
        <h2>2 - nested route handler</h2>
        <div>
          <Link href="/baran" className="text-blue-400">
            go baran
          </Link>
          <br />
          <Link href="/baran/b1" className="text-blue-400">
            go baran/b1
          </Link>
        </div>
      </div>

      <div className="flex gap-5">
        <h2>3 - wrong shape with route.js & page.jsx in a route</h2>
        <Link href="/car" className="text-blue-400">
          go car
        </Link>
      </div>

      <div className="flex gap-5">
        <h2>4 - correct shape with route.js & page.jsx in a route</h2>
        <div>
          <Link href="/dark" className="text-blue-400">
            go dark
          </Link>
          <br />
          <Link href="/dark/api" className="text-blue-400">
            go dark/api
          </Link>
        </div>
      </div>

      <div className="flex gap-5">
        <h2>5 - real route handler</h2>
        <Link href="/extra" className="text-blue-400">
          go extra
        </Link>
      </div>

      <div className="flex gap-5">
        <h2>6 - request Headers in route handler</h2>
        <Link href="/gol/api" className="text-blue-400">
          go gol/api
        </Link>
      </div>

      <div className="flex gap-5">
        <h2>7 - response Headers in route handler </h2>
        <Link href="/help/api" className="text-blue-400">
          go help/api
        </Link>
      </div>

      <div className="flex gap-5">
        <h2>8 - simple Cookies in Route Handlers </h2>
        <Link href="/ilan/api" className="text-blue-400">
          go ilan/api
        </Link>
      </div>

      <div className="flex gap-5">
        <h2>9 -  Cookies in Route Handlers with next options </h2>
        <Link href="/jack/api" className="text-blue-400">
          go jack/api
        </Link>
      </div>

    </>
  );
};

export default Test;
