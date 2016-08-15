# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

	
	# 10.times { |n|  
	# 	Blog.create(title: Faker::Lorem.sentence(3), 
	# 				content: Faker::Lorem.paragraph(20)
	# 				)
	# }
	Project.create(name: 'My Website', description: 'Made with Ruby on Rails, this site will document my progress as a developer while at the same time showcase my various projects along the way. Utlizes JQuery for CSS animations.', url: "http://www.emiliocorpus.com", picture_url:'website-screenshot.png', github_url:"https://github.com/emiliocorpus/personal-website")

	Project.create(name: "FitbitGraphs", description: "Uses FitbiAPI to fetch various data like steps and calories from a users Fitbit tracker. Also uses Charts.js to interpret JSON data from the API into a viewable graph.", url: "http://www.fitbitgraphs.co", picture_url: 'fitbit-graphs-screenshot.png', github_url:"https://github.com/emiliocorpus/fitbit-graphs")

	Project.create(name: 'Pokédex', description:"Designed with RoR and React.js, this app utilizes the FlipMove component library to animate when React elements are removed or added to the virtual DOM. Currently only features first 151 Pokémon.", url: "https://pokedex-on-react.herokuapp.com/", picture_url:'pokedex-screenshot.png', github_url:"https://github.com/emiliocorpus/react-animations")

	Project.create(name: 'Accounts Manager', description: 'Constructed with React.js, this application was created to better understand the interaction between state, props, and the virtual DOM in React.js.', url: "https://accounts-manager-on-react.herokuapp.com/", picture_url:"expense-tracker-screenshot.png", github_url:"https://github.com/emiliocorpus/accounts")
	
	Project.create(name: "Battleship", description:"Made with React.js and Ruby on Rails. This game was created to further understand how to build a fully functional single-page appliction via React.js. ", url: "/portfolio/battleship", picture_url: "battleship-screenshot.png", github_url:"https://github.com/emiliocorpus/battleship-react-ror")

	Project.create(name: "Twenty-Four", description: "Another single page application made with React.js and RoR. Built to better understand the underlying technologies, the application also allowed me to implement specific strategies towards devising the game logic.", url: 'https://twenty-four-on-react.herokuapp.com', picture_url: "twenty-four-screenshot.png", github_url: "https://github.com/emiliocorpus/twenty-four")

	Project.create(name: 'AC DC Stats' description: "Constructed with React.js and RoR. This single page application scrapes NFL.com to gather data on Amari Cooper and Derek Carr. As an avid Oakland Raider fan, I thoguht it would be cool to apply my web dev skills and make a site the documents their progress.", url: "https://acdcstats.herokuapp.com/", picture_url:"acdc-screenshot.png"github_url:"https://github.com/emiliocorpus/acdctds")
	





