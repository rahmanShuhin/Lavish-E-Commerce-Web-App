import React from "react";
import ProductCard from "./ProductCard";
export const fake = [
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
  {
    id: "1",
    img: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/691267.jpg?X56",
    name: "Navy Chest Stripe Short Pyjama Set",
    price: 22,
  },
];

const Products = () => {
  return (
    <div className="products">
      {/* product category and filter */}
      <div>
        <div className="products__top">
          <div className="products__left">
            <p>All</p>
            <p>MAN</p>
            <p>WOMAN</p>
            <p>KIDS</p>
            <p>FASHION</p>
          </div>
          <div className="products__right">
            <select name="" id="">
              <option value="filter">FILTER</option>
            </select>
          </div>
        </div>
        {/* product card map  */}
        <div className="products__bottom">
          {fake.map((x) => (
            <ProductCard x={x}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
