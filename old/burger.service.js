const API_URL = 'http://localhost:3000/burgers'

export class BurgerService {
  constructor ($http, $q /*=Promise*/ ) {
    this.$http = $http
    this.$q = $q
  }

  getBurgers () {
    return this.$http.get(API_URL)
    .then(response => response.data)
  }

  getBurger (id) {
    if(!id){
      return this.$q.resolve({
        name: '',
        toppings: []
      })
    }
    else{
      return this.$http.get(`${API_URL}/${id}`)
      .then(response => response.data)
    }
    
  }

   save (burger) {
    return burger.id
      ? this.update(burger)
      : this.create(burger)
  }

  update (burger) {
    return this.$http.put(`${API_URL}/${burger.id}`, burger)
    .then(response => response.data)
  }

  create (burger) {
    return this.$http.post(API_URL, burger)
    .then(response => response.data)    
  }

  delete (id) {
    console.log(id)
    return this.$http.delete(`${API_URL}/${id}`, id)
    .then(response => response.data)
  }

}