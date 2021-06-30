const item = document.querySelector('#addItem')
const itemsUL = document.querySelector('#items')

item.addEventListener('keypress', function(e){
	if(e.key === 'Enter'){
		if(!this.value) return
		const li = document.createElement('li')
		li.innerText = this.value
		itemsUL.appendChild(li)
		this.value = ''
		li.addEventListener('click', function(){
			this.classList.add('purchased')
		})
	}
})

