const iceCream = [{ id: 'ic001', name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 }, { id: 'ic002', name: 'Vanilla', image: 'img/1_scoops_vanilla.jpeg', price: 1 }, { id: 'ic003', name: 'Strawberry', image: 'img/1_scoop_strawberry.jpeg', price: 2 }, { id: 'ic004', name: 'MCC', image: 'img/1_scoop_MCC.jpeg', price: 1.5 }, { id: 'ic005', name: 'Chocoloate', image: 'img/1_scoop_chocolate.jpeg', price: 1 }]


const vessels = [{ id: 'v001', name: 'Waffle Cone', image: 'img/cone_waffle.webp', price: 2 }, { id: 'v002', name: 'Waffle Bowl', image: 'img/bowl_waffle.jpeg', price: 4 }, { id: 'v003', name: 'Big Waffle Cone', image: 'img/cone_big_waffle.webp', price: 3 }]

const toppings = [{ id: 't001', name: 'Sprinkle Cones', image: 'img/sprinkles_cones.png', price: 1 }, { id: 't002', name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }, { id: 't003', name: 'Festive Sprinkles', image: 'img/sprinkles_festive.webp', price: 2 }, { id: 't004', name: 'Party Sprinkles', image: 'img/sprinkles_party.png', price: 2 }, { id: 't005', name: 'Ugly Sweater Sprinkles', image: 'img/sprinkles_ugly_sweater.png', price: 2 }]

function drawVessels() {
  let template = ''

  vessels.forEach(vessel => {
    template += `
       <div class="col-md-12 p-2">
    <div class="bg-light text-dark shadow rounded vessel-card" onclick="addToCart(${vessel.id})">
    <img class="object-cover rounded-top" width="200px" height="200px" src="${vessel.image}" alt="iceCreamFlavor">
    <div class="d-flex justify-content-between p-3">
    <h4>${vessel.name}</h4>
    <h4><em>$${vessel.price.toFixed(2)}</em></h4>
    </div>
    </div>
    </div>
    `
  })

  document.getElementById('vessel-items').innerHTML = template
}

function drawIceCream() {
  let template = ''

  iceCream.forEach(scoop => {
    template += `
       <div class="col-md-12 p-2">
    <div class="bg-light text-dark shadow rounded iceCream-card" onclick="addToCart(${scoop.id})">
    <img class="object-cover rounded-top " width="200px" height="200px" src="${scoop.image}" alt="iceCreamFlavor">
    <div class="d-flex justify-content-between p-3">
    <h4>${scoop.name}</h4>
    <h4><em>$${scoop.price.toFixed(2)}</em></h4>
    </div>
    </div>
    </div>
    `
  })

  document.getElementById('iceCream-items').innerHTML = template
}

function drawToppings() {
  let template = ''

  toppings.forEach(topping => {
    template += `
       <div class="col-md-12 p-2">
    <div class="bg-light text-dark shadow rounded topping-card align-items-center" onclick="addToCart(${topping.id})">
    <img class="object-cover rounded-top" width="200px" height="200px" src="${topping.image}" alt="iceCreamFlavor">
    <div class="d-flex justify-content-between p-3">
    <h4>${topping.name}</h4>
    <h4><em>$${topping.price.toFixed(2)}</em></h4>
    </div>
    </div>
    </div>
    `
  })

  document.getElementById('toppings-items').innerHTML = template
}

drawVessels()
drawIceCream()
drawToppings()