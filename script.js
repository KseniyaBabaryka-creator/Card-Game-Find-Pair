document.addEventListener('DOMContentLoaded', () =>{

	const cards = document.querySelectorAll('.card');
	const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
	const winBtn = document.querySelector('.btn');

	 function cardGame(cards, numbers) {
		const shuffle = (array) => {
			let oldElement;
			for (let i = array.length - 1; i > 0; i--) {
			  let rand = Math.floor(Math.random() * (i + 1));
			  oldElement = array[i];
			  array[i] = array[rand];
			  array[rand] = oldElement;
			}
			return array;
		};
	
		shuffle(numbers);
		let counter = 0;
		let str1;
		let str2;
		let openCards = [];
		let timeout;
		let winCounter = 0;
	
		for (let i = 0; i < cards.length; i++) {
			const card = cards[i];
			card.textContent = numbers[i]; 
	  
			card.addEventListener('click', () => {
			  card.classList.toggle('is_active');
			  card.classList.add('blocked');
			  openCards.push(card);
			  counter++;
			  if(counter === 1){
				str1 = card.textContent;
			  } else if(counter === 2){
					str2 = card.textContent;
					if(str1 === str2){
						openCards = [];
						winCounter++;
						if(winCounter === 8){
							winBtn.style.display = "block";
						}
					} else {
						
	
						timeout = setTimeout( () =>{
							for(const item of openCards){
								item.classList.remove('blocked');
								item.classList.remove('is_active');
								openCards = [];
							};
						}, 1000);
						
					};
					counter = 0;
				};

				
			});
		 };

			
	 };

	 winBtn.addEventListener('click', () =>{
		winBtn.style.display = 'none';
		for(const card of cards){
			card.classList.remove('blocked', 'is_active');
		}
		cardGame(cards, numbers);
	});

	 cardGame(cards,numbers);
});