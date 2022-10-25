const ar = [
    { Name: "Album 1.png", price: 10.3 },
    { Name: "Album 2.png", price: 9.4 },
    { Name: "Album 3.png", price: 7.13 },
    { Name: "Album 4.png", price: 2.3 },
    { Name: "Band Members.png", price: 6.4 },
    { Name: "Cofee.png", price: 8.7 },
    { Name: "Shirt.png", price: 12.1 },
    { Name: "Header Background.jpg", price: 9.8 },
    { Name: "Shirt.png", price: 3.8 },
    { Name: "Cofee.png", price: 2.7 },
];
const box = document.querySelector('.shop-items');
const boxdet = document.querySelector('.cart-items');
const total = document.querySelector('.cart-total-price');



ar.forEach(e => {
    createitems(e);
})

function createitems(e) {
    const div = document.createElement('div');
    div.classList.add('shop-item');

    const span1 = document.createElement('span');
    span1.classList.add('shop-item-title');
    span1.innerText = e.Name.slice(0, e.Name.length - 4);

    const img = document.createElement('img');
    img.classList.add('shop-item-image');
    img.src = "./Images/" + e.Name;

    div.append(span1, img);

    const divdet = document.createElement('div');
    divdet.classList.add('shop-item-details');

    const spandet = document.createElement('span');
    spandet.classList.add('shop-item-price');
    spandet.innerText = e.price + "$";

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary', 'shop-item-button');
    btn.innerText = "ADD TO CART";


    divdet.append(spandet, btn);

    div.append(divdet);
    box.append(div);
    ///******************************** events */
    btnclick(btn, e);

}

function btnclick(btn, e) {
    btn.addEventListener('click', () => {
        const divcart_row = document.createElement('div');
        divcart_row.classList.add('cart-row');


        const divcart_item = document.createElement('div');
        divcart_item.classList.add('cart-item', 'cart-column');

        const imgcart = document.createElement('img');
        imgcart.classList.add('cart-item-image');
        imgcart.style.width = "100";
        imgcart.style.height = "100";
        imgcart.src = "./Images/" + e.Name;

        const spancart = document.createElement('span');
        spancart.classList.add('cart-item-title');
        spancart.innerText = e.Name.slice(0, e.Name.length - 4);
        divcart_item.append(imgcart, spancart);// add to divcart_row 

        const spanprice = document.createElement('span');
        spanprice.classList.add('cart-price', 'cart-column');
        spanprice.innerText = e.price + "$";// add to divcart_row 


        const cart_quantity = document.createElement('div');
        cart_quantity.classList.add('cart-quantity', 'cart-column');


        const input_quantity = document.createElement('input');
        input_quantity.classList.add('cart-quantity-input');
        input_quantity.type = "number";
        input_quantity.value = 1;

        btn_danger = document.createElement('button');
        btn_danger.classList.add('btn', 'btn-danger');
        btn_danger.type = "button";
        btn_danger.innerText = "REMOVE";

        cart_quantity.append(input_quantity, btn_danger);// add to divcart_row 
        divcart_row.append(divcart_item, spanprice, cart_quantity);
        boxdet.append(divcart_row);
        ///******************************** events */
        calc();

        Removebtn(btn_danger, divcart_row);
        inputadd(input_quantity);
    })
}

function Removebtn(btnd, div) {
    btnd.addEventListener('click', () => {
        div.remove();
        calc();
    })
}

function calc() {
    let c = 0;
    let inpn = 0;
    let s = 0;
    const cartrow = document.querySelectorAll('.cart-items .cart-row');
    cartrow.forEach(elem => {
        c = Number(elem.childNodes[1].innerText.slice(0, elem.childNodes[1].innerText.length - 1));
        inpn = Number(elem.childNodes[2].childNodes[0].value);
        // console.log(c + " ******* " + inpn + "==== " + c * inpn);
        s += (c * inpn);
    })
    total.innerText = s.toPrecision(3) + "$";
}

function inputadd(input_quantity) {
    input_quantity.addEventListener('input', () => {
        calc();
    })
}