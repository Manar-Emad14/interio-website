const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// فتح/غلق قائمة الموبايل
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// تمرير سلس وإغلاق القائمة عند الضغط على رابط
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.classList.remove('active');
  });
});

// ظل للنافبار عند التمرير
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    header.classList.add('scrolled');
  } else {
    header.style.boxShadow = "none";
    header.classList.remove('scrolled');
  }
});

// إظهار محتوى الهيرو عند التحميل
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('show');
  }
});


// إضافة/حذف الكلاس عند Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});





window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink'); // لو الصفحة اتحركت 50px
  } else {
    header.classList.remove('shrink');
  }
});






window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) { // لو الصفحة اتحركت 50px
    header.classList.add('shrink');
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    header.classList.remove('shrink');
    header.style.boxShadow = "none";
  }
});
