profile = [];
profile.database = {};
const loadAssets = function () {
    $.getJSON("/myprofile/", function (data) {
        profile.database = data;
        profile.init();
    });
};

profile.init = function () {
    // profile.del();
    // profile.update();
    // profile.addR();
    profile.generateMarkup();
};

profile.generateMarkup = function () {
    var template = "";

    $.each(profile.database, function (index) {
        db = profile.database;
        id = db[index];
        //   console.log(id);

        template += '<div data-id="' + id._id + '">';

        template += '<div class="card" style="width: 25rem;">';
        template += '<img class="card-img-top" src="' + id.image + '"></img>';
        template += '<div class="card-body">';
        template += '<h5 class="fas fa-map-marker-alt">' + id.name + "</h5>";
        template += '<h3 class="card-title">' + id.emailId + "</h3>";
        template += '<p  class="card-text">' + id.address + "</p><br>";
        template += '<p  class="card-text">' + id.number + "</p><br>";
        template += '<div id="hide">';
        template += "<div>";
        template += '<button  class="del btn btn-primary">Delete</button>';
        template += "</div>";
        template +=
            '<button class="update btn btn-primary  ">Edit Detials</button>';
        template += "</div>";

        template += "</div>";
        template += "</div>";
        template += "</div>";
    });
    $(".content").append(template);
    // profile.del();
    // profile.update();
    // profile.addR();
};
// on click

loadAssets();
