$(function(){
  let json =  $.getJSON('C:\MyProjects\countries.json', function(data) {
                $.each(data, function(key, val) {
                    $('#countries').append('<option value="' + val + '">' + key + '</option>');
                });
    });
    //alert(json);

    let securityJson =  $.getJSON('C:\MyProjects\path.json', function(data) {
                  $.each(data, function(key, val) {
                      $('#countries').append('<option value="' + val + '">' + key + '</option>');
                  });
      });
      alert(securityJson);


});
