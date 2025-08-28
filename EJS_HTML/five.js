import fetch from 'node-fetch';

fetch('https://dummyjson.com/users')
  .then(response => response.json())
  .then(data => console.log('Response:', data))
  .catch(err => console.error('Error:', err));