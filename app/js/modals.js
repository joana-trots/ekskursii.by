var modal  = document.getElementById('contacts-modal'),
    btn    = document.getElementById('phone-item'),
    mclose = document.querySelectorAll('.close-btn');
btn.onclick = function() {
  modal.style.display = "flex";
  document.body.classList.toggle('overflow-hidden');
}
mclose.forEach((item) => {
  item.onclick = function() {
    modal.style.display = "none";
    document.body.classList.toggle('overflow-hidden');
  }
})
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.toggle('overflow-hidden');
  }
}