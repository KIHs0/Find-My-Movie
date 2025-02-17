const moviename = document.getElementById("movieName");
const result = document.getElementById("result");

const getdata = () => {
  result.innerHTML = "";
  const movienameee = moviename.value;
  if (!movienameee) return (result.innerHTML = ` give input`);
  let url = `http://www.omdbapi.com/?t=${movienameee}&apikey=1eee899b`;

  try {
    const apifetched = fetch(url);
    apifetched
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(`${data.Year}`);
        result.innerHTML = `
        <div class="info">
  <img src="${data.Poster}" class="poster" alt="" srcset="" />
</div>
<h3 class="ti">${data.Title}</h3>

<div class="rating">
<img src="data:image/png;base64,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">
  <h3>${data.imdbRating}</h3>
</div>

<div class="genre">
<div>${data.Genre.split(",").join("</div><div>")}</div>

</div>

<div class="plot">
<h1>Plot:</h1>  
<h3> ${data.Plot}</h3>
</div>
 
<div class="cast">
<h1> Cast : </h1>
  <h3>${data.Actors}</h3>
</div>

        
        `;
        // document.createElement("img").src = `${data.poster}`;
      })
      .catch((e) => {});
    console.log(data.Error);
  } catch (e) {
    console.log(e);
  }
};
const searchbtn = document.getElementById("go");

searchbtn.addEventListener("click", getdata);
