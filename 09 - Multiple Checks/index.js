let inboxItems = Array.from(document.querySelectorAll('.item input'));
let deleteItemButton = document.querySelector('.deleteOption button');
let inbox = document.querySelector('.inbox');

function handleChecked(e) {

    let inBetween = false;

    if (e.shiftKey && this.checked) {
        
        inboxItems.forEach((item) => {
            if (item === this || item === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                item.checked = true
            }
        })

    }

    lastChecked = this;
}

inboxItems.forEach((item) => {
    item.addEventListener('click', handleChecked);
})

function deleteItems(e) {
    let remainedItems = inboxItems.filter((item) => item.checked === false);
    
    if (remainedItems.length === 0) {
        console.log('No items to delete');
        return 0;
    }
    
    
}

deleteItemButton.addEventListener('click', deleteItems)