/* These three arrays are the questions with the answer choices for each of the three levels */

const questionsLevelOne = [
	{
		question : " Elizabeth Bennet is the protagonist of which Jane Austen novel?",
		choices: [
		{	choice : "Mansfield Park",
			correct : false
		},
		{	choice : "Sense and Sensibility",
			correct : false
		},
		{	choice : "Pride and Prejudice",
			correct : true
		},
		{	choice : "Persuasion",
			correct:false
		}
		]
		
	},
	{
		question : "What is the native country of Agatha Christie's detective Hercule Poirot?",
		choices: [
		{	choice : "Netherlands",
			correct: false
		},
		{	choice : "Belgium",
			correct: true
		},
		{	choice : "Luxembourgh",
			correct: false
		},
		{	choice : "France",
			correct: false
		}
		]
		
	},
	{
		question : "Which of the following characters is secretly a member of the Thought Police?",
		choices: [
		{	choice : "O'Brien",
			correct: false
		},
		{	choice : "Syme",
			correct: false
		},
		{	choice : "Winston",
			correct: false
		},
		{
			choice : "Charrington",
			correct: true
		}
		]
		
	},
	{
		question : "Who is the narrator of the Kidnapped novel by Robert Louis Stevenson?",
		choices: [
		{	choice : " David Balfour",
			correct: true
		},
		{	choice : " Alexander Balfour",
			correct: false
		},
		{	choice : " Ebenezer Balfour",
			correct: false
		},
		{	choice : " Alan Breck",
			correct: false
		}
		]
		
	},
	{
		question : "How many other rabbits did Peter Rabbit live with?",
		choices: [
		{	choice : "5",
			correct: false
		},
		{	choice : "4",
			correct: true
		},
		{	choice : "3",
			correct: false
		},
		{	choice : "6",
			correct:false
		}
		]
		
	}
]
const questionsLevelTwo = [
	{
		question : " In A Christmas Carol by Charles Dickens, How many ghosts visit Scrooge?",
		choices: [
		{	choice : "3",
			correct: false
		},
		{	choice : "5",
			correct: false
		},
		{	choice : "4",
			correct: true
		},
		{	choice : "2",
			correct: false
		}
		]
		
	},
	{
		question : " What was the title of the first novel wriiten by Virginia Woolf?",
		choices: [
		{	choice : "Mrs.Dalloway",
			correct: false
		},
		{	choice : "The Waves",
			correct: false
		},
		{	choice : "To the Lighthouse",
			correct: false
		},
		{	choice : "The Voyage Out",
			correct: true
		}
		]
		
	},
	{
		question : " According to Robert Burns, from where were the lyrics of Auld Lang Syne actually taken from ?",
		choices: [
		{	choice :"an old man singing",
			correct: true
		},	
		{	choice :"an old traveler chatting with him",
			correct: false
		},
		{	choice :"a young madam singing",
			correct: false
		},
		{	choiceD :"a poet reciting a certain poem",
			correct: false
		}
		]
		
	},
	{
		question : " Which novel of Thomas Hardy first gained notice?",
		choices: [
		{	choice :"Far from the Madding Crowd",
			correct: true
		},
		{	choice :"Tess of the d'Ubervilles",
			correct: false
		},
		{	choice :"A Pair of Blue Eyes",
			correct: false
		},
		{	choice :"Jude the Obscure",
			correct: false
		}
		]
		
	},
	{
		question : " Who was the author of the Waverley novels?",
		choices: [
		{	choice :"James Hogg",
			correct: false
		},
		{	choice :"Sir Walter Scott",
			correct: true
		},
		{	choice :"Robert Burns",
			correct:false
		},
		{	choice :"Robert Louis Stevenson",
			correct: false
		}
		]
		
	}
]

const questionsLevelThree = [
	{
		question: "What is the name of Captain Hook's pirate ship in Peter Pan?",
		choices:[
		{	choice :"The Jolly Rover",
			correct: false
		},
		{	choice :"The Jolly Rancher",
			correct: false
		},
		{	choice :"The Jolly Roger",
			correct: true
		},
		{	choice :"The Jolly Robber",
			correct: false
		}
		]
		
	},
	{
		question:'What was the name of the first "Golden Ticket" finder in Charlie and the Chocolate Factory?',
		choices: [
		{	choice :"Augustus Gloop",
			correct: true
		},
		{	choice :"Veruca Salt",
			correct: false
		},
		{	choice :"Mike Teavee",
			correct: false
		},
		{	choice :"Charlie Bucket",
			correct: false
		}
		]
		
	},
	{
		question: "In Samuel Taylor Coleridge’s The Rime of the Ancient Mariner, the mariner shoots what seabird with a crossbow and later wears it around his neck as punishment?",
		choices: [
		{	choice :"An Albatross",
			correct: true
		},
		{	choice :"A Seagull",
			correct: false
		},
		{	choice :"A Fulmar",
			correct: false
		},
		{	choice :"A Gannet",
			correct: false
		}
		]
		
	},
	{
		question: "What is the name of the villain who commands a gang of boy pickpockets in Charles Dicken’s “Oliver Twist”?",
		choices: [
		{	choice :"Bill Sikes",
			correct: false
		},
		{	choice :"Noah Claypole",
			correct: false
		},
		{	choice :"Fagin",
			correct: true
		},
		{	choice :"Barney",
			correct: false
		}
		]
		
	},
	{
		question: "In William Shakespeare’s “A Midsummer Night’s Dream”, what is the name of the King of the Fairies?",
		choices: [
		{	choice :"Lysander",
			correct: false
		},
		{	choice :"Philostrate",
			correct: false
		},
		{	choice :"Theseus",
			correct: false
		},
		{	choice :"Oberon",
			correct: true
		}
		]
		
	}
	]

	let emptyArray;
	
	let level =1;
	let selectedLevel =1;
	const lvlContainer = document.getElementById("level")
	
	
	/* This function helps me to sort my questions with Math.random, so that whenever the player plays the game the order is different */
	function sortQuestions(){
		if(selectedLevel == 1){
		emptyArray = questionsLevelOne.sort(() => Math.random() - 0.5)
		setQuestion()
		} else if(selectedLevel ==2){
			emptyArray = questionsLevelTwo.sort(() => Math.random() - 0.5)
			setQuestion()
		} else{
			emptyArray = questionsLevelThree.sort(() => Math.random() - 0.5)
			setQuestion()
		}
		
		
	}
	
	let currentQuestion
	let currentQuestionIndex = 0;
	
	let totalScore = 0;
	let totalQuestions = 0;

	let correctAnsCounter = 0; 
	let questionCounter = 0;
	const quizContainer= document.getElementById("quiz-container") 
	

	/* This function helps me get the question from the level selected and display it and the score and the question number  */
	function setQuestion(){
		
		levelShow(level)
		currentQuestion = emptyArray[currentQuestionIndex]
		
		totalScore = document.getElementById("question-number").innerHTML 
		totalQuestions = document.getElementById("player-score").innerHTML 
		innerHTML = (totalScore + "/" + totalQuestions)
		
		correctAnsCounter = document.getElementById("question-number").innerHTML 
		questionCounter = document.getElementById("player-score").innerHTML
		
		showQuestion()
	}
	
	
	const resultsPage = document.getElementById("results-box")
	const answerContainer = document.getElementById("answers-container")
	
	/* This function displays the question on the screen with the answer buttons.And also it hides the previous divs */
	function showQuestion (){
		const displayQuestion = document.getElementById("display-question")
		displayQuestion.innerHTML = currentQuestion.question
		//Here we create the answer buttons and make them clickable, showing rather it is correct or not
		currentQuestion.choices.forEach(choice => {
			const answerBtn = document.createElement("button")
			answerBtn.innerHTML = choice.choice
			if(choice.correct == true){
				answerBtn.id = "correct"
				answerBtn.addEventListener("click", correctAnswer)
			} else {
				answerBtn.id = "false"
				answerBtn.addEventListener("click", wrongAnswer)
			}
			answerBtn.classList.add("answer-button")
			
			answerContainer.append(answerBtn)
		})
		
		quizContainer.classList.remove("invisible")
		lvlContainer.classList.add("invisible")
		
	}
	
	
	const playerScore = document.getElementById("player-score")
	const questionNumber = document.getElementById("question-number")
	
	/* This function is activated if the player pressed the correct answer, the color changes to green and score and question number increases*/
	function correctAnswer(){
		const correctAns = document.getElementById("correct")
		correctAnsCounter++
		correctAns.style.backgroundColor = "green"
		questionCounter++
		currentQuestionIndex++
		playerScore.innerHTML = correctAnsCounter 
		questionNumber.innerHTML = questionCounter

		//this part here doesn't allow the player to change or click another answer
		let allAnswers = document.querySelectorAll(".answer-button")
		Array.prototype.forEach.call(allAnswers, function(e){
			e.removeEventListener("click", wrongAnswer)
		})
		correctAns.removeEventListener("click", correctAnswer)
	
	}
	/* This function is activated when the player presses the incorrect answer, the color changes to red and only the question number increases */
	function wrongAnswer(e){
			let btnSelect = e.target
			
			btnSelect.style.backgroundColor = "red"
			questionCounter++
			currentQuestionIndex++
			questionNumber.innerHTML = questionCounter
			
		//this part here doesn't allow the player to change or click another answer	
		let allAnswers = document.querySelectorAll(".answer-button")
		Array.prototype.forEach.call(allAnswers, function(e){
			e.removeEventListener("click", wrongAnswer)
		})
		let corrAnswer = document.getElementById("correct")
		corrAnswer.removeEventListener("click", correctAnswer)
			
	}
	
	
	
		
	const nextQuestion = document.getElementById("next-button")
	nextQuestion.addEventListener("click", nextQuestionFunction)
	/* This function changes to the next question, after all 5 questions are done, we move to the next level */
	function nextQuestionFunction(){
	
		
		while(answerContainer.firstChild){
			answerContainer.removeChild(answerContainer.firstChild)
		}
		
		if(currentQuestionIndex > 4){
			endLevel()
		} else {
			setQuestion()
		}
	}
	
	
	const levelContainer = document.getElementById("level")
	/* This function deals with moving onto the next level */
	function endLevel(){
		
		level++
		emptyArray = []
		currentQuestionIndex = 0		
		sortQuestions()
		
		quizContainer.classList.add("invisible")
		
		
		levelContainer.classList.remove("invisible")
		
		//Display results page is level is more than three
		if (level > 3){
		resultsPage.style.visibility="visible"
		
	}	
		
	const startButton = document.getElementById("start-quiz")
	startButton.addEventListener("click", startGame)
	const startPage = document.getElementById("start-box")
	
	const startPrompt = document.getElementById("start-prompt")
	
	const playButton = document.getElementById("start-prompt")
	playButton.addEventListener("click", startGame)
	
	/* This function deals with the start of the quiz, it hides the main page, level page and results page */
	function startGame(){
		document.body.style.backgroundColor = "#551A8B"
		document.body.style.backgroundImage = "none"
		startPage.classList.add("invisible")
		startPage.classList.remove("info-box")
		resultsPage.classList.add("invisible")
		resultsPage.classList.remove("results-box")
		
		levelContainer.classList.remove("invisible")
		levelShow(level)		
		}
		/* This function deals with the level page, let's player select level and locks level not played yet */
		function levelShow(level){
			if (level == 1){
				const levelOne = document.getElementById("levelOne")
				levelOne.addEventListener("click", levelSelected)
			
				startPrompt.classList.add("invisible")
				startPrompt.classList.remove("prompt-box")
				
			}else if ( level == 2){
				const levelTwo = document.getElementById("levelTwo")
				levelTwo.addEventListener("click", levelSelected)
				levelTwo.classList.remove("level-locked")
			}else {
				const levelThree = document.getElementById("levelThree")
				levelThree.addEventListener("click", levelSelected)
				levelThree.classList.remove("level-locked")
			}
		}
	/* This function deals with the level selection, changes the color of level selected and gives you the sorted questions for that level */
	function levelSelected(e){
		let lvlSelect = e.target
		var lvlChild = lvlContainer.children
		
		for(let i = 0; i<lvlChild.length; i++){
			var child = lvlChild[i]
			child.classList.remove("level-select-selected")
		}
		
		lvlSelect.classList.add("level-select-selected")
		
		selectedLevel = lvlSelect.dataset.level
		
		lvlSelect.addEventListener("click", sortQuestions)
	}