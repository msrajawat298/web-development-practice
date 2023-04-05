$(document).ready(function () {
  tableList();
  cardList();
});

function tableList() {
  var mylist = "";
  $.each(tableListData, function (index, value) {
    mylist += `<tr>
      <td>${value.first_name} ${value.last_name}</td>
      <td>${value.email}</td>
      <td>${value.phone}</td>
      <td>${value.address.street} ${value.address.city} 
      ${value.address.state}
      ${value.address.zip}</td>
      <td>${value.courses}</td>
      <td>${value.course_duration}</td>
    </tr>`;
  });
  mylist += "";
  $("#myTable").append(mylist);
}

function cardList() {
  var mycard = "";
  $.each(cardsData, function (index, value) {
    mycard += `<img class="card-img-top" src="${value.card_img}" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${value.card_title}</h4>
      <p class="card-text">${value.card_text}</p>
      <a href="#" class="btn btn-primary">${value.card_button}</a>
    </div>`;
  });
  mycard += "";
  $("#cardcontent").append(mycard);
}
