import React from "react";
interface IPriceInfo {
  title: string;
  description: string;
  price: string;
}
function PriceInfo(props: IPriceInfo) {
  const { title, description, price } = props;
  return (
    <>
      <h3>{title}</h3>
      <div className="priceLayout">
      <p className="description">{description} </p>
      <p className="price">{price}</p>
      </div>
      <hr></hr>
    </>
  );
}

export default PriceInfo;
