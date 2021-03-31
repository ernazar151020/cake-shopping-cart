
AOS.init();




















let cart = document.querySelector(".cart");
let cartInfo = document.getElementById("cart-info");
cartInfo.addEventListener("click", function () {
	cart.classList.toggle('show-cart')
})

// select links

let cartBtn = document.querySelectorAll('.store-item-icon')
// clicking store-icon
cartBtn.forEach(function (item) {
	item.addEventListener('click', function (e) {

		if (e.target.parentElement.classList.contains('store-item-icon')) {
			let fullPath = e.target.parentElement.previousElementSibling.src
			let pos = fullPath.indexOf('image')
			let partPath = fullPath.slice(pos)


			const item = {}
			item.img = `${partPath}`
			let name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent

			item.name = name
			// price
			let price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent


			let FinalPrice = price.slice(2).trim()

			item.price = FinalPrice
			console.log(item)

			const cartItem = document.createElement('div')
			cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'align-items-center', 'text-capitalize', 'my-3')
			
			cartItem.innerHTML = `		<img src="${item.img}" class="img-fluid rounded-circle cart-image" alt="">
				<div class="item-text">
					<p id="cart-item-title" class='font-weight-bold mb-0'>
					${item.name} </p>
					<span>$</span>
					<span id="cart-item-price" class="cart-item-class mb-0">${item.price}</span>

				</div>
				<a href="#" id="cart-item-remove" class="cart-item-remove">
					<i class="fas fa-trash"></i>
				</a>`
			
			// select cartItem

			const cart = document.getElementById('cart')
			const total = document.querySelector('.cart-total-container')
			cart.insertBefore(cartItem, total)
			alert('Item added to the cart')
			showTotal()
		}

	})
	// show total when
	const showTotal = () => {

		const total = []
		const items = document.querySelectorAll('.cart-item-class')
		items.forEach(function (item) {
		total.push(parseFloat(item.textContent))

		})
		const totalMoney = total.reduce(function (total,item) {
			total+=item
			return total;
			
		},0)
		const FinalMoney=totalMoney.toFixed(2)
document.getElementById('cart-total').textContent=FinalMoney
document.querySelector('.item-total').textContent=FinalMoney
document.getElementById('team-count').textContent=total.length
}

})




