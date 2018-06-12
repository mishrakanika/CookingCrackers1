db = db.getSiblingDB('recipesdb')
db.createCollection('recipes')  
recipesCollection = db.getCollection("recipes") //earlier it was lists
recipesCollection.remove({})  //earlier it was listsCollection
recipesCollection.insert(  //earlier it was listsCollection
{
        rname: "Upma",
        rdescription:"Upma, is a dish from the Indian subcontinent, cooked as a thick porridge from dry roasted semolina or coarse rice flour.",
		rmethod: "1 Place semolina in cast iron pan and cook over medium heat until toasty but not browned, about 2 minutes. Transfer to a bowl.2.Return pan to medium heat and heat ghee or oil until shimmering. Add the mustard seeds and split black gram, stir until they splutter, about 30 seconds. Add the onion, fry until slightly soft, about a minute (take care not to brown). Add the slit chillis, curry leaves and stir until fragrant, about a minute longer. Add the carrots, peas, red chilli powder, and sugar, and stir until fragrant and the mixture is coated with the ghee/oil, about 1 minute.3.Add toasted semolina and stir vigorously until the mixture resembles wet sand—about a minute. Add the salt and gently pour in the water. The semolina will bubble and spurt as it absorbs the water. Reduce heat to low. Allow this mixture to cook for about 2 minutes, stirring constantly. The Upma absorbs water very quickly and tends to dry out too, so turn off the heat when the mixture is slightly runny. Serve immediately.",
		rrecipeId: 1,
		rcuisinetype: "Indian",
		rmealpreference: "Vegetarian",
		rmealtype: "Breakfast",
		rduration: 15,
		ringredients: "1 cup semolina flour, 1 1/2 tablespoons ghee or vegetable oil, 1 teaspoon whole black mustard seeds, 1 teaspoon split black gram (Urad dal), 1 small onion chopped (about 1/2 cup), 2 small green chills split lengthwise, 10 curry leaves, 1/4 cup diced boiled carrots, 1/4 cup boiled green peas, 1 teaspoon red chilli powder, 1 teaspoon sugar, Kosher salt, 2 1/4 cups water",
        rchefid: "Div01",
        rimage:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Roop/Traditional_Rava_Upma.jpg"
 })
 recipesCollection.insert(    
{
		rname: "French Toast",
        rdescription:"French toast is a dish made of bread soaked in eggs and milk, then fried.",
		rmethod: "In a small bowl, combine, cinnamon, nutmeg, and sugar and set aside briefly.In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.",
		rrecipeId: 2,
		rcuisinetype: "American",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Breakfast",
		rduration: 30,
		ringredients: "1 teaspoon ground cinnamon, 1/4 teaspoon ground nutmeg, 2 tablespoons sugar, 4 tablespoons butter, 4 eggs, 1/4 cup milk, 1/2 teaspoon vanilla extract, 8 slices challah, brioche, or white bread, 1/2 cup maple syrup, warmed",
            rchefid: "Div01",
            rimage:"https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/q/800/quick-and-easy-french-toast.ashx?vd=20171018T133744Z&hash=7AD28A0C971AAAAF2DEAD18CE67FCC8E36FA9DF2"
 })
 recipesCollection.insert(
       {
		rname: "Creamy Garlic Penne Pasta",
        rdescription:"Italian cylindrical shaped creamy pasta",
		rmethod: "Melt butter in a medium sauce pan, add garlic. Cook for 1 minute over medium heat. Add flour and cook for an additional minute, stirring constantly. Add milk and broth, stirring constantly. Cook until sauce boils and thickens. Add parsley and parmesan cheese. Add desired salt and pepper. Continue stirring until cheese has melted. Serve immediately. Pour sauce over pasta and serve.",
        rrecipeId: 3,
		rcuisinetype: "Italian",
		rmealpreference: "Vegetarian",
		rmealtype: "Breakfast",
		rduration: 20,
        ringredients: "1 box (1 lb) penne pasta, 3 TB butter, 2 tsp. minced garlic, 3 TB flour, 1 cup chicken broth, 1 cup milk, 2 tsp dried parsley, ½ cup grated parmesan cheese, salt and pepper to taste.",
        rchefid: "Div01",
        rimage:"https://i.ytimg.com/vi/5_IdJeIapO8/hqdefault.jpg"
  
  
     })
recipesCollection.insert(     
{
		rname: "Brownies",
        rdescription:"A chocolate brownie is a square, baked, chocolate dessert.",
		rmethod: "Preheat the oven to 350°F (175°C) then line a 7x11 inch baking trey with parchment paper and set aside. In a large bowl combine melted butter, oil and both sugars. Add the eggs, vanilla and salt then whisk for about one minute until evenly combined and light in color. Over the same bowl sift in the flour and cocoa powder. Gently fold the dry ingredients into the wet ingredients until JUST combined (do NOT over mix). Fold in half of the chocolate chunks. Pour the batter into the prepared pan, then smooth the top. Generously top with the remaining chocolate chunks. Bake for 35-40 minutes, or until the centre of the brownies no longer jiggles and is JUST set to the touch. Remove from the oven and allow to cool to room temperature before removing from the baking trey and slicing into 16 brownies. Enjoy!",
        rrecipeId: 4,
		rcuisinetype: "American",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Desserts",
		rduration: 60,
        ringredients: "1 cup (8oz/227g) butter, melted and cooled, 2 tablespoon vegetable oil, 1 cup plus 2 tablespoons (6¼oz/184g) brown sugar, 1 cup plus 2 tablespoons (8¼oz/244g) white sugar, 4 large eggs, room temperature, 4 teaspoons vanilla extract, 1 cup (5oz/150g) all purpose flour, 1 cup (4oz/123g) good quality, unsweetened cocoa powder, 1 teaspoon salt, 1½ cup (9oz/270g) roughly chopped chocolate or large chocolate chips",
        rchefid: "RutuB",
        rimage:"https://www.twopeasandtheirpod.com/wp-content/uploads/2011/02/Fudgy-brownies.jpg"
})
recipesCollection.insert(     
{
		rname: "Meatball Nirvana",
        rdescription:"Balls of ground or chopped meat, beef,  with added seasonings",
		rmethod: "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes. ",
        rrecipeId: 5,
		rcuisinetype: "American",
		rmealpreference: "NonVegetarian",
		rmealtype: "Dinner",
		rduration: 40,
        ringredients: "1 lb extra lean lean ground beef, 1⁄2 tsp sea salt, 1 small onion, diced, 1⁄2 tsp garlic salt, 1 1⁄2 tsp Italian seasoning, 3⁄4 tsp dried oregano, 3⁄4 tsp crushed red pepper flakes, 1 dash hot sauce, 1 1⁄2 tbsp worchestershire sauce, 1⁄3 cup skim milk, 1⁄4 cup parmesan cheese, grated, 1⁄2 cup seasoned Italian bread crumbs",
        rchefid: "RutuB",
        rimage:"https://s3.amazonaws.com/bulkbitesstatic/uploads/uploads/images/3/6/6/0/663_l.jpg" 
})
recipesCollection.insert(    
{
		rname: "Lime Chicken",
        rdescription:"A delightful chicken dish with a little spicy kick. Serve with rice and your favorite vegetable.",
		rmethod: "In a large mixing bowl or large sealable, Ziplock bag, combine the chicken breasts, freshly squeezed lime juice, ground cumin, sea salt, ground black pepper, cayenne, and fresh cilantro. Toss to combine and coat the chicken well. Cover with plastic wrap (or close Ziplock bag tightly) and place in the fridge for at least 30 minutes, preferably 2-3 hours, to allow the marinade to work. Heat a skillet over medium-high heat with the olive oil. Remove the chicken from the fridge and place in the hot oil. Cook the chicken until well-browned on both sides and cooked through, about 4-6 minutes per side, or until the chicken reaches 165 degrees F internal temperature. Allow to rest for 5 minute before slicing and serving.",
        rrecipeId: 6,
		rcuisinetype: "Chinese",
		rmealpreference: "Non-Vegetarian",
		rmealtype: "Lunch",
		rduration: 130,
        ringredients: "4 boneless skinless chicken breasts, 2 limes approx. 4 tbsp. juice, juiced 1 tsp ground cumin, 1/2 tsp sea salt, 1/2 tsp ground black pepper, 1/8 tsp cayenne pepper, 1/2 cup chopped fresh cilantro*, 1 tbsp olive oil",
        rchefid: "RutuB",
        rimage:"https://www.simplyrecipes.com/wp-content/uploads/2013/07/grilled-cilantro-lime-chicken-vertical-a-1200.jpg"
})
recipesCollection.insert(
{
		rname: "Butter Pecan Fudge",
        rdescription:"Creamy, buttery flavor that melts in your mouth and finishes with the crunch of pecans",
		rmethod: "Grease an 8 x 8 inch square pan or line with parchment paper. Add butter, cream, white sugar, brown sugar, and salt to a large, heavy saucepan. Bring to a rolling boil over medium heat, stirring frequently. Cook for 5 minutes, stirring constantly, then remove the pan from the heat. It is important to boil the mixture for the full 5 minutes to get a smooth texture, otherwise the fudge might be crumbly and grainy. Stir in pecans and vanilla extract. Whisk in powdered sugar until smooth. Spread in an even layer in the prepared baking dish, then cool to room temperature or until firm. Remove from the pan and cut into small squares.",
        rrecipeId: 7,
		rcuisinetype: "Indian",
		rmealpreference: "Vegetarian",
		rmealtype: "Desserts",
		rduration: 20,
        ringredients: "1⁄2 cup butter, 1⁄2 cup heavy whipping cream, 1⁄2 cup white sugar, 1⁄2 cup light brown sugar, packed, 1⁄8 tsp kosher salt, 1 cup pecans, toasted and roughly chopped, 1 tsp vanilla extract, 2 cup powdered sugar, sifted",
        rchefid: "RutuB",
        rimage:"https://s3.amazonaws.com/bulkbitesstatic/uploads/uploads/images/3/6/6/0/663_l.jpg"
})
recipesCollection.insert(    
	{
			rname: "Maggie Noodles",
			rdescription:"One of the quickest, tastiest (not healthiest for sure) snack anyone can have.",
			rmethod: "Heat a tbsp of Oil in a pan on a low flame. Add 0.5 tbsp of Mustard seeds (Rai) to the oil. Let the mustard seeds crackle. Add chopped green chilies to the oil. Stir fry for half a minute. If you want to limit the hotness of the recipe, skip this step. Add chopped onions. Let the onions fry on a medium flame until they turn translucent. Add a half cup of frozen green peas. Stir-fry until half-cooked. If you want to add more veggies to your Noodles, you can add them now. Make sure the veggies are semi-boiled before adding. Add the chopped tomatoes. Cook until it turns soft. Add a pinch of salt and red chili powder to the veggies. Add all 4 Maggi Magic Tastemaker packets to the veggie. Mix well. Add 2 tbsp of ketchup. Mix well. Cook for half a minute. Break the Maggi Noodle cakes into sizes of your liking and add it to the pan. Roast the Maggi for a half minute. Add water to this mixture. I am using 6 cups of water since I like to keep the Maggi dry. You can add more water if you like the noodles a little watery.Let the noodles cook well. You don't want the noodles to be too mushy or crunchy (uncooked). Add a tbsp of Butter on top. Serve hot. Optionally you can also sprinkle some grated cheese on top.",
			rrecipeId: 8,
			rcuisinetype: "Chinese",
			rmealpreference: "Vegetarian",
			rmealtype: "MidnightSnacks",
			rduration: 15,
			ringredients: "4 Maggi, 1 tbsp Oil, 0.5 tbsp Mustard seeds (Rai), 1 Green Chili chopped (optional), 1 medium Onion chopped, 1 medium Tomato chopped, 0.5 cup Green Peas Frozen / Fresh, 0.5 tbsp Red Chili powder, 0.5 tbsp Salt, 2 tbsp Tomato Ketchup, 6 cup Water, 1 tbsp Salted Butter, 0.5 cup Semi-boiled Veggies - corn, bell peppers, broccoli etc Optional",
			rchefid: "RutuB",
			rimage:"https://i0.wp.com/yourfoodfantasy.com/wp-content/uploads/2017/06/Maggi-Noodles-Recipe-Indian-Style-Your-Food-Fantasy-by-Meenu-Gupta.jpg?fit=740%2C497&ssl=1"
	})
	recipesCollection.insert(    
		{
				rname: "Italian Pinwheel Rolls",
				rdescription:"An enticing combination of Parmesan cheese, oregano and garlic makes these buttery rolls impossible to resist.",
				rmethod: "In a large bowl, dissolve yeast in warm water. Add the sugar, butter, salt and 1 cup flour; beat until smooth. Stir in enough remaining flour to form a soft dough. Turn onto a floured surface; knead until smooth and elastic, about 6-8 minutes. Place in a bowl coated with cooking spray, turning once to coat top. Cover and let rise in a warm place until doubled, about 1 hour. Punch dough down. Turn onto a lightly floured surface. Roll into a 12x10-in. rectangle. Brush with melted butter; sprinkle the cheese, parsley, garlic and oregano to within 1/2 in. of edges. Roll up jelly-roll style, starting with a long side; pinch seam to seal. Cut into 12 rolls.Place rolls cut side up in a 13x9-in. baking pan coated with cooking spray. Cover and let rise until doubled, about 30 minutes. Bake at 350° for 25-30 minutes or until golden brown. Remove from pan to a wire rack. Yield: 1 dozen.",
				rrecipeId: 9,
				rcuisinetype: "Italian",
				rmealpreference: "Diabetic",
				rmealtype: "Lunch",
				rduration: 45,
				ringredients: "1 package (1/4 ounce) active dry yeast, 1 cup warm water (110° to 115°), 1-1/2 teaspoons sugar, 1/2 teaspoons butter, softened, 1 teaspoon salt, 2-1/4 to 2-1/2 cups bread flour, 2 tablespoons butter, melted. 1/4 cup grated Parmesan cheese. 2 tablespoons minced fresh parsley, 6 garlic cloves, minced. 1 teaspoon dried oregano",
				rchefid: "KanikaM",
				rimage:"https://lh3.googleusercontent.com/lE5ZBpg6mm5lab_sH86b5pHI7CTZI-3fqndm1FWY57m43lOoI2WcyLw2wkI_FR1w-fZLxhsbHnJxMbvthDuulYZAegjZ=s535-c"
		})
    recipesCollection.insert(    
			{
					rname: "Shrimp Soup",
					rdescription:"If you’re a thai curry fanatic, you’re going to LOVE this shrimp soup ",
					rmethod: "In a large saucepan of 1 1 /2 cups water, cook rice according to package instructions; set aside. Melt butter in a large stockpot or Dutch oven over medium high heat. Add shrimp, salt and pepper, to taste. Cook, stirring occasionally, until pink, about 2-3 minutes; set aside. Add garlic, onion and bell pepper to the stockpot. Cook, stirring occasionally, until tender, about 3-4 minutes. Stir in ginger until fragrant, about 1 minute. Whisk in curry paste until well combined, about 1 minute. Gradually whisk in coconut milk and vegetable stock, and cook, whisking constantly, until incorporated, about 1-2 minutes. Bring to a boil; reduce heat and simmer until slightly thickened, about 8-10 minutes. Stir in rice, shrimp, lime juice and cilantro. Serve immediately.",
					rrecipeId: 10,
					rcuisinetype: "Thai",
					rmealpreference: "Diabetic",
					rmealtype: "Dinner",
					rduration: 30,
					ringredients: "1 cup uncooked basmati rice, 2 tablespoons unsalted butter, 1 pound medium shrimp, peeled and deveined, Kosher salt and freshly ground black pepper, to taste.  cloves garlic, minced. 1 onion, diced, 1 red bell pepper, diced. 1 tablespoon freshly grated ginger, 2 tablespoon red curry paste. 1 (12-ounce) can unsweetened coconut milk, 3 cups vegetable stock, Juice of 1 lime, 2 tablespoons chopped fresh cilantro leaves",
					rchefid: "Divyay",
					rimage:"http://www.thecrepesofwrath.com/images/2013/03/Spicy_Thai_Shrimp_Soup/Spicy_Thai_Shrimp_Soup_2.jpg"
			})
	recipesCollection.insert(    
				{
						rname: "Drunken Noodles",
						rdescription:"Thai Noodles also know as Pad Kee Mao.",
						rmethod: "Make sauce: Combine all ingredients in a small bowl. Prepare noodles: In a large saute pan, heat oil over high heat. When you see a wisp of white smoke, add garlic and saute until it's light brown. Add eggs and serrano chiles and lightly scramble the eggs until they're barely set, about a minute. Add shrimp and onion, folding constantly until shrimp turn pink, about 1 minute. Add the fresh rice noodles, basil leaves, tomatoes and sauce and toss to combine for about 3 minutes. Don't be scared to scrape the bits off the bottom before they burn. Cook for 1 additional minute until the noodles are cooked and coated well. Serve hot.",
						rrecipeId: 11,
						rcuisinetype: "Thai",
						rmealpreference: "NonVegetarian",
						rmealtype: "Lunch",
						rduration: 30,
						ringredients: "Sauce: 2 tablespoons sweet soy sauce, 1 tablespoon oyster sauce, 1 1/2 tablespoons fish sauce, 1 tablespoon sugar, 1 teaspoon Sriracha, 1 teaspoon minced garlic, 6 to 8 Thai basil leaves, cut chiffonade, Noodles: 3 tablespoons canola or peanut oil, 2 to 3 cloves garlic, minced, 2 eggs, 1 to 2 serrano chiles, sliced thin, 6 to 8 large shrimp, peeled and deveined, 1/2 medium white onion, sliced. 4 cups fresh rice noodles, separated, 1 cup Thai basil leaves, loosely packed, 1/2 cup grape tomatoes, halved.",
						rchefid: "KanikaM",
						rimage:"https://www.foxvalleyfoodie.com/wp-content/uploads/2015/05/drunken-noodles-recipe.jpg"
				})
recipesCollection.insert(    
	{
			rname: "Youtiao",
			rdescription:"Chinese fried dough or Chinese crullers, is a breakfast favorite in China",
			rmethod: "On a clean, lightly floured surface, form the dough into a long flat loaf shape, about ¼-inch thick and 4 inches wide. Take the time to make it truly uniform. Place it in the center of a large piece of plastic wrap on a baking sheet or long, flat plate, and wrap the dough, tucking the two ends of the plastic under the loaf, and ensuring that the dough is completely covered. Refrigerate overnight. Now prepare the oil for frying using your wok. You can also use a large pan with some depth for added safety. The goal is to have a large vessel, so that you can produce authentically long crullers. Use medium heat to slowly bring the oil up to 400 degrees. While the oil is heating up, you can unwrap the dough. Gently flip the dough onto a lightly floured surface, peeling off the plastic wrap. Very lightly flour the top side of the dough also. Next, cut the dough into 1-inch wide strips (try to cut an even number of strips). Then stack them two by two, and press the center, lengthwise, with a chopstick. Hold the two ends of each piece, and gently stretch the dough to a 9-inch long rope. Once the oil reaches 400 degrees, carefully lower the stretched dough into the oil. If the oil temperature is right, the dough should surface right away. Now take a long cooking tool (we used chopsticks, but you could also use tongs), and quickly roll the dough in a continuous motion for about a minute.",
			rrecipeId: 12,
			rcuisinetype: "Chinese",
			rmealpreference: "Diabetic",
			rmealtype: "Lunch",
			rduration: 130,
			ringredients: "2 cups all-purpose flour, 1 egg, ½ teaspoon salt, 1½ teaspoons baking powder, 1 tablespoon milk, 2 tablespoons softened (NOT MELTED) butter, about ⅓ cup water (the exact amount changes based on the humidity in your kitchen; the dough should be very soft, but not sticking to the mixing bowl)",
			rchefid: "KanikaM",
			rimage:"http://s2.narvii.com/image/3e3az5hnmzcyovhoflqztotbyiv26eip_00.jpg"
	})
	recipesCollection.insert(    
		{
				rname: "Oatmeal",
				rdescription:"a bowl of warm oatmeal, which is Gluten Free",
				rmethod: "Set a saucepan over high heat. Pour in the milk and water. Add the salt and vanilla extract. Bring the liquids to a boil. When the milky water is boiling, pour in the oats. Stir quite vigorously. When the water returns to a boil, turn down the heat to low. Simmer the oats, stirring every few minutes, until the oats are creamy and plump, the liquid fully absorbed, about 15 minutes. Turn off the heat and cover the pan. Let the oatmeal sit for five minutes to fully absorb the liquid. Top with your favorite sweetener and fruit. (This one is maple syrup, peaches, and blackberries.) Variations: If you cannot eat dairy, almond milk or hemp milk work well here too. If you have a fresh vanilla bean, scrape the insides of it into the pot instead of vanilla extract. This will be the best oatmeal you have ever eaten.",
				rrecipeId: 13,
				rcuisinetype: "American",
				rmealpreference: "GlutenFree",
				rmealtype: "MidnightSnacks",
				rduration: 15,
				ringredients: "1 cup whole milk, 1 cup water, 1/2 teaspoon kosher salt, 1 teaspoon vanilla extract, 1 cup whole rolled gluten-free oats",
				rchefid: "Divyay",
				rimage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/FN_gluten-free-oatmeal_s4x3.jpg.rend.hgtvcom.616.462.suffix/1393557374314.jpeg"
		})
recipesCollection.insert(
			{
					rname: "Cauliflower Crust Pizza",
					rdescription:"This is a perfect way to indulge in pizza without any guilt.",
					rmethod: "Preheat the oven to 400 degrees F. Line a baking sheet with parchment paper. Break the cauliflower into florets and pulse in a food processor until fine. Line a steamer basket with a kitchen towel (not terrycloth); set in a saucepan with 2 inches simmering water. Add the cauliflower, cover and cook 5 minutes. Drain well, then wring dry in the towel to get out all the moisture. Let cool. In a bowl, combine the cauliflower with 1/2 cup mozzarella, the parmesan, oregano, 1/2 teaspoon salt, the garlic powder and eggs. Transfer to the center of the baking sheet and spread into a 10-inch circle to make a pizza crust. Bake until golden, about 20 minutes. Spread the marinara sauce on the crust; top with bell peppers and onion and sprinkle with the remaining 1/2 cup mozzarella. Return to the oven and bake an additional 10 minutes.",
					rrecipeId: 14,
					rcuisinetype: "Italian",
					rmealpreference: "GlutenFree",
					rmealtype: "MidnightSnacks",
					rduration: 35,
					ringredients: "1 head cauliflower, stem removed, 1 cup shredded mozzarella cheese, 1/4 cup grated parmesan cheese, 1/2 teaspoon dried oregano, Kosher salt, 1/4 teaspoon garlic powder, 2 large eggs, lightly beaten, 1/2 cup marinara sauce, Sliced bell peppers and onion, for topping",
					rchefid: "KanikaM",
					rimage:"https://minimalistbaker.com/wp-content/uploads/2017/12/DELICIOUS-Vegan-Gluten-Free-Cauliflower-Pizza-Crust-10-ingredients-simple-methods-crispy-crust-tender-center-vegan-glutenfree-plantbased-pizza-cauliflower-minimalistbaker-recipe6.jpg"
			})
recipesCollection.insert(
{
		rname: "Semolina Halwa",
        rdescription:"Desset which is for diabetics and smells saffron and cardamon",
		rmethod: "Combine the water, sugar and the soaked saffron in a 2-litre/quart saucepan. Place over moderate heat, stirring to dissolve the sugar. Bring to the boil, then reduce the heat to very low and cover with a tight-fitting lid. Melt the butter in a 2- or 3-litre/quart saucepan over low heat, stirring occasionally. Add the semolina, and slowly and rhythmically stir-fry the grains for about 20 minutes, or until they darken to a tan colour and become aromatic. Add the flaked almonds to the grains towards the end of the toasting process. Raise the heat under the syrup, add the cardamom and the sultanas, and bring it to a rolling boil. Raise the heat under the semolina for 1 minute, stirring continuously. Remove the saucepan of semolina from the heat, and slowly pour the hot syrup into the semolina, stirring steadily. The grains may at first splutter, but will quickly cease as the liquid is absorbed. Return the halava to the stove and stir steadily over very low heat until the grains fully absorb the liquid, start to form into a pudding-like consistency, and pull away from the sides of the pan. Place a tight-fitting lid on the saucepan and cook over the lowest possible heat for 5 minutes. A heat-diffuser works well. Removed the covered saucepan from the heat and allow the halava to steam for an additional 5 minutes. Serve hot.",
        rrecipeId: 15,
		rcuisinetype: "Indian",
		rmealpreference: "Diabetic",
		rmealtype: "Desserts",
		rduration: 25,
        ringredients: "2 3⁄4cups water, 1 1⁄4cups sugar, 1⁄2teaspoon saffron strand, soaked in 1 tablespoon boiling hot milk, 140g unsalted butter, 1 1⁄4cups semolina(coarse grained), 1⁄3cup sliced almonds,  teaspoon ground cardamom, 1⁄3cup sultana",
        rchefid: "KanikaM",
        rimage:"https://i.ytimg.com/vi/ybX4yeO1Uig/hqdefault.jpg"
})


