product = [];
product.database = {};
const loadAssets = function () {
    $.getJSON("/api/product/", function (data) {
        product.database = data;
        product.init();
    });
};

product.init = function () {
    product.generateMarkup();
};

product.generateMarkup = function () {
    var template = "";

    $.each(product.database, function (index) {
        db = product.database;
        id = db[index];
        //   console.log(id);

        template += '<div data-id="' + id._id + '">';

        template += '<div class="card" style="width: 25rem;">';
        template += '<img class="card-img-top" src="' + id.Image + '"></img>';
        template += '<div class="card-body">';
        template += '<h5 class="fas fa-map-marker-alt">'
        template += '<span> Name : </span>' + id.Name + "</h5>";
        template += '<h5 class="card-title">'
        template += '<span> Avilable : </span>' + id.quantity + "</h5>";
        template += '<p  class="card-text">'
        template += '<span> Price : </span>' + id.price + "</p><br>";
        template += '<div id="hide">';
        template += "<div>";
        template += '<button  class="del btn btn-primary">Delete</button>';
        template += "</div>";
        template +=
            '<button class="update btn btn-primary  ">Buy</button>';
        template += "</div>";

        template += "</div>";
        template += "</div>";
        template += "</div>";
    });
    $(".content").append(template);
    // product.del();
    // product.update();
    // product.addR();
};
// on click

loadAssets();
