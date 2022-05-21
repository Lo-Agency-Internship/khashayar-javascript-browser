const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function hexGenerator() {
  let hexNum = "#";
  let randIdx = 0;
  while (hexNum.length < 7) {
    randIdx = getRandomInt(0, 16);
    hexNum += hex[randIdx];
  }
  return hexNum;
}

const root = document.getElementById("root");
root.style.backgroundColor = hexGenerator();

/*---------------------------------------------------------------filter------------------------------------------------------------------------*/

const searchBarClick = () => {
  const input = document.getElementById("searchbar-input");
  const allItems = document.querySelectorAll(".item");
  allItems.forEach((item) => {
    item.classList.remove("hidden");
    if (!item.innerHTML.toLowerCase().includes(input.value)) {
      item.classList.add("hidden");
    }
  });
};

const filterBtnClick = (cls) => {
  const allItems = document.querySelectorAll(`.item`);
  if (cls === "all") {
    allItems.forEach((item) => item.classList.remove("hidden"));
    return;
  }
  allItems.forEach((item) => {
    item.classList.add("hidden");
  });
  const selectedItems = document.querySelectorAll(`.${cls}`);
  selectedItems.forEach((item) => {
    item.classList.remove("hidden");
  });
};

/*---------------------------------------------------------------modal------------------------------------------------------------------------*/

const modal = (idx) => {
  const modal = document.getElementById("myModal");
  const close = document.getElementsByClassName("close")[0];
  const allItems = document.querySelectorAll(".item");
  const section = document.getElementById("imgSection");
  const left = document.getElementById("leftP");
  const right = document.getElementById("rightP");
  const urls = [];
  section.innerHTML = "";

  modal.style.display = "block";
  allItems.forEach((item) => {
    urls.push(item.firstElementChild.attributes.getNamedItem("src").value);
  });
  section.innerHTML += `<img src="${urls[idx]}" alt="image" />`;
  left.onclick = () => {
    idx--;
    if (idx === -1) {
      idx = 5;
    }
    section.innerHTML = "";
    section.innerHTML = `<img src="${urls[idx]}" alt="image" />`;
  };
  right.onclick = () => {
    idx++;
    if (idx === 6) {
      idx = 0;
    }
    section.innerHTML = "";
    section.innerHTML = `<img src="${urls[idx]}" alt="image" />`;
  };
  close.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};
