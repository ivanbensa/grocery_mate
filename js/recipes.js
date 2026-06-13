let recipes = [

    {
        id: 1,
        name: "Gibanica",
        country: "Serbia",
        category: "breakfast",
        image: "images/gibanica.jpg",

        ingredients: [
            { name: "phyllo dough", quantity: 500, unit: "g" },
            { name: "cheese", quantity: 300, unit: "g" },
            { name: "eggs", quantity: 3, unit: "piece" },
            { name: "yogurt", quantity: 200, unit: "ml" }
        ],

        instructions: [
            "Mix cheese, eggs and yogurt.",
            "Layer phyllo dough and filling.",
            "Bake until golden brown."
        ]
    },

    {
        id: 2,
        name: "Proja",
        country: "Serbia",
        category: "breakfast",
        image: "images/proja.jpg",

        ingredients: [
            { name: "corn flour", quantity: 300, unit: "g" },
            { name: "cheese", quantity: 200, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" },
            { name: "yogurt", quantity: 250, unit: "ml" }
        ],

        instructions: [
            "Mix all ingredients.",
            "Pour mixture into baking tray.",
            "Bake until golden."
        ]
    },

    {
        id: 3,
        name: "Popara",
        country: "Serbia",
        category: "breakfast",
        image: "images/popara.jpg",

        ingredients: [
            { name: "bread", quantity: 200, unit: "g" },
            { name: "milk", quantity: 300, unit: "ml" },
            { name: "butter", quantity: 50, unit: "g" },
            { name: "cheese", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Heat milk and butter.",
            "Add bread pieces.",
            "Serve with cheese."
        ]
    },

    {
        id: 4,
        name: "Ustipci",
        country: "Serbia",
        category: "breakfast",
        image: "images/ustipci.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" },
            { name: "yogurt", quantity: 200, unit: "ml" },
            { name: "oil", quantity: 100, unit: "ml" }
        ],

        instructions: [
            "Mix ingredients into dough.",
            "Shape small balls.",
            "Fry until golden brown."
        ]
    },

    {
        id: 5,
        name: "Pohovani Hleb",
        country: "Serbia",
        category: "breakfast",
        image: "images/pohovani-hleb.jpg",

        ingredients: [
            { name: "bread", quantity: 4, unit: "slice" },
            { name: "eggs", quantity: 2, unit: "piece" },
            { name: "milk", quantity: 100, unit: "ml" },
            { name: "oil", quantity: 50, unit: "ml" }
        ],

        instructions: [
            "Mix eggs and milk.",
            "Dip bread slices.",
            "Fry until crispy."
        ]
    },

    {
        id: 6,
        name: "Kajgana",
        country: "Serbia",
        category: "breakfast",
        image: "images/kajgana.jpg",

        ingredients: [
            { name: "eggs", quantity: 3, unit: "piece" },
            { name: "butter", quantity: 20, unit: "g" },
            { name: "salt", quantity: 1, unit: "tsp" }
        ],

        instructions: [
            "Melt butter in pan.",
            "Add eggs and stir.",
            "Cook until creamy."
        ]
    },

    {
        id: 7,
        name: "Burek",
        country: "Serbia",
        category: "breakfast",
        image: "images/burek.jpg",

        ingredients: [
            { name: "phyllo dough", quantity: 500, unit: "g" },
            { name: "minced meat", quantity: 300, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "oil", quantity: 50, unit: "ml" }
        ],

        instructions: [
            "Prepare meat filling.",
            "Layer dough and filling.",
            "Bake until crispy."
        ]
    },

    {
        id: 8,
        name: "Sarma",
        country: "Serbia",
        category: "lunch",
        image: "images/sarma.jpg",

        ingredients: [
            { name: "cabbage", quantity: 1, unit: "piece" },
            { name: "minced meat", quantity: 500, unit: "g" },
            { name: "rice", quantity: 200, unit: "g" }
        ],

        instructions: [
            "Mix meat, rice and spices.",
            "Wrap in cabbage leaves.",
            "Cook slowly for about 2 hours."
        ]
    },

    {
        id: 9,
        name: "Pasulj",
        country: "Serbia",
        category: "lunch",
        image: "images/pasulj.jpg",

        ingredients: [
            { name: "beans", quantity: 500, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "smoked meat", quantity: 300, unit: "g" }
        ],

        instructions: [
            "Cook beans in water.",
            "Add onion and smoked meat.",
            "Cook until soft."
        ]
    },

    {
        id: 10,
        name: "Pljeskavica",
        country: "Serbia",
        category: "lunch",
        image: "images/pljeskavica.jpg",

        ingredients: [
            { name: "minced meat", quantity: 500, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "salt", quantity: 1, unit: "tsp" }
        ],

        instructions: [
            "Mix meat and spices.",
            "Shape patties.",
            "Cook on grill."
        ]
    },

    {
        id: 11,
        name: "Punjene Paprike",
        country: "Serbia",
        category: "lunch",
        image: "images/punjene-paprike.jpg",

        ingredients: [
            { name: "peppers", quantity: 6, unit: "piece" },
            { name: "minced meat", quantity: 400, unit: "g" },
            { name: "rice", quantity: 150, unit: "g" }
        ],

        instructions: [
            "Fill peppers with meat and rice.",
            "Place in pot.",
            "Cook slowly."
        ]
    },

    {
        id: 12,
        name: "Prebranac",
        country: "Serbia",
        category: "lunch",
        image: "images/prebranac.jpg",

        ingredients: [
            { name: "beans", quantity: 500, unit: "g" },
            { name: "onion", quantity: 3, unit: "piece" },
            { name: "paprika", quantity: 1, unit: "tbsp" }
        ],

        instructions: [
            "Cook beans.",
            "Bake with onion and spices.",
            "Serve warm."
        ]
    },

    {
        id: 13,
        name: "Musaka",
        country: "Serbia",
        category: "lunch",
        image: "images/musaka.jpg",

        ingredients: [
            { name: "potatoes", quantity: 1, unit: "kg" },
            { name: "minced meat", quantity: 400, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Layer potatoes and meat.",
            "Add egg mixture.",
            "Bake until golden."
        ]
    },

    {
        id: 14,
        name: "Karadjordjeva Schnitzel",
        country: "Serbia",
        category: "lunch",
        image: "images/karadjordjeva.jpg",

        ingredients: [
            { name: "pork meat", quantity: 500, unit: "g" },
            { name: "kajmak", quantity: 100, unit: "g" },
            { name: "breadcrumbs", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Fill meat with kajmak.",
            "Roll and bread the meat.",
            "Fry until crispy."
        ]
    },

    {
        id: 15,
        name: "Burek with Yogurt",
        country: "Serbia",
        category: "dinner",
        image: "images/burek.jpg",

        ingredients: [
            { name: "phyllo dough", quantity: 500, unit: "g" },
            { name: "minced meat", quantity: 300, unit: "g" },
            { name: "yogurt", quantity: 200, unit: "ml" }
        ],

        instructions: [
            "Prepare meat filling.",
            "Layer dough and filling.",
            "Bake until crispy."
        ]
    },

    {
        id: 16,
        name: "Gibanica",
        country: "Serbia",
        category: "dinner",
        image: "images/gibanica.jpg",

        ingredients: [
            { name: "phyllo dough", quantity: 500, unit: "g" },
            { name: "cheese", quantity: 300, unit: "g" },
            { name: "eggs", quantity: 3, unit: "piece" }
        ],

        instructions: [
            "Mix cheese and eggs.",
            "Layer with dough.",
            "Bake until golden."
        ]
    },

    {
        id: 17,
        name: "Proja",
        country: "Serbia",
        category: "dinner",
        image: "images/proja.jpg",

        ingredients: [
            { name: "corn flour", quantity: 300, unit: "g" },
            { name: "cheese", quantity: 200, unit: "g" },
            { name: "yogurt", quantity: 250, unit: "ml" }
        ],

        instructions: [
            "Mix all ingredients.",
            "Pour into tray.",
            "Bake until golden."
        ]
    },

    {
        id: 18,
        name: "Pita sa Sirom",
        country: "Serbia",
        category: "dinner",
        image: "images/pita-sa-sirom.jpg",

        ingredients: [
            { name: "phyllo dough", quantity: 500, unit: "g" },
            { name: "cheese", quantity: 300, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Prepare cheese filling.",
            "Layer dough and filling.",
            "Bake until crispy."
        ]
    },

    {
        id: 19,
        name: "Popara",
        country: "Serbia",
        category: "dinner",
        image: "images/popara.jpg",

        ingredients: [
            { name: "bread", quantity: 200, unit: "g" },
            { name: "milk", quantity: 300, unit: "ml" },
            { name: "cheese", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Heat milk.",
            "Add bread pieces.",
            "Serve with cheese."
        ]
    },

    {
        id: 20,
        name: "Kajgana",
        country: "Serbia",
        category: "dinner",
        image: "images/kajgana.jpg",

        ingredients: [
            { name: "eggs", quantity: 3, unit: "piece" },
            { name: "butter", quantity: 20, unit: "g" },
            { name: "salt", quantity: 1, unit: "tsp" }
        ],

        instructions: [
            "Melt butter.",
            "Add eggs.",
            "Cook while stirring."
        ]
    },

    {
        id: 21,
        name: "Ustipci",
        country: "Serbia",
        category: "dinner",
        image: "images/ustipci.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" },
            { name: "yogurt", quantity: 200, unit: "ml" }
        ],

        instructions: [
            "Prepare dough.",
            "Shape small balls.",
            "Fry until golden brown."
        ]
    },

    {
        id: 22,
        name: "Syrniki",
        country: "Ukraine",
        category: "breakfast",
        image: "images/syrniki.jpg",

        ingredients: [
            { name: "cottage cheese", quantity: 300, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" },
            { name: "flour", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Mix cottage cheese, eggs and flour.",
            "Shape small pancakes.",
            "Fry until golden brown."
        ]
    },

    {
        id: 23,
        name: "Deruny",
        country: "Ukraine",
        category: "breakfast",
        image: "images/deruny.jpg",

        ingredients: [
            { name: "potatoes", quantity: 500, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "eggs", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Grate potatoes and onion.",
            "Mix with egg.",
            "Fry until crispy."
        ]
    },

    {
        id: 24,
        name: "Nalysnyky",
        country: "Ukraine",
        category: "breakfast",
        image: "images/nalysnyky.jpg",

        ingredients: [
            { name: "flour", quantity: 200, unit: "g" },
            { name: "milk", quantity: 300, unit: "ml" },
            { name: "eggs", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Prepare pancake batter.",
            "Cook thin pancakes.",
            "Fill with cheese or jam."
        ]
    },

    {
        id: 25,
        name: "Kasha",
        country: "Ukraine",
        category: "breakfast",
        image: "images/kasha.jpg",

        ingredients: [
            { name: "buckwheat", quantity: 200, unit: "g" },
            { name: "milk", quantity: 300, unit: "ml" },
            { name: "butter", quantity: 20, unit: "g" }
        ],

        instructions: [
            "Cook buckwheat in milk.",
            "Add butter.",
            "Serve warm."
        ]
    },

    {
        id: 26,
        name: "Varenyky with Cheese",
        country: "Ukraine",
        category: "breakfast",
        image: "images/varenyky-cheese.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "cheese", quantity: 200, unit: "g" },
            { name: "eggs", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with cheese.",
            "Boil until ready."
        ]
    },

    {
        id: 27,
        name: "Blini",
        country: "Ukraine",
        category: "breakfast",
        image: "images/blini.jpg",

        ingredients: [
            { name: "flour", quantity: 250, unit: "g" },
            { name: "milk", quantity: 400, unit: "ml" },
            { name: "eggs", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Mix ingredients into batter.",
            "Cook thin pancakes.",
            "Serve with honey or jam."
        ]
    },

    {
        id: 28,
        name: "Pampushky",
        country: "Ukraine",
        category: "breakfast",
        image: "images/pampushky.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "garlic", quantity: 3, unit: "clove" },
            { name: "oil", quantity: 50, unit: "ml" }
        ],

        instructions: [
            "Prepare dough balls.",
            "Bake until golden.",
            "Brush with garlic oil."
        ]
    },

    {
        id: 29,
        name: "Borscht",
        country: "Ukraine",
        category: "lunch",
        image: "images/borscht.jpg",

        ingredients: [
            { name: "beetroot", quantity: 3, unit: "piece" },
            { name: "cabbage", quantity: 300, unit: "g" },
            { name: "beef meat", quantity: 400, unit: "g" }
        ],

        instructions: [
            "Cook beef in water.",
            "Add vegetables.",
            "Cook until vegetables are soft."
        ]
    },

    {
        id: 30,
        name: "Holubtsi",
        country: "Ukraine",
        category: "lunch",
        image: "images/holubtsi.jpg",

        ingredients: [
            { name: "cabbage", quantity: 1, unit: "piece" },
            { name: "rice", quantity: 200, unit: "g" },
            { name: "minced meat", quantity: 400, unit: "g" }
        ],

        instructions: [
            "Prepare rice and meat filling.",
            "Wrap in cabbage leaves.",
            "Cook slowly."
        ]
    },

    {
        id: 31,
        name: "Chicken Kyiv",
        country: "Ukraine",
        category: "lunch",
        image: "images/chicken-kyiv.jpg",

        ingredients: [
            { name: "chicken breast", quantity: 2, unit: "piece" },
            { name: "butter", quantity: 100, unit: "g" },
            { name: "breadcrumbs", quantity: 150, unit: "g" }
        ],

        instructions: [
            "Fill chicken with butter.",
            "Cover with breadcrumbs.",
            "Fry until golden."
        ]
    },

    {
        id: 32,
        name: "Kapusniak",
        country: "Ukraine",
        category: "lunch",
        image: "images/kapusniak.jpg",

        ingredients: [
            { name: "sauerkraut", quantity: 400, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "smoked meat", quantity: 300, unit: "g" }
        ],

        instructions: [
            "Cook meat in water.",
            "Add potatoes and sauerkraut.",
            "Cook until ready."
        ]
    },

    {
        id: 33,
        name: "Banosh",
        country: "Ukraine",
        category: "lunch",
        image: "images/banosh.jpg",

        ingredients: [
            { name: "cornmeal", quantity: 250, unit: "g" },
            { name: "cream", quantity: 300, unit: "ml" },
            { name: "cheese", quantity: 150, unit: "g" }
        ],

        instructions: [
            "Cook cornmeal with cream.",
            "Add cheese.",
            "Serve warm."
        ]
    },

    {
        id: 34,
        name: "Varenyky with Potato",
        country: "Ukraine",
        category: "lunch",
        image: "images/varenyky-potato.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "potatoes", quantity: 400, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with potato mixture.",
            "Boil until ready."
        ]
    },

    {
        id: 35,
        name: "Bograch",
        country: "Ukraine",
        category: "lunch",
        image: "images/bograch.jpg",

        ingredients: [
            { name: "beef meat", quantity: 500, unit: "g" },
            { name: "potatoes", quantity: 400, unit: "g" },
            { name: "paprika", quantity: 2, unit: "tbsp" }
        ],

        instructions: [
            "Cook beef with spices.",
            "Add potatoes.",
            "Cook slowly until soft."
        ]
    },

    {
        id: 36,
        name: "Olivier Salad",
        country: "Ukraine",
        category: "dinner",
        image: "images/olivier-salad.jpg",

        ingredients: [
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "peas", quantity: 150, unit: "g" },
            { name: "mayonnaise", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Boil vegetables.",
            "Cut ingredients into cubes.",
            "Mix with mayonnaise."
        ]
    },

    {
        id: 37,
        name: "Grechka with Mushrooms",
        country: "Ukraine",
        category: "dinner",
        image: "images/grechka.jpg",

        ingredients: [
            { name: "buckwheat", quantity: 250, unit: "g" },
            { name: "mushrooms", quantity: 200, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Cook buckwheat.",
            "Fry mushrooms and onion.",
            "Mix everything together."
        ]
    },

    {
        id: 38,
        name: "Stuffed Peppers",
        country: "Ukraine",
        category: "dinner",
        image: "images/stuffed-peppers.jpg",

        ingredients: [
            { name: "peppers", quantity: 5, unit: "piece" },
            { name: "rice", quantity: 200, unit: "g" },
            { name: "minced meat", quantity: 300, unit: "g" }
        ],

        instructions: [
            "Prepare rice and meat filling.",
            "Stuff the peppers.",
            "Cook until soft."
        ]
    },

    {
        id: 39,
        name: "Pelmeni",
        country: "Ukraine",
        category: "dinner",
        image: "images/pelmeni.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "minced meat", quantity: 300, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with meat.",
            "Boil until ready."
        ]
    },

    {
        id: 40,
        name: "Buckwheat Cutlets",
        country: "Ukraine",
        category: "dinner",
        image: "images/buckwheat-cutlets.jpg",

        ingredients: [
            { name: "buckwheat", quantity: 250, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" },
            { name: "breadcrumbs", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Cook buckwheat.",
            "Shape small cutlets.",
            "Fry until golden brown."
        ]
    },

    {
        id: 41,
        name: "Mimosa Salad",
        country: "Ukraine",
        category: "dinner",
        image: "images/mimosa-salad.jpg",

        ingredients: [
            { name: "eggs", quantity: 3, unit: "piece" },
            { name: "tuna", quantity: 200, unit: "g" },
            { name: "mayonnaise", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Boil eggs.",
            "Layer ingredients.",
            "Cover with mayonnaise."
        ]
    },

    {
        id: 42,
        name: "Piroshki",
        country: "Ukraine",
        category: "dinner",
        image: "images/piroshki.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "oil", quantity: 50, unit: "ml" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with potatoes.",
            "Bake until golden brown."
        ]
    },

    // RUSSIA BREAKFAST

    {
        id: 43,
        name: "Blini",
        country: "Russia",
        category: "breakfast",
        image: "images/blini-russia.jpg",

        ingredients: [
            { name: "flour", quantity: 250, unit: "g" },
            { name: "milk", quantity: 400, unit: "ml" },
            { name: "eggs", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Prepare pancake batter.",
            "Cook thin pancakes.",
            "Serve with jam or honey."
        ]
    },

    {
        id: 44,
        name: "Syrniki",
        country: "Russia",
        category: "breakfast",
        image: "images/syrniki-russia.jpg",

        ingredients: [
            { name: "cottage cheese", quantity: 300, unit: "g" },
            { name: "eggs", quantity: 2, unit: "piece" },
            { name: "flour", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Mix cottage cheese and eggs.",
            "Shape pancakes.",
            "Fry until golden brown."
        ]
    },

    {
        id: 45,
        name: "Kasha",
        country: "Russia",
        category: "breakfast",
        image: "images/kasha-russia.jpg",

        ingredients: [
            { name: "buckwheat", quantity: 250, unit: "g" },
            { name: "milk", quantity: 300, unit: "ml" },
            { name: "butter", quantity: 20, unit: "g" }
        ],

        instructions: [
            "Cook buckwheat in milk.",
            "Add butter.",
            "Serve warm."
        ]
    },

    {
        id: 46,
        name: "Oladki",
        country: "Russia",
        category: "breakfast",
        image: "images/oladki.jpg",

        ingredients: [
            { name: "flour", quantity: 250, unit: "g" },
            { name: "milk", quantity: 250, unit: "ml" },
            { name: "eggs", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Prepare thick batter.",
            "Pour small pancakes into pan.",
            "Cook until golden."
        ]
    },

    {
        id: 47,
        name: "Pirozhki",
        country: "Russia",
        category: "breakfast",
        image: "images/pirozhki.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "oil", quantity: 50, unit: "ml" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with potatoes.",
            "Bake until golden."
        ]
    },

    {
        id: 48,
        name: "Egg Salad Sandwich",
        country: "Russia",
        category: "breakfast",
        image: "images/egg-salad-sandwich.jpg",

        ingredients: [
            { name: "bread", quantity: 4, unit: "slice" },
            { name: "eggs", quantity: 3, unit: "piece" },
            { name: "mayonnaise", quantity: 50, unit: "g" }
        ],

        instructions: [
            "Boil eggs.",
            "Mix with mayonnaise.",
            "Serve on bread."
        ]
    },

    {
        id: 49,
        name: "Tvorog with Honey",
        country: "Russia",
        category: "breakfast",
        image: "images/tvorog.jpg",

        ingredients: [
            { name: "tvorog cheese", quantity: 250, unit: "g" },
            { name: "honey", quantity: 2, unit: "tbsp" },
            { name: "nuts", quantity: 50, unit: "g" }
        ],

        instructions: [
            "Place tvorog in bowl.",
            "Add honey and nuts.",
            "Serve fresh."
        ]
    },

// RUSSIA LUNCH

    {
        id: 50,
        name: "Beef Stroganoff",
        country: "Russia",
        category: "lunch",
        image: "images/beef-stroganoff.jpg",

        ingredients: [
            { name: "beef meat", quantity: 500, unit: "g" },
            { name: "mushrooms", quantity: 200, unit: "g" },
            { name: "cream", quantity: 200, unit: "ml" }
        ],

        instructions: [
            "Cook beef strips.",
            "Add mushrooms and cream.",
            "Cook until sauce thickens."
        ]
    },

    {
        id: 51,
        name: "Shchi",
        country: "Russia",
        category: "lunch",
        image: "images/shchi.jpg",

        ingredients: [
            { name: "cabbage", quantity: 400, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "beef meat", quantity: 300, unit: "g" }
        ],

        instructions: [
            "Cook meat in water.",
            "Add vegetables.",
            "Cook until soft."
        ]
    },

    {
        id: 52,
        name: "Pelmeni",
        country: "Russia",
        category: "lunch",
        image: "images/pelmeni-russia.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "minced meat", quantity: 300, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with meat.",
            "Boil until ready."
        ]
    },

    {
        id: 53,
        name: "Solyanka",
        country: "Russia",
        category: "lunch",
        image: "images/solyanka.jpg",

        ingredients: [
            { name: "sausage", quantity: 300, unit: "g" },
            { name: "pickles", quantity: 150, unit: "g" },
            { name: "tomato paste", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Cook sausage and vegetables.",
            "Add tomato paste.",
            "Cook slowly."
        ]
    },

    {
        id: 54,
        name: "Kotleti",
        country: "Russia",
        category: "lunch",
        image: "images/kotleti.jpg",

        ingredients: [
            { name: "minced meat", quantity: 500, unit: "g" },
            { name: "breadcrumbs", quantity: 100, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Mix ingredients.",
            "Shape cutlets.",
            "Fry until golden brown."
        ]
    },

    {
        id: 55,
        name: "Ukha",
        country: "Russia",
        category: "lunch",
        image: "images/ukha.jpg",

        ingredients: [
            { name: "fish", quantity: 500, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "carrot", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Cook fish in water.",
            "Add vegetables.",
            "Cook until ready."
        ]
    },

    {
        id: 56,
        name: "Golubtsy",
        country: "Russia",
        category: "lunch",
        image: "images/golubtsy.jpg",

        ingredients: [
            { name: "cabbage", quantity: 1, unit: "piece" },
            { name: "rice", quantity: 200, unit: "g" },
            { name: "minced meat", quantity: 400, unit: "g" }
        ],

        instructions: [
            "Prepare filling.",
            "Wrap in cabbage leaves.",
            "Cook slowly."
        ]
    },

// RUSSIA DINNER

    {
        id: 57,
        name: "Vinegret Salad",
        country: "Russia",
        category: "dinner",
        image: "images/vinegret.jpg",

        ingredients: [
            { name: "beetroot", quantity: 2, unit: "piece" },
            { name: "potatoes", quantity: 2, unit: "piece" },
            { name: "pickles", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Boil vegetables.",
            "Cut into cubes.",
            "Mix together."
        ]
    },

    {
        id: 58,
        name: "Buckwheat with Chicken",
        country: "Russia",
        category: "dinner",
        image: "images/buckwheat-chicken.jpg",

        ingredients: [
            { name: "buckwheat", quantity: 250, unit: "g" },
            { name: "chicken breast", quantity: 300, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Cook buckwheat.",
            "Cook chicken with onion.",
            "Serve together."
        ]
    },

    {
        id: 59,
        name: "Mimosa Salad",
        country: "Russia",
        category: "dinner",
        image: "images/mimosa-russia.jpg",

        ingredients: [
            { name: "eggs", quantity: 3, unit: "piece" },
            { name: "tuna", quantity: 200, unit: "g" },
            { name: "mayonnaise", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Boil eggs.",
            "Layer ingredients.",
            "Cover with mayonnaise."
        ]
    },

    {
        id: 60,
        name: "Pirozhki with Meat",
        country: "Russia",
        category: "dinner",
        image: "images/pirozhki-meat.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "minced meat", quantity: 300, unit: "g" },
            { name: "oil", quantity: 50, unit: "ml" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with meat.",
            "Bake until golden."
        ]
    },

    {
        id: 61,
        name: "Herring Under Fur Coat",
        country: "Russia",
        category: "dinner",
        image: "images/herring-fur-coat.jpg",

        ingredients: [
            { name: "herring", quantity: 200, unit: "g" },
            { name: "beetroot", quantity: 2, unit: "piece" },
            { name: "mayonnaise", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Layer vegetables and fish.",
            "Add mayonnaise.",
            "Cool before serving."
        ]
    },

    {
        id: 62,
        name: "Draniki",
        country: "Russia",
        category: "dinner",
        image: "images/draniki.jpg",

        ingredients: [
            { name: "potatoes", quantity: 500, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "eggs", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Grate potatoes and onion.",
            "Mix with egg.",
            "Fry until crispy."
        ]
    },

    {
        id: 63,
        name: "Julienne",
        country: "Russia",
        category: "dinner",
        image: "images/julienne.jpg",

        ingredients: [
            { name: "mushrooms", quantity: 300, unit: "g" },
            { name: "cream", quantity: 200, unit: "ml" },
            { name: "cheese", quantity: 150, unit: "g" }
        ],

        instructions: [
            "Cook mushrooms.",
            "Add cream and cheese.",
            "Bake until golden."
        ]
    },

    // LEBANON BREAKFAST

    {
        id: 64,
        name: "Manakish",
        country: "Lebanon",
        category: "breakfast",
        image: "images/manakish.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "zaatar", quantity: 3, unit: "tbsp" },
            { name: "olive oil", quantity: 50, unit: "ml" }
        ],

        instructions: [
            "Prepare dough.",
            "Spread zaatar and olive oil.",
            "Bake until golden."
        ]
    },

    {
        id: 65,
        name: "Labneh",
        country: "Lebanon",
        category: "breakfast",
        image: "images/labneh.webp",

        ingredients: [
            { name: "yogurt", quantity: 500, unit: "ml" },
            { name: "olive oil", quantity: 20, unit: "ml" },
            { name: "mint", quantity: 10, unit: "g" }
        ],

        instructions: [
            "Strain yogurt overnight.",
            "Add olive oil and mint.",
            "Serve cold."
        ]
    },

    {
        id: 66,
        name: "Ful Medames",
        country: "Lebanon",
        category: "breakfast",
        image: "images/ful-medames.jpg",

        ingredients: [
            { name: "fava beans", quantity: 400, unit: "g" },
            { name: "lemon", quantity: 1, unit: "piece" },
            { name: "olive oil", quantity: 30, unit: "ml" }
        ],

        instructions: [
            "Cook beans.",
            "Add lemon and olive oil.",
            "Serve warm."
        ]
    },

    {
        id: 67,
        name: "Kaak",
        country: "Lebanon",
        category: "breakfast",
        image: "images/kaak.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "sesame seeds", quantity: 50, unit: "g" },
            { name: "yeast", quantity: 10, unit: "g" }
        ],

        instructions: [
            "Prepare dough.",
            "Shape bread rings.",
            "Bake until golden."
        ]
    },

    {
        id: 68,
        name: "Shanklish",
        country: "Lebanon",
        category: "breakfast",
        image: "images/shanklish.jpg",

        ingredients: [
            { name: "cheese", quantity: 200, unit: "g" },
            { name: "tomatoes", quantity: 2, unit: "piece" },
            { name: "olive oil", quantity: 20, unit: "ml" }
        ],

        instructions: [
            "Prepare cheese mixture.",
            "Add tomatoes and olive oil.",
            "Serve fresh."
        ]
    },

    {
        id: 69,
        name: "Balila",
        country: "Lebanon",
        category: "breakfast",
        image: "images/balila.jpg",

        ingredients: [
            { name: "chickpeas", quantity: 300, unit: "g" },
            { name: "garlic", quantity: 2, unit: "clove" },
            { name: "lemon", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Cook chickpeas.",
            "Add garlic and lemon.",
            "Serve warm."
        ]
    },

    {
        id: 70,
        name: "Cheese Fatayer",
        country: "Lebanon",
        category: "breakfast",
        image: "images/cheese-fatayer.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "cheese", quantity: 200, unit: "g" },
            { name: "olive oil", quantity: 30, unit: "ml" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with cheese.",
            "Bake until golden brown."
        ]
    },

// LEBANON LUNCH

    {
        id: 71,
        name: "Kibbeh",
        country: "Lebanon",
        category: "lunch",
        image: "images/kibbeh.jpg",

        ingredients: [
            { name: "bulgur", quantity: 250, unit: "g" },
            { name: "minced meat", quantity: 400, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Prepare bulgur mixture.",
            "Fill with meat.",
            "Bake or fry."
        ]
    },

    {
        id: 72,
        name: "Mujadara",
        country: "Lebanon",
        category: "lunch",
        image: "images/mujadara.jpg",

        ingredients: [
            { name: "lentils", quantity: 250, unit: "g" },
            { name: "rice", quantity: 200, unit: "g" },
            { name: "onion", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Cook lentils and rice.",
            "Fry onions.",
            "Mix together."
        ]
    },

    {
        id: 73,
        name: "Fattoush",
        country: "Lebanon",
        category: "lunch",
        image: "images/fattoush.webp",

        ingredients: [
            { name: "lettuce", quantity: 200, unit: "g" },
            { name: "tomatoes", quantity: 2, unit: "piece" },
            { name: "pita bread", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Cut vegetables.",
            "Toast pita bread.",
            "Mix everything together."
        ]
    },

    {
        id: 74,
        name: "Tabbouleh",
        country: "Lebanon",
        category: "lunch",
        image: "images/tabbouleh.jpg",

        ingredients: [
            { name: "parsley", quantity: 200, unit: "g" },
            { name: "bulgur", quantity: 100, unit: "g" },
            { name: "tomatoes", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Chop parsley and vegetables.",
            "Add bulgur.",
            "Mix with lemon juice."
        ]
    },

    {
        id: 75,
        name: "Shawarma",
        country: "Lebanon",
        category: "lunch",
        image: "images/shawarma.webp",

        ingredients: [
            { name: "chicken", quantity: 500, unit: "g" },
            { name: "garlic sauce", quantity: 100, unit: "g" },
            { name: "pita bread", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Cook chicken with spices.",
            "Prepare pita bread.",
            "Serve with garlic sauce."
        ]
    },

    {
        id: 76,
        name: "Makloubeh",
        country: "Lebanon",
        category: "lunch",
        image: "images/makloubeh.webp",

        ingredients: [
            { name: "rice", quantity: 300, unit: "g" },
            { name: "eggplant", quantity: 2, unit: "piece" },
            { name: "chicken", quantity: 400, unit: "g" }
        ],

        instructions: [
            "Cook chicken and vegetables.",
            "Layer with rice.",
            "Flip pot before serving."
        ]
    },

    {
        id: 77,
        name: "Falafel",
        country: "Lebanon",
        category: "lunch",
        image: "images/falafel.jpg",

        ingredients: [
            { name: "chickpeas", quantity: 300, unit: "g" },
            { name: "parsley", quantity: 50, unit: "g" },
            { name: "garlic", quantity: 2, unit: "clove" }
        ],

        instructions: [
            "Blend ingredients.",
            "Shape small balls.",
            "Fry until crispy."
        ]
    },

// LEBANON DINNER

    {
        id: 78,
        name: "Hummus",
        country: "Lebanon",
        category: "dinner",
        image: "images/hummus.webp",

        ingredients: [
            { name: "chickpeas", quantity: 300, unit: "g" },
            { name: "tahini", quantity: 100, unit: "g" },
            { name: "lemon", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Blend chickpeas and tahini.",
            "Add lemon juice.",
            "Serve cold."
        ]
    },

    {
        id: 79,
        name: "Baba Ganoush",
        country: "Lebanon",
        category: "dinner",
        image: "images/baba-ganoush.webp",

        ingredients: [
            { name: "eggplant", quantity: 2, unit: "piece" },
            { name: "tahini", quantity: 50, unit: "g" },
            { name: "garlic", quantity: 2, unit: "clove" }
        ],

        instructions: [
            "Roast eggplants.",
            "Blend with tahini and garlic.",
            "Serve cold."
        ]
    },

    {
        id: 80,
        name: "Spinach Fatayer",
        country: "Lebanon",
        category: "dinner",
        image: "images/spinach-fatayer.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "spinach", quantity: 200, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with spinach mixture.",
            "Bake until golden."
        ]
    },

    {
        id: 81,
        name: "Lentil Soup",
        country: "Lebanon",
        category: "dinner",
        image: "images/lentil-soup.jpg",

        ingredients: [
            { name: "lentils", quantity: 250, unit: "g" },
            { name: "carrot", quantity: 1, unit: "piece" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Cook lentils and vegetables.",
            "Blend partially.",
            "Serve warm."
        ]
    },

    {
        id: 82,
        name: "Warak Enab",
        country: "Lebanon",
        category: "dinner",
        image: "images/warak-enab.webp",

        ingredients: [
            { name: "grape leaves", quantity: 20, unit: "piece" },
            { name: "rice", quantity: 200, unit: "g" },
            { name: "parsley", quantity: 50, unit: "g" }
        ],

        instructions: [
            "Prepare rice filling.",
            "Wrap in grape leaves.",
            "Cook slowly."
        ]
    },

    {
        id: 83,
        name: "Arayes",
        country: "Lebanon",
        category: "dinner",
        image: "images/arayes.jpg",

        ingredients: [
            { name: "pita bread", quantity: 2, unit: "piece" },
            { name: "minced meat", quantity: 300, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Fill pita bread with meat.",
            "Grill until crispy.",
            "Serve warm."
        ]
    },

    {
        id: 84,
        name: "Batata Harra",
        country: "Lebanon",
        category: "dinner",
        image: "images/batata-harra.jpg",

        ingredients: [
            { name: "potatoes", quantity: 500, unit: "g" },
            { name: "garlic", quantity: 3, unit: "clove" },
            { name: "parsley", quantity: 30, unit: "g" }
        ],

        instructions: [
            "Cook potatoes.",
            "Fry with garlic and parsley.",
            "Serve warm."
        ]
    },

    // INDIA BREAKFAST

    {
        id: 85,
        name: "Masala Dosa",
        country: "India",
        category: "breakfast",
        image: "images/masala-dosa.jpg",

        ingredients: [
            { name: "rice batter", quantity: 300, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Prepare dosa batter.",
            "Cook thin dosa.",
            "Fill with potato mixture."
        ]
    },

    {
        id: 86,
        name: "Idli",
        country: "India",
        category: "breakfast",
        image: "images/idli.jpg",

        ingredients: [
            { name: "rice batter", quantity: 300, unit: "g" },
            { name: "lentils", quantity: 100, unit: "g" },
            { name: "salt", quantity: 1, unit: "tsp" }
        ],

        instructions: [
            "Prepare batter.",
            "Pour into molds.",
            "Steam until soft."
        ]
    },

    {
        id: 87,
        name: "Poha",
        country: "India",
        category: "breakfast",
        image: "images/poha.jpg",

        ingredients: [
            { name: "flattened rice", quantity: 250, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "peas", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Cook onions and spices.",
            "Add flattened rice.",
            "Cook for a few minutes."
        ]
    },

    {
        id: 88,
        name: "Paratha",
        country: "India",
        category: "breakfast",
        image: "images/paratha.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "potatoes", quantity: 200, unit: "g" },
            { name: "butter", quantity: 30, unit: "g" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with potatoes.",
            "Cook on pan."
        ]
    },

    {
        id: 89,
        name: "Upma",
        country: "India",
        category: "breakfast",
        image: "images/upma.jpg",

        ingredients: [
            { name: "semolina", quantity: 250, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "peas", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Roast semolina.",
            "Cook vegetables.",
            "Mix together."
        ]
    },

    {
        id: 90,
        name: "Puri Bhaji",
        country: "India",
        category: "breakfast",
        image: "images/puri-bhaji.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "oil", quantity: 100, unit: "ml" }
        ],

        instructions: [
            "Prepare dough.",
            "Fry puri bread.",
            "Serve with potato curry."
        ]
    },

    {
        id: 91,
        name: "Aloo Toast",
        country: "India",
        category: "breakfast",
        image: "images/aloo-toast.jpg",

        ingredients: [
            { name: "bread", quantity: 4, unit: "slice" },
            { name: "potatoes", quantity: 200, unit: "g" },
            { name: "butter", quantity: 20, unit: "g" }
        ],

        instructions: [
            "Prepare potato filling.",
            "Spread on bread.",
            "Toast until crispy."
        ]
    },

// INDIA LUNCH

    {
        id: 92,
        name: "Butter Chicken",
        country: "India",
        category: "lunch",
        image: "images/butter-chicken.jpg",

        ingredients: [
            { name: "chicken", quantity: 500, unit: "g" },
            { name: "cream", quantity: 200, unit: "ml" },
            { name: "tomato sauce", quantity: 200, unit: "g" }
        ],

        instructions: [
            "Cook chicken with spices.",
            "Add tomato sauce and cream.",
            "Cook until creamy."
        ]
    },

    {
        id: 93,
        name: "Biryani",
        country: "India",
        category: "lunch",
        image: "images/biryani.jpg",

        ingredients: [
            { name: "rice", quantity: 300, unit: "g" },
            { name: "chicken", quantity: 400, unit: "g" },
            { name: "spices", quantity: 20, unit: "g" }
        ],

        instructions: [
            "Cook rice and chicken separately.",
            "Layer together.",
            "Cook slowly."
        ]
    },

    {
        id: 94,
        name: "Chole Bhature",
        country: "India",
        category: "lunch",
        image: "images/chole-bhature.jpg",

        ingredients: [
            { name: "chickpeas", quantity: 300, unit: "g" },
            { name: "flour", quantity: 300, unit: "g" },
            { name: "oil", quantity: 100, unit: "ml" }
        ],

        instructions: [
            "Cook chickpeas with spices.",
            "Prepare bhature dough.",
            "Fry until golden."
        ]
    },

    {
        id: 95,
        name: "Palak Paneer",
        country: "India",
        category: "lunch",
        image: "images/palak-paneer.jpg",

        ingredients: [
            { name: "spinach", quantity: 300, unit: "g" },
            { name: "paneer cheese", quantity: 250, unit: "g" },
            { name: "cream", quantity: 100, unit: "ml" }
        ],

        instructions: [
            "Cook spinach.",
            "Add paneer and cream.",
            "Cook for a few minutes."
        ]
    },

    {
        id: 96,
        name: "Dal Tadka",
        country: "India",
        category: "lunch",
        image: "images/dal-tadka.jpg",

        ingredients: [
            { name: "lentils", quantity: 300, unit: "g" },
            { name: "onion", quantity: 1, unit: "piece" },
            { name: "tomatoes", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Cook lentils.",
            "Prepare spice mixture.",
            "Mix together."
        ]
    },

    {
        id: 97,
        name: "Chicken Curry",
        country: "India",
        category: "lunch",
        image: "images/chicken-curry.jpg",

        ingredients: [
            { name: "chicken", quantity: 500, unit: "g" },
            { name: "onion", quantity: 2, unit: "piece" },
            { name: "tomatoes", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Cook onions and spices.",
            "Add chicken and tomatoes.",
            "Cook until tender."
        ]
    },

    {
        id: 98,
        name: "Rajma",
        country: "India",
        category: "lunch",
        image: "images/rajma.jpg",

        ingredients: [
            { name: "kidney beans", quantity: 300, unit: "g" },
            { name: "rice", quantity: 200, unit: "g" },
            { name: "tomatoes", quantity: 2, unit: "piece" }
        ],

        instructions: [
            "Cook beans.",
            "Prepare tomato sauce.",
            "Serve with rice."
        ]
    },

// INDIA DINNER

    {
        id: 99,
        name: "Paneer Butter Masala",
        country: "India",
        category: "dinner",
        image: "images/paneer-butter-masala.jpg",

        ingredients: [
            { name: "paneer cheese", quantity: 300, unit: "g" },
            { name: "cream", quantity: 150, unit: "ml" },
            { name: "tomato sauce", quantity: 200, unit: "g" }
        ],

        instructions: [
            "Cook tomato sauce.",
            "Add paneer and cream.",
            "Serve warm."
        ]
    },

    {
        id: 100,
        name: "Aloo Gobi",
        country: "India",
        category: "dinner",
        image: "images/aloo-gobi.jpg",

        ingredients: [
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "cauliflower", quantity: 300, unit: "g" },
            { name: "spices", quantity: 20, unit: "g" }
        ],

        instructions: [
            "Cook vegetables with spices.",
            "Stir occasionally.",
            "Serve warm."
        ]
    },

    {
        id: 101,
        name: "Malai Kofta",
        country: "India",
        category: "dinner",
        image: "images/malai-kofta.jpg",

        ingredients: [
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "paneer cheese", quantity: 200, unit: "g" },
            { name: "cream", quantity: 150, unit: "ml" }
        ],

        instructions: [
            "Prepare kofta balls.",
            "Cook creamy sauce.",
            "Serve together."
        ]
    },

    {
        id: 102,
        name: "Vegetable Pulao",
        country: "India",
        category: "dinner",
        image: "images/vegetable-pulao.jpg",

        ingredients: [
            { name: "rice", quantity: 300, unit: "g" },
            { name: "peas", quantity: 100, unit: "g" },
            { name: "carrot", quantity: 1, unit: "piece" }
        ],

        instructions: [
            "Cook vegetables.",
            "Add rice and spices.",
            "Cook until ready."
        ]
    },

    {
        id: 103,
        name: "Tandoori Chicken",
        country: "India",
        category: "dinner",
        image: "images/tandoori-chicken.jpg",

        ingredients: [
            { name: "chicken", quantity: 500, unit: "g" },
            { name: "yogurt", quantity: 200, unit: "ml" },
            { name: "spices", quantity: 20, unit: "g" }
        ],

        instructions: [
            "Marinate chicken.",
            "Bake or grill.",
            "Serve hot."
        ]
    },

    {
        id: 104,
        name: "Naan Pizza",
        country: "India",
        category: "dinner",
        image: "images/naan-pizza.jpg",

        ingredients: [
            { name: "naan bread", quantity: 2, unit: "piece" },
            { name: "cheese", quantity: 200, unit: "g" },
            { name: "tomato sauce", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Prepare naan bread.",
            "Add toppings.",
            "Bake until cheese melts."
        ]
    },

    {
        id: 105,
        name: "Samosa",
        country: "India",
        category: "dinner",
        image: "images/samosa.jpg",

        ingredients: [
            { name: "flour", quantity: 300, unit: "g" },
            { name: "potatoes", quantity: 300, unit: "g" },
            { name: "peas", quantity: 100, unit: "g" }
        ],

        instructions: [
            "Prepare dough.",
            "Fill with potato mixture.",
            "Fry until golden brown."
        ]
    }
];
