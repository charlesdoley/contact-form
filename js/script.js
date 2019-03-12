$('.ui.dropdown').dropdown();
$('.ui.checkbox')
  .checkbox()
;

$('#check').change(function(){
    if($(this).is(":checked")) {
        $('#submit').removeClass("disabled");
    }  
});
$('#check1').change(function(){
    if($(this).is(":checked")) {
        $('#submit1').removeClass("disabled");
    }  
});