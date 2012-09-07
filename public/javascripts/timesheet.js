$(window).ready(function(){
	
	$('.remove-item').on("click",function(e){e.preventDefault();$(this).parent().remove();})

	$('#addItem').click(function(e){
		e.preventDefault();
		$('#timesheet-list').append('<li class="timesheet-line"><input type="number" class="hours" name="hours" min="0" value="0" step=".25" > <select id="category"><option value="development">Development</option><option value="design">Design</option><option value="creative">Creative</option><option value="ux">User Experince</option><option value="strategy">Strategy</option></select> <select class="subcategory"></select> <input type="text" type="text" class="details" name="details"><a href="#" class="remove-item">Remove</a></li>').find('.remove-item').on("click",function(e){e.preventDefault();$(this).parent().remove();});
	});

	$('.category').change(function(e){

		var $this = $(this);
		var val = $this.val();

		console.log(val);
		switch(val){
			case 'development':
				$this.siblings('.subcategory').html('<option value="frontend">Front End</option><option value="backend">Back End</option>')
			break;

		}
	})
	
	$('#timesheet').submit(function(e){

		var val = validateForm();

		if(!val){
			console.log('fail');
		}else{
			e.preventDefault();

			var data = {
				date: $(this).find('.date').val()
			}

			var lines = [];

			$('.timesheet-line').each(function(){
				console.log('getting line');
				lines.push({
					duration:$(this).find('.hours').val(),
					category:$(this).find('.category').val(),
					subcategory:$(this).find('.subcategory').val(),
					details:$(this).find('.details').val()
				})
			})

			data.lines = lines;

			console.dir(data)

			$.ajax({  
			  type: "POST",  
			  url: "/timesheets",  
			  data: data,
			  success: function(data) {  
			  	console.log(data)
			    
			  }  
			});  
			return false;
		}

	})


	var validateForm = function(){
		return true;
	}
})