const getData = (data) => {
    fetch(data)
      .then(response => response.json())
      .then(data => {
        sendData(data)
      }).catch(error => console.log(error))
  }
  const sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  getData('db.json')