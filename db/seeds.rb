# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.create(
	title: 'Polisee',
	description: "Polisee is a coupled web application that utilizes Ruby on Rails in the backend with a PostgreSQL database. The backend also integrates the Sunlight Foundation API to provide Polisee the data on US representatives and bills. It uses twitter api's 3-legged oauth for user creation and authentication. On top of HTML5 and CSS3, the structure of the frontend was built with the React.js library and styled with Materialize.css. Polisee also uses Charts.JS to display the amounts donated to a particular representative. Lastly, it also uses the Twilio API for it's text message notifications when a user follows a certain bill. ",
	url: 'https://www.polisee.io'
)
