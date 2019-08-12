import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ApolloTest = () => {
	const queryLuke = gql`
		query getLuke {
			post @rest(type: "Post", path: "people/1") {
				name
				height
				mass
				gender
				homeworld
			}
		}
	`;

	const { loading, error, data } = useQuery(queryLuke);
	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error :(</p>;
  	console.log("Query data: ", data);
	return (
		<div key={data.post.name}>
        		Name: {data.post.name}
        		Height: {data.post.height}
        		Mass: {data.post.mass}
        		Gender: {data.post.gender}
        		Home World: {data.post.homeworld}
    	</div>
    );
};

export default ApolloTest;