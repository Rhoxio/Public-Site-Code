$(document).ready(function(){
	
	$('.submit-email').on('click', function(event){
		event.preventDefault()
		name = $('.name-input').val()
		email = $('.email-input').val()
		subject = $('.subject-input').val()
		message = $('.body-input').val()
		sendEmail(name, email, subject, message)

		$('.thank-you').animate({'visibility', 'visible'}, fast)
	})

	var sendEmail = function(name, email, subject, message){
		console.log('hitting the mailer')
		data = 'api_user=azorius07&api_key=rTRYTOSCRAETHISAPIKEY&to=rhoxiodbc@gmail.com&toname=KevinMaze&subject='+name+', '+subject+'&text='+message+'&from='+email+''
		$.post('https://api.sendgrid.com/api/mail.send.json',  data, function(data, status){
		})
	}


})



