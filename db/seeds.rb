# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

	
	
	10.times { |n|  
		Blog.create(title: Faker::Lorem.sentence(3), 
					content: Faker::Lorem.paragraph(20)
					)
	}

	
	Project.create(name: "Battleship", description:"Made with React.js and Ruby on Rails. This game was created to further understand how to build a fully functional single-page appliction via React.js. Super fun to build!", url: "/portfolio/battleship", picture_url: "battleship-screenshot.png")

	Project.create(name: "Guess That Word", description: "Project was also made with React.js to gain more experience in designing a known game (similar to Hangman) into a single-page app", url: "/portfolio/guess-that-word", picture_url: 'guess-that-screenshot.png')

	Project.create(name: "FitbitGraphs", description: "Uses FitbiAPI to fetch various data like steps and calories from a users Fitbit tracker. Also uses Charts.js to interpret JSON data from the API into a viewable graph.", url: "http://www.fitbitgraphs.co", picture_url: 'fitbit-graphs-screenshot.png')

	Project.create(name: 'My Website', description: 'Made with Ruby on Rails, this site will document my progress as a developer while at the same time showcase my enhanced skills along the way. Utlizes Jquery for css animations', url: "http://www.emiliocorpus.com", picture_url:'website-screenshot.png')



	sports = ['aerobics','archer','archery','arena','arrow','athlete','athletics','axel','badminton','ball','base','baseball','basketball','bat','baton','batter','batting','biathlon','bicycle','bicycling','bike','biking','billiards','bobsleigh','bocce','boomerang','boules','bow','bowler','bowling','boxer','boxing','bunt','canoe','canoeing','catch','catcher','champion','championship','cleats','club','coach','compete','competing','competition','halftime','handball','hardball','helmet','heptathlon','high jump','hitter','hockey','home','hoop','horseshoes','huddle','hurdle','javelin','jog','jogger','judo','jump','jumper','jumping','wakeboarding','walk','walker','walking','water polo','waterski','waterskier','waterskiing','weightlifter','weightlifting','weights','wetsuit','wicket','win','windsurfer','windsurfing','winner','winning','wrestler','wrestling']
	sports.each do |sport|
		Word.create(word: sport, category: 'sports')
	end


	countries = ['Belize','Benin','Bhutan','Bolivia','Bulgaria','Burma','Burundi','Cambodia','Cameroon','Canada','Ghana','Greece','Georgia','Germany','Indonesia','Iran','Iraq','Ireland','Macedonia','Madagascar','Malawi','Malaysia','Moldova','Monaco','Mongolia','Montenegro','Yemen','Zimbabwe','Suriname','Swaziland','Sweden','Switzerland','Syria','Somalia','Spain','Sri Lanka','Sudan']

	countries.each do |country| 
		Word.create(word: country, category: 'countries')
	end

	desserts = ['cake','cannoli','cheesecake','churro','cobbler','cookie','crepe','cupcake','custard','scone','sherbet','shortbread','snickerdoodle','sorbet','souffle','spumoni','strudel','sundae','macaroon','marshmallow','meringue','milkshake','molasses','mousse','muffin']

	desserts.each do |dessert|
		Word.create(word: dessert, category: 'desserts')
	end

	mammals = ['aardvark','agouti','alpaca','anteater','antelope','ape','armadillo','artiodactyls','baboon','badger','badger','bandicoot','bat','bear','beaver','bilby','binturong','bison','bobcat','bongo','bonobo','brown bear','buffalo','bull','bushbaby','camel','capybera','caracal','caribou','carnivora','cat','catamount','cattle','cavy','cheetah','chimipanzee','chinchilla','chipmunk','coati','colugo','cougar','cow','coyote','coypu','deer','dhole','dingo','dog','dolphin','donkey','dromedary','dugong','echidna','ekaltadelta','eland','elephant','elk','ermine','ferret','fossa','fox','galagos','gazelle','gerbil','gibbon','giraffe','gnu','goat','gopher ','gorilla','groundhog','hamster','hare','hedgehog','hippo','hippopotamus','horse','hyena','hyrax','ibex','impala','insectivores','jaguar','javelina','kangaroo','karakul','kinkajou','koala','lagomorph','lemming','lemur','leopard','lion','llama','longhorn','loris','lynx','macaque','mammal','mammoth','manatee','mandrill','marmoset','marmot','marsupial','mastodon','meerkat','mink','mice','mole','mongoose','monkey','monotreme','moose','mouse','musk ox','muskrat','mustelids','nabarlek','narwhal','numbat','nutria','ocelot','okapi','onager','opossum','orangutan','orca','oryx','otter','ox','panda','pangolin','panther','pig','pika','pinnipeds','platybelodon','platypus','porcupine','porpoise','primates','pronghorn','puma','quagga','quokka','quoll','rabbit','raccoon','rat','reindeer','rhino','rhinoceros','rodent','seal','serval','sheep','shrew','siamang','skunk','sloth','squirrel','squirrel','tamarin','tapir','tarsier','tiger']

	mammals.each do |mammal|
		Word.create(word:mammal, category: 'mammals')
	end