function changeLanguage() {
    const lang = document.getElementById("lang-btn").innerText;
  
    // Вибір елементів
    const videoUkr = document.getElementById("video-ukr");
    const videoEng = document.getElementById("video-eng");
  
    if (lang === "English") {
      // Зміна на англійську мову
      document.getElementById("lang-btn").innerText = "Українська";
      document.getElementById("title").innerText = "Ecology of Kharkiv 🌱";
      document.getElementById("eco-title").innerText = "Cleanliness of Kharkiv reservoirs";
      document.getElementById("map-title").innerText ="Kharkiv air pollution map";
      document.getElementById("eco-content").innerText = 
        "The air quality in Kharkiv is an important factor that affects the health of the city's residents and the ecological state of the region. In recent years, we have observed a decline in air quality due to various factors, including high levels of pollution from transportation, industrial enterprises, and other sources.Air pollution has serious health consequences, including the development of respiratory diseases and a decrease in quality of life. One of the main pollutants is emissions from motor vehicles, especially in the city center.";
      document.getElementById("war-title").innerText = "War and its impact on the air";
      document.getElementById("war-content").innerText = 
        "War has a significant impact on the environment, particularly on air quality. Due to the ongoing military conflict in Kharkiv, the city has experienced major changes in air pollution levels, caused by shelling, explosions, and fires.Explosions and destruction release a large amount of dust, toxic gases, and harmful particles into the air, which negatively affects the health of residents. Many industrial facilities were destroyed or severely damaged, leading to increased pollution.Military operations, which involve the use of large quantities of explosives, result in massive emissions of smoke and toxic gases, such as nitrogen and carbon oxides, which degrade air quality and pose a health risk to the population.";
  
      // Зміна текстів у навігації
      const navLinks = document.querySelectorAll(".nav-links a");
      const englishTexts = [
        "Our telegram",
        "Home",
        "Pages",
        "History of Kharkiv",
        "Ecological problems",
        "Waste Status and Recycling",
        "Cleanliness of Water Bodies in Kharkiv",
        "State of Green Zones",
        "Volunteering",
        "Tips for Environmental Conservation",
        "Eco-volunteering",
      ];
      navLinks.forEach((link, index) => {
        link.innerText = englishTexts[index];
      });
  
    } else {
      // Зміна на українську мову
      document.getElementById("lang-btn").innerText = "English";
      document.getElementById("title").innerText = "Екологія Харкова 🌱";
      document.getElementById("eco-title").innerText = "Чистота водойм Харкова";
      document.getElementById("map-title").innerText = "Карта забруднення повітря в Харкові";
      document.getElementById("eco-content").innerText = 
        "Якість повітря в Харкові — це важливий аспект, що впливає на здоров'я мешканців міста та екологічний станрегіону. В останні роки ми спостерігаємо погіршення якості повітря через різні фактори, зокрема високий рівень забруднення від транспорту, промислових підприємств та інших джерел. Забруднення повітря має серйозні наслідки для здоров'я людей, зокрема сприяє розвитку респіраторних захворювань та погіршує якість життя. Одним з основних забруднювачів є викиди з автомобільного транспорту, особливо в центрі міста.";
      document.getElementById("war-title").innerText = "Війна та її вплив на повітря";
      document.getElementById("war-content").innerText = 
      "Війна має значний вплив на навколишнє середовище, зокрема на якість повітря. У зв’язку з триваючим військовим конфліктом у Харкові місто зазнало серйозних змін у рівнях забруднення повітря, спричинених обстрілами, вибухами та пожежами. Вибухи та руйнування вивільняють велику кількість пилу, токсичних газів і шкідливих часток у повітрі, що негативно впливає на здоров'я жителів, багато промислових об'єктів було зруйновано або серйозно пошкоджено, що призвело до збільшення забруднення. у масових викидах диму та токсичних газів, таких як оксиди азоту та вуглецю, які погіршують якість повітря та становлять ризик для здоров’я населення.";
      // Зміна текстів у навігації
      const navLinks = document.querySelectorAll(".nav-links a");
      const ukrainianTexts = [
        "Наш телеграм",
        "Головна",
        "Сторінки",
        "Історія Харкова",
        "Екологічні проблеми Харкова",
        "Статус та переробка відходів",
        "Чистота водойм Харкова",
        "Стан зелених зон",
        "Допомога",
        "Поради щодо збереження довкілля",
        "Еко-волонтерство",
      ];
      navLinks.forEach((link, index) => {
        link.innerText = ukrainianTexts[index];
      });

  
  
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
