import Modal from "./Modal";

export default async function page() {
    
    const data = await fetch('https://api.themoviedb.org/3/find/tt10128846?external_source=imdb_id&api_key=2a8e8430bbef22eac05ac10b009857ef&language=en')
    const response = await data.json();
    const movieInfo = response.movie_results[0];
    
  return (
    <Modal movieInfo={movieInfo} />
  )
}
