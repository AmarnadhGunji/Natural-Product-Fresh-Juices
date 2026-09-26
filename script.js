

const whatsappNumber =
    "917396030537";


const shopName =
    "Natural Product Fresh Juices";


const shopAddress =
`Whitefield, Kondapur
Opposite Google Office
Near Tara South India Kitchen`;


const IMAGE_FOLDER =
    "./Project Images/";



/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    /* ================= FRESH JUICES ================= */

    {
        id: 1,
        name: "ABC Juice",
        category: "Fresh Juices",
        price: 100,
        image: "ABC juice.jpg"
    },

    {
        id: 2,
        name: "Apple Juice",
        category: "Fresh Juices",
        price: 120,
        image: "Apple juice.jpg"
    },

    {
        id: 3,
        name: "Banana Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Banana juice.jpg"
    },

    {
        id: 4,
        name: "Beetroot Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Beetroot juice.jpg"
    },

    {
        id: 5,
        name: "Carrot Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Carrot juice.jpg"
    },

    {
        id: 6,
        name: "Dragon Fruit Juice",
        category: "Fresh Juices",
        price: 150,
        image: "Dragon fruit juice.jpg"
    },

    {
        id: 7,
        name: "Grape Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Grape juice.jpg"
    },

    {
        id: 8,
        name: "Guava Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Guava juice.jpg"
    },

    {
        id: 9,
        name: "Kiwi Juice",
        category: "Fresh Juices",
        price: 150,
        image: "Kiwi juice.jpg"
    },

    {
        id: 10,
        name: "Leamon Juice",
        category: "Fresh Juices",
        price: 80,
        image: "Leamon juice.jpg"
    },

    {
        id: 11,
        name: "Mango Juice",
        category: "Fresh Juices",
        price: 120,
        image: "Mango juice.jpg"
    },

    {
        id: 12,
        name: "Mixed Fruit Juice",
        category: "Fresh Juices",
        price: 150,
        image: "Mixed fruit juice.jpg"
    },

    {
        id: 13,
        name: "Mosambi Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Mosambi juice.jpg"
    },

    {
        id: 14,
        name: "Muskelon Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Muskelon juice.jpg"
    },

    {
        id: 15,
        name: "Orange Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Orange juice.jpg"
    },

    {
        id: 16,
        name: "Papaya Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Papaya juice.jpg"
    },

    {
        id: 17,
        name: "Pineapple Juice",
        category: "Fresh Juices",
        price: 120,
        image: "Pineapple juice.jpg"
    },

    {
        id: 18,
        name: "Pomegranate Juice",
        category: "Fresh Juices",
        price: 150,
        image: "Promegranate Juice.jpg"
    },

    {
        id: 19,
        name: "Strawberry Juice",
        category: "Fresh Juices",
        price: 150,
        image: "Strawberry juice.jpg"
    },

    {
        id: 20,
        name: "Sugar Cane Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Sugar cane juice.jpg"
    },

    {
        id: 21,
        name: "Watermelon Juice",
        category: "Fresh Juices",
        price: 100,
        image: "Watermelon juice.jpg"
    },


    /* ================= MILK SHAKES ================= */

    {
        id: 22,
        name: "Badham Milk",
        category: "Milk Shakes",
        price: 100,
        image: "Badham milk.jpg"
    },

    {
        id: 23,
        name: "Badham Shake",
        category: "Milk Shakes",
        price: 130,
        image: "Badham shake.jpg"
    },

    {
        id: 24,
        name: "Banana Milk Shake",
        category: "Milk Shakes",
        price: 100,
        image: "Banana milk shake.jpg"
    },

    {
        id: 25,
        name: "Butter Milk",
        category: "Milk Shakes",
        price: 60,
        image: "Butter milk.jpg"
    },

    {
        id: 26,
        name: "Butterscotch Milk Shake",
        category: "Milk Shakes",
        price: 130,
        image: "Butterscotch milk shake.jpg"
    },

    {
        id: 27,
        name: "Chocolate Milk Shake",
        category: "Milk Shakes",
        price: 130,
        image: "Chocolate milk shake.jpg"
    },

    {
        id: 28,
        name: "Dry Fruit Milk Shake",
        category: "Milk Shakes",
        price: 160,
        image: "Dry fruit milk shake.jpg"
    },

    {
        id: 29,
        name: "Kitkat Milk Shake",
        category: "Milk Shakes",
        price: 150,
        image: "Kitkat milk shake.jpg"
    },

    {
        id: 30,
        name: "Mango Milk Shake",
        category: "Milk Shakes",
        price: 130,
        image: "Mango milk shake.jpg"
    },

    {
        id: 31,
        name: "Oreo Milk Shake",
        category: "Milk Shakes",
        price: 150,
        image: "Oreo milk shake.jpg"
    },

    {
        id: 32,
        name: "Pista Milk Shake",
        category: "Milk Shakes",
        price: 140,
        image: "Pista milk shake.jpg"
    },

    {
        id: 33,
        name: "Rose Milk Shake",
        category: "Milk Shakes",
        price: 100,
        image: "Rose milk shake.jpg"
    },

    {
        id: 34,
        name: "Strawberry Milk Shake",
        category: "Milk Shakes",
        price: 130,
        image: "Strawberry milk shake.jpg"
    },

    {
        id: 35,
        name: "Vanilla Milk Shake",
        category: "Milk Shakes",
        price: 100,
        image: "Vanilla milk shake.jpg"
    },


    /* ================= FRUIT BOWLS ================= */

    {
        id: 36,
        name: "Apple Bowl",
        category: "Fruit Bowls",
        price: 120,
        image: "Apple bwol.jpg"
    },

    {
        id: 37,
        name: "Banana Bowl",
        category: "Fruit Bowls",
        price: 100,
        image: "Banana bwol.jpg"
    },

    {
        id: 38,
        name: "Dragon Fruit Bowl",
        category: "Fruit Bowls",
        price: 150,
        image: "Dragon fruit bwol.jpg"
    },

    {
        id: 39,
        name: "Kiwi Bowl",
        category: "Fruit Bowls",
        price: 150,
        image: "Kiwi bwol.jpg"
    },

    {
        id: 40,
        name: "Mango Bowl",
        category: "Fruit Bowls",
        price: 130,
        image: "Mango bwol.jpg"
    },

    {
        id: 41,
        name: "Mixed Fruit Bowl",
        category: "Fruit Bowls",
        price: 150,
        image: "Mixed fruit bwol.jpg"
    },

    {
        id: 42,
        name: "Papaya Bowl",
        category: "Fruit Bowls",
        price: 100,
        image: "Papaya bwol.jpg"
    },

    {
        id: 43,
        name: "Premium Fruit Bowl",
        category: "Fruit Bowls",
        price: 200,
        image: "Premium fruit bwol.jpg"
    },

    {
        id: 44,
        name: "Pomegranate Bowl",
        category: "Fruit Bowls",
        price: 160,
        image: "Promegranate bwol.jpg"
    },

    {
        id: 45,
        name: "Strawberry Bowl",
        category: "Fruit Bowls",
        price: 160,
        image: "Strawberry bwol.jpg"
    },

    {
        id: 46,
        name: "Watermelon Bowl",
        category: "Fruit Bowls",
        price: 100,
        image: "Watermelon bwol.jpg"
    }

];



/* =====================================================
   CART
===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem(
            "naturalFreshJuiceCart"
        )
    ) || [];



/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(category = "All") {

    const productGrid =
        document.getElementById(
            "productGrid"
        );


    const filteredProducts =
        category === "All"
            ? products
            : products.filter(
                product =>
                    product.category === category
            );


    productGrid.innerHTML = "";


    filteredProducts.forEach(product => {

        const imagePath =
            IMAGE_FOLDER +
            encodeURIComponent(
                product.image
            );


        const card =
            document.createElement("div");


        card.className =
            "product-card";


        card.innerHTML = `

            <img
                src="${imagePath}"
                alt="${product.name}"
                class="product-image"
                onerror="handleImageError(this)"
            >


            <div class="product-content">

                <div class="product-category">
                    ${product.category}
                </div>


                <h3>
                    ${product.name}
                </h3>


                <div class="product-bottom">

                    <span class="product-price">
                        ₹${product.price}
                    </span>


                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        + Add
                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(card);

    });

}



/* =====================================================
   IMAGE ERROR
===================================================== */

function handleImageError(image) {

    image.onerror = null;


    image.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="400"
            >

                <rect
                    width="100%"
                    height="100%"
                    fill="#edf7ef"
                />

                <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    font-size="70"
                >
                    🍹
                </text>

            </svg>

        `);

}



/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterProducts(
    category,
    button
) {

    document
        .querySelectorAll(
            ".category-btn"
        )
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    button.classList.add(
        "active"
    );


    displayProducts(
        category
    );

}



/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) {
        return;
    }


    const existingItem =
        cart.find(
            item =>
                item.id === productId
        );


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            category: product.category,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();


    showToast(
        `${product.name} added to cart`
    );

}



/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "naturalFreshJuiceCart",
        JSON.stringify(cart)
    );

}



/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document.getElementById(
        "cartCount"
    ).textContent = count;

}



/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    document
        .getElementById(
            "cartModal"
        )
        .classList.add(
            "active"
        );


    renderCart();


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    document
        .getElementById(
            "cartModal"
        )
        .classList.remove(
            "active"
        );


    document.body.style.overflow =
        "";

}



/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div
                    style="
                        font-size:55px;
                        margin-bottom:15px;
                    "
                >
                    🛒
                </div>


                <h3>
                    Your cart is empty
                </h3>


                <p>
                    Add some fresh products.
                </p>

            </div>

        `;


        cartTotal.textContent =
            "₹0";


        return;

    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach(item => {

        const itemTotal =
            item.price *
            item.quantity;


        total += itemTotal;


        const imagePath =
            IMAGE_FOLDER +
            encodeURIComponent(
                item.image
            );


        const cartItem =
            document.createElement(
                "div"
            );


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${imagePath}"
                alt="${item.name}"
                class="cart-item-image"
                onerror="handleImageError(this)"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>


                <div class="cart-item-price">
                    ₹${item.price}
                </div>


                <div class="quantity-controls">

                    <button
                        onclick="
                            changeQuantity(
                                ${item.id},
                                -1
                            )
                        "
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="
                            changeQuantity(
                                ${item.id},
                                1
                            )
                        "
                    >
                        +
                    </button>

                </div>

            </div>

        `;


        cartItems.appendChild(
            cartItem
        );

    });


    cartTotal.textContent =
        `₹${total}`;

}



/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== productId
            );

    }


    saveCart();

    updateCartCount();

    renderCart();

}



/* =====================================================
   ORDER ON WHATSAPP
===================================================== */

function orderOnWhatsApp() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    let total = 0;


    let orderText =
`Hello ${shopName}!

I would like to order:

`;


    cart.forEach(
        (item, index) => {

            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;


            orderText +=
`${index + 1}. ${item.name}
Quantity: ${item.quantity}
Price: ₹${item.price}
Subtotal: ₹${itemTotal}

`;

        }
    );


    orderText +=
`Total: ₹${total}

Shop Address:
${shopAddress}

Please confirm my order.`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(
            orderText
        );


    /* =====================================
       OPEN WHATSAPP
    ===================================== */

    window.open(
        whatsappURL,
        "_blank"
    );


    /* =====================================
       CLEAR CART AUTOMATICALLY
    ===================================== */

    cart = [];


    localStorage.removeItem(
        "naturalFreshJuiceCart"
    );


    updateCartCount();

    renderCart();


    closeCart();


    showToast(
        "Order sent! Cart cleared successfully."
    );

}



/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}



/* =====================================================
   CART OVERLAY
===================================================== */

document
    .querySelector(
        ".cart-overlay"
    )
    .addEventListener(
        "click",
        closeCart
    );



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeCart();

        }

    }
);



/* =====================================================
   INITIAL LOAD
===================================================== */

displayProducts(
    "All"
);


updateCartCount();