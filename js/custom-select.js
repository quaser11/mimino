document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".custom-select__button");
  const dropDownList = dropDownWrapper.querySelector(".custom-select__list");
  const dropDownListItems = dropDownList.querySelectorAll(".list > .item");
  const dropDownInput = dropDownWrapper.querySelector(".custom-select__input__hidden");

  dropDownBtn.addEventListener("click", function () {
    dropDownList.classList.toggle("custom-select__list-visible");
  });

  // выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove("custom-select__list-visible");
    });
  });

  // клик снаружи дропдауна

  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove("custom-select__list-visible");
    }
  });

  // Нажмите на Tab или Escape. Закрыть
  document.addEventListener("keydown", function (e) {
    if (e.key === "tab" || e.key === "escape") {
      dropDownList.classList.remove("custom-select__list-visible");
    }
  });
});

