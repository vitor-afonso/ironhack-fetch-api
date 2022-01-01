// jshint esversion:6

fetch("https://api.spacexdata.com/v4/launches")
    
  .then((response) => { 
      
    //here we parse the received (stringified)data so that we can access its content
    //json() returns a promise
    return response.json();
  })
  .then((data) => {

    // access the data and display the image in the document for each element in the array
    data.forEach(element => {

        const patchImage = element.links.patch.small;
        const imgElement = document.createElement('img');

        imgElement.setAttribute('src', patchImage);
        imgElement.setAttribute('width', 200);
        document.body.appendChild(imgElement);
    });
  })
  .catch( (err) => console.log(err));
