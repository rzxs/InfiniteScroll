//Unsplash API
let photosArray = [];
const apiKey = 'p2l8Avxwxe3dC3JZrU8fSe6aNpjz6MGne6eAIf7e40Q';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('image-container');


//Display photos
function displayPhotos() {
    photosArray.forEach((photo) => {
        //create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        //put <img> inside <a>, then put both in imgContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    });    
}

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    } catch (e) {
        console.log(e);
    }
}


getPhotos();