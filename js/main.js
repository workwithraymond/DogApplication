

fetch("https://api.quotable.io/quotes")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.results[0])
      document.querySelector('h2').innerText = data.results[0].content
    })
    .catch(err => {
        console.log(`error ${err}`)
    });






