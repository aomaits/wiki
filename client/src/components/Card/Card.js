// Card.js
import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_CHARACTERS } from '../../utils/queries';

function Card() {
  const { loading, error, data } = useQuery(QUERY_ALL_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const characters = data.characters; // Adjust this according to your query structure

  return (
    <div>
        {data}
    </div>
  );
};

export default Card;