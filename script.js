fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => {
    const cardContainer = document.getElementById("card-row");

    data.slice(0, 10).forEach((comment) => {
      const cardHtml = `
  <div class="card col-lg-5 content-card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${comment.name}</h5>
      <p class="card-text">${comment.body}</p>
      <p class="card-text"><b>${comment.email}</b></p>
    </div>  
  </div>
`;

      cardContainer.innerHTML += cardHtml;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
