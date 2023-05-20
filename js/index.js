let arr = [
  { image: "./img/1.jpg", tags: "cars", icon: "./icon/21.png" },
  { image: "./img/2.jpg", tags: "nature", icon: "./icon/21.png" },
  { image: "./img/3.png", tags: "anime", icon: "./icon/21.png" },
  { image: "./img/w!(6).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(7).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(8).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(9).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(10).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(11).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(12).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(13).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(14).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(15).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(16).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(17).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(18).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(19).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(20).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(21).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(22).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/w!(23).jpg", tags: "wallpapper", icon: "./icon/21.png" },
  { image: "./img/11.jpg", tags: "Cityscapes", icon: "./icon/21.png" },
  { image: "./img/12.jpg", tags: "Animals", icon: "./icon/21.png" },
  { image: "./img/13.png", tags: "Food and drinks", icon: "./icon/21.png" },
  { image: "./img/14.jpg", tags: "People", icon: "./icon/21.png" },
  { image: "./img/1.jpg", tags: "Technology", icon: "./icon/21.png" },
  { image: "./img/2.jpg", tags: "Work and business", icon: "./icon/21.png" },
  { image: "./img/3.png", tags: "Travel", icon: "./icon/21.png" },
  { image: "./img/4.jpg", tags: "Children and family", icon: "./icon/21.png" },
  { image: "./img/11.jpg", tags: "Sports and fitness", icon: "./icon/21.png" },
  { image: "./img/12.jpg", tags: "Health and medicine", icon: "./icon/21.png" },
  { image: "./img/13.png", tags: "Fashion and style ", icon: "./icon/21.png" },
  { image: "./img/14.jpg", tags: "Art and creativity ", icon: "./icon/21.png" },
  { image: "./img/11.jpg", tags: "Religion and spirituality  ", icon: "./icon/21.png" },
  { image: "./img/12.jpg", tags: "Cars and transportation  ", icon: "./icon/21.png" },
  { image: "./img/13.png", tags: "Culture and traditions  ", icon: "./icon/21.png" },
  { image: "./img/14.jpg", tags: "Architecture", icon: "./icon/21.png" },
  { image: "./img/12.jpg", tags: "Background textures and patterns  ", icon: "./icon/21.png" },
  { image: "./img/13.png", tags: "Vintage images  ", icon: "./icon/21.png" },
  { image: "./img/14.jpg", tags: "Abstract", icon: "./icon/21.png" },
];
let text1 = document.querySelector(".text1");
let ask = document.querySelector(".ask");
let list = document.querySelector(".listoftags");

for (let item3 of arr) {
  let p0 = document.createElement("li");
  p0.innerHTML = item3.tags;
  list.append(p0);
}
ask.onkeyup = () => {
  let text = event.target.value.toLowerCase();
  let find_elements = arr.filter((item) =>
    item.tags.toLowerCase().includes(text)
  );
  reload_search(find_elements);
};
let reload_search = (arr) => {
  text1.innerHTML = "";
  for (let item2 of arr) {
    let div1 = document.createElement("div");
    let p1 = document.createElement("p");
    let img1 = document.createElement("img");
    let icon = document.createElement("img");
    p1.innerHTML = item2.tags;
    img1.setAttribute("width", "250px");
    img1.setAttribute("height", "250px");
    icon.classList.add('icon')
    icon.setAttribute("src", item2.icon);
    img1.setAttribute("src", item2.image);
    img1.setAttribute("id", "myimage");
    div1.classList.add("div1");
   
    div1.append(icon, img1, p1);
    text1.append(div1);
  }
};

let about = document.querySelector(".About");
let Contact = document.querySelector(".Contact");
let Log = document.querySelector(".Log");
let Sign = document.querySelector(".Sign");
let Sign_in = document.querySelector(".Sign_in");
let Log_in = document.querySelector(".Log_in");

let two = document.querySelector('.two')
let block_about_us = document.querySelector(".block_about_us");
let block_contact_us = document.querySelector(".block_contact_us");
let block_log_in = document.querySelector(".block_log_in");
let block_sign_in = document.querySelector(".block_sign_in");

let container = document.querySelector(".container");
let white = document.querySelector(".white");
let teal = document.querySelector(".teal");
let teal_img = document.querySelector(".img3");
let white_img = document.querySelector(".img2");

let input = document.querySelectorAll("input");

white.onclick = () => {
  container.classList.toggle("white");
  container.classList.remove("red");
  container.classList.remove("teal");
  white_img.classList.toggle("act_img");
  teal_img.classList.remove("act_img");
  for (let item of input) {
    item.classList.toggle("white");
    item.classList.remove("red");
    item.classList.remove("teal");
  }
};
teal.onclick = () => {
  container.classList.toggle("teal");
  container.classList.remove("white");
  white_img.classList.remove("act_img");
  teal_img.classList.toggle("act_img");
  for (let item of input) {
    item.classList.toggle("teal");
    item.classList.remove("red");
    item.classList.remove("white");
  }
};

about.onclick = () => {
  block_about_us.classList.toggle("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Contact.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.toggle("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Log.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.toggle("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Log_in.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.toggle("block_log_in_act");
  block_sign_in.classList.remove("block_sign_in_act");
};
Sign.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.toggle("block_sign_in_act");
};
Sign_in.onclick = () => {
  block_about_us.classList.remove("block_about_us_act");
  block_contact_us.classList.remove("block_contact_us_act");
  block_log_in.classList.remove("block_log_in_act");
  block_sign_in.classList.toggle("block_sign_in_act");
};
