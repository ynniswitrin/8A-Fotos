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

	//EDIT NAME
	$(function() {
		$('#btnEdit').click(function(){
			$("#formNameChange").removeClass("hidden");
			$("#title").addClass("hidden");
			$("#editButtonGroup").addClass("hidden");
			$("#saveEdit").removeClass("hidden");
			$(".deletePhotos").removeClass("hidden");
		});
	});

	$(function() {
		$('#closeEdit').click(function(){
			$("#formNameChange").addClass("hidden");
			$("#title").removeClass("hidden");
			$("#editButtonGroup").removeClass("hidden");
			$("#saveEdit").addClass("hidden");
			$(".deletePhotos").addClass("hidden");
		});
	});

	// LIGHTBOX
	$(function(){
	    $("#lightgallery").lightGallery({
	    	selector: '.item',
	    	 thumbnail: false
	    }); 
	});
});