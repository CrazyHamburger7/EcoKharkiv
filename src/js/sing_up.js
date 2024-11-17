function changeLanguage() {
    let ukContent = document.querySelectorAll('.content-text[id$="-uk"]');
    let enContent = document.querySelectorAll('.content-text[id$="-en"]');
    let langBtn = document.getElementById('lang-btn');
    let isEnglish = langBtn.textContent === "English";

    // Зміна тексту навігаційних посилань
    document.querySelectorAll(".nav-links a")[0].innerHTML = isEnglish ? "Home" : "Головна";
    document.querySelectorAll(".nav-links a")[1].innerHTML = isEnglish ? "Pages" : "Сторінки";
    document.querySelectorAll(".nav-links a")[2].innerHTML = isEnglish ? "History of Kharkiv": "Історія Харкова";
    document.querySelectorAll(".nav-links a")[3].innerHTML = isEnglish ? "Ecological problems of Kharkiv" : "Екологічні проблеми Харкова";
    document.querySelectorAll(".nav-links a")[4].innerHTML = isEnglish ? "Waste Status and Recycling" : "Стан та переробка відходів";
    document.querySelectorAll(".nav-links a")[5].innerHTML = isEnglish ? "Air and Its Quality" : "Повітря та його якість";
    document.querySelectorAll(".nav-links a")[6].innerHTML = isEnglish ? "Cleanliness of Water Bodies in Kharkiv" : "Чистота водойм Харкова";
    document.querySelectorAll(".nav-links a")[7].innerHTML = isEnglish ? "Volunteering" : "Еко-волонтерство";
    document.querySelectorAll(".nav-links a")[8].innerHTML = isEnglish ? "Tips for preserving the environment" : "Поради щодо збереження довкілля";
    document.querySelectorAll(".nav-links a")[9].innerHTML = isEnglish ? "Eco-volunteering" : "Еко-волонтерство";

    // Зміна тексту в контенті
    document.getElementById('section-title').textContent = isEnglish ? "Impact of the war on the forests of Kharkiv" : "Вплив війни на ліси Харкова";
    document.getElementById('eco-title').textContent = isEnglish ? "Significant forest damage" : "Значні пошкодження лісів";
    document.getElementById('war-title').textContent = isEnglish ? "Forest on Zhuravlevka" : "Ліс на Журавльовці";
    document.getElementById('title').textContent = isEnglish ? "State of green areas" : "Стан зелених зон";

    // Перемикання контенту між українською та англійською
    ukContent.forEach(el => el.style.display = isEnglish ? "none" : "block");
    enContent.forEach(el => el.style.display = isEnglish ? "block" : "none");

    // Зміна тексту на кнопці
    langBtn.textContent = isEnglish ? "Ukrainian" : "English";
  }

  window.addEventListener('scroll', () => {
  const scrollToTop = document.querySelector('.scrollToTop');
  if (window.scrollY > 200) {
    scrollToTop.style.display = 'inline';
  } else {
    scrollToTop.style.display = 'none';
  }
});

// Плавний перехід до початку
document.querySelector('.scrollToTop').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});