const recipes = [
  {
      title:"Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      description:"Red grapes, blueberries, that kinda thing? I feel reeeeeal good about it. Like, a whole bunch of juicy fresh yum just landed right in the middle of my salad. ",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Rainbow-Chicken-Salad-2.jpg",
      websiteUrl:"https://pinchofyum.com/rainbow-chicken-salad-almond-honey-mustard-dressing",
      totalTime:45,
      servings:4
  },
  {
      title:"Goddess Curry Chicken Salad",
      description:"Greek yogurt feels like such a basic stand-in, but that’s because it works. It’s good. It is thick, creamy, and the added tang is a welcome addition to this salad, IMHO.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Curry-Chicken-Salad-4.jpg",
      websiteUrl:"https://pinchofyum.com/curry-chicken-salad",
      servings:4,
      totalTime:25
  },
  {
      title:'Basic + Awesome Chicken Quinoa Salad',
      description:"Full of happy little grape tomatoes and shredded bits of artichoke (!!) all snuggled in nicely between bites of tender chicken and fresh spinach.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Chicken-Quinoa-Salad-1-2.jpg",
      websiteUrl:"https://pinchofyum.com/basic-awesome-chicken-quinoa-salad",
      servings:"4-6",
      totalTime:10
  },
  {
      title:"Chopped Thai-Inspired Chicken Salad",
      description:"Lime, peanuts, cilantro, carrots, green onions, vinegar, soy sauce, chili pepper, garlic, all packed together in a highly textured salad bowl?.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Thai-Chicken-Salad-Peanut-Dressing.jpg",
      websiteUrl:"https://pinchofyum.com/chopped-thai-chicken-salad",
      totalTime:60,
      servings:"4-6"
  },
  {
      title:"Asian Chicken Salad",
      description:"you get one word clues that will help you guess the “password”. I think I might have stolen that from a real game, but I’m still considering it mine.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/asian-chicken-salad.jpg",
      websiteUrl:"https://pinchofyum.com/asian-chicken-salad",
      totalTime:105,
      servings:"8-10"
  },
  {
      title:"Sunday Chili",
      description:"It’s thick and appropriately chunky, spicy and extremely flavorful without being hot, balanced just right between beans, and vegetables.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Sunday-Chili.jpg",
      websiteUrl:"https://pinchofyum.com/sunday-chili",
      totalTime:150,
      servings:6
  },
  {
    title:"Sheet Pan Chicken Tinga Bowls",
    description:"What is better than saucy, smoky, delicious chicken tinga for tacos and bowls and beyond? Answer: SHEET PAN chicken tinga that is just maaade for meal prep.",
    imageUrl:"https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Chicken-Tinga-Prep.jpg",
    websiteUrl:"https://pinchofyum.com/30-minute-meal-prep-sheet-pan-chicken-tinga-bowls",
    totalTime:45,
    servings:"4-6"
  },
  {
      title:"Vegetarian Chili",
      description:"Chili chili chili, can’t you see? Sometimes your ways just hypnotize me and even when you’re made without meat?",
      imageUrl:'https://pinchofyum.com/wp-content/uploads/Vegetarian-Chili.jpg',
      websiteUrl:"https://pinchofyum.com/vegetarian-chili",
      totalTime:75,
      servings:"5-6"
  },
  {
      title:"Red Pepper Cashew Pasta with Roasted Cauliflower",
      description:"As. I love when meal prep (or just a good meal in general) involves hearty whole wheat pasta, roasted cauliflower, and a creamy sauce with a hit of spice to it.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower.jpg",
      websiteUrl:"https://pinchofyum.com/red-pepper-cashew-pasta",
      totalTime:45,
      servings:8
  },
  {
    title:"Pumpkin Gnocchi with Sage Butter Sauce",
    description:"I know. You might need a minute. I get it.Just breathe it in… breathe in that sage, garlic, butter, pumpkin-gnocchi-pillow combo.",
    imageUrl:"https://pinchofyum.com/wp-content/uploads/Gnocchi-4.jpg",
    websiteURL:"https://pinchofyum.com/pumpkin-gnocchi",
    totalTime:35,
    servings:4
  },
  {
    title:"Country Chicken Stew",
    description:"A cozy, hearty, humble bowl of this Country Chicken Stew is waiting for you! Chicken, thick-cut bacon, navy beans, veggies, and fresh herbs all simmering in one big pot.",
    imageUrl:"https://pinchofyum.com/wp-content/uploads/Country-Chicken-Stew-1.jpg",
    websiteUrl:"https://pinchofyum.com/country-chicken-stew",
    totalTime:105,
    servings:6
  },
  {
      title:"Plantain and Pinto Stew with Aji Verde",
      description:"Three cheers for this starchy vegetable that can go savory OR sweet on you, or in the case of today’s recipe, a little spicy, too.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Plantain-Stew-2-2.jpg",
      websiteUrl:"https://pinchofyum.com/plantain-and-pinto-stew-with-aji-verde",
      totalTime:45,
      servings:"5-6",
  },
  {
      title:"5-Ingredient Green Curry",
      description:'Green curry. Green curry with some weirdo stuff in it (tofu? golden raisins? sweet potatoes?).',
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Green-Curry-5.jpg",
      websiteUrl:"https://pinchofyum.com/green-curry",
      totalTime:45,
      servings:"7-8"
  },
  {
      title:"Pumpkin Gnocchi with Sage Butter Sauce",
      description:"I know. You might need a minute. I get it.Just breathe it in… breathe in that sage, garlic, butter, pumpkin-gnocchi-pillow combo.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Gnocchi-4.jpg",
      websiteURL:"https://pinchofyum.com/pumpkin-gnocchi",
      totalTime:35,
      servings:4
  },
  {
      title:"Creamy Thai Sweet Potato Curry",
      description:"It’s for surely gotta be sweet potato curry, for surely for sure. There just cannot be anything else.",
      imageUrl:'https://pinchofyum.com/wp-content/uploads/Sweet-Potato-Curry-3-2.jpg',
      websiteUrl:"https://pinchofyum.com/creamy-thai-sweet-potato-curry",
      totalTime:30,
      servings:"4-5"
  }
];

  export default recipes;