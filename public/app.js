// Get the modal
var modal = document.getElementById('display-modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function generateQuiz(quiz){
	$.ajax({
	      url: '/api/quizes',
	      method: "GET"
	    }).done(function(info) {
			var activeQuiz = info[quiz];
			for (var i = 0; i < activeQuiz.questions.length; i++){
				var surveyElement = '<p class="question">' + activeQuiz.questions[i] + '</p><input type="range" max="5" min="1" class="input-slider"><br><p class="diss">Strongly Disagree</p><p class="agr">Strongly Agree</p><br><br>';
				$('#survey-form').append(surveyElement);
			}

		  
	});
};

$( document ).ready(function() {
    $("#submit-survey-btn").click(function(){
    	event.preventDefault();
    	var userName = $('#name-input').val();
    	var userImage = $('#photo-input').val();
    	var userGender = $('#gender-select').val();
    	console.log(userGender)
    	var desiredGenders = [];
    	$('input[name="preference"]').each(function() {
	    	if ($(this).is(':checked')){
	    		desiredGenders.push($(this).val());
	    	}
	    });
    	var quizAnswers = [];
	    $('.input-slider').each(function() {
	    	quizAnswers.push($(this).val());
	    });
	    var resultObj = {
	    	name: userName,
	    	imageURL: userImage,
	    	gender: userGender,
	    	desiredGenders: desiredGenders,
	    	surveyResults: quizAnswers
	    };

	    $.post('http://localhost:3000/api/friends',resultObj,function(response) {
	    	console.log("Record sent");
	    	console.log(response);
	    	console.log($('#display-modal'));
	    	$('#display-modal').css('display', "block");
	    	$('#match-name').text(response.name);
	    	$('#match-image').attr('src', response.image);
	    });

	});
/*
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    $('#display-modal').css('display', "none");
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        $('#display-modal').css('display', "none");
	    }
	};

	$("#close-window").click(function(){
		$('#display-modal').css('display', "none");
	});
*/
	$('body').on('click', 'span.close', function(){
		$('#display-modal').css('display', "none");
	});
});