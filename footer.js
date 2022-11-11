const footer = document.getElementById("footer");

const line = document.createElement("hr");
footer.append(line);

const bothBlocks = document.createElement("div");
bothBlocks.className = "bothBlocks";

const contactInfo = document.createElement("div");
contactInfo.className = "contactInfo";

const touch = document.createElement("h2");
touch.innerText = "Get in touch";
const adress = document.createElement("p");
adress.innerText = "Skiboli: Sem Sælandsvei 3, 7034 Trondheim";
const map = document.createElement("iframe");
map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.413102526227!2d10.403292016167246!3d63.41709198380805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d31bfd7850595%3A0x74f38a076cadbb4c!2sSkiboli%2C%207034%20Trondheim!5e0!3m2!1sen!2sno!4v1667899808332!5m2!1sen!2sno";
map.width = "400";
map.height = "300";
map.style.border = "0";
map.allowFullscreen = "";
map.referrerPolicy = "no-referrer-when-downgrade";

contactInfo.append(touch);
contactInfo.append(adress);
contactInfo.append(map);


const socialLinks = document.createElement("div");
socialLinks.className = "socialLinks";

const follow = document.createElement("h2");
follow.innerText = "Follow us on social media";

const imagesContainer = document.createElement("div");
imagesContainer.className = "imagesContainer";

const firstImageLink = document.createElement("a");
firstImageLink.href = "https://www.facebook.com/profile.php?id=100075798674262";
const firstImage = document.createElement("img");
firstImage.src = "img/facebook.png";
firstImage.alt = "facebook icon";
firstImage.id = "socialImg";
firstImageLink.append(firstImage);

const secondImageLink = document.createElement("a");
secondImageLink.href = "https://www.instagram.com/leonardo.linjeforening/";
const secondImage = document.createElement("img");
secondImage.src = "img/instagram.png";
secondImage.alt = "instagram icon";
secondImage.id = "socialImg";
secondImageLink.append(secondImage);

imagesContainer.append(firstImageLink);
imagesContainer.append(secondImageLink);

socialLinks.append(follow);
socialLinks.append(imagesContainer);

bothBlocks.append(contactInfo);
bothBlocks.append(socialLinks);

footer.append(bothBlocks);