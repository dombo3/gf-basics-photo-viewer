let dog = {
    photo: 'img/Photos/dog.jpg',
    title: 'Nevermind',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ultricies ipsum, in elementum enim.'
}

let goat = {
    photo: 'img/Photos/goat.jpg',
    title: 'Lonely Oak Tree',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ultricies ipsum, in elementum enim.'
}

let horse = {
    photo: 'img/Photos/horse.jpg',
    title: 'Basedfa sfjasdif jsa[of ijdsa[fjdsa[fojf',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ultricies ipsum, in elementum enim.'
}

let currentPhoto = 0;
let imagesData = [dog, goat, horse];

imagesData.forEach( (data, index) => {
    $("#thumb_bar").append(`
    <div class="thumbnail_box">
        <img class="thumbnail" src="${data.photo}" data-number="${index}">
        <div class=thumbnail_title>
            <div class=thumbnail_container>${data.title}</div>
            <img class="triangle" src="img/triangle_down.png" data-number="${index}">
        </div>
    </div>
    `)
});

let loadPhoto = (photoNumber) => {
    $('#focus_image').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $('.thumbnail').removeClass("active");
    $(`.thumbnail[data-number=${photoNumber}]`).addClass("active");
    $('.triangle').removeClass("visible");
}

loadPhoto(0);

$('#right_button').on('click', function() {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
        loadPhoto(currentPhoto);    
    }
})

$('#left_button').on('click', function() {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);    
    }
})

$('.thumbnail').on('click', function() {
    currentPhoto = parseInt($(event.target).attr('data-number'));
    loadPhoto(currentPhoto);
})


