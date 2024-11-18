function changeLanguage() {
    var title = document.getElementById('title');
    var heroTitle = document.getElementById('hero-title');
    var heroText = document.getElementById('hero-text');
    var featureEducation = document.getElementById('feature-education');
    var featureEducationDesc = document.getElementById('feature-education-desc');
    var featureRecycling = document.getElementById('feature-recycling');
    var featureRecyclingDesc = document.getElementById('feature-recycling-desc');
    var featureInitiatives = document.getElementById('feature-initiatives');
    var featureInitiativesDesc = document.getElementById('feature-initiatives-desc');
    var projectsTitle = document.getElementById('projects-title');
    var projectCleanAir = document.getElementById('project-clean-air');
    var projectCleanAirDesc = document.getElementById('project-clean-air-desc');
    var projectZeroWaste = document.getElementById('project-zero-waste');
    var projectZeroWasteDesc = document.getElementById('project-zero-waste-desc');
    var projectTreePlanting = document.getElementById('project-tree-planting');
    var projectTreePlantingDesc = document.getElementById('project-tree-planting-desc');
    var homeLink = document.getElementById('home-link');
    var newsLink = document.getElementById('news-link');
    var featuresTitle = document.getElementById('features-title');

    if (title.innerText === 'Екологія Харкова') {
      var lang = document.getElementById("lang-btn").innerHTML;
      featuresTitle.innerText = (title.innerText === 'Екологія Харкова') ? 'What we offer?' : 'Що ми пропонуємо?';

  document.getElementById("lang-btn").innerHTML = "Українська";
  document.querySelectorAll(".nav-links a")[0].innerHTML = "Our telegram";
  document.querySelectorAll(".nav-links a")[1].innerHTML = "Pages";
  document.querySelectorAll(".nav-links a")[2].innerHTML = "History of Kharkiv";
  document.querySelectorAll(".nav-links a")[3].innerHTML = "Ecological problems";
  document.querySelectorAll(".nav-links a")[4].innerHTML = "Waste Status and Recycling";
  document.querySelectorAll(".nav-links a")[5].innerHTML = "Air and Its Quality";
  document.querySelectorAll(".nav-links a")[6].innerHTML = "Cleanliness of Water Bodies in Kharkiv";
  document.querySelectorAll(".nav-links a")[7].innerHTML = "State of Green Zones";
  document.querySelectorAll(".nav-links a")[8].innerHTML = "Volunteering";
  document.querySelectorAll(".nav-links a")[9].innerHTML = "Tips for preserving the environment";
  document.querySelectorAll(".nav-links a")[10].innerHTML = "Eco-Volunteering";
      title.innerText = 'Ecology of Kharkiv ';
      heroTitle.innerText = 'Let\'s take care of Kharkiv\'s environment together!';
      heroText.innerText = 'Learn about the environmental state of the city and how we can help nature.';
      featureEducation.innerText = 'Environmental Education';
      featureEducationDesc.innerText = 'Learn about ecological issues and solutions. Our materials will help you understand how to properly care for the environment.';
      featureRecycling.innerText = 'Recycling Resources';
      featureRecyclingDesc.innerText = 'Get information on recycling points in Kharkiv and how to properly sort waste to reduce environmental impact.';
      featureInitiatives.innerText = 'Environmental Initiatives';
      featureInitiativesDesc.innerText = 'Join our environmental projects and activities aimed at cleaning the city, conserving natural resources, and improving air quality.';
      projectsTitle.innerText = 'Our Projects';
      projectCleanAir.innerText = 'Clean Air of Kharkiv';
      projectCleanAirDesc.innerText = 'Track the air pollution level in the city. Our monitoring data will help you know how clean the air around you is.';
      projectZeroWaste.innerText = 'Zero Waste City';
      projectZeroWasteDesc.innerText = 'Join our clean-up actions in parks and streets. Learn about our activities that help keep the city clean.';
      projectTreePlanting.innerText = 'Tree Planting';
      projectTreePlantingDesc.innerText = 'We plant trees throughout the city to improve ecology. Join our tree planting events and help create a greener Kharkiv!';
      homeLink.innerText = 'Kharkiv';
      newsLink.innerText = 'Environmental News';
      featuresTitle.innerText = 'What we offer?';
      document.getElementById('lang-btn').innerText = 'Українська';
    } else {
      featuresTitle.innerText = (title.innerText === 'Екологія Харкова') ? 'Що ми пропонуємо?':'Що ми пропонуємо?' ;
      document.getElementById("lang-btn").innerHTML = "English";
        document.querySelectorAll(".nav-links a")[0].innerHTML = "Наш телеграм";
        document.querySelectorAll(".nav-links a")[1].innerHTML = "Сторінки";
        document.querySelectorAll(".nav-links a")[2].innerHTML = "Історія Харкова";
        document.querySelectorAll(".nav-links a")[3].innerHTML = "Екологічні проблеми Харкова";
        document.querySelectorAll(".nav-links a")[4].innerHTML = "Статус та переробка відходів";
        document.querySelectorAll(".nav-links a")[5].innerHTML = "Повітря та його якість";
        document.querySelectorAll(".nav-links a")[6].innerHTML = "Чистота водойм Харкова";
        document.querySelectorAll(".nav-links a")[7].innerHTML = "Стан зелених зон";
        document.querySelectorAll(".nav-links a")[8].innerHTML = "Допомога";
        document.querySelectorAll(".nav-links a")[9].innerHTML = "Поради щодо збереження довкілля";
        document.querySelectorAll(".nav-links a")[10].innerHTML = "Еко-волонтерство";
        
      title.innerText = 'Екологія Харкова';
      heroTitle.innerText = 'Піклуймося про довкілля Харкова разом!';
      heroText.innerText = 'Дізнайтеся про стан екології в місті та як ми можемо допомогти природі.';
      featureEducation.innerText = 'Екологічна просвіта';
      featureEducationDesc.innerText = 'Навчайтеся про екологічні проблеми та способи їх вирішення. Наші матеріали допоможуть вам дізнатися, як правильно доглядати за довкіллям.';
      featureRecycling.innerText = 'Ресурси для сортування';
      featureRecyclingDesc.innerText = 'Отримайте інформацію про пункти прийому вторинної сировини в Харкові та як правильно сортувати відходи для зменшення навантаження на природу.';
      featureInitiatives.innerText = 'Екологічні ініціативи';
      featureInitiativesDesc.innerText = 'Долучайтеся до наших екологічних проектів і заходів, спрямованих на очищення міста, збереження природних ресурсів та покращення якості повітря.';
      projectsTitle.innerText = 'Наші проекти';
      projectCleanAir.innerText = 'Чисте Повітря Харкова';
      projectCleanAirDesc.innerText = 'Слідкуйте за рівнем забруднення повітря у місті. Наші моніторингові дані допоможуть вам дізнатися, наскільки чисте повітря навколо.';
      projectZeroWaste.innerText = 'Місто без сміття';
      projectZeroWasteDesc.innerText = 'Долучайтеся до наших акцій з прибирання парків і вулиць. Дізнайтеся про наші заходи, які допомагають утримувати місто в чистоті.';
      projectTreePlanting.innerText = 'Посадка дерев';
      projectTreePlantingDesc.innerText = 'Ми висаджуємо дерева по всьому місту для покращення екології. Долучайтеся до акцій із посадки дерев і допоможіть створити зелений Харків!';
      homeLink.innerText = 'Головна';
      newsLink.innerText = 'Новини';
      featuresTitle.innerText = 'Що ми пропонуємо?';
      document.getElementById('lang-btn').innerText = 'English';
    }
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