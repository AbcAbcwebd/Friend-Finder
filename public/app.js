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

	    $.post('http://localhost:3000/api/friends',resultObj,function() {
	    	console.log("Record sent");
	    });

	});
});