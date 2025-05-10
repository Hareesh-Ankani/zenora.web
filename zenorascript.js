document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({
      behavior: 'smooth'
    });
  });

  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', function () {
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });