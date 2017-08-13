var seedData = [
	{ 
		name: 'Benjamin Franklin',
	    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BenFranklinDuplessis.jpg/1200px-BenFranklinDuplessis.jpg',
	    gender: 'male',
	    desiredGenders: [ 'female' ],
	    answers: [ '4', '1', '4', '4', '2', '1', '5', '4', '4', '5' ] 
	},
	{ 
		name: 'Shakira',
	    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Shakira_2014.jpg/1200px-Shakira_2014.jpg',
	    gender: 'female',
	    desiredGenders: [ 'male' ],
	    answers: [ '1', '5', '4', '1', '1', '3', '5', '1', '5', '5' ] 
	},
	{ 
		name: 'Lord Byron',
	    image: 'http://www.bbc.co.uk/staticarchive/95b7fdcd3e03649edf7f87e1a7c57bb2582dd630.jpg',
	    gender: 'male',
	    desiredGenders: [ 'male', 'female', 'other' ],
	    answers: [ '1', '5', '4', '4', '1', '3', '3', '1', '5', '3' ] 
	},
	{ 
		name: 'Angelina Jolie',
	    image: 'http://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2011/08/angelina_jolie_a_p.jpg',
	    gender: 'female',
	    desiredGenders: [ 'male', 'female', 'other' ],
	    answers: [ '3', '4', '1', '5', '3', '1', '4', '3', '4', '5' ] 
	},
	{ 
		name: 'Ayn Rand',
	    image: 'https://estore.aynrand.org/WidgetsFeaturedAuthor/DisplayImage/0',
	    gender: 'female',
	    desiredGenders: [ 'male' ],
	    answers: [ '4', '1', '1', '5', '2', '4', '5', '4', '3', '1' ] 
	},
	{ 
		name: 'Eleanor Roosevelt',
	    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Eleanor_Roosevelt_portrait_1933.jpg',
	    gender: 'female',
	    desiredGenders: [ 'male', 'female', 'other' ],
	    answers: [ '4', '1', '3', '4', '4', '1', '4', '5', '4', '5' ] 
	},
	{ 
		name: 'Dwayne "The Rock" Johnson',
	    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/220px-Dwayne_Johnson_2%2C_2013.jpg',
	    gender: 'male',
	    desiredGenders: [ 'female' ],
	    answers: [ '1', '4', '1', '4', '2', '1', '5', '3', '2', '3' ] 
	},
	{ 
		name: 'Zeus',
	    image: 'https://d1nz104zbf64va.cloudfront.net/dt/a/o/15-facts-about-zeus-from-greek-mythology.jpg',
	    gender: 'male',
	    desiredGenders: [ 'male', 'female', 'other' ],
	    answers: [ '2', '5', '1', '5', '2', '3', '3', '1', '4', '5' ] 
	},
	{ 
		name: 'Donald Trump',
	    image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/05/25/103666044-RTX2AQXH.530x298.jpg?v=1464205218',
	    gender: 'male',
	    desiredGenders: [ 'female' ],
	    answers: [ '2', '5', '1', '5', '1', '5', '5', '2', '2', '5' ] 
	},
	{ 
		name: "Owen's Dog Henry",
	    image: '/images/henry.JPG',
	    gender: 'male',
	    desiredGenders: [ 'male', 'female', 'other' ],
	    answers: [ '1', '5', '5', '4', '4', '3', '2', '3', '3', '3' ] 
	},
];

module.exports = seedData;

/*
Reference for adding more seed profiles: 

A "I value organization over spontanaiety.", 
B "I value romance over reliability.", 
C "I prefer to live simply and work less.", 
D "I would consider myself an extremly ambitious person.", 
E "I generally dislike taking chances.", 
F "Donald Trump is going to Make America Great Again.", 
G "Success mostly has to do with how hard you work.", 
H "I usually prefer quiet evenings at home to wild nights out on the town.", 
I "I like to live alternatively.", 
J "I want to have kids someday."

	{ 
		name: 'Lord Byron',
	    image: 'http://www.bbc.co.uk/staticarchive/95b7fdcd3e03649edf7f87e1a7c57bb2582dd630.jpg',
	    gender: 'male',
	    desiredGenders: [ 'male', 'female', 'other' ],
	    answers: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ] 
	},
*/