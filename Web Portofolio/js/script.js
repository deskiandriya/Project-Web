// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    }
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  });
  