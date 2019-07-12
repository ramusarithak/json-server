$(document).ready(function () {

    function getResultsOnLoad(){

    $.get('http://localhost:4000/employees',
    function (data) {
        console.log(data)
        // data = JSON.parse(data);
        var tr;
        for (var i = 0; i < data.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>"+ data[i].id + "</td>")
            tr.append("<td>"+ data[i].first_name + "</td>");
            tr.append("<td>" + data[i].last_name + "</td>");
            tr.append("<td>" + data[i].email + "</td>");         
            $('table').append(tr);

        }
    });

   $("table").on('click', 'tr', function(){
     

       temp = $(this).find('td')
       $("#id").val($(temp[0]).text())
       $("#first_name").val($(temp[1]).text())
       $("#last_name").val($(temp[2]).text())
       $("#email").val($(temp[3]).text())

   })

    $('#create').on('click', function (event) {
        employees= {
            id: $("#id").val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val()
        }
        // js = JSON.stringify(data)
 
    $.ajax({
        type:"POST",
        url:"http://localhost:4000/employees",
        data:employees
    }).done(function(msg){
        console.log('created',msg);
        getResultsOnLoad();
        return false;
    })       

    })

    $("#update").on('click', function (event) {
        employees = {
            id: $("#id").val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val()
        }
        // js = JSON.stringify(data)



        $.ajax({
            type:"PUT",
            url:"http://localhost:4000/employees/"+employees.id,
            data:employees
        }).done(function(msg){
            console.log('created',msg)
            getResultsOnLoad();
            return false;
        })
    })

    $("#delete").on('click', function (event) {
        employees = {
            id: $("#id").val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val()
        }

        // js = JSON.stringify(data)
 

        $.ajax({
            type:"DELETE",
            url:"http://localhost:4000/employees/"+employees.id,

            data:employees
        }).done(function(msg){
            console.log('created',msg)
            getResultsOnLoad();
            return false;
        })
    })

    }
    getResultsOnLoad();
})
