import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from "../../components/ListItem";

export default function SellerPage(): JSX.Element {

  return (
    <div>
      <Link to="/">
        &larr; Back
      </Link>

      <h1>Seller</h1>
      <ListItem />
    </div>
  );
}
