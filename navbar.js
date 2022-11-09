const navbar = document.getElementById("navbar");

const logo = document.createElement("a");
logo.href = "index.html";
logo.style.textDecoration = "none";
const logoText = document.createElement("h1");
logoText.innerHTML = "T";
logoText.className = "logo";

logo.append(logoText);
navbar.append(logo);

const list = document.createElement("ul");

const sites = ["upcoming_event.html", "about.html", "drinks.html", "digital_drinking_card.html", "join_us.html"];
const siteNames = ["Upcoming events", "About us", "Drinks", "Drinking card", "Join us"];

for (let i = 0; i<sites.length; i++) {
    const listitem = document.createElement("li");
    const link = document.createElement("a");

    link.href = sites[i];
    link.style.textDecoration = "none";

    const names = document.createElement("h3");
    names.innerHTML = siteNames[i];

    link.append(names);
    listitem.append(link);
    list.append(listitem);
}


navbar.append(list);
navbar.append(document.createElement("hr"));
