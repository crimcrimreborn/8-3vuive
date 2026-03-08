const people = [
"Quyên Chu",
"Minh Ánh",
"Bảo Châu",
"Bảo Chi",
"Diệu Hằng",
"Hoàng Anh",
"Hà Anh",
"Hạnh Nhi",
"Lan Anh",
"Ngọc Anh",
"Ngọc Linh",
"Mai Hương",
"Quỳnh Anh",
"Quỳnh Hương",
"Thục Anh",
"Bảo Thy",
"Hà Linh",
"Khánh Linh",
"Yến Vy",
"Tường Vi",
"Yến ngọc"
];

const container = document.getElementById("qrContainer");

people.forEach(name => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3>${name}</h3>
<a href="messsage.html?name=${encodeURIComponent(name)}">
<img src="img/${name}.png" alt="QR for ${name}">
</a>
`;

container.appendChild(card);

});