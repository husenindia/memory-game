/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 01-06-2016 : (DF mm-dd-yyyy)
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

        var genrateTotalRandom = settings.genrateTotalRandom;
        var totolColumnPerLine = settings.totolColumnPerLine;
		var randomArrayValue = [];
		var randomArrayPosition = [];
		var finalArray = [];
		var commonSpaceLeft = 0;
		var commonSpaceTop = 0;
		$('body').append('<ul class="cstgame-listing"></ul>');
		$('body').append('<div class="you-win">You Win</div>');
		tempString = '';
		var $cstGameListing = $('.cstgame-listing');
		var totalUniQueNumber = genrateTotalRandom / 2;

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
		    firstValue = parseInt($cstGameListing.find('li > .flip-container.active').eq(0).find('.back').html());
		    secondValue = parseInt($cstGameListing.find('li > .flip-container.active').eq(1).find('.back').html());

		    if (firstValue === secondValue) {		        
		        $cstGameListing.find('li > .flip-container.active').parents('li').addClass('completed');		        
		    }
		}

        var isUserWin = function () {
            return $cstGameListing.find('li.completed').length===genrateTotalRandom;
		} 
        /* FOR RANDOM VALUE ********************/		
		randomArrayValue = generateRandom(totalUniQueNumber, 0, 100);
        
        /* FOR RANDOM POSITION ********************/
		randomArrayPosition = generateRandom(genrateTotalRandom, 0, genrateTotalRandom-1);

        /* FINAL RANDOM ARRAY *******************/
		generateFinalRandomArray();

	    $(finalArray).each(function (key, index) {		    
            tempString += '<li style="left:' + commonSpaceLeft + 'px; top:' + commonSpaceTop + 'px;">'; 
            tempString += '<div class="flip-container"><div class="flipper"><div class="front">'; 
            tempString += '?';
            tempString += '</div><div class="back">';
            tempString += index;
            tempString += '</div></div></div>';
            tempString += '</li>';
		    commonSpaceLeft += 150;
		    tempkey = key + 1;
		    if (tempkey%totolColumnPerLine == 0) {
		        commonSpaceLeft = 0;
		        commonSpaceTop += 150;
		    }
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
    });
  };
})(jQuery);


