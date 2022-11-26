const request = async (params, callback) => {
    fetch(params.url, {
      method: params.method, 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(params.body)})  
      .then((response) => {  
        response.json().then(function(data) {  
            callback(data)
      });  
    }  
  ).catch(function(err) {  
    console.log(err);  
  });
}

export default request