function changeLanguage() {
    const lang = document.getElementById("lang-btn").innerText;
  
    // Toggle the language
    if (lang === "English") {
      // Change to English
      document.getElementById("lang-btn").innerText = "Українська";
      document.getElementById("title").innerText = "Ecology of Kharkiv";
      document.getElementById("eco-title").innerText = "Water resources of Kharkiv";
      document.getElementById("eco-content").innerText = 
        "Water pollution in Kharkiv is a serious problem that requires a comprehensive approach to its solution. Studies show that the Seversky Donets, one of the main rivers in the region, suffers from pollution from both natural and anthropogenic factors. Water pollution in rivers such as the Oskil and Uda affects the ecosystem and poses a threat to the quality of drinking water in the city and surrounding areas. The main causes of pollution include industrial waste, agricultural runoff, and inadequate wastewater treatment.";
      document.getElementById("war-title").innerText = "The war and its impact on Kharkiv's reservoirs";
      document.getElementById("war-content").innerText = 
        "The ongoing war in eastern Ukraine is having a serious impact not only on human lives but also on the environment. Kharkiv, as one of the largest cities in the region, has undergone significant changes due to hostilities, which have caused damage not only to infrastructure but also to water resources. At the same time, the environmental consequences of the war pose a real threat to the health of the population and the sustainable development of the city.";
      
      // Change navigation links to English
      const navLinks = document.querySelectorAll(".nav-links a");
      const englishTexts = [
        "Home",
        "Pages",
        "History of Kharkiv",
        "Environmental problems of Kharkiv",
        "Waste Status and Recycling",
        "Air and Its Quality",
        "State of Green Zones",
        "Volunteering",
        "Tips for Environmental Conservation",
        "Eco-volunteering",
      ];
      navLinks.forEach((link, index) => {
        link.innerText = englishTexts[index];
      });
  
    
  
    } else {
      // Change back to Ukrainian
      document.getElementById("lang-btn").innerText = "English";
      document.getElementById("title").innerText = "Екологія Харкова";
      document.getElementById("eco-title").innerText = "Водні ресурси Харкова";
      document.getElementById("eco-content").innerText = 
        "Забруднення водних ресурсів у Харкові є серйозною проблемою, яка потребує комплексного підходу до вирішення. Дослідження показують, що Сіверський Донець, одна з головних річок регіону, страждає від забруднення як від природних, так і антропогенних факторів. Забруднення води у річках, таких як Оскіл і Уда, впливає на екосистему і становить загрозу для якості питної води в місті та навколишніх районах. Серед основних причин забруднення—промислові відходи, сільськогосподарські стоки та недостатня очистка стічних вод.";
      document.getElementById("war-title").innerText = "Війна та її вплив на водойми Xаркова";
      document.getElementById("war-content").innerText = 
        "Війна, що триває на сході України, має серйозний вплив не тільки на людські життя, але й на навколишнє середовище. Харків, як одне з найбільших міст регіону, зазнав значних змін через бойові дії, що спричинили шкоду не тільки інфраструктурі, але й водним ресурсам. Водночас, екологічні наслідки війни становлять реальну загрозу для здоров’я населення та сталого розвитку міста.";
      
      // Change navigation links to Ukrainian
      const navLinks = document.querySelectorAll(".nav-links a");
      const ukrainianTexts = [
        "Головна",
        "Сторінки",
        "Історія Харкова",
        "Екологічні проблеми Харкова",
        "Статус та переробка відходів",
        "Повітря та його якість",
        "Стан зелених зон",
        "Допомога",
        "Поради щодо збереження довкілля",
        "Еко-волонтерство",
      ];
      navLinks.forEach((link, index) => {
        link.innerText = ukrainianTexts[index];
      });
  
      // Change the video to Ukrainian
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