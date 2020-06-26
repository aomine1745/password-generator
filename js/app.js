const btn = document.getElementById('btn')
const input = document.getElementById('password')

btn.addEventListener('click', getPassword)

function getPassword () {
	const chars = '0123456789abcdefhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]'
	const passwordLength = 16
	let password = ''

	for (let i = 0; i < passwordLength; i++) {
		const randomNumber = Math.floor(Math.random() * chars.length)
		password += chars.substring(randomNumber, randomNumber + 1)
	}
	console.log(typeof password, password, input)
	input.value = password
	
}