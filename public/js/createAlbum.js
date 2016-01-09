$(function() {
	$("#submitbutton").click(function() {
			var name = $("input#name").val();
			if (name == "") {
				alert("Kein Name angegeben!");
			}
			else{
				var _token = $("input[name='_token']").val();
				var dataString = 'name='+ name + '&_token=' + _token;
				$.ajax({
				type: "POST",
				url: "/album",
				data: dataString,
				success: function(data) {
					$("input[name='_id']").val(data);
					$("#stepTwo").removeClass("hidden");
					$("#submitbutton").attr("disabled", "disabled").removeClass("btn-primary").addClass("btn-default");
					$("#name").attr("disabled", "disabled");
				}
			});
			return false;
			}
	});
});