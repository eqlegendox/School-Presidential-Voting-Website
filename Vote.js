// Options Bar
function moveIndicator(element) {
    const indicator = document.querySelector('.indicator');
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    
    element.classList.add('active');
    const itemPosition = element.offsetLeft;
    
    indicator.style.display = `block`;
    indicator.style.width = `130px`;
    indicator.style.transform = `translateX(${itemPosition}px)`;
  }


// Selecting the Candidates Picture
const selection1A = document.getElementById('area1');
//const selection1B
selection1A.addEventListener('click', (e) => {
  stayImage1()
})

function stayImage1(){
  selection1A.style.filter = `grayscale(0%)`;
  selection1A.style.width = `350px`;
  selection1A.style.height = `500px`;
}
