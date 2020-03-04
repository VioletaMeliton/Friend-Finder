$("#submit").click(function() {

    var answers = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [$('#q1').val().trim(),$('#q2').val().trim(),$('#q3').val().trim(),$('#q4').val().trim(),
            $('#q5').val().trim(),$('#q6').val().trim(),$('#q7').val().trim(),$('#q8').val().trim(),
            $('#q9').val().trim(),$('#q10').val().trim()]
    };


    $.post("api/new", answers, function(data) {
        if(data){
            console.log(data);
            $('#caption').text(data.name);
            $('.imagepreview').attr('src', data.photo );
            $('#imagemodal').modal('show');

        }

        $('#name').val("");
        $('#photo').val("");
        $('#q1').val("");
        $('#q2').val("");
        $('#q3').val("");
        $('#q4').val("");
        $('#q5').val("");
        $('#q6').val("");
        $('#q7').val("");
        $('#q8').val("");
        $('#q9').val("");
        $('#q10').val("");
    });
});
