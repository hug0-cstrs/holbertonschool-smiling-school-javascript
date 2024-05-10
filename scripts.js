$.ajax({
    url: 'https://smileschool-api.hbtn.info/quotes',
    beforeSend: () => {
        $('#experience-carousel').append('\
            <div class="loader"></div>\
        ');
    },
    success: (response) => {
        if (response.length > 0) {
            $('#experience-carpusel').empty();
            $('#experience-carousel').append('\
            <div class="container">\
                <div class="carousel-inner">\
                </div>\
                <a href="#experience-carousel" class="carousel-control-prev" role="button" data-slide="prev">\
                    <span class="control-btn" aria-hidden="true">\
                        <img src="/images/arrow_white_left.png" alt="Arrow to left" width="30px" height="65px">\
                    </span>\
                    <span class="sr-only">Previous</span>\
                </a>\
                <a href="#experience-carousel" class="carousel-control-next" role="button" data-slide="next">\
                    <span class="control-btn" aria-hidden="true">\
                        <img src="/images/arrow_white_right.png" alt="Arrow to right" width="30px" height="65px">\
                    </span>\
                    <span class="sr-only">Next</span>\
                </a>\
            </div>');
            for (let i = 0; i < response.length; i++) {
                const quoteObject = response[i];
                $('#experience-carousel .container .carousel-inner').append(`\
                <div class="carousel-item">\
                    <div class="w-75 mx-auto d-flex flex-column flex-sm-row justify-content-center">\
                        <div class="mx-auto my-3">\
                            <img class="profile-img rounded-circle" src="${quoteObject.pic_url}" alt="${quoteObject.name} profile pic" width="200px" height="200px">\
                        </div>\
                        <div class="mx-4 my-auto">\
                            <p class="text-white">${quoteObject.text}</p>\
                            <h5 class="text-white font-weight-bold">${quoteObject.name}</h5>\
                            <p class="text-white">${quoteObject.title}</p>\
                        </div>\
                    </div>\
                </div>`);
                if (i == 0) {
                    $('#experience-carousel .container .carousel-inner .carousel-item').addClass('active');
                }
            }
        }
    }
})

$.ajax({
    url: 'https://smileschool-api.hbtn.info/popular-tutorials',
    beforeSend: () => {
        $('#tutorial-carousel').append('\
            <div class="loader-color"></div>\
        ');
    },
    success: (response) => {
        $('#tutorial-carousel').empty();
        $('#tutorial-carousel').append('\
            <div class="carousel-inner d-sm-flex p-5">\
            </div>\
            <a href="#tutorial-carousel" class="carousel-control-prev w-auto ml-2 ml-sm-4" role="button" data-slide="prev">\
                <span class="control-btn" aria-hidden="true">\
                    <img src="/images/arrow_black_left.png" alt="Arrow to left" width="30px" height="65px">\
                </span>\
                <span class="sr-only">Previous</span>\
            </a>\
            <a href="#tutorial-carousel" class="carousel-control-next w-auto mr-2 mr-sm-4" role="button" data-slide="next">\
                <span class="control-btn" aria-hidden="true">\
                    <img src="/images/arrow_black_right.png" alt="Arrow to right" width="30px" height="65px">\
                </span>\
                <span class="sr-only">Next</span>\
            </a>\
        ');

        for (let i = 0; i < response.length; i++) {
            const quoteObject = response[i];
            $('#tutorial-carousel .carousel-inner').append(`\
            <div class="carousel-item">
                <div class="card border-0 mx-5">
                    <img src="${quoteObject.thumb_url}" class="card-img-top" alt="${quoteObject.title} thumbnail">
                    <img src="/images/play.png" alt="Play btn" class="play-btn" width="75px" height="75px">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${quoteObject.title}</h5>
                        <p class="card-text">${quoteObject['sub-title']}</p>
                        <div class="profile-line">
                            <img src="${quoteObject.author_pic_url}" class="rounded-circle mr-2" alt=" profile pic" width="40px" height="40px">
                            <strong>${quoteObject.author}</strong>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <div class="stars-${quoteObject.id}">
                            </div>
                            <div class="duration">
                                <strong>${quoteObject.duration}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

            for (let j = 1; j <= 5; j++) {
                if (j <= quoteObject.star) {
                    $(`#tutorial-carousel .stars-${quoteObject.id}`).append('<img src="/images/star_on.png" alt="Star on" width="15px" height="15px">');
                } else {
                    $(`#tutorial-carousel .stars-${quoteObject.id}`).append('<img src="/images/star_off.png" alt="Star off" width="15px" height="15px">');
                }
            };

            if (i == 0) {
                $('#tutorial-carousel .carousel-inner .carousel-item').addClass('active');
            }
        };

        const carouselWidth = $(".tutorials-section #tutorial-carousel .carousel-inner")[0].scrollWidth;
        const cardWidth = $("#tutorial-carousel .carousel-inner .carousel-item").width();
        let scrollPosition = 0;
    
        $("#tutorial-carousel .carousel-control-next").on("click", function () {
            if (scrollPosition < (carouselWidth - cardWidth * 2)) {
                scrollPosition += cardWidth;
                $("#tutorial-carousel .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });
    
        $("#tutorial-carousel .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $("#tutorial-carousel .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });
    
        const multipleCardCarousel = document.querySelector("#tutorial-carousel");
    
        if (window.matchMedia("(min-width: 768px)").matches) {
            const carousel = new bootstrap.Carousel(multipleCardCarousel, {interval: false});
        } else {
            $(multipleCardCarousel).addClass("slide");
        }
    }
});

$.ajax({
    url: 'https://smileschool-api.hbtn.info/latest-videos',
    beforeSend: () => {
        $('#latest-carousel').append('\
            <div class="loader-color"></div>\
        ');
    },
    success: (response) => {
        $('#latest-carousel').empty();
        $('#latest-carousel').append('\
            <div class="carousel-inner d-sm-flex p-5">\
            </div>\
            <a href="#latest-carousel" class="carousel-control-prev w-auto ml-2 ml-sm-4" role="button" data-slide="prev">\
                <span class="control-btn" aria-hidden="true">\
                    <img src="/images/arrow_black_left.png" alt="Arrow to left" width="30px" height="65px">\
                </span>\
                <span class="sr-only">Previous</span>\
            </a>\
            <a href="#latest-carousel" class="carousel-control-next w-auto mr-2 mr-sm-4" role="button" data-slide="next">\
                <span class="control-btn" aria-hidden="true">\
                    <img src="/images/arrow_black_right.png" alt="Arrow to right" width="30px" height="65px">\
                </span>\
                <span class="sr-only">Next</span>\
            </a>\
        ');

        for (let i = 0; i < response.length; i++) {
            const quoteObject = response[i];
            $('#latest-carousel .carousel-inner').append(`\
            <div class="carousel-item">
                <div class="card border-0 mx-5">
                    <img src="${quoteObject.thumb_url}" class="card-img-top" alt="${quoteObject.title} thumbnail">
                    <img src="/images/play.png" alt="Play btn" class="play-btn" width="75px" height="75px">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">${quoteObject.title}</h5>
                        <p class="card-text">${quoteObject['sub-title']}</p>
                        <div class="profile-line">
                            <img src="${quoteObject.author_pic_url}" class="rounded-circle mr-2" alt=" profile pic" width="40px" height="40px">
                            <strong>${quoteObject.author}</strong>
                        </div>
                        <div class="d-flex justify-content-between mt-2">
                            <div class="stars-${quoteObject.id}">
                            </div>
                            <div class="duration">
                                <strong>${quoteObject.duration}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

            for (let j = 1; j <= 5; j++) {
                if (j <= quoteObject.star) {
                    $(`#latest-carousel .stars-${quoteObject.id}`).append('<img src="/images/star_on.png" alt="Star on" width="15px" height="15px">');
                } else {
                    $(`#latest-carousel .stars-${quoteObject.id}`).append('<img src="/images/star_off.png" alt="Star off" width="15px" height="15px">');
                }
            };

            if (i == 0) {
                $('#latest-carousel .carousel-inner .carousel-item').addClass('active');
            }
        };

        const carouselWidth = $(".latest-videos-section #latest-carousel .carousel-inner")[0].scrollWidth;
        const cardWidth = $("#tutorial-carousel .carousel-inner .carousel-item").width();
        let scrollPosition = 0;
    
        $("#latest-carousel .carousel-control-next").on("click", function () {
            if (scrollPosition < (carouselWidth - cardWidth * 2)) {
                scrollPosition += cardWidth;
                $("#latest-carousel .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });
    
        $("#latest-carousel .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $("#latest-carousel .carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
            }
        });
    
        const multipleCardCarousel = document.querySelector("#latest-carousel");
    
        if (window.matchMedia("(min-width: 768px)").matches) {
            const carousel = new bootstrap.Carousel(multipleCardCarousel, {interval: false});
        } else {
            $(multipleCardCarousel).addClass("slide");
        }
    }
});
