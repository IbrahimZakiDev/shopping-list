let store = [];
console.log(store)


function generateListItem(item) {

  return `<li data-item-id="${item.id}">
  <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
  </li>`
}


function renderShoppingList() {
  let html = []
  for (let i = 0; i < store.length; i++) {
    html.push(generateListItem(store[i]))
  }
  $(".shopping-list").html(html)
}


function handleAddItem() {
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault()
    const entry = $("#shopping-list-entry").val()
    store.push({id:cuid(), name: entry, checked:false})
    $("#js-shopping-list-form").each(function(){
      this.reset()
    })
    renderShoppingList()

})
}

function handleCheckedItem() {
$(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    let item = $(event.target).closest("li").data("item-id")
    for (let i = 0; i < store.length; i++) {
      if (store[i].id === item) {
        store[i].checked = !store[i].checked
      }
    }
    renderShoppingList()
})
}

function handleDeleteItem() {
  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
      let item = $(event.target).closest("li").data("item-id")
      console.log(item)
      for (let i = 0; i < store.length; i++) {
        console.log(store[0].id)
        if (store[i].id === item) {
          store.splice(i,1)
        }renderShoppingList()
      }
      }
  )
  }


function main() {
  handleAddItem()
  renderShoppingList()
  handleCheckedItem()
  handleDeleteItem()
}


$(main)
