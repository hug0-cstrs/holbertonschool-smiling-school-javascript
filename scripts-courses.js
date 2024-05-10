function fillCourses (response) {
    $('.courses-results').empty();
    if (response.courses.length != 1) {
        $('.courses-results').append(`\
        <p class="text-grey p-5">${response.courses.length} videos</p>`);
    } else {
        $('.courses-results').append(`\
        <p class="text-grey p-5">${response.courses.length} video</p>`);
    }
    $('.courses-results').append('\
    <div class="cards-container row pb-5">\
    </div>')
    
    for (let i = 0; i < response.courses.length; i++) {
        $('.cards-container').append(`
        <div class="card col-lg-3 col-sm-6 border-0">
            <img src="${response.courses[i].thumb_url}" class="card-img-top" alt="Thumbnail ${response.courses[i].id}">
            <img src="/images/play.png" alt="Play btn" class="play-btn" width="75px" height="75px">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">${response.courses[i].title}</h5>
                <p class="card-text">${response.courses[i]['sub-title']}</p>
                <div class="profile-line">
                    <img src="${response.courses[i].author_pic_url}" class="rounded-circle mr-2" alt="Profile 1" width="40px" height="40px">
                    <strong>${response.courses[i].author}</strong>
                </div>
                <div class="d-flex justify-content-between mt-2">
                    <div class="stars-${response.courses[i].id}">
                    </div>
                    <div class="duration">
                        <strong>${response.courses[i].duration}</strong>
                    </div>
                </div>
            </div>
        </div>`);

        for (let j = 1; j <= 5; j++) {
            if (j <= response.courses[i].star) {
                $(`.stars-${response.courses[i].id}`).append('<img src="/images/star_on.png" alt="Star on" width="15px" height="15px">');
            } else {
                $(`.stars-${response.courses[i].id}`).append('<img src="/images/star_off.png" alt="Star off" width="15px" height="15px">');
            }
        };
    };
}

$.ajax({
    url: 'https://smileschool-api.hbtn.info/courses',
    beforeSend: () => {
        $('.search-form').append('\
            <div class="loader"></div>\
        ');
    },
    success: (response) => {
        console.log(response);
        $('.search-form').empty();
        $('.search-form').append('\
        <form>\
            <div class="row">\
                <div class="col-12 col-md-4 ">\
                    <div class="form-group">\
                        <label for="keywords" class="text-white m-0">KEYWORDS</label>\
                        <div class="input-group">\
                            <div class="input-group-prepend">\
                                <span class="input-group-text holberton_school-icon holberton_school-icon-search"></span>\
                            </div>\
                            <input type="text" class="form-control form-keywords" id="keywords" placeholder="Search by keywords">\
                        </div>\
                    </div>\
                </div>\
                <div class="col-12 col-sm-6 col-md-4 ">\
                    <div class="form-group">\
                        <label for="topic" class="text-white m-0">TOPIC</label>\
                        <select id="topic" class="form-control">\
                        </select>\
                    </div>\
                </div>\
                <div class="col-12 col-sm-6 col-md-4 ">\
                    <div class="form-group">\
                        <label for="sort_by" class="text-white m-0">SORT BY</label>\
                        <select id="sort_by" class="form-control">\
                        </select>\
                    </div>\
                </div>\
            </div>\
        </form>');
        
        for (let i = 0; i < response.topics.length; i++) {
            response.topics[i] = response.topics[i].charAt(0).toUpperCase() + response.topics[i].slice(1);
            $('#topic').append(`\
            <option>${response.topics[i]}</option>`);
        };

        for (let i = 0; i < response.sorts.length; i++) {
            response.sorts[i] = response.sorts[i].charAt(0).toUpperCase() + response.sorts[i].slice(1);
            response.sorts[i] = response.sorts[i].replace('_', ' ');
            $('#sort_by').append(`\
            <option>${response.sorts[i]}</option>`);
        };

        fillCourses(response);
    }
});

window.addEventListener('load', (event) => {
    const topic = document.querySelector('#topic');
    const sort = document.querySelector('#sort_by');
    const keywords = document.querySelector('#keywords')

    topic.addEventListener('change', () => {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/courses',
            beforeSend: () => {
                $('.courses-results').append('\
                    <div class="loader-color"></div>\
                ');
            },
            data: {q: keywords.value, topic: topic.value.toLowerCase(), sort: sort.value.toLowerCase().replace(' ', '_')},
            success: (response) => {
                fillCourses(response);
            }
        })
    });

    sort.addEventListener('change', () => {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/courses',
            beforeSend: () => {
                $('.courses-results').append('\
                    <div class="loader-color"></div>\
                ');
            },
            data: {q: keywords.value, topic: topic.value.toLowerCase(), sort: sort.value.toLowerCase().replace(' ', '_')},
            success: (response) => {
                fillCourses(response);
            }
        })
    });

    keywords.addEventListener('change', () => {
        $.ajax({
            url: 'https://smileschool-api.hbtn.info/courses',
            beforeSend: () => {
                $('.courses-results').append('\
                    <div class="loader-color"></div>\
                ');
            },
            data: {q: keywords.value, topic: topic.value.toLowerCase(), sort: sort.value.toLowerCase().replace(' ', '_')},
            success: (response) => {
                fillCourses(response);
            }
        })
    });
})
