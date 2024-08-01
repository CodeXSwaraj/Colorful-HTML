document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.previousElementSibling.previousElementSibling.textContent;
            cart.push(productName);
            alert(`${productName} added to cart`);
        });
    });
});
