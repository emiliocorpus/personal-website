var Blog4 = React.createClass({
	render:function() {
		return (
			<div>
				<h2>Intro to Array's and Hashes via Ruby </h2>

				<h4>5/25/15</h4>

				<p>
				  In an ever expanding world of information and data, things can get quite hairy. We have all these places to input data, but have you ever wondered how it is stored? Let me fill you in on what I have recently learned through my time playing with computers and their different programming languanges. Today, we will specifically use the languange, Ruby, to help bring the point across. After reading this blog, you will hopefully come away having a baseline knowledge on arrays and hashes. Shall we begin?!
				</p>

				<p>What is an <strong>array</strong>?<br />
				  An array is simply a collection of objects, which can be anything from a string, integer or boolean(true or false). There is no limit to how much you can store in an array, but today we will limit our array to 3-4 items. You see, in Ruby, it is quite easy to declare an array. Lets make it an empty one<br />
				  <br />
				  <code>any_name_array = []</code><br />
				  <br />
				</p>

				<p>Did you see what we did there? In order to declare an empty array, all you must do is set the array name (in this case, <code>any_name_array</code> equal to <code>[]</code>. I am sure you are itching to see what an array with actual stuff in it looks like so I will do that now.</p>

				<code>non_empty_array = [1, "some random string", true ]</code><br />

				<p>We now have an array with 3 objects inside of it, a number 1, a string that says "some random string", and a boolean value which happens to be true. So now we have an array with items with it, but I am sure you are wondering what is the point of this. Think of it like a box with items with it. Someone puts items in a box, so they can later open that box and grab/use the item stored. In Ruby, to access that item all one must do is use the index method, as followed:</p>



				<code>non_empty_array[0]</code> --------------> this grabs the first item stored, the number 1<br />
				<code>non_empty_array[1]</code> --------------> this grabs the second item stored, the string "some random string"<br />
				<code>non_empty_array[2]</code> --------------> this grabs the third item stored, the boolean value "true".<br /><br />

				<p>In most programming languanges, the indexes (numbers in the []), start at 0 and not 1. So the first item was declared with <code>non_empty_array[0]</code><br /><br />
								You are probably wondering what were to happen if you typed the index 4. Well since there is not a 4th item in the array, than Ruby will just spit back a <code>nil</code> back at you to tell you you don't have anything in there. However, we can add items to the array using the <code>.push</code> method on the array like so:</p>


				<p><code>non_empty_array.push("4th item")</code></p>

				So now, if we try to access the 4th item, which is at the 3rd indexed postion, ruby will spit back at us the item, which happens to be called "4th item"<br /><br />
				This is just an introduction to what can be done with arrays. The following is a great reference for other things you can do with arrays:<br /><br />
				<a href ="http://ruby-doc.org/core-2.2.0/Array.html">RUBY-DOC.ORG:ARRAYS</a><br /><br />
				Now it is time to look at hashes!<br />
				<br />
				<br />
				What is a <strong>hash</strong>?<br />
				<br />
				A hash is a collection of objects, just like an array! The difference with arrays is that the indexes of a hash are not represented with those integer values we just talked about above. Hashes instead use a <em>key</em>, which can by a number or string! The following will be an example of a hash with 5 key-values.<br />
				<br />
				favorites = {'{'}<br />
				  :fruit => 'mango',<br />
				  :animal =>'T-rex',<br />
				  :sport => 'basketball',<br />
				  :movie => 'Ocean Eleven',<br />
				  :team => 'Oakland Raiders',<br />
				{'}'}
				<br /><br />

				So we just declared a hash named <em>favorites</em>. Can you note any of the differences between this hash and the <code>any_name_array</code> we made above (besides the content)? Well, first, when we declare an a hashs we use the curly braces {}, while for an array we use the squar braces []. Since we said that hashes use <em>keys</em> instead of integer indices, the hash looks a little more complicated than arrays, doesn't it? This is just a small price to pay, but easily well worth it, since now we can call on the values without having to count their indices. Secondly, you should not the : and the =>. The : defines the key, and the => points that key to a valur. So if were wondering what my favorite fruit was we can do it like so<br /><br />

				favorite[:fruit] => mango
				<br /><br />
				This is just a small introduction to hashes and arrays. Please bear with me, as I am still a novice when it comes to the Ruby languange. As I learn more about hashes and arrays, I will come back and add to this blog as I go. In the meantime, I hope you came away with some knowledge about hashes and arrays. Oh yeah, I forgot, but here is another reference source for more information about hashes!<br />
				<br />
				<a href='http://ruby-doc.org/core-2.2.0/Array.html#method-i-hash'>RUBY-DOC.ORG:HASHES</a><br /><br />
				Until next time, cheers!

















				 
			</div>


		)

	}
})