import React from "react";
import {useQuery} from "@tanstack/react-query"
import { useGlobalContext } from "./context";
import axios from "axios";
const id = import.meta.env.VITE_API_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${id}&query=`;
function Gallery() {
  const { searchTerm } = useGlobalContext();

  const {data, isLoading, isError } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      const {data} = await axios.get(`${url}${searchTerm}`);
      return data;
    }
  })
  console.log(data)
  if(isLoading) {
    return <section className="image-container">
      <h4>Loading...</h4>
    </section>
  }

  if(isError) {
    return <section className="image-container">
      <h4>There was an error...</h4>
    </section>
  }

  if(data.results.length < 1) {
    return <section className="image-container">
      <h4>No result found...</h4>
    </section>
  }

  return (
    <section className="image-container">
      {
        data.results.map((photo) => {
          const {id, urls, alt_description} = photo;
          const {regular} = urls;
          return (
            <img src={regular} alt={alt_description} className="img" key={id}/>
          );
        })
      }
    </section>
  );
}

export default Gallery;
