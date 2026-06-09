/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 01-06-2024 : (DF mm-dd-yyyy)
/*************************/
(function( $ ){
  $.fn.cstMemoryGame = function( options ) {  
    var settings = {
        genrateTotalRandom: 10,
        totolColumnPerLine:10
    };
    return this.each(function() {        
        // Step 1 : create random list having diffrent numbers  
        // Substep 1.1 : Generate random number between some range 
        // Substep 1.2 : Each number should be positionaly fixed 

        // Step 2 : each number should have 1 copy 
                    
        // Step 3 : Click on Block number will flip
        // Substep 3.1 : Create back and front side using css 
        // Substep 3.2 : Show frontside with question mark sign

        // Step 4 : Click on Second Block, number will be shown => If same number it will be fadeaway 
        //                                                      => if different number, both will Hide again 

        // Step 5 : After fadeout of all the numbers game will be finished, write text you win

		

        if (options) {
			$.extend( settings, options );
		}
		const cardWidth = 150;
		const cardGap = 5;
		const totalWidthPerCardIncludingOuterSpace = cardWidth + (cardGap * 2);
        var genrateTotalRandom = settings.genrateTotalRandom;
        var totolColumnPerLine = settings.totolColumnPerLine;
		var randomArrayValue = [];
		var randomArrayPosition = [];
		var finalArray = [];
		var mainContainerWidth =  totalWidthPerCardIncludingOuterSpace * totolColumnPerLine;
		$('#memory-game').append('<div class="main-container"></div>');
		$('.main-container').append('<ul style="max-width:' + mainContainerWidth + 'px" class="cstgame-listing"></ul>');
		$('.main-container').append('<div class="you-win">You Win</div>');
		tempString = '';
		var $cstGameListing = $('.cstgame-listing');
		var totalUniQueNumber = genrateTotalRandom / 2;


		// INPUT VALUE TO CUSTOMIZE GAME
		const cardCount = document.getElementById("cardCount");
		const cardsPerRow = document.getElementById("cardsPerRow");

		// SET DEFAULT VALUE 
		document.getElementById("cardCountValue").textContent = genrateTotalRandom;
		document.getElementById("cardsPerRowValue").textContent = totolColumnPerLine;
		cardCount.value = genrateTotalRandom;
		cardsPerRow.value = totolColumnPerLine;
		
		



		var lucideIcons = [
			'star',
			'heart',
			'rocket',
			'camera',
			'bell',
			'home',
			'gift',
			'moon',
			'sun',
			'cloud',
			'music',
			'bookmark',
			'shield',
			'flag',
			'zap',
			'coffee',
			'smile',
			'plane',
			'crown',
			'key',
			'search',
			'settings',
			'user',
			'mail',
			'phone',
			'calendar',
			'lock',
			'globe',
			'shopping-cart',
			'wallet',
			'compass'
		];
        /* GERERATE RANDOM ARRAY *****************/
		var generateRandom = function (totalNumber, min, max) {
		    var tempArray = [];
		    while (tempArray.length < totalNumber) {
		        var random = Math.floor(Math.random() * (max - min + 1)) + min;
		        var notRandomFound = false;		        
		        for (i = 0; i < tempArray.length; i++) {
		            if (tempArray[i] == random) {
		                notRandomFound = true;
		                break;
		            }
		        }
		        if (!notRandomFound)
		            tempArray[tempArray.length] = random;
		    }
		    return tempArray;
		}

        /* GERERATE RANDOM ARRAY WITH VALUE *****************/
		var generateFinalRandomArray = function () {
		    for (i = 0; i < genrateTotalRandom; i++) {
		        if (i < genrateTotalRandom/2) {
		            finalArray[randomArrayPosition[i]] = randomArrayValue[i];
		        } else {
		            finalArray[randomArrayPosition[i]] = randomArrayValue[i - (genrateTotalRandom / 2)];
		        }
		    }
		}
		
		var addCompletedIfEqual = function () {
		    firstValue = parseInt($cstGameListing.find('li > .flip-container.active').eq(0).find('.back').data('index'));
		    secondValue = parseInt($cstGameListing.find('li > .flip-container.active').eq(1).find('.back').data('index'));

		    if (firstValue === secondValue) {		        
		        $cstGameListing.find('li > .flip-container.active').parents('li').addClass('completed');		        
		    }
		}

        var isUserWin = function () {
            return $cstGameListing.find('li.completed').length===genrateTotalRandom;
		} 
        /* FOR RANDOM VALUE ********************/		
		randomArrayValue = generateRandom(totalUniQueNumber, 0, (genrateTotalRandom/2));
        
        /* FOR RANDOM POSITION ********************/
		randomArrayPosition = generateRandom(genrateTotalRandom, 0, genrateTotalRandom-1);

        /* FINAL RANDOM ARRAY *******************/
		generateFinalRandomArray();

	    $(finalArray).each(function (key, index) {		    
            tempString += '<li>'; 
            tempString += '<div class="flip-container"><div class="flipper"><div class="front">'; 
            tempString += '</div><div data-index="'+ index +'" class="back">'; // Main logic to check both number are equal

			tempString += '<i class="cst-icon" data-lucide="'+lucideIcons[index] + '"></i>';
            
            tempString += '</div></div></div>';
            tempString += '</li>';
	    })

		$(tempString).appendTo('ul.cstgame-listing');		
        $cstGameListing.find('li').on('click', function () {
		    $this = $(this);
		    activeNumberLength = $('li > .flip-container.active').length;
		    if (activeNumberLength > 1) {
		        $('li > .flip-container').removeClass('active');
		    }
		    $this.find('.flip-container').addClass('active');

		    if (activeNumberLength === 1) {
		        addCompletedIfEqual();
		    }
		    if (isUserWin()) {
		        $('.you-win').addClass('fade-in');
		    }
        })

		cardCount.addEventListener("input", () => {
			document.getElementById("cardCountValue").textContent = cardCount.value;
		});

		cardsPerRow.addEventListener("input", () => {
			document.getElementById("cardsPerRowValue").textContent = cardsPerRow.value;
		});


    });
  };
})(jQuery);


