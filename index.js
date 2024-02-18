// Main News Container
let newsMain = document.querySelector(".container-main");

let imgNewsMain = document.createElement("img");
imgNewsMain.setAttribute("src", "/image/neural-link.jpg");
imgNewsMain.setAttribute("alt", "neural-link-img");

let divInfoNews = document.createElement("div");
divInfoNews.classList.add("info-main");

let aInfoNews = document.createElement("a");
aInfoNews.setAttribute("href", "#");

let aImgInfoNews = document.createElement("a");
aImgInfoNews.setAttribute("href", "#");

let divImgInfoNews = document.createElement("div");
divImgInfoNews.classList.add("main-img");
aImgInfoNews.append(imgNewsMain);
divImgInfoNews.append(aImgInfoNews);

let h1InfoNews = document.createElement("h1");
h1InfoNews.textContent = "Neuralink a realizat primul implant în creierul uman";

let pInfoNews = document.createElement("p");
pInfoNews.textContent =
  "Pe 28 ianuarie, compania de neurotehnologie Neuralink a antreprenorului Elon Musk a realizat pentru prima dată un implant în creierul uman.";

aInfoNews.append(h1InfoNews);

newsMain.append(divImgInfoNews);
divInfoNews.append(h1InfoNews);
divInfoNews.append(pInfoNews);
newsMain.append(divInfoNews);

// Second News Container
let newsSecond = document.querySelector(".container-second");

let divSecondNews = document.createElement("div");
divSecondNews.classList.add("news");

let aImgSecondNews = document.createElement("a");
aImgSecondNews.setAttribute("href", "#");

let imgSecondNews = document.createElement("img");
imgSecondNews.setAttribute("src", "/image/apps-img.jpg");
imgSecondNews.setAttribute("alt", "apps-img");

let divInfoText = document.createElement("div");
divInfoText.classList.add("info-text");

let h2Title = document.createElement("h2");
h2Title.textContent = "Ce funcție obligatorie WhatsApp are de implementat";

aImgSecondNews.append(imgSecondNews);

divSecondNews.append(aImgSecondNews);
divInfoText.append(h2Title);
divInfoText.append(h2Title);
divSecondNews.append(divInfoText);

newsSecond.append(divSecondNews);
// --------------------------------------------------------------------
newsSecond = document.querySelector(".container-second");

divSecondNews = document.createElement("div");
divSecondNews.classList.add("news");

aImgSecondNews = document.createElement("a");
aImgSecondNews.setAttribute("href", "#");

imgSecondNews = document.createElement("img");
imgSecondNews.setAttribute("src", "/image/chat-gpt-memory.jpg");
imgSecondNews.setAttribute("alt", "apps-img");

let divInfoText2 = document.createElement("div");
divInfoText2.classList.add("info-text");

h2Title = document.createElement("h2");
h2Title.textContent = "În curând, ChatGPT ar putea memora date şi despre utilizatorii săi";

aImgSecondNews.append(imgSecondNews);

divSecondNews.append(aImgSecondNews);
divInfoText2.append(h2Title);
divInfoText2.append(h2Title);
divSecondNews.append(divInfoText2);

newsSecond.append(divSecondNews);
//-------------------------------------------------------------------------
newsSecond = document.querySelector(".container-second");

divSecondNews = document.createElement("div");
divSecondNews.classList.add("news");

aImgSecondNews = document.createElement("a");
aImgSecondNews.setAttribute("href", "#");

imgSecondNews = document.createElement("img");
imgSecondNews.setAttribute("src", "/image/chat-gpt2.jpg");
imgSecondNews.setAttribute("alt", "apps-img");

let divInfoText3 = document.createElement("div");
divInfoText3.classList.add("info-text");

h2Title = document.createElement("h2");
h2Title.textContent = "Sondaj: Ce cred moldovenii despre inteligența artificială";

aImgSecondNews.append(imgSecondNews);

divSecondNews.append(aImgSecondNews);
divInfoText3.append(h2Title);
divInfoText3.append(h2Title);
divSecondNews.append(divInfoText3);

newsSecond.append(divSecondNews);


console.log(newsSecond);