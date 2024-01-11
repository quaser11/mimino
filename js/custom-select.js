document.querySelector('.custom-select__button').addEventListener('click', function(){
    document.querySelector('.custom-select__list').classList.toggle('custom-select__list-visible');

})

document.querySelectorAll('.custom-select__item.item').forEach(function(listItem){
    listItem.addEventListener('click', function(){
        document.querySelector('.custom-select__button').innerText = this.innerText;
        document.querySelector('.custom-select__button').focus(); 
        document.querySelector('.custom-select__input__hidden').value = this.dataset.value;
    })
})