function changeLanguage() {
    const lang = document.getElementById("lang-btn").innerText;
  
    // Вибір елементів
    const videoUkr = document.getElementById("video-ukr");
    const videoEng = document.getElementById("video-eng");
  
    if (lang === "English") {
      // Зміна на англійську мову
      document.getElementById("lang-btn").innerText = "Українська";
      document.getElementById("title").innerText = "Ecology of Kharkiv 🌱";
      document.getElementById("eco-title").innerText = "Waste condition and recycling";
      document.getElementById("eco-content").innerText = 
        "The current state of waste management in Kharkiv leaves much to be desired. The problem of garbage accumulation and its recycling is one of the biggest environmental threats to the city. Due to the growth of the population and consumption volumes, the amount of waste is constantly increasing, and the system of its handling requires significant changes. Kharkiv has an active household waste collection system, but most of it ends up in landfills, which causes pollution of soil and water resources. In particular, landfills within the city have long reached critical sizes, and their further use causes justified concern among local residents and environmentalists. Regarding waste recycling, the situation in Kharkiv still remains difficult. There are several waste recycling plants in the cities, but their capacity is not enough to meet all needs. At the same time, the city has an underdeveloped waste sorting system, although recently several initiatives such as installing containers for different types of waste have begun to gain popularity. However, this is not the only problem: low awareness of citizens about the importance of waste recycling and the lack of incentive measures further complicate the situation. Despite this, some programs are being implemented in Kharkiv to improve waste recycling, in particular, new methods of garbage collection and recycling are being developed, as well as information campaigns are being conducted to raise environmental awareness among residents. The prospects for the development of the industry include the introduction of new technologies to reduce waste volumes and improve their recycling, which will not only reduce the burden on the environment, but also create new jobs.";
  
      // Зміна текстів у навігації
      const navLinks = document.querySelectorAll(".nav-links a");
      const englishTexts = [
        "Home",
        "Pages",
        "History of Kharkiv",
        "Ecological problems",
        "Air and its quality",
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
      document.getElementById("eco-title").innerText = "Стан та переробка відходів";
      document.getElementById("eco-content").innerText = 
        "Сучасний стан управління відходами в Харкові залишає бажати кращого. Проблема накопичення сміття і його переробки є однією з найбільших екологічних загроз для міста. У зв'язку зі зростанням населення і обсягів споживання, кількість відходів постійно збільшується, і система їхнього поводження потребує значних змін. У Харкові активно функціонує система збору побутових відходів, однак більшість з них потрапляє на полігони, що спричиняє забруднення ґрунтів та водних ресурсів. Зокрема, сміттєзвалища в межах міста вже давно досягли критичних розмірів, а їхнє подальше використання викликає обґрунтовану стурбованість серед місцевих жителів і екологів. Щодо переробки відходів, ситуація в Харкові все ще залишається складною. В містах є декілька заводів з переробки сміття, але їх потужності не вистачає для того, щоб задовольнити всі потреби. Водночас в місті недостатньо розвинена система сортування відходів, хоча останнім часом кілька ініціатив на кшталт встановлення контейнерів для різних видів сміття почали набувати популярності. Однак це не єдина проблема: низька обізнаність громадян щодо важливості переробки відходів та відсутність заохочувальних заходів ще більше ускладнюють ситуацію. Незважаючи на це, у Харкові реалізуються деякі програми, спрямовані на поліпшення переробки відходів, зокрема, розробляються нові способи збору та переробки сміття, а також проводяться інформаційні кампанії для підвищення рівня екологічної свідомості серед мешканців. Перспективи розвитку галузі включають впровадження новітніх технологій для зниження обсягів відходів та покращення їхнього перероблення, що дозволить не тільки зменшити навантаження на навколишнє середовище, але й створити нові робочі місця.";
      // Зміна текстів у навігації
      const navLinks = document.querySelectorAll(".nav-links a");
      const ukrainianTexts = [
        "Головна",
        "Сторінки",
        "Історія Харкова",
        "Екологічні проблеми Харкова",
        "Повітря та його якість",
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