  //   {
    //     id:,
    //     Title:"",
    //     Category:"",
    //     Screen:""
    //   }
   

import React,{createContext,useState} from "react"



export const Store=createContext();
const ContextApi=(props)=>{

    const [data]=useState([
      // Bollywood data...
      {
        id:1,
        Title:"Gadar 2",
        Category:"Bollywood",
        image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/617f7444-525e-4d9d-8cd6-11987e43ce86_1-sixteen_nine.jpg?VersionId=Rj0w2RAz3_O4kUSaNrRJeYcUqYUWrkWV&size=690:388",
        Description:"When Tara Singh goes missing during a skirmish and is believed to be captured in Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must escape at all costs."

      },
          {
        id:2,
        Title:"Jawan",
        Category:"Bollywood",
        image:"https://www.livemint.com/lm-img/img/2023/07/11/600x338/Jawan_1689069088718_1689069098009.jpg",
        Description:"Shah Rukh Khan's Jawan has created a buzz with its thrilling Prevue which was released recently and showcased King Khan is never-seen-before avatar. The film is set to be released on 7 September and is expected to become another blockbuster."
      },
      { id:3,
        Title:"Vivah",
        Category:"Bollywood",
        image:"https://wallpaperaccess.com/full/7943175.jpg",
        Description:"Vivah is a 2006 Indian romantic drama film, written and directed by Sooraj R. Barjatya. StarringAmrita Rao and Shahid Kapoor, it was produced and distributed by Rajshri Productions. Vivah tells the story of two individuals, and relates their journey from engagement to marriage and aftermath."
    },
    {
        id:4,
        Title:"Lagan",
        Category:"Bollywood",
        image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/06/reunion-special-chale-chalo-lagaan-once-upon-to-mark-20-years-of-film-001.jpg",
        Description:" The farmers of Champaner village in the Central India Agency depend on monsoon rains for their livelihood. A delayed start to the monsoon has them worried and they head to the ruling British cantonment, to ask the King of Champaner, Puran Singh for an exemption from the year's land tax (Lagaan)."
    },
    {
        id:5,
        Title:"Baghban",
        Category:"Bollywood",
        image:"https://bollywoodfever.co.in/wp-content/uploads/2020/10/Baghban.jpg",
        Description:"It tells the story of an elderly couple, Raj (Amitabh Bachchan) and Pooja (Hema Malini), who have been married for 40 years. After Raj retires, they reunite with their four sons (Aman Verma, Samir Soni, Saahil Chadha, and Nasir Khan) to discuss who will support them."

    },
    {
        id:6,
        Title:"Kashmir Files",
        Category:"Bollywood",
        image:"https://gumlet.assettype.com/iglobalnews%2F2022-03%2Fd7e1a267-b349-43cd-a403-da0f06d04b74%2F22_03_iEnt_Reviews_Kashmir_1.jpg?auto=format%2Ccompress&fit=max&format=webp&dpr=1.0&q=70&w=768",
        Description:"The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. The film presents a fictional storyline centred around the 1990 exodus of Kashmiri Hindus from Indian-administered Kashmir."

      },
      {
        id:7,
        Title:"Ek Tha Tiger",
        Category:"Bollywood",
       image:"https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/53197603.jpg",
       Description:"India's top spy Tiger and his love Zoya battle the dark world of intelligence and espionage that forbids its soldiers from loving the enemy. India's top spy Tiger and his love Zoya battle the dark world of intelligence and espionage that forbids its soldiers from loving the enemy."

       },
         {
        id:8,
        Title:"Padmavat",
        Category:"Bollywood",
       image:"https://igmedia.blob.core.windows.net/igmedia/telugu/reviews/padmavat-movie-review.jpg",
       Description:"Based on the epic poem of the same Title by Malik Muhammad Jayasi, it stars Deepika Padukone as Rani Padmavati, a Rajput queen known for her beauty, wife of Maharawal Ratan Singh, played by Shahid Kapoor. Sultan Alauddin Khalji, played by Ranveer Singh, hears of her beauty and attacks her kingdom to enslave her."
      },
      {
        id: 9,
        Title: "Bahubali: The Beginning",
        Category: "Bollywood",
       image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/07/5-years-of-s-s-rajamoulis-baahubali-the-beginning-the-film-that-gave-rise-to-an-all-time-blockbuster-001.jpg",
       Description: "Bahubali: The Beginning is an epic historical action film directed by S. S. Rajamouli. It follows the journey of Shiva, who learns about his heritage and seeks to reclaim his kingdom."
    },
    {
        id: 10,
        Title: "Kabhi Khushi Kabhie Gham",
        Category: "Bollywood",
      image: "https://1.bp.blogspot.com/-LPLQwiSuHwE/YNoyxGgiczI/AAAAAAAAAH0/idObtlOXFBkkqenIN63SfgAO9gV1viKZgCLcBGAsYHQ/s320/0812254.CINE.lby.jpg",
      Description: "Kabhi Khushi Kabhie Gham is a family drama film directed by Karan Johar. It tells the story of the rich Raichand family and the relationships and conflicts within."
    },
    {
        id: 11,
        Title: "Gully Boy",
        Category: "Bollywood",
        image: "https://n5a7d2f2.stackpathcdn.com/wp-content/uploads/2019/02/1546595622_ranveer-singh-alia-bhatt-gully-boy.jpg",
        Description: "Gully Boy is a musical drama film that showcases the journey of a young rapper from the streets of Mumbai. It stars Ranveer Singh as the aspiring rapper and Alia Bhatt as his love interest."
    },
    {
        id: 12,
        Title: "Koi Mil Gaya",
        Category: "Bollywood",
        image: "https://images.news18.com/ibnkhabar/uploads/2023/06/KOI-MIL-GAYA.jpg?im=Resize,width=700,aspect=fit,type=normal",
        Description: "Koi Mil Gaya is a science fiction film that tells the story of Rohit, a mentally challenged young man who befriends an extraterrestrial being. Hrithik Roshan plays the lead role."
    },
    {
        id: 13,
        Title: "Kuch Kuch Hota Hai",
        Category: "Bollywood",
        image: "https://static.toiimg.com/thumb/msid-78686481,imgsize-73498,width-400,resizemode-4/78686481.jpg",
        Description: "Kuch Kuch Hota Hai is a romantic drama film directed by Karan Johar. It explores the love triangle between Rahul, Tina, and Anjali, played by Shah Rukh Khan, Rani Mukerji, and Kajol, respectively."
    },
    {
        id: 14,
        Title: "PK",
        Category: "Bollywood",
        image: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/09/17/Incoming/Pictures/1265016_Wallpaper2.jpg",
        Description: "PK is a satirical comedy-drama film that explores the journey of an alien named PK, played by Aamir Khan, who arrives on Earth and questions religious and social norms."
    },
    {
        id: 15,
        Title: "Dilwale Dulhania Le Jayenge",
        Category: "Bollywood",
        image: "https://www.thestatesman.com/wp-content/uploads/2022/11/Screenshot-2022-11-01-110525.jpg",
        Description: "Dilwale Dulhania Le Jayenge is a classic romantic film starring Shah Rukh Khan and Kajol. It follows the love story of Raj and Simran as they journey across Europe."
    },


  //  Hollywood data...
    
    {
          id: 16,
        Category: "Hollywood",
          Title: "The Shawshank Redemption",
          image: "https://mcdn.wallpapersafari.com/medium/0/25/8A1viP.jpg",
          Description: "\"The Shawshank Redemption\" is a powerful drama film that follows the story of Andy Dufresne, a banker who is wrongfully convicted of murder and his experiences in Shawshank State Penitentiary."
        },
        {
          id: 17,
          Category: "Hollywood",
          Title: "The Godfather",
          image: "https://images.moneycontrol.com/static-mcnews/2020/07/THE-GODFATHER-770x433.jpg?impolicy=website&width=770&height=431",
          Description: "\"The Godfather\" is a classic crime film directed by Francis Ford Coppola. It tells the story of the powerful Italian-American Mafia family of Don Vito Corleone."
        },
        {
          id: 18,
          Category: "Hollywood",
          Title: "Pulp Fiction",
          image: "https://cdn.shopify.com/s/files/1/0037/8008/3782/files/Pulp_Fiction_Banner_with_Reflection_1024x1024.png?v=1637690776",
          Description: "\"Pulp Fiction\" is a crime film directed by Quentin Tarantino. It weaves together multiple interconnected stories involving crime, redemption, and unexpected twists."
        },
        {
          id: 19,
          Category: "Hollywood",
          Title: "The Dark Knight",
          image: "https://images4.alphacoders.com/573/thumbbig-57394.webp",
          Description: "\"The Dark Knight\" is a superhero film featuring Batman, played by Christian Bale, and the Joker, played by Heath Ledger. It explores the battle between good and evil in Gotham City."
        },
        {
          id: 20,
          Category: "Hollywood",
          Title: "Schindler's List",
          image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GWXxksXY1kTMVqyk_-bacQ.png",
          Description: "\"Schindler's List\" is a historical drama film directed by Steven Spielberg. It tells the story of Oskar Schindler, a German businessman who saved the lives of more than a thousand Jewish refugees during the Holocaust."
        },
        {
          id: 21,
          Category: "Hollywood",
          Title: "Forrest Gump",
          image: "https://cinemadetective.com/wp-content/uploads/2020/05/forrest-gump.jpg",
          Description: "\"Forrest Gump\" is a heartwarming drama-comedy film starring Tom Hanks as Forrest, a man with a low IQ who inadvertently influences several significant historical events in America."
        },
        {
          id: 22,
          Category: "Hollywood",
          Title: "Inception",
          image: "https://images3.alphacoders.com/610/thumbbig-610318.webp",
          Description: "\"Inception\" is a science fiction heist thriller film directed by Christopher Nolan. Dom Cobb, played by Leonardo DiCaprio, is a thief who specializes in stealing information by entering the subconscious minds of his targets."
        },
        {
          id: 23,
          Category: "Hollywood",
          Title: "The Matrix",
          image: "https://cdn.vox-cdn.com/thumbor/hw5ag2xnbJkmOPi0-g7cvNH7QJw=/0x0:2764x4096/1820x1024/filters:focal(1157x2163:1599x2605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70296586/matrixposters.0.jpeg",
          Description: "\"The Matrix\" is a groundbreaking science fiction film directed by the Wachowskis. It explores a dystopian future where humans are unknowingly imprisoned in a simulated reality."
        },
        {
          id: 24,
          Category: "Hollywood",
          Title: "The Lord of the Rings: The Return of the King",
          image: "https://webdevolutions.blob.core.windows.net/cms/assets/lord_of_the_ring_trilogy_fc41c807b6.png",
          Description: "\"The Lord of the Rings: The Return of the King\" is a fantasy epic directed by Peter Jackson. It concludes the epic journey to destroy the One Ring and defeat the dark lord Sauron."
        },
        {
          id: 25,
          Category:"Hollywood",
          Title:"Star Wars: Episode IV - A New Hope",
          image:"https://e1.pxfuel.com/desktop-wallpaper/471/1019/desktop-wallpaper-star-wars-episode-iv-a-new-hope-movie-hq-star-wars-star-wars-episode-iv-a-new-hope.jpg",
          Description: "\"Star Wars: Episode IV - A New Hope\" is a space opera that introduced audiences to a galaxy far, far away. It follows the journey of Luke Skywalker as he joins the Rebel Alliance to battle the evil Galactic Empire."
        },
        {
          id: 26,
          Category: "Hollywood",
          Title: "Avatar",
          image: "https://static.toiimg.com/thumb/msid-96546364,imgsize-94840,width-400,resizemode-4/96546364.jpg",
          Description: "\"Avatar\" is a visually stunning science fiction film directed by James Cameron. It takes place on the alien world of Pandora and follows the story of a paraplegic Marine who becomes part of the indigenous Na'vi people."
        },
        {
          id: 27,
          Category: "Hollywood",
          Title: "Jurassic Park",
          image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/jurassic-park-movies-in-order.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
          Description: "\"Jurassic Park\" is a science fiction adventure film directed by Steven Spielberg. It features a theme park filled with genetically cloned dinosaurs that go on a rampage when systems fail."
        },
        {
          id: 28,
          Category: "Hollywood",
          Title: "Gladiator",
          image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/07/russell-crowe-gladiator.png?q=50&fit=contain&w=1140&h=&dpr=1.5",
          Description: "\"Gladiator\" is an action epic set in ancient Rome. It follows the story of Maximus Decimus Meridius, played by Russell Crowe, a former Roman general who seeks revenge against the corrupt Emperor Commodus."
        },
        {
          id: 29,
          Category: "Hollywood",
          Title: "Eternal Sunshine of the Spotless Mind",
          image: "https://images2.alphacoders.com/700/thumbbig-700619.webp",
          Description: "\"Eternal Sunshine of the Spotless Mind\" is a romantic science fiction film that explores the concept of erasing painful memories. It stars Jim Carrey and Kate Winslet."
        },
        {
          id: 30,
          Category: "Hollywood",
          Title: "Forrest Gump",
          image: "https://cinemadetective.com/wp-content/uploads/2020/05/forrest-gump.jpg",
          Description: "\"Forrest Gump\" is a heartwarming drama-comedy film starring Tom Hanks as Forrest, a man with a low IQ who inadvertently influences several significant historical events in America."
        },

      // Food data...
    
          {
            id: 31,
            Category: "Food",
            Title: "Margherita Pizza",
            image: "https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=509&height=340",
            Description: "Enjoy the simplicity of Italy with our Margherita Pizza. Fresh tomato sauce, mozzarella cheese, basil, and a thin, crispy crust."
          },
          {
            id: 32,
            Category:  "Food",
            Title: "Masala Dosa",
            image: "https://media-cdn2.greatbritishchefs.com/media/cqfbszpf/pali-hill0064-selects.whqc_768x512q80.webp",
            Description: "While masala dosa is a famous snack most popular in South India, these tasty stuffed crepes are enjoyed in North India as well and can be found on menus throughout the world.Masala dosa are crispy, soft, savory and healthy crepes made with a rice and lentil batter.."
          },
          {
            id: 33,
            Category:  "Food",
            Title: "Classic Burger",
            image: "https://olo-images-live.imgix.net/1a/1ae3d77e75214fe3bba884fdec09872d.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=d8c3fa6b69f3b12430be6e37b6dbbf12",
            Description: "Satisfy your cravings with our Classic Burger. Juicy beef patty, lettuce, tomato, and our secret sauce on a toasted bun."
          },
          {
            id: 34,
            Category:  "Food",
            Title: "Guacamole & Chips",
            image: "https://recipecontent.fooby.ch/11662_3-2_1560-1040.jpg",
            Description: "Start your meal with our Guacamole & Chips. Creamy avocado, fresh tomatoes, and crispy tortilla chips for the perfect appetizer."
          },
          {
            id: 35,
            Category:  "Food",
            Title: "vada pav",
            image: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Ahemdabad-style-vada-pav-WS-768x432.jpg.webp",
            Description: "Vada Pav is a savory and spicy soft dinner rolls or fluffy buns, referred to as Pav, stuffed with a fried batter coated potato dumpling fritter called Batata Vada and laced with spicy and sweet chutneys. It is a popular vegan street food snack eaten in Mumbai and rest of the Maharashtra state in Western India"
          },
          {
            id: 36,
            Category:  "Food",
            Title: "Greek Salad",
            image: "https://hips.hearstapps.com/hmg-prod/images/greek-salad-1621025497.jpg?crop=0.830xw:0.554xh;0.0357xw,0.213xh&resize=1200:*",
            Description: "Stay healthy with our refreshing Greek Salad. Crisp cucumbers, ripe tomatoes, Kalamata olives, and feta cheese."
          },
          {
            id: 37,
            Category:  "Food",
            Title: "Pad Thai",
            image: "https://aaronandclaire.com/wp-content/uploads/2022/08/PADTHAI-1024x576.jpg",
            Description: "Travel to Thailand with our delicious Pad Thai. Stir-fried noodles, shrimp, tofu, and a tangy tamarind sauce."
          },
          {
            id: 38,
            Category:  "Food",
            Title: "Croissant",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/405px-2018_01_Croissant_IMG_0685.JPG",
            Description: "Start your day with our buttery Croissant. A flaky and light pastry perfect with a cup of coffee."
          },
          {
            id: 39,
            Category:  "Food",
            Title: "Roasted Vegetable Platter",
            image: "https://greenkitchenstories.com/wp-content/uploads/2018/03/Grain_platter_1-800x533.jpg",
            Description: "Enjoy the goodness of veggies with our Roasted Vegetable Platter. Seasonal vegetables roasted to perfection."
          },
          {
            id: 40,
            Category:  "Food",
            Title: "Grilled Salmon",
            image: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2021/08/How-to-Grill-Salmon.960.jpg",
            Description: "Treat yourself to our Grilled Salmon. Fresh salmon fillet, seasoned and grilled to a tender, flaky finish."
          },
          {
            id: 41,
            Category:  "Food",
            Title: "Macaroni and Cheese",
            image: "https://www.staysnatched.com/wp-content/uploads/2016/12/southern-mac-and-cheese-3-1024x750.jpg.webp",
            Description: "Relive your childhood with our Macaroni and Cheese. Creamy, cheesy goodness in every bite."
          },
          {
            id: 42,
            Category:  "Food",
            Title: "Dragon Roll",
            image: "https://www.foodandwine.com/thmb/7P_lAS3wdjWqine4I-3a550HN9s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dragon-Roll-FT-RECIPE0223-5e3d0283beee4921980ad7b5597d85a9.jpg",
            Description: "Experience the allure of our Dragon Roll. Eel, avocado, and cucumber topped with tobiko and eel sauce."
          },
          {
            id: 43,
            Category:  "Food",
            Title: "Ribs Platter",
            image: "https://st4.depositphotos.com/6848604/24228/i/450/depositphotos_242286232-stock-photo-grilled-barbecue-pork-ribs-spices.jpg",
            Description: "Get messy with our Ribs Platter. Tender, fall-off-the-bone ribs smothered in tangy barbecue sauce."
          },
          {
            id: 44,
            Category:  "Food",
            Title: "Chocolate Fondue",
            image: "https://www.foodandwine.com/thmb/G6-afh-Tis8u9vZccQj-KabAq-U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spiced-chocolate-fondue-FT-RECIPE0422-27f2b7b454e54bb8bdd4214c66deaa6f.jpg",
            Description: "Indulge in our Chocolate Fondue. Dip strawberries, marshmallows, and more into warm, melted chocolate."
          },
          {
            id: 45,
            Category:  "Food",
            Title: "Quinoa Salad",
            image: "https://www.eatwell101.com/wp-content/uploads/2021/02/Healthy-Chickpea-Quinoa-Salad-recipe-1.jpg",
            Description: "Nourish your body with our Quinoa Salad. Protein-packed quinoa, fresh vegetables, and a zesty vinaigrette."
          },
        //  Technology...
        {
          id: 46,
          Category: "technology",
          Title: "DJI Mini 2",
          image: "https://sm.pcmag.com/t/pcmag_me/review/d/dji-mini-2/dji-mini-2-se_p3hk.1920.jpg",
          Description: "Take to the skies with the DJI Mini 2 drone. It's compact, easy to fly, and equipped with a high-quality camera for aerial photography."
        },
        {
          id: 47,
          Category: "Technolgy",
          Title: "Amazon Echo Dot",
          image: "https://5.imimg.com/data5/LP/JM/MY-23727919/amazon-echo-dot-3rd-generation-smart-speaker-1000x1000.jpg",
          Description: "Transform your home into a smart home with the Amazon Echo Dot. Ask Alexa to control devices, play music, and provide information."
        },
            {
              id: 48,
              Title: "Virtual Reality Experiences",
              Category: "technology",
              image: "https://3dcoil.grupopremo.com/wp-content/uploads/2017/09/Fotolia_147130183_Subscription_Monthly_M.jpg",
              Description: "Immerse yourself in a world of virtual reality. Our VR experiences offer realistic simulations, gaming adventures, and educational journeys like never before."
            },
            {
              id: 49,
              Title: "Home Automation Solutions",
              Category: "technology",
              image: "https://dcdh7ea8gkhvt.cloudfront.net/blog/wp-content/uploads/2020/09/home-automation.webp",
              Description: "Make your home smarter and more convenient with our home automation solutions. Control lights, appliances, and security systems with ease."
            },
            {
              id: 50,
              Title: "High-Performance Gaming PCs",
              Category: "technology",
              image: "https://www.lenovo.com/in/en/wri-tech-blog-images-india/High-performance-desktop-Big-img.jpg",
              Description: "Unleash your gaming potential with our high-performance gaming PCs. Play the latest titles in stunning 4K resolution and experience gaming like never before."
            },
            {
              id: 51,
              Title: "Wearable Technology",
              Category: "technology",
              image: "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/05/wearable_technology_healthcare_blog_mobisoft_infotech.png",
              Description: "Stay connected and track your fitness with our range of wearable technology. From smartwatches to fitness trackers, we have you covered."
            },
            {
              id: 52,
              Title: "Advanced Camera Systems",
              Category: "technology",
              image: "https://media.istockphoto.com/id/871704344/photo/mobile-connect-with-security-camera.jpg?s=612x612&w=0&k=20&c=ZqLmm0tORU-rGt0DC9bw3lORPZv6z3CUzWtVTOtpCC8=",
              Description: "Capture life's moments with our advanced camera systems. From DSLRs to mirrorless cameras, our technology empowers your creativity."
            },
            {
              id: 53,
              Title: "Drone Exploration",
              Category: "technology",
              image: "https://img.freepik.com/premium-photo/mini-drone-aerial-exploration_670382-39883.jpg?w=1060",
              Description: "Take flight and explore with our drones. Capture breathtaking aerial views and discover new perspectives with our drone technology."
            },
            {
              id: 54,
              Title: "Smart Home Security",
              Category: "technology",
              image: "https://www.rambus.com/wp-content/uploads/2017/12/Smart-Home-Threats-and-Countermeasures.png",
              Description: "Protect your home with our smart home security solutions. Monitor your property remotely and receive instant alerts for peace of mind."
            },
            {
              id: 55,
              Title: "Artificial Intelligence (AI)",
              Category: "technology",
              image: "https://www.codingdojo.com/blog/wp-content/uploads/ai-v2-img3.jpg",
              Description: "Harness the power of artificial intelligence. Our AI technology is revolutionizing industries, from healthcare to finance."
            },
            {
              id: 56,
              Title: "Augmented Reality (AR)",
              Category: "technology",
              image: "https://www.investopedia.com/thmb/xEccYNdVMyTMMiNIhtuBgKuAfjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/augmented-reality.asp_sourcefile-e00b4d086d1a41dda39cfa2e9f7aa11b.jpg",
              Description: "Experience the blend of reality and virtual worlds with augmented reality technology. Explore interactive and immersive environments."
            },
            {
              id: 57,
              Title: "Sustainable Energy Solutions",
              Category: "technology",
              image: "https://images.ctfassets.net/obrdg975qq3x/2ToAQ14V86YS5aGvxV6EJW/195242a760d2ed697bdd2327d8f6c616/blog_post_graphic_electricity_supply__1_.png?w=700",
              Description: "Embrace sustainability with our renewable energy solutions. Solar panels, wind turbines, and eco-friendly technologies for a greener future."
            },
            {
              id: 58,
              Title: "3D Printing Innovation",
              Category: "technology",
              image: "https://2.bp.blogspot.com/-alopQTqJvs4/V_wrFlTpM-I/AAAAAAAAB0U/XaBF5H6pDS0Ty6D4kAs0_y_z8G66L9U7gCLcB/s400/3d%2Bprinting.jpg",
              Description: "Unlock endless possibilities with 3D printing innovation. Create prototypes, custom products, and artistic creations with precision."
            },
            {
              id: 59,
              Title: "Blockchain Revolution",
              Category: "technology",
              image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*zXgPGB749l2yDvPoJAeR5w.png",
              Description: "Join the blockchain revolution. Secure transactions, digital currencies, and decentralized applications are changing the way we do business."
            },
            {
              id: 60,
              Title: "Space Exploration Technologies",
              Category: "technology",
              image: "https://149466865.v2.pressablecdn.com/wp-content/uploads/2018/02/NASA-space-exploration-technologies.jpg",
              Description: "Discover the mysteries of the universe with our space exploration technologies. From rockets to telescopes, we're reaching for the stars."
            },
          // Fitness


              {
                id: 61,
                Title: "Fitness Tracker",
                Category: "Fitness",
                image: "https://www.seasons.com/wp-content/uploads/2022/07/seniorfitnesstrackers-1024x691.jpg",
                Description: "Track your daily activity, heart rate, and workouts with our advanced fitness tracker. Achieve your fitness goals and stay motivated."
              },
              {
                id: 62,
                Title: "Home Gym Equipment",
                Category: "Fitness",
                image: "https://www.nicepng.com/png/full/371-3718072_essential-home-gym-equipment-life-fitness-optima-series.png",
                Description: "Build your home gym with our high-quality fitness equipment. Stay fit and work out in the comfort of your own space."
              },
              {
                id: 63,
                Title: "Yoga Mats and Accessories",
                Category: "Fitness",
                image: "https://media.istockphoto.com/id/1136580822/photo/flat-lay-fitness-background-with-blank-space-for-a-text.jpg?s=612x612&w=0&k=20&c=1K7jViKn8jUF0OkOD3QjAfxq-2h-eu57vhg4ygaAL8c=",
                Description: "Enhance your yoga practice with our premium yoga mats and accessories. Find balance, flexibility, and inner peace."
              },
              {
                id: 64,
                Title: "Fitness Apparel",
                Category: "Fitness",
                image: "https://e7.pngegg.com/pngimages/355/635/png-clipart-sports-brand-logo-thumbnail.png",
                Description: "Upgrade your workout wardrobe with our stylish and comfortable fitness apparel. Look great while you exercise."
              },
              {
                id: 65,
                Title: "Protein Supplements",
                Category: "Fitness",
                image: "https://images.freekaamaal.com/post_images/1608716783.jpg",
                Description: "Fuel your muscles and recovery with our protein supplements. Boost your fitness results with the right nutrition."
              },
              {
                id: 66,
                Title: "Indoor Cycling Bikes",
                Category: "Fitness",
                image: "https://www.verywellfit.com/thmb/5rvQi24aVN8NxU5iUNrWPvL_RBk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/What-are-the-Different-Types-of-Indoor-Exercise-Bikes-Primary-a039c556b9914f9c96db5c07ccdf804f.png",
                Description: "Enjoy indoor cycling with our state-of-the-art bikes. Burn calories, improve cardio, and stay active year-round."
              },
              {
                id: 67,
                Title: "Personal Training Sessions",
                Category: "Fitness",
                image: "https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1591889835496-GPGGP2ZIRL0V41HKKOGH/The+Benefits+Of+Personal+Training+At+Home.jpg?format=1500w",
                Description: "Achieve your fitness goals with personalized training sessions. Work one-on-one with certified trainers."
              },
              {
                id: 68,
                Title: "Fitness Classes",
                Category: "Fitness",
                image: "https://res.cloudinary.com/dt84tw7zr/image/fetch/f_auto,g_auto,q_auto/https://www.gameplan-a.com/wp-content/uploads/fly-images/11787/Fitness_Class_Strenghtening_Focus-640x9999.jpg",
                Description: "Join our fitness classes led by certified trainers. Stay motivated, get in shape, and meet like-minded individuals."
              },
              {
                id: 69,
                Title: "Nutrition Coaching",
                Category: "Fitness",
                image: "https://images.ctfassets.net/psi7gc0m4mjv/63371897-0837-430e-a2c2-766286f7a43b/193d3735477a2dacd41ddd1bc384054b/issa_nutritioncoachingtasks_blogheader.jpg",
                Description: "Get personalized nutrition coaching to optimize your diet for fitness and wellness. Reach your health goals with expert guidance."
              },
              {
                id: 70,
                Title: "Fitness Apps",
                Category: "Fitness",
                image: "https://cdn.dribbble.com/users/6647053/screenshots/20014791/media/a49860b80a8b3ce839f9fc422ffb4c00.png?resize=1000x750&vertical=center",
                Description: "Stay on track with your fitness goals using our fitness apps. Access workouts, nutrition plans, and progress tracking on your phone."
              },
              {
                id: 71,
                Title: "Yoga",
                Category: "Fitness",
                image: "https://image.myupchar.com/5247/webp/yoga-in-hindi.webp",
                Description: "Yoga is a practice that connects the body, breath, and mind. It uses physical postures, breathing exercises, and meditation to improve overall health."
              },
              {
                id: 72,
                Title: "Fitness Recovery Tools",
                Category: "Fitness",
                image: "https://menshealth.com.au/wp-content/uploads/2021/11/recovery-1.jpg",
                Description: "Enhance your recovery with our fitness tools. Release muscle tension, reduce soreness, and improve flexibility."
              },
              {
                id: 73,
                Title: "Fitness Supplements",
                Category: "Fitness",
                image: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1673609774.webp",
                Description: "Support your fitness journey with our range of fitness supplements. Boost energy, endurance, and recovery."
              },
              {
                id: 74,
                Title: "CrossFit Equipment",
                Category: "Fitness",
                image: "https://www.garagegymreviews.com/wp-content/uploads/Best-CrossFit-Equipment-for-Home-Gym.png",
                Description: "Take on CrossFit challenges with our specialized equipment. Build strength, agility, and endurance in every workout."
              },
              {
                id: 75,
                Title: "Fitness DVDs",
                Category: "Fitness",
                image: "https://www.winxdvd.com/seo-img/dvd-ripper/insanity-dvd-rip.jpg",
                Description: "Work out at home with our fitness DVDs. Follow expert-led routines and get fit on your schedule."
              },

              // Home....
              {
                id: 76,
                Title: "Bahubali: The Beginning",
                Category: "Home",
                image: "https://resizing.flixster.com/4u4WFRlMl-Vq-G-UOas4uY8OfhY=/206x305/v2/https://flxt.tmsimg.com/assets/p11546593_p_v8_af.jpg",
                Description: "Bahubali: The Beginning is an epic historical action film directed by S. S. Rajamouli. It follows the journey of Shiva, who learns about his heritage and seeks to reclaim his kingdom."
            },
           
            {
              id: 77,
              Title: "Smart Home Security",
              Category: "Home",
              image: "https://cdn.vectorstock.com/i/1000x1000/82/85/smart-home-security-devices-and-systems-vector-34648285.webp",
              Description: "Protect your home with our smart home security solutions. Monitor your property remotely and receive instant alerts for peace of mind."
            },
            {
              id: 78,
              Category: "Home",
              Title: "Inception",
              image: "https://irs.www.warnerbros.com/keyart-jpeg/inception_keyart.jpg",
              Description: "\"Inception\" is a science fiction heist thriller film directed by Christopher Nolan. Dom Cobb, played by Leonardo DiCaprio, is a thief who specializes in stealing information by entering the subconscious minds of his targets."
            },
            {
                id: 79,
                Title: "Kabhi Khushi Kabhie Gham",
                Category: "Home",
                image: "https://cinemachaat.files.wordpress.com/2014/04/k3g.jpg?w=350&zoom=2",
                Description: "Kabhi Khushi Kabhie Gham is a family drama film directed by Karan Johar. It tells the story of the rich Raichand family and the relationships and conflicts within."
            },
            {
              id: 80,
              Title: "Indoor Cycling Bikes",
              Category: "Home",
              image: "https://www.verywellfit.com/thmb/5rvQi24aVN8NxU5iUNrWPvL_RBk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/What-are-the-Different-Types-of-Indoor-Exercise-Bikes-Primary-a039c556b9914f9c96db5c07ccdf804f.png",
              Description: "Enjoy indoor cycling with our state-of-the-art bikes. Burn calories, improve cardio, and stay active year-round."
            },
         
            {
              id: 81,
              Category:  "Home",
              Title: "Ribs Platter",
              image: "https://st4.depositphotos.com/6848604/24228/i/450/depositphotos_242286232-stock-photo-grilled-barbecue-pork-ribs-spices.jpg",
              Description: "Get messy with our Ribs Platter. Tender, fall-off-the-bone ribs smothered in tangy barbecue sauce."
            },
        
         
            {
              id: 82,
              Title: "Personal Training Sessions",
              Category: "Home",
              image: "https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1591889835496-GPGGP2ZIRL0V41HKKOGH/The+Benefits+Of+Personal+Training+At+Home.jpg?format=1500w",
              Description: "Achieve your fitness goals with personalized training sessions. Work one-on-one with certified trainers."
            },
            {
              id: 83,
              Title: "Augmented Reality (AR)",
              Category: "Home",
             image: "https://www.investopedia.com/thmb/xEccYNdVMyTMMiNIhtuBgKuAfjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/augmented-reality.asp_sourcefile-e00b4d086d1a41dda39cfa2e9f7aa11b.jpg",
              Description: "Experience the blend of reality and virtual worlds with augmented reality technology. Explore interactive and immersive environments."
            },

            {
              id: 84,
              Title: "Fitness Classes",
              Category: "Home",
              image: "https://res.cloudinary.com/dt84tw7zr/image/fetch/f_auto,g_auto,q_auto/https://www.gameplan-a.com/wp-content/uploads/fly-images/11787/Fitness_Class_Strenghtening_Focus-640x9999.jpg",
              Description: "Join our fitness classes led by certified trainers. Stay motivated, get in shape, and meet like-minded individuals."
            },

       
            {
              id: 85,
              Title: "Artificial Intelligence (AI)",
              Category: "Home",
             image: "https://www.codingdojo.com/blog/wp-content/uploads/ai-v2-img3.jpg",
              Description: "Harness the power of artificial intelligence. Our AI technology is revolutionizing industries, from healthcare to finance."
            },
            
            {
              id: 86,
              Category:  "Home",
              Title: "Dragon Roll",
              image: "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0293-II.jpg",
              Description: "Experience the allure of our Dragon Roll. Eel, avocado, and cucumber topped with tobiko and eel sauce."
            },
            {
              id: 87,
              Title: "3D Printing Innovation",
              Category: "Home",
              image: "https://2.bp.blogspot.com/-alopQTqJvs4/V_wrFlTpM-I/AAAAAAAAB0U/XaBF5H6pDS0Ty6D4kAs0_y_z8G66L9U7gCLcB/s400/3d%2Bprinting.jpg",
              Description: "Unlock endless possibilities with 3D printing innovation. Create prototypes, custom products, and artistic creations with precision."
            },
            {
              id: 88,
              Category:  "Home",
              Title: "Ribs Platter",
              image: "https://st4.depositphotos.com/6848604/24228/i/450/depositphotos_242286232-stock-photo-grilled-barbecue-pork-ribs-spices.jpg",
              Description: "Get messy with our Ribs Platter. Tender, fall-off-the-bone ribs smothered in tangy barbecue sauce."
            }


  ]
             
)
    return(
        <>
        <Store.Provider value={[data]}>
           {props.children}

        </Store.Provider>
        </>
    )
}

export default ContextApi


