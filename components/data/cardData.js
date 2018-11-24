
export function cardData(){
	const cardData = []

	function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
	}

	const pups = ['hook','lamp','turkey','antimatter',
	'bandana','buckle','comb','squeegee','pecan pie','neurobeam']

	const powerups = () => {
		const pu = []
		for(let i=0;i<7;i++){
		let item = getRandomInt(10) - 1

		while (pu.find((f)=>f.name === pups[item])){
			item = getRandomInt(10) - 1
		}
		pu.push({
				name:pups[item],
				img:`pow_${item}.png`,
				price:getRandomInt(3),
				active:false,
				effect:getRandomInt(3),
				id:i
			})
		}
		return pu
	}

	for (let i=0;i<21;i++){
		cardData.push({		
		img:`p${i}.png`,
		id:i,
		name:`card${i}`,
		u:getRandomInt(10),
		d:getRandomInt(10),
		l:getRandomInt(10),
		r:getRandomInt(10),
		powups:powerups(),
		poss:getRandomInt(2) - 1,
		pocket:getRandomInt(5),
		})
	}
	return cardData
}