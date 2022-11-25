const func = () => {
    return 'hello';
}

const request = async () => {
    fetch('/api/create', {
      method: "POST", 
      headers: {
      'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({url: "text"})})  
    .then((response) => {  
        response.json().then(function(data) {  
            console.log(data);  
      });  
    }  
  ).catch(function(err) {  
    console.log(err);  
  });
}

exports.default = func;
exports.request = request 