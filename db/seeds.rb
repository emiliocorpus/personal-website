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
	Project.create(name: "FitbitGraphs", description: "Uses FitbiAPI to fetch various data like steps and calories from a users Fitbit tracker. Also uses Charts.js to interpret JSON data from the API into a viewable graph.", url: "http://www.fitbitgraphs.co", picture_url: 'fitbit-graphs-screenshot.png')

	Project.create(name: 'Pokédex', description:"Designed with RoR and React.js, this app utilizes the FlipMove component library to animate when React elements are removed or added to the virtual DOM. Currently only features first 151 Pokémon.", url: "https://pokedex-on-react.herokuapp.com/", picture_url:'pokedex-screenshot.png')

	Project.create(name: 'Accounts Manager', description: 'Constructed with React.js, this application was created to better understand the interaction between state, props, and the virtual DOM in React.js.', url: "https://accounts-manager-on-react.herokuapp.com/", picture_url:"expense-tracker-screenshot.png")
	
	Project.create(name: "Battleship", description:"Made with React.js and Ruby on Rails. This game was created to further understand how to build a fully functional single-page appliction via React.js. ", url: "/portfolio/battleship", picture_url: "battleship-screenshot.png")

	Project.create(name: "Guess That Word", description: "Project was also made with React.js to gain more experience in designing a known game (similar to Hangman) into a single-page app. ", url: "/portfolio/guess-that-word", picture_url: 'guess-that-screenshot.png')

	Project.create(name: 'My Website', description: 'Made with Ruby on Rails, this site will document my progress as a developer while at the same time showcase my various projects along the way. Utlizes JQuery for CSS animations.', url: "http://www.emiliocorpus.com", picture_url:'website-screenshot.png')





