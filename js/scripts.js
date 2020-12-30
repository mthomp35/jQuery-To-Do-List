function newItem() {

  // Adding a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }

  // Crossing out an item from the list of items
  li.on('dblclick', function() {
   li.toggleClass('strike');
  });

  // Adding the delete button "X"
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(crossOutButton);

  crossOutButton.on('click', function() {
    li.addClass('delete');
  });

  // Reordering the items with drag:
  $('#list').sortable();

}
