const articles = [
    {
        title:"Plantain and Pinto Stew with Aji Verde",
        description:"Three cheers for this starchy vegetable that can go savory OR sweet on you, or in the case of today’s recipe, a little spicy, too.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Plantain-Stew-2-2.jpg",
        websiteUrl:"https://pinchofyum.com/plantain-and-pinto-stew-with-aji-verde",
    },
    {
        title:"Pumpkin Gnocchi with Sage Butter Sauce",
        description:"I know. You might need a minute. I get it.Just breathe it in… breathe in that sage, garlic, butter, pumpkin-gnocchi-pillow combo.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Gnocchi-4.jpg",
        websiteURL:"https://pinchofyum.com/pumpkin-gnocchi"
    },
    {
        title:"Country Chicken Stew",
        description:"A cozy, hearty, humble bowl of this Country Chicken Stew is waiting for you! Chicken, thick-cut bacon, navy beans, veggies, and fresh herbs all simmering in one big pot.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Country-Chicken-Stew-1.jpg",
        websiteUrl:"https://pinchofyum.com/country-chicken-stew"
    },
    {
        title:"15 Minute Lo Mein",
        description:"Hel-lo-lo-mein! This 15-minute wonder is absolutely my new go-to for a quick Asian noodle stir fry. Lo Mein FTW!",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg",
        websiteUrl:"https://pinchofyum.com/lo-mein"
    },
    {
        title:"Sheet Pan Chicken Tinga Bowls",
        description:"What is better than saucy, smoky, delicious chicken tinga for tacos and bowls and beyond? Answer: SHEET PAN chicken tinga that is just maaade for meal prep.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Chicken-Tinga-Prep.jpg",
        websiteUrl:"https://pinchofyum.com/30-minute-meal-prep-sheet-pan-chicken-tinga-bowls",
    },
    {
        title:"No-Boil Baked Penne with Meatballs",
        description:"Alright, gather round. Let me tell you the tale of the no-boil, fail-proof, garlic-buttery, dreamy baked penne with meatballs.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Baked-Penne-3.jpg",
        websiteUrl:"https://pinchofyum.com/garlic-butter-baked-penne"
    },
    {
        title:"Creamy Kale Pasta",
        description:"Let me paint a picture for you: chewy bowtie pasta, coated in a light, salty, barely-creamy sauce, flecked with red pepper flakes and little bits of tender sautéed garlic kale.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Creamy-Kale-Pasta-2.jpg",
        websiteUrl:"https://pinchofyum.com/creamy-kale-pasta-2",
    },
    {
        title:"Basic + Awesome Broccoli Cheese Soup",
        description:"I would like to campaign for you to enter into fall soup season with this cozy classic Broccoli Cheese Soup.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Broccoli-Cheese-Soup-1-2.jpg",
        websiteUrl:"https://pinchofyum.com/broccoli-cheese-soup",
    },
    {
        title:"5 Ingredient Spicy Pork",
        description:"Maybe it’s because of Sauce Week exhaustion (a very real and good thing), or maybe it’s just because 5 ingredient recipes are always good.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/5-Ingredient-Spicy-Pork-1-2.jpg",
        websiteUrl:"https://pinchofyum.com/5-ingredient-spicy-pork"
    },
    {
        title:"Loaded Caprese Grilled Cheese",
        description:"It’s summer, and the eating is good. Fresh tomatoes, spicy garlic, creamy butter, and perky green basil.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Caprese-Grilled-Cheese-5.jpg",
        websiteUrl:"https://pinchofyum.com/caprese-grilled-cheese"
    },
    {
        title:"Springy Blueberry Lemon Bread",
        description:"Le-mon-bread! Le-mon-bread! Zest that lemon, whisk in those eggs, add a handful of blueberries and it is over. Done deal. Thank you and goodnight.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Lemon-Bread-1-4.jpg",
        websiteUrl:"https://pinchofyum.com/blueberry-lemon-bread"
    },
    {
        title:"Cookie Dough Energy Bites",
        description:"Nutritious little bites of goodness, also known as energy bites, are pretty much always a yes.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Holding-Energy-Bites.jpg",
        websiteUrl:"https://pinchofyum.com/cookie-dough-energy-bites",
    },
    {
        title:"Two Person Raspberry Crumbles",
        description:"These sweet, jammy, buttery, lip-staining red berry crumbles are my summer everything right now.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Two-Person-Raspberry-Crisp.jpg",
        websiteUrl:"https://pinchofyum.com/two-person-raspberry-crumbles"
    },
    {
        title:"Deep Dish Cookie Bowls for Two",
        description:"Truly, honestly, from the bottom of my chocolate chip cookie heart… it does not get better than this.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Cookie-Bowls-1.jpg",
        websiteUrl:'https://pinchofyum.com/deep-dish-cookie-bowls',
    },
    {
        title:"Chili Garlic Instant Pot Noodles",
        description:" They are sticky, with an umami flavor and a little sweetness. They are gorgeous, because we get fancy with our toppings.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Chili-Garlic-Instant-Pot-Noodles.jpg",
        websiteUrl:"https://pinchofyum.com/instant-pot-noodles"
    },
    {
        title:"Spicy Salmon Burgers",
        description:"They are golden brown, crispy, spicy, barely sweet and savory little bundles of flavor. You can serve them on a fluffy brioche bun with some spicy mayo and slaw, or just go bun-less.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Spicy-Salmon-Burgers-1.jpg",
        websiteUrl:"https://pinchofyum.com/spicy-salmon-burgers"
    },
    {
        title:"Best Easy Fish Tacos",
        description:"The good news is this: even if it’s not summer, even if you live far away from any sort of ocean, you can make EXTREMELY GOOD fish tacos at home.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Best-Fish-Tacos.jpg",
        websiteUrl:"https://pinchofyum.com/best-easy-fish-tacos"
    },
    {
        title:"Spicy Shrimp Veracruz",
        description:"You guys, Shrimp Veracruz is so good, and it’s also so strange, and also so good. Did I say that? Just MEGA DELICIOUS.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Veracruz-Shrimp-Bowl.jpg",
        websiteUrl:"https://pinchofyum.com/spicy-shrimp-veracruz"
    },
    {
        title:"Coconut Curry Salmon",
        description:"Salmon has never been this good.I mean, I know we talked a big game with those barbecue salmon bowls",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Coconut-Curry-Salmon.jpg",
        websiteUrl:"https://pinchofyum.com/coconut-curry-salmon"
    },
    {
        title:"Spicy Fish Taco Bowls",
        description:"These Spicy Fish Taco Bowls with Cilantro Lime Slaw started out as a new, updated take on these wayyyy old Fish Taco Bowls",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Fish-Taco-Bowls-1.jpg",
        websiteUrl:"https://pinchofyum.com/spicy-fish-taco-bowls-with-cilantro-lime-slaw"
    },
    {
        title:"Goddess Curry Chicken Salad",
        description:"Having this for lunch today as part of #POYsugarfreeJanuary Seriously so delicious. I will be repeating this recipe many times.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Curry-Chicken-Salad-5.jpg",
        websiteUrl:"https://pinchofyum.com/curry-chicken-salad"
    },
    {
        title:"Instant Pot Mac and Cheese",
        description:"On so many cheesy and delicious levels, this is exciting.We need to identify the brand of mac that is Instant Pot mac and cheese.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Best-Instant-Pot-Mac-and-Cheese.jpg",
        websiteUrl:"https://pinchofyum.com/instant-pot-mac-and-cheese"
    },
    {
        title:"Instant Pot Chicken and Dumplings",
        description:"Hello! Let’s put a chopped-up trio of celery, carrots, and onions, potatoes, chicken, spices, and pre-made – yes, I said it – pre-made biscuits in the Instant Pot and call it dinner.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Instant-Pot-Chicken-and-Dumplings-1-2.jpg",
        websiteUrl:"https://pinchofyum.com/instant-pot-chicken-and-dumplings",
    },
    {
        title:"Instant Pot Red Curry Lentils",
        description:"Guess what’s for dinner? Creamy, spicy, delicious red curry lentils, made in the Instant Pot.",
        imageUrl:"https://pinchofyum.com/wp-content/uploads/Instant-Pot-Red-Curry-Lentils.jpg",
        websiteUrl:"https://pinchofyum.com/instant-pot-red-curry-lentils"
    }
];

export default articles;