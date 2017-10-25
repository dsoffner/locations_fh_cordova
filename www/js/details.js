document.getElementById('get_details').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Retrieving data.....</p>";

    cloudGetDetails(document.getElementById('userId').value, function(res){
        var details = res.details[0];
        var row ='<tr><td>Name:</td><td>'+ details.name +'</td></tr><tr><td>Address:</td><td>'+ details.address +'</td></tr><tr><td>Postcode:</td><td>'+ details.postcode +'</td></tr><tr><td>Phone:</td><td><a href="tel:'+ details.phone +'">'+ details.phone +'</a></td></tr><tr><td>E-Mail:</td><td><a href="mailto:'+ details.email +'">'+ details.email +'</a></td></tr><tr><td>Hours:</td><td>'+ details.hours +'</td></tr><tr><td>Map:</td><td><a href="'+ details.map +'">Google Maps</a></td></tr>';
        document.getElementById('cloudResponse').innerHTML = "";
        document.getElementById( 'table' ).innerHTML = row;
    });
};

function handleViewDetails(userId){
    cloudGetDetails(userId,function(cloudResponse){
        var details = cloudResponse.details[0];
        var row ='<tr><td>Name:</td><td>'+ details.name +'</td></tr><tr><td>Address:</td><td>'+ details.address +'</td></tr><tr><td>Postcode:</td><td>'+ details.postcode +'</td></tr><tr><td>Phone:</td><td><a href="tel:'+ details.phone +'">'+ details.phone +'</a></td></tr><tr><td>E-Mail:</td><td><a href="mailto:'+ details.email +'">'+ details.email +'</a></td></tr><tr><td>Hours:</td><td>'+ details.hours +'</td></tr><tr><td>Map:</td><td><a href="'+ details.map +'">Google Maps</a></td></tr>';
        document.getElementById('cloudResponse').innerHTML = "";
        document.getElementById( 'table' ).innerHTML = row;

    });
}

function cloudGetDetails(userId, callback){
     $fh.cloud(
      {
        path: 'details',
        method: "POST",
        data: {
          userId: userId
        }
      },
      function (res) {
        return callback(res);
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
}