//=========================================================
//                   Cars data
//=========================================================
var cars = [
  {
    name: "Mercedes AMG A35",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Vehicles/A-class/hatchback-new/mercedes-amg-w177-sspip143111-1440x810.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1704903499885.file/cq5dam.web.1280.1280.jpg",
    description:
      "A compact powerhouse with 302 horsepower, sharp handling, and AMG styling, perfect for urban driving and spirited escapes.",
  },
  {
    name: "Mercedes AMG C63",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Vehicles/C-class/Sedan/c63-s-e-performance/mercedes-amg-w206-sspip141264-1440x810.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1704903627972.file/cq5dam.web.1280.1280.jpg",
    description:
      "The AMG C63 delivers thrilling performance with a 4.0L V8 engine, producing 469 horsepower. Its aggressive design and unmatched power make it a true sports sedan.",
  },
  {
    name: "Mercedes AMG C43",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Vehicles/C-class/Sedan/c63-s-e-performance/mercedes-amg-s206-sspip141266-1440x810.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1704903607149.file/cq5dam.web.1280.1280.jpg",
    description:
      "A blend of performance and practicality, the AMG C43 Estate features a 3.0L V6 engine with 385 horsepower, offering both speed and ample cargo space.",
  },
  {
    name: "Mercedes AMG GLC 43 SUV",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Vehicles/GLC/SUV/glc_suv_neu/ssp-freisteller/mercedes-amg-glc-63-se-01-ext-sspip-148452-1440x810.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1721891451263.file/cq5dam.web.1280.1280.jpg",
    description:
      "The AMG GLC 43 SUV combines luxury with performance, featuring a 3.0L V6 engine producing 385 horsepower, perfect for both dynamic driving and everyday versatility.",
  },
  {
    name: "Mercedes AMG GLC 43 Coupe",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Vehicles/GLC/Coupe/glc_coupe_aej_23_2/mercedes-amg-c254-sspip155871-1440x810.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1695377149759.file/cq5dam.web.1280.1280.jpg",
    description:
      "The AMG GLC 43 Coupe offers a powerful 3.0L V6 engine with 385 horsepower, blending aggressive styling with high-performance handling for an exhilarating driving experience.",
  },
  {
    name: "Mercedes AMG GLS 63",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Modeloverview/bodytype/mercedes-amg-modeloverview-gls-suv-gls63-X167-SSPIP105810-1440x810.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1611236699159.file/cq5dam.web.1280.1280.jpg",
    description:
      "The AMG GLS 63 is a luxury SUV with a 4.0L V8 engine delivering 603 horsepower, offering unmatched power, space, and refinement for those who demand the best.",
  },
  {
    name: "Mercedes AMG ONE",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Vehicles/project-one/mercedes-amg-x1-1440x810(1).jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1653475414219.file/cq5dam.web.1280.1280.jpg",
    description:
      "The AMG ONE is a hypercar that brings Formula 1 technology to the road, featuring a 1.6L turbo V6 hybrid enginewith 1,063 horsepower for unparalleled speed and innovation.",
  },
  {
    name: "Mercedes AMG GT 63 S",
    image:
      "https://www.mercedes-amg.com/dam/hq/models/Vehicles/GT/Coupe/gt-neu/mercedes-amg-gt-coupe-sspip152794-c192-1440x810.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg.image_file.820.461.1692193734716.file/cq5dam.web.1280.1280.jpg",
    description:
      "The AMG GT 63 S features a 4.0L twin-turbo V8 engine producing 630 horsepower, delivering extraordinary performance, precision, and luxury in a sleek, coupe-style design.",
  },
];

//=========================================================
//             Get data from Local storage
//=========================================================
var cartString = window.localStorage.getItem("cart") || "[]";
var cart = JSON.parse(cartString);

//=========================================================
//               Add to cart function
//=========================================================
var addToCart = function (i) {
  var car = cars[i];
  cart.push(car);
  var convert = JSON.stringify(cart);
  window.localStorage.setItem("cart", convert);
  // redirect
  window.location.href = "cart.html";
};

//=========================================================
//           Add cards Dynamically
//=========================================================
for (i = 0; i < cars.length; i++) {
  $(".cards").append(`<div class="card">
        
    <div class="card-content">
        <img class="carImg" src="${cars[i].image}">
        <h4 class="car-name">${cars[i].name}</h4>
        <p class="car-disc">${cars[i].description}</p>
        <div class="car-Buttons">
        <button type="button" class="car-toCart" onclick="addToCart(${i})">Add To Cart</button>
    </div>
    </div>
    </div>`);
}

//=========================================================
//                    Navigation
//=========================================================
$(".logo").click(function () {
  window.location.href = "home.html";
});

//=========================================================
//                    Search
//=========================================================
$(".searchBar").keydown(function () {
  var input = $(".searchBar").val().toLowerCase();
  var name = $(".car-name");

  name.each(function (index, element) {
    var carNameText = $(element).text().toLowerCase();

    if (carNameText.includes(input)) {
      $(element).closest(".card").show();
    } else {
      $(element).closest(".card").hide();
    }
  });
});
