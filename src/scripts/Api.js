class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1", {
     headers: {
       authorization: "57050730-15bb-4539-9434-9c656456e2a7"
     }
   })
     .then(res => {
       if (res.ok) {
         return res.json();
       }
       return Promise.reject(`Error: ${res.status}`);
     });
  }
  
  // other methods for working with the API
  
}

export default Api;