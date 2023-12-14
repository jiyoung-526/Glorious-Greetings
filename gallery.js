let currentPhoto = 1;
const totalPhotos = 6;

function showPhoto(photoNumber) {
    for (let i = 1; i <= totalPhotos; i++) {
        document.getElementById('photo' + i).style.display = 'none';
    }
    document.getElementById('photo' + photoNumber).style.display = 'block';
}

function nextPhoto() {
    currentPhoto = currentPhoto < totalPhotos ? currentPhoto + 1 : 1;
    showPhoto(currentPhoto);
}

function prevPhoto() {
    currentPhoto = currentPhoto > 1 ? currentPhoto - 1 : totalPhotos;
    showPhoto(currentPhoto);
}
