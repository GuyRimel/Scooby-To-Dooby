
function newItem(){
  //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    let inputValue = $("#input").val();
    $(li).append(inputValue);
    updatePercentComplete();

    if (inputValue === '' || inputValue === ' ') {
    alert('Write something!');
    } else {
      let list = $('#list');
      list.append(li);
    }

  //2. Crossing out an item from the list of items:
    function crossOut() {
      li.toggleClass("strike");
      updatePercentComplete();
    }

    li.on("dblclick",crossOut);

  //3(i). Adding the delete button "X": 
    let crossOutButton = $(`<button class='crossOutButton'></button>`);
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem(){
      li.addClass("delete");
      updatePercentComplete();
    }
  // 4. Reordering the items: 
    $('#list').sortable();

  // percent complete tracking feature
  function updatePercentComplete() {
    let totalTasks = $('li').length;
    let deletedTasks = $('.delete').length;
    let crossedOutTasks = $('.strike').length;
    let activeTasks = totalTasks - deletedTasks - crossedOutTasks;
    let percentage = (1 - (activeTasks / (totalTasks - deletedTasks))) * 100;

    if(!percentage || percentage < 0){
      percentage = 0;
    }if(percentage > 100){
      percentage = 100;
    }
    
    $('#percentComplete').text(Math.round(percentage));
  }
}

  // rename list feature
  function renameList(){
    let listTitle = prompt('Enter new list title:').trim();
    if(listTitle){
      $('h1').text(listTitle);
    }
  }

  $('h1').on('click', renameList);
