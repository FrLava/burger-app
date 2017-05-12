export class BurgersService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
    

  }

    getBurgers () {
    return this.$http.get('http://localhost:3000/burgers')
    .then(response => response.data)
    .catch(err => {
      console.error('UNE ERREUR !!!')
      return this.$q.reject(err) // on ne brise pas la chaine
    })
  }

  
  

}