/* TechnoVilles Official WebSite Javascript Written by Paul I Ezekiel Hart*/
/*Version = Es 6 */

(function(){

	let navBtn , navcontainner , secNavList , clsBtn;


	class Toggle{
		constructor(toggleBtn , slide_content , secNav , state){
			this.toggleButton = toggleBtn
			this.slider = slide_content 
			this.secNavList = secNav
			this.state  = state
		}


		toggleBtn(state){

			if(state){
				this.slider.classList.add('main--modifier')
				this.toggleButton.style.pointerEvents = 'none'
				
				secNavList.forEach( (node,index) =>{
					node.classList.add('--modifier')
					let animDelay = `${0.1 * (index + 1 )}s`
					node.style.animationDelay = animDelay
					console.log(animDelay + node)
				} )

			}else{
				this.slider.classList.remove('main--modifier')
				this.toggleButton.style.pointerEvents = 'auto'
				secNavList.forEach( node => node.classList.remove('--modifier'))

			}
 
				event.stopImmediatePropagation()// Stop Bubling	
		}


}

navBtn = document.querySelector('.main__nav-bar li');
navContainner = document.querySelector('.main');
secNavList = document.querySelectorAll('.components__nav-list ul li')
clsBtn = document.querySelector('.components__cancel-btn li');

const navigationToggle = new Toggle(navBtn,navContainner, secNavList , true);

navigationToggle.toggleButton.onclick = () => navigationToggle.toggleBtn(true)
navigationToggle.slider.onclick = () => navigationToggle.toggleBtn(false)
clsBtn.onclick = () => navigationToggle.toggleBtn(false)




const goUp = document.querySelector('.main__up-btn');
const main = document.querySelector('.main')


	
const myFun = function(){

const scrollHeight = (main.scrollHeight)
const scrollTop = main.scrollTop;
const halfScroll = (scrollHeight - main.clientHeight) / 2 

	if(scrollTop >= halfScroll){
		goUp.classList.add('--modifier')
		return 
	}
	goUp.classList.remove('--modifier')
}
main.onscroll = myFun

goUp.onclick = function(){
	main.scrollTop = 0
}


    //Generate Data for the copy write
    
    window.addEventListener('load', () =>{
          document.querySelector('.footer__copywrite #data').innerText = new Date().getFullYear()
    })

})()