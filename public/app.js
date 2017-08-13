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
    	var quizAnswers = [];
	    $('.input-slider').each(function() {
	    	quizAnswers.push($(this).val());
	    });
	    var resultObj = {
	    	name: userName,
	    	imageURL: userImage,
	    	surveyResults: quizAnswers
	    };

	    $.post('http://localhost:3000/recieve-reservation',resObj,function() {
	    	console.log("Record sent");
	    });

	    window.location.href = "tables.html"; */
	});
});