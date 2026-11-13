export function TestImages() {


    const bodyEl = document.querySelector("body");

    const div = document.createElement("div");
    const div2 = document.createElement("div");

    const img = document.createElement("img");
    img.src = "https://assets.tcgdex.net/en/base/base1/4/high.webp";
    div.appendChild(img);
    bodyEl?.appendChild(div);


    const img2 = document.createElement("img");
    img2.src = "https://assets.tcgdex.net/en/neo/neo1/9/high.webp";
    div2.appendChild(img2);
    bodyEl?.appendChild(div2);

}

