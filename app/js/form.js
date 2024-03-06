var formField = document.querySelectorAll('.booking-form__form-field'),
    submitBtn = document.querySelectorAll('[type="submit"]');
formField.forEach((field => {
  var input = field.querySelectorAll('input');
  input.forEach((item) => {
    item.onblur = function(e){
      const isValid = e.target.checkValidity();
      if (!isValid) field.classList.add('invalid');
      else field.classList.remove('invalid');
    }
  });
}));
submitBtn.forEach(btn => {
  btn.onclick = function(e) {
    e.preventDefault();
    
  }
});