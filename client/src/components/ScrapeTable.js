import React from "react";

const ScrapeTable = (props) => {
  const {scrapedItens} = props;

  return (
    <div className={"default-table-1"}>
      <h1>Scraped Rooms</h1>
      <table className="mt-4 table table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image Url</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {scrapedItens.map((item, index) => {
          return (
          <tr key={index}>
            <th>{item.name}</th>
            <td>{item.price}</td>
            <td>{item.imageUrl}</td>
            <td>{item.description}</td>
          </tr>)
        })}
        </tbody>
      </table>
    </div>
  );
};

export default ScrapeTable;
