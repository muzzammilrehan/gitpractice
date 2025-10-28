$(document).ready(function(){

    function loadPage(page){
        $.ajax({
        url : page + '.html',
        success : function(data){
            $('#content').html(data)
        }

    })

}

$("#index").click(function(e){
e.preventDefault();
loadPage('index')
})

$("#about").click(function(e){
e.preventDefault();
loadPage('about')
})


$("#contact").click(function(e){
e.preventDefault();
loadPage('contact')
})

$("#style").click(function(e){
e.preventDefault();
loadPage('style')
})

$("#services").click(function(e){
e.preventDefault();
loadPage('services')
})

loadPage("index")

// data fetching

function dataFetching() {
    $.ajax({
        url: 'data json',
        type: 'get',
        sucess: function (users) {

            let myhtml = ""
            users.forEach(users => {

                myhtml += `
              <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                  <img src="${users.p_image}" alt="...".>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
            </div>
        </div>
    </div>
                `
                

                
            })
        }
})
}

})