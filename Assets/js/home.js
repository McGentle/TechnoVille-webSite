

(function(){
	const scrollDownBtn = document.querySelector('.indicator')

	document.querySelector('.main').addEventListener('scroll' , function(){
		if(this.scrollTop >= 100){
			scrollDownBtn.classList.add('indicator--modifier')
			return
		}
		scrollDownBtn.classList.remove('indicator--modifier')
	})
})()

