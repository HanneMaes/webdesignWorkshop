//****************************************************************************************************************************************************
//****************************************************************************************************************************************************

function documentReady() {

  // scroll down on arrow click
  document.getElementById('arrowClick').onclick = function() {
    let pageHeight = window.innerHeight;
    // window.scrollBy(0, pageHeight, 'smooth');
    window.scrollBy({ top: pageHeight, left: 0, behavior: "smooth" });
  };

  // smooth scrolling to anchor points
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
}
