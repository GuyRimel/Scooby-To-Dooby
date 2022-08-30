
function newItem(){
  //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    let inputValue = $("#input").val();
    $(li).append(inputValue);
    
    if (inputValue === '' || inputValue === ' ') {
      alert('Write something!');
    } else {
      let list = $('#list');
      list.append(li);
    }
    update();

  //2. Crossing out an item from the list of items:
    function crossOut() {
      li.toggleClass("strike");
      update();
    }

    li.on("dblclick",crossOut);

  //3(i). Adding the delete button "X": 
    let xBtn = $(`<button class='xBtn'></button>`);
    xBtn.append(document.createTextNode("X"));
    li.append(xBtn);

    xBtn.on("click", deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem(){
      li.addClass("delete");
      li.removeClass("strike");
      update();
    }
  // 4. Reordering the items: 
    $('#list').sortable();

  // percent complete tracking feature
  function update() {
    let totalTasks = $('li').length;
    let deletedTasks = $('.delete').length;
    let crossedOutTasks = $('.strike').length;
    let totalTasksShowing = totalTasks - deletedTasks;
    let percentage = (crossedOutTasks / totalTasksShowing
    ) * 100;

    if(!percentage || percentage < 0){
      percentage = 0;
    }if(percentage > 100){
      percentage = 100;
    }
    
    let currentDateTime = new Date().toLocaleString();
    $('#percentComplete').text(Math.round(percentage));
    $('#lastModified').text(currentDateTime);
  }
}

// rename list feature
function renameList(){
  let listTitle = prompt('Enter new list title:').trim();
  if(listTitle){
    $('h1').text(listTitle);
  }
  update();
}

$('h1').on('click', renameList);
