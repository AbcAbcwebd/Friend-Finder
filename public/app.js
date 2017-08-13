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