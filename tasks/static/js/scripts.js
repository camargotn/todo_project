console.log('funcionou!');

$(document).ready(function(){
  
  console.log('funcionou!');

  var deleteBtn = $('.detele-btn');
  var searchBtn = $('#search-btn')
  var searchForm = $('#search-form')

  $(deleteBtn).on('click', function(e) {
   e.preventDefault();
   
   var delLink = $(this).attr('href');
   var result = confirm('Quer deletar essa tarefa?');

   if(result) {
    window.location.href = delLink;
   }
  });

});

$(searchBtn).on('click', function() {
  searchForm.submit();
})