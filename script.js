const quizData = [
    {
    question: "What do you enjoy doing in your spare time?",
    options: [
        { text: "Going on hikes", animal: "Dog"},
        { text: "Crochetting/Knitting", animal: "Cat"},
        { text: "Napping", animal: "Cat"},
        { text: "Playing sport", animal: "Dog"},
        
    ]

    },

    {
        question: "How do you best describe yourself",
        options: [
            { text: "Introverted", animal: "Cat"},
            { text: "Extroverted", animal: "Dog"},
            { text: "Ambivert", animal: "Cat"},
            
        ]
    
        },


    {
        question: "What was your favourite subject at school?",
        options: [
            { text: "English", animal: "Cat"},
            { text: "PE (Physical Education)", animal: "Dog"},
            { text: "Art", animal: "Cat"},
            { text: "Mathematics", animal: "Cat"},
            { text: "Science", animal: "Dog"},
            
        ]
    
        },
    {
        question: "Do you like frequent parties e.g clubbing?",
        options: [
            { text: "No, I want to make time for others too.", animal: "Dog"},
            { text: "Yes, I don't mind here and there", animal: "Cat"},
            { text: "No, I dislike parties", animal: "Cat"},
                
        ]
        
        },

    {
        question: "What is your favourite food?",
        options: [
            { text: "Cupcakes", animal: "Cat"},
            { text: "Pizza", animal: "Dog"},
            { text: "Brownies", animal: "Cat"},
            { text: "Tacos", animal: "Dog"},
                    
            ]
            
            },
    {
        question: "Right now, do you have a large backyard or enough space at home/neighbourhoods?",
        options: [
            { text: "Yes", animal: "Dog"},
            { text: "No", animal: "Cat"},
                            
        ]
                    
         },

    {
        question: "Do you work long hours?",
        options: [
            { text: "Yes", animal: "Cat"},
            { text: "No", animal: "Dog"},
                                
        ]
                        
        },

    {
        question: "What is your love language?",
        options: [
        { text: "Words of Affirmation", animal: "Cat"},
        { text: "Quality Time", animal: "Dog"},
        { text: "Physical Touch", animal: "Dog"},
        { text: "Acts of Service", animal: "Cat"},
        { text: "Receiving Gifts", animal: "Dog"},
                                    
        ]
                            
        },

    {
        question: "Do you consider yourself family oriented?",
        options: [
        { text: "Yes", animal: "Dog"},
        { text: "Sometimes", animal: "Cat"},
        { text: "No", animal: "Cat"},
        
                                        
        ]
                                
     },


     {
        question: "What do your friends best describe you as?",
        options: [
        { text: "Loyal", animal: "Dog"},
        { text: "Trustworthy", animal: "Cat"},
        { text: "Reliable", animal: "Cat"},
        { text: "Humourous", animal: "Dog"},
        
                                        
        ]
                                
     },

     {
        question: "Your favourite drink?",
        options: [
        { text: "Matcha", animal: "Cat"},
        { text: "Coffee", animal: "Cat"},
        { text: "Coca Cola", animal: "Dog"},
        { text: "Beer", animal: "Dog"},
        
                                        
        ]
                                
     },

     {
        question: "Favourite genre of music?",
        options: [
        { text: "I don't listen to music", animal: "Cat"},
        { text: "Jazz", animal: "Cat"},
        { text: "Pop", animal: "Dog"},
        { text: "Hip-hop", animal: "Dog"},
        
                                        
        ]
                                
     },

     {
        question: "Where do you see yourself living in the next 5-10 years?",
        options: [
        { text: "Country town", animal: "Dog"},
        { text: "Eco-Focused or Mountain Towns", animal: "Dog"},
        { text: "Regional cities", animal: "Cat"},
        { text: "City life", animal: "Dog"},
        { text: "Normal suburban place", animal: "Cat"},
        
                                        
        ]
                                
     },


    {
       question: "What phone do you own?",
       options: [
       { text: "Apple", animal: "Dog"},
       { text: "Android", animal: "Cat"},
       
                                       
       ]
                               
    },

    {
        question: "Are you a...",
        options: [
        { text: "Night-time person", animal: "Cat"},
        { text: "Day-time person", animal: "Dog"},
        
                                        
        ]
                                
     }
    ];

    let currentQuestion = 0;
    const scores = { Dog: 0, Cat: 0 };
    
    const startBtn = document.getElementById("start-btn");
    const startScreen = document.getElementById("welcome");
    const quiz = document.getElementById("quiz");
    const resultDiv = document.getElementById("result");
    
    const animalInfo = {
        Dog: {
            img: "image/dog.jpg",
            description: "Dogs are loyal, friendly, and loving companions. You enjoy being social and dependable."
        },
        Cat: {
            img: "image/cat.jpg",
            description: "Cats are calm, independent, and clever. You value freedom and are fearless in pursuit of goals."
        }
    };
    
    startBtn.addEventListener("click", () => {
        startScreen.classList.add("hidden");
        quiz.classList.remove("hidden");
        loadQuestion();
    });
    
    function loadQuestion() {
        const current = quizData[currentQuestion];
        quiz.innerHTML = `<h2>${current.question}</h2>`;
        current.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("option");
            button.textContent = option.text;
            button.onclick = () => selectOption(option.animal);
            quiz.appendChild(button);
        });
    }
    
    function selectOption(animal) {
        scores[animal]++;
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
    
    function showResult() {
        const chosenAnimal = scores.Dog > scores.Cat ? "Dog" : "Cat";
        const info = animalInfo[chosenAnimal];
    
        quiz.classList.add("hidden");
        resultDiv.classList.remove("hidden");
    
        resultDiv.innerHTML = `
            <div class="result-content">
                <h2>You got ${chosenAnimal}!</h2>
                <img src="${info.img}" alt="${chosenAnimal}">
                <p>${info.description}</p>
                <button id="restart-btn">Start Again</button>
            </div>
        `;
    
        document.getElementById("restart-btn").addEventListener("click", () => {
            currentQuestion = 0;
            scores.Dog = 0;
            scores.Cat = 0;
            resultDiv.classList.add("hidden");
            startScreen.classList.remove("hidden");
        });
    }