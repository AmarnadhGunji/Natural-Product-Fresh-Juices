

const whatsappNumber =
    "917396030537";

const shopName =
    "Natural Product Fresh Juices";

const shopAddress =
`Whitefield, Kondapur
Opposite Google Office
Near Tara South India Kitchen`;


// =========================================================
// IMAGE FOLDER
// =========================================================

const IMAGE_FOLDER =
    "./Project Images/";


// =========================================================
// GOOGLE MAPS
// =========================================================

const googleMapsURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    "Whitefield%2C%20Kondapur%2C%20Opposite%20Google%20Office%2C%20Near%20Tara%20South%20India%20Kitchen";


// =========================================================
// PRODUCTS
// =========================================================

const defaultProducts = [

    // =========================
    // FRESH JUICES
    // =========================

    {
        id: 1,
        name: "ABC Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "ABC juice.jpg"
    },

    {
        id: 2,
        name: "Apple Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Apple juice.jpg"
    },

    {
        id: 3,
        name: "Banana Juice",
        category: "Fresh Juices",
        price: 100,
        image: IMAGE_FOLDER + "Banana juice.jpg"
    },

    {
        id: 4,
        name: "Beetroot Juice",
        category: "Fresh Juices",
        price: 110,
        image: IMAGE_FOLDER + "Beetroot juice.jpg"
    },

    {
        id: 5,
        name: "Carrot Juice",
        category: "Fresh Juices",
        price: 110,
        image: IMAGE_FOLDER + "Carrot juice.jpg"
    },

    {
        id: 6,
        name: "Dragon Fruit Juice",
        category: "Fresh Juices",
        price: 150,
        image: IMAGE_FOLDER + "Dragon fruit juice.jpg"
    },

    {
        id: 7,
        name: "Grape Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Grape juice.jpg"
    },

    {
        id: 8,
        name: "Guava Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Guava juice.jpg"
    },

    {
        id: 9,
        name: "Kiwi Juice",
        category: "Fresh Juices",
        price: 150,
        image: IMAGE_FOLDER + "Kiwi juice.jpg"
    },

    {
        id: 10,
        name: "Leamon Juice",
        category: "Fresh Juices",
        price: 80,
        image: IMAGE_FOLDER + "Leamon juice.jpg"
    },

    {
        id: 11,
        name: "Mango Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Mango juice.jpg"
    },

    {
        id: 12,
        name: "Mixed Fruit Juice",
        category: "Fresh Juices",
        price: 150,
        image: IMAGE_FOLDER + "Mixed fruit juice.jpg"
    },

    {
        id: 13,
        name: "Mosambi Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Mosambi juice.jpg"
    },

    {
        id: 14,
        name: "Muskelon Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Muskelon juice.jpg"
    },

    {
        id: 15,
        name: "Orange Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Orange juice.jpg"
    },

    {
        id: 16,
        name: "Papaya Juice",
        category: "Fresh Juices",
        price: 110,
        image: IMAGE_FOLDER + "Papaya juice.jpg"
    },

    {
        id: 17,
        name: "Pineapple Juice",
        category: "Fresh Juices",
        price: 120,
        image: IMAGE_FOLDER + "Pineapple juice.jpg"
    },

    {
        id: 18,
        name: "Pomegranate Juice",
        category: "Fresh Juices",
        price: 150,
        image: IMAGE_FOLDER + "Promegranate Juice.jpg"
    },

    {
        id: 19,
        name: "Strawberry Juice",
        category: "Fresh Juices",
        price: 150,
        image: IMAGE_FOLDER + "Strawberry juice.jpg"
    },

    {
        id: 20,
        name: "Sugar Cane Juice",
        category: "Fresh Juices",
        price: 100,
        image: IMAGE_FOLDER + "Sugar cane juice.jpg"
    },

    {
        id: 21,
        name: "Watermelon Juice",
        category: "Fresh Juices",
        price: 100,
        image: IMAGE_FOLDER + "Watermelon juice.jpg"
    },


    // =========================
    // MILK SHAKES
    // =========================

    {
        id: 22,
        name: "Badham Milk",
        category: "Milk Shakes",
        price: 140,
        image: IMAGE_FOLDER + "Badham milk.jpg"
    },

    {
        id: 23,
        name: "Badham Shake",
        category: "Milk Shakes",
        price: 150,
        image: IMAGE_FOLDER + "Badham shake.jpg"
    },

    {
        id: 24,
        name: "Banana Milk Shake",
        category: "Milk Shakes",
        price: 130,
        image: IMAGE_FOLDER + "Banana milk shake.jpg"
    },

    {
        id: 25,
        name: "Butter Milk",
        category: "Milk Shakes",
        price: 80,
        image: IMAGE_FOLDER + "Butter milk.jpg"
    },

    {
        id: 26,
        name: "Butterscotch Milk Shake",
        category: "Milk Shakes",
        price: 150,
        image: IMAGE_FOLDER + "Butterscotch milk shake.jpg"
    },

    {
        id: 27,
        name: "Chocolate Milk Shake",
        category: "Milk Shakes",
        price: 150,
        image: IMAGE_FOLDER + "Chocolate milk shake.jpg"
    },

    {
        id: 28,
        name: "Dry Fruit Milk Shake",
        category: "Milk Shakes",
        price: 180,
        image: IMAGE_FOLDER + "Dry fruit milk shake.jpg"
    },

    {
        id: 29,
        name: "Kitkat Milk Shake",
        category: "Milk Shakes",
        price: 170,
        image: IMAGE_FOLDER + "Kitkat milk shake.jpg"
    },

    {
        id: 30,
        name: "Mango Milk Shake",
        category: "Milk Shakes",
        price: 150,
        image: IMAGE_FOLDER + "Mango milk shake.jpg"
    },

    {
        id: 31,
        name: "Oreo Milk Shake",
        category: "Milk Shakes",
        price: 170,
        image: IMAGE_FOLDER + "Oreo milk shake.jpg"
    },

    {
        id: 32,
        name: "Pista Milk Shake",
        category: "Milk Shakes",
        price: 160,
        image: IMAGE_FOLDER + "Pista milk shake.jpg"
    },

    {
        id: 33,
        name: "Rose Milk Shake",
        category: "Milk Shakes",
        price: 140,
        image: IMAGE_FOLDER + "Rose milk shake.jpg"
    },

    {
        id: 34,
        name: "Strawberry Milk Shake",
        category: "Milk Shakes",
        price: 160,
        image: IMAGE_FOLDER + "Strawberry milk shake.jpg"
    },

    {
        id: 35,
        name: "Vanilla Milk Shake",
        category: "Milk Shakes",
        price: 140,
        image: IMAGE_FOLDER + "Vanilla milk shake.jpg"
    },


    // =========================
    // FRUIT BOWLS
    // =========================

    {
        id: 36,
        name: "Apple Bowl",
        category: "Fruit Bowls",
        price: 149,
        image: IMAGE_FOLDER + "Apple bwol.jpg"
    },

    {
        id: 37,
        name: "Banana Bowl",
        category: "Fruit Bowls",
        price: 129,
        image: IMAGE_FOLDER + "Banana bwol.jpg"
    },

    {
        id: 38,
        name: "Dragon Fruit Bowl",
        category: "Fruit Bowls",
        price: 179,
        image: IMAGE_FOLDER + "Dragon fruit bwol.jpg"
    },

    {
        id: 39,
        name: "Kiwi Bowl",
        category: "Fruit Bowls",
        price: 179,
        image: IMAGE_FOLDER + "Kiwi bwol.jpg"
    },

    {
        id: 40,
        name: "Mango Bowl",
        category: "Fruit Bowls",
        price: 149,
        image: IMAGE_FOLDER + "Mango bwol.jpg"
    },

    {
        id: 41,
        name: "Mixed Fruit Bowl",
        category: "Fruit Bowls",
        price: 179,
        image: IMAGE_FOLDER + "Mixed fruit bwol.jpg"
    },

    {
        id: 42,
        name: "Papaya Bowl",
        category: "Fruit Bowls",
        price: 129,
        image: IMAGE_FOLDER + "Papaya bwol.jpg"
    },

    {
        id: 43,
        name: "Premium Fruit Bowl",
        category: "Fruit Bowls",
        price: 199,
        image: IMAGE_FOLDER + "Premium fruit bwol.jpg"
    },

    {
        id: 44,
        name: "Pomegranate Bowl",
        category: "Fruit Bowls",
        price: 179,
        image: IMAGE_FOLDER + "Promegranate bwol.jpg"
    },

    {
        id: 45,
        name: "Strawberry Bowl",
        category: "Fruit Bowls",
        price: 179,
        image: IMAGE_FOLDER + "Strawberry bwol.jpg"
    },

    {
        id: 46,
        name: "Watermelon Bowl",
        category: "Fruit Bowls",
        price: 129,
        image: IMAGE_FOLDER + "Watermelon bwol.jpg"
    }

];


// =========================================================
// LOCAL STORAGE VERSION
// =========================================================

const PRODUCT_VERSION = "4";


let products;


const savedVersion =
    localStorage.getItem(
        "naturalProductsVersion"
    );


if (
    savedVersion !==
    PRODUCT_VERSION
) {

    products =
        [...defaultProducts];


    localStorage.setItem(
        "naturalProducts",
        JSON.stringify(products)
    );


    localStorage.setItem(
        "naturalProductsVersion",
        PRODUCT_VERSION
    );

} else {

    products =
        JSON.parse(
            localStorage.getItem(
                "naturalProducts"
            )
        ) ||
        [...defaultProducts];

}


// =========================================================
// CART
// =========================================================

let cart =
    JSON.parse(
        localStorage.getItem(
            "naturalCart"
        )
    ) || [];


// =========================================================
// PAGE LOAD
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProducts("All");

        updateCartCount();

    }
);


// =========================================================
// DISPLAY PRODUCTS
// =========================================================

function displayProducts(category) {

    const grid =
        document.getElementById(
            "productGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    let filteredProducts;


    if (category === "All") {

        filteredProducts =
            products;

    } else {

        filteredProducts =
            products.filter(
                product =>
                    product.category ===
                    category
            );

    }


    if (
        filteredProducts.length === 0
    ) {

        grid.innerHTML = `

            <div class="no-products">

                <h3>
                    No products available
                </h3>

                <p>
                    Please select another category.
                </p>

            </div>

        `;

        return;
    }


    filteredProducts.forEach(
        product => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            card.innerHTML = `

                <div
                    class="product-image-container"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                        onerror="handleImageError(this)"
                    >

                </div>


                <div class="product-info">

                    <span
                        class="product-category"
                    >
                        ${product.category}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <div
                        class="product-bottom"
                    >

                        <span
                            class="product-price"
                        >
                            ₹${product.price}
                        </span>


                        <button
                            class="add-cart-btn"
                            onclick="addToCart(${product.id})"
                        >
                            Add
                        </button>

                    </div>


                    <button
                        class="delete-product-btn"
                        onclick="deleteProduct(${product.id})"
                    >
                        Delete Product
                    </button>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


// =========================================================
// IMAGE ERROR
// =========================================================

function handleImageError(image) {

    console.error(
        "Image not found:",
        image.src
    );


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
                    fill="#eeeeee"
                />

                <text
                    x="50%"
                    y="48%"
                    text-anchor="middle"
                    font-size="28"
                    fill="#777"
                >
                    Image Not Found
                </text>

            </svg>

        `);

}


// =========================================================
// FILTER
// =========================================================

function filterProducts(
    category,
    button
) {

    displayProducts(
        category
    );


    document
        .querySelectorAll(
            ".filter-btn"
        )
        .forEach(
            btn => {

                btn.classList.remove(
                    "active"
                );

            }
        );


    if (button) {

        button.classList.add(
            "active"
        );

    }

}


// =========================================================
// ADD PRODUCT
// =========================================================

function addProduct() {

    const name =
        document
            .getElementById(
                "productName"
            )
            .value
            .trim();


    const category =
        document
            .getElementById(
                "productCategory"
            )
            .value;


    const price =
        Number(
            document
                .getElementById(
                    "productPrice"
                )
                .value
        );


    let image =
        document
            .getElementById(
                "productImage"
            )
            .value
            .trim();


    if (!name) {

        showToast(
            "Enter product name"
        );

        return;
    }


    if (!category) {

        showToast(
            "Select category"
        );

        return;
    }


    if (
        !price ||
        price <= 0
    ) {

        showToast(
            "Enter valid price"
        );

        return;
    }


    if (!image) {

        showToast(
            "Enter image filename"
        );

        return;
    }


    if (
        !image.startsWith(
            "http://"
        ) &&
        !image.startsWith(
            "https://"
        ) &&
        !image.startsWith(
            "./"
        )
    ) {

        image =
            IMAGE_FOLDER +
            image;

    }


    const newProduct = {

        id:
            Date.now(),

        name:
            name,

        category:
            category,

        price:
            price,

        image:
            image

    };


    products.push(
        newProduct
    );


    saveProducts();


    displayProducts(
        "All"
    );


    document.getElementById(
        "productName"
    ).value = "";


    document.getElementById(
        "productPrice"
    ).value = "";


    document.getElementById(
        "productImage"
    ).value = "";


    showToast(
        "Product added successfully!"
    );

}


// =========================================================
// SAVE PRODUCTS
// =========================================================

function saveProducts() {

    localStorage.setItem(
        "naturalProducts",
        JSON.stringify(products)
    );

}


// =========================================================
// DELETE PRODUCT
// =========================================================

function deleteProduct(id) {

    const product =
        products.find(
            item =>
                item.id === id
        );


    if (!product) {
        return;
    }


    if (
        !confirm(
            `Delete ${product.name}?`
        )
    ) {

        return;
    }


    products =
        products.filter(
            item =>
                item.id !== id
        );


    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveProducts();

    saveCart();

    displayProducts("All");

    updateCartCount();


    showToast(
        "Product deleted"
    );

}


// =========================================================
// CART
// =========================================================

function addToCart(id) {

    const product =
        products.find(
            item =>
                item.id === id
        );


    if (!product) {

        showToast(
            "Product not found"
        );

        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            price:
                product.price,

            image:
                product.image,

            quantity:
                1

        });

    }


    saveCart();

    updateCartCount();


    showToast(
        `${product.name} added to cart`
    );

}


// =========================================================
// SAVE CART
// =========================================================

function saveCart() {

    localStorage.setItem(
        "naturalCart",
        JSON.stringify(cart)
    );

}


// =========================================================
// CART COUNT
// =========================================================

function updateCartCount() {

    const count =
        document.getElementById(
            "cartCount"
        );


    if (!count) {
        return;
    }


    const total =
        cart.reduce(
            (
                sum,
                item
            ) =>
                sum + item.quantity,
            0
        );


    count.textContent =
        total;

}


// =========================================================
// OPEN CART
// =========================================================

function openCart() {

    renderCart();


    document
        .getElementById(
            "cartModal"
        )
        .classList.add(
            "show"
        );

}


// =========================================================
// CLOSE CART
// =========================================================

function closeCart() {

    document
        .getElementById(
            "cartModal"
        )
        .classList.remove(
            "show"
        );

}


// =========================================================
// RENDER CART
// =========================================================

function renderCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    cartItems.innerHTML = "";


    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <div class="empty-cart">

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


    let total = 0;


    cart.forEach(
        item => {

            const itemTotal =
                item.price *
                item.quantity;


            total +=
                itemTotal;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "cart-item";


            div.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="handleImageError(this)"
                >


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>


                    <p>
                        ₹${item.price}
                    </p>


                    <div
                        class="quantity-controls"
                    >

                        <button
                            onclick="changeQuantity(${item.id}, -1)"
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            onclick="changeQuantity(${item.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>


                <div
                    class="cart-item-right"
                >

                    <strong>
                        ₹${itemTotal}
                    </strong>


                    <button
                        onclick="removeFromCart(${item.id})"
                    >
                        Remove
                    </button>

                </div>

            `;


            cartItems.appendChild(
                div
            );

        }
    );


    cartTotal.textContent =
        `₹${total}`;

}


// =========================================================
// QUANTITY
// =========================================================

function changeQuantity(
    id,
    change
) {

    const item =
        cart.find(
            product =>
                product.id === id
        );


    if (!item) {
        return;
    }


    item.quantity +=
        change;


    if (
        item.quantity <= 0
    ) {

        cart =
            cart.filter(
                product =>
                    product.id !== id
            );

    }


    saveCart();

    updateCartCount();

    renderCart();

}


// =========================================================
// REMOVE CART ITEM
// =========================================================

function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveCart();

    updateCartCount();

    renderCart();


    showToast(
        "Removed from cart"
    );

}


// =========================================================
// CLEAR CART
// =========================================================

function clearCart() {

    if (
        cart.length === 0
    ) {

        showToast(
            "Cart is empty"
        );

        return;
    }


    if (
        !confirm(
            "Clear all cart items?"
        )
    ) {

        return;
    }


    cart = [];


    saveCart();

    updateCartCount();

    renderCart();


    showToast(
        "Cart cleared"
    );

}


// =========================================================
// WHATSAPP
// =========================================================

function orderOnWhatsApp() {

    if (
        cart.length === 0
    ) {

        showToast(
            "Add products to cart first"
        );

        return;
    }


    let message =
        `Hello ${shopName}!\n\n`;


    message +=
        "I would like to order:\n\n";


    let total = 0;


    cart.forEach(
        item => {

            const itemTotal =
                item.price *
                item.quantity;


            total +=
                itemTotal;


            message +=
                `${item.name} x ${item.quantity} = ₹${itemTotal}\n`;

        }
    );


    message +=
        `\nTotal Amount: ₹${total}\n\n`;


    message +=
        "Please confirm my order.\n\n";


    message +=
        `Shop Address:\n${shopAddress}`;


    const url =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(
            message
        );


    window.open(
        url,
        "_blank"
    );

}


// =========================================================
// TOAST
// =========================================================

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


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


// =========================================================
// CLOSE CART OUTSIDE
// =========================================================

window.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "cartModal"
            );


        if (
            event.target === modal
        ) {

            closeCart();

        }

    }
);


// =========================================================
// ESC KEY
// =========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeCart();

        }

    }
);