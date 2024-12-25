import React from "react";

const Students = ({ params }) => {
  if (params.slug?.length > 0) {
    return (
      <div>
        {params.slug.map((item) => {
          return <h1>{item}</h1>;
        })}
      </div>
    );
  }
  return <h1>no params</h1>
};

export default Students;
