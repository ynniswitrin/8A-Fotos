Dropzone.options.photoupload ={
	maxFilesize: 4, 
	acceptedFiles: "image/*",
	dictDefaultMessage: "Fotos hier her ziehen, um sie hinzuzufügen"
};


// ## jQuery.uncomment

(function ($) {
	$.fn.uncomment = function () {
		for (var i = 0, l = this.length; i < l; i++) {
			for (var j = 0, len = this[i].childNodes.length; j < len; j++) {
				if (this[i].childNodes[j].nodeType === 8) {
					var content = this[i].childNodes[j].nodeValue;
					$(this[i].childNodes[j]).replaceWith(content);
				}
			}
		}
	};
})(jQuery);

$(document).ready(function(){

	// UPLOAD PHOTOS
	$(function() {
		$("#btnAdd").click(function() {
			$("#btnAdd").addClass("hidden");
			$("#addPhotos").removeClass("hidden");
		});
	});

	

	$(function() {
		$("#closeUpload").click(function() {
			$("#btnAdd").removeClass("hidden");
			$("#addPhotos").addClass("hidden");
			location.reload();
		});
	});

	// TOOLTIPS
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

	// OPEN DELETE CONFIRMATION MODAL
	$(function() {
		$('#btnDelete').click(function(){
			$('#deleteConfirm').modal()
		});
	});

	//EDIT
	$(function() {
		$('#btnEdit').click(function(){
			$("#formNameChange").removeClass("hidden");
			$("#title").addClass("hidden");
			$("#editButtonGroup").addClass("hidden");
			$("#saveEdit").removeClass("hidden");
			$(".deletable").addClass("deletePhotos");
			$(".deletable").attr("data-method", "delete");
			$(".deletable").each(function(){
				$( this ).attr("data-path", $( this ).attr("href"));
				$( this ).attr("href", $( this ).data("delete"));
			});
			laravel.initialize();
			// Müsste wieder deinitalized werden, sonst funktioniert 
			// nach abgeschlossener Bearbeitung Lightbox nicht
		});
	});

	$(function() {
		$('#closeEdit').click(function(){
			$("#formNameChange").addClass("hidden");
			$("#title").removeClass("hidden");
			$("#editButtonGroup").removeClass("hidden");
			$("#saveEdit").addClass("hidden");
			$(".deletable").removeClass("deletePhotos");
			$(".deletable").each(function(){
				$( this ).attr("href", $( this ).data("path"));
			});
			$(".deletable").removeAttr("data-method");
		});
	});

	// LIGHTBOX
	$(function(){
		var lg = $('#lightgallery');
		lg.lightGallery({
			selector: '.item',
			thumbnail: false
		});
		$('#btnEdit').click(function(){
			lg.data('lightGallery').destroy(true);
		});
		$('#closeEdit').click(function(){
			lg.lightGallery({
				selector: '.item',
				thumbnail: false
			});
		});
	});
});