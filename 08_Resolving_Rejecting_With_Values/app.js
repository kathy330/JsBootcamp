const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random()
			if(rand < 0.3){
				reject({status: 403})
			} else {
				const pages = {
					'/users' : [
						{id : 1, username: 'Bilbo'},
						{id : 5, username: 'Irene'},
					],
					'/about' : 'This is about page'
				}
				const data = pages[url]
				if(data){
					resolve({ status: 200, data })
				} else {
					reject({status: 404})
				}
			}
		},
		500)
	})
}
fakeRequest('/users').then((res) => {
	console.log(res.status)
	console.log(res.data)
	console.log('request work.')
})
.catch((res) => {
	console.log(res.status)
	console.log('request failed.')
})