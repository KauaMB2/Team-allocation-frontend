import axios from "axios"
const api=axios.create({
    baseURL:'http://localhost:3333'
})

export default api

/*                 HTTP METHODS               */ 
// // GET request example
// axios.get('/api/users')
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // PUT request example
// axios.put('/api/users/123', { name: 'John', age: 30 })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // GET request example with query parameters
// axios.get('/api/users', { params: { age: 30 } })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // DELETE request example
// axios.delete('/api/users/123')
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // PATCH request example
// axios.patch('/api/users/123', { age: 31 })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// // POST request example
// axios.post('/api/users', { name: 'Jane', age: 25 })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));