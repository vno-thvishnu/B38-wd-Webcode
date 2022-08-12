var topbar = document.createElement("div");
topbar.className = "topbar";
topbar.innerHTML = `<ul>
<li>YOUR ORDERS</li>
<li>CART</li>
</ul>
<ul>
<li>HELP-LINE<li>
<li>ACCOUNT<li>`;
document.body.append(topbar);





var title = document.createElement("div");
title.className = "titlediv";
document.body.append(title);

var logo = document.createElement("div");
logo.className = "logodiv";
logo.innerHTML = `<img  class="pic" src="logo.png" >`;
title.append(logo);





var main = document.createElement("div");
main.className = "maindiv";
document.body.append(main);

var searchbar = document.createElement("input");
searchbar.setAttribute("class", "search");
searchbar.setAttribute("placeholder","Find lipstick, foundation, eyeliner , etc");
main.append(searchbar);

var linebreak = document.createElement("br");
main.append(linebreak);

var searchbutton = document.createElement("button");
searchbutton.setAttribute = ("type", "button");
searchbutton.innerText = "Search";
searchbutton.addEventListener("click", foo);
main.append(searchbutton);





var navbar = document.createElement("div");
navbar.className = "navbar";
navbar.innerHTML = `<ul>
<li>HOME</li>
<li>MAKEUP</li>
<li>HAIRCARE</li>
<li>SKINCARE</li>
<li>SANITIZING CARE</li>
<li>COLLECTION</li>
<li>REWARDS</li>
<li>STAYPRETTY STUDIO</li>
<li>OFFERS</li>
</ul>`;
document.body.append(navbar);

var count=0


async function foo() {
if (count==1){
  alert("Clearing previous product list, Search again");
    
    location.reload();
}


  let giveninput = searchbar.value;
 try {
    var url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${giveninput}`;
    var result = await fetch(url);
    var result1 = await result.json();
 }catch(error){
    
 };

  for (var i = 0; i < result1.length; i++) {
    var display = document.createElement("div");
    display.className = "dis";
    document.body.append(display);

    var box1 = document.createElement("div");
    box1.className = "b1";
    display.append(box1);

    var image = document.createElement("div");
    image.innerHTML = `<img  class="pic" src=${result1[i].api_featured_image} >`;
    box1.append(image);

    var box2 = document.createElement("div");
    box2.className = "b2";
    display.append(box2);

    var tbl = document.createElement("table");
    tbl.className = "table";
    box2.append(tbl);

    var tblrow1 = document.createElement("tr");
    tbl.append(tblrow1);

    var tblheader1 = document.createElement("th");
    tblheader1.innerText = "Name :";
    tblrow1.append(tblheader1);

    var tbldata1 = document.createElement("td");
    tbldata1.innerText = result1[i].name;
    tblrow1.append(tbldata1);

    var tblrow2 = document.createElement("tr");
    tbl.append(tblrow2);

    var tblheader2 = document.createElement("th");
    tblheader2.innerText = "Brand :";
    tblrow2.append(tblheader2);

    var tbldata2 = document.createElement("td");
    tbldata2.innerText = result1[i].brand;
    tblrow2.append(tbldata2);

    var tblrow3 = document.createElement("tr");
    tbl.append(tblrow3);

    var tblheader3 = document.createElement("th");
    tblheader3.innerText = "Price :";
    tblrow3.append(tblheader3);

    var tbldata3 = document.createElement("td");
    tbldata3.innerText = result1[i].price + "" + result1[i].price_sign;
    tblrow3.append(tbldata3);

    var tblrow4 = document.createElement("tr");
    tbl.append(tblrow4);

    var tblheader4 = document.createElement("th");
    tblheader4.innerText = "Prodcut Link :";
    tblrow4.append(tblheader4);

    var tbldata4 = document.createElement("td");
    tbldata4.innerHTML =`<a href=${result1[i].product_link} target="_blank">visit product</a> `;
    tblrow4.append(tbldata4);

    var tblrow5 = document.createElement("tr");
    tbl.append(tblrow5);

    var tblheader5 = document.createElement("th");
    tblheader5.innerText = "Description:";
    tblrow5.append(tblheader5);

    var tbldata5 = document.createElement("td");
    tbldata5.setAttribute = ("class", "data5");
    tbldata5.innerText = result1[i].description;
    tblrow5.append(tbldata5);
  }
count++;
}
