(() => {
  const IMG_SIZE = 128;

  const background = document.querySelector(".header-background");
  const images = [];

  const preloadImage = (url) => {
    const img = new Image();

    img.src = url;
    img.alt = "";

    images.push(img);
  };

  const insertImage = (index, targetElement) => {
    const image = images[index].cloneNode(true);
    targetElement.appendChild(image);

    return image;
  };

  const getImagePosition = (current, multiplier) => {
    const top = Math.floor(Math.random() * (172 + 36) - 36) + 1;
    let left = current * IMG_SIZE;

    if (current === 0) left -= 36;
    else left += multiplier * 32;

    return { left, top };
  };

  const fillBackground = (targetElement, images) => {
    background.innerHTML = "";

    const maxImages = Math.floor(window.innerWidth / IMG_SIZE);
    const imagesLength = images.length;

    let current = 0;
    let index = 0;
    let multiplier = 1;

    while (current < maxImages) {
      if (index >= imagesLength) index = 0;

      const image = insertImage(index, targetElement);
      const { left, top } = getImagePosition(current, multiplier);

      image.classList.add("header-background-image");
      image.style.left = `${left}px`;
      image.style.top = `${top}px`;

      current++;
      index++;
      multiplier++;
    }
  };

  for (let i = 1; i <= 5; i++) {
    preloadImage(`./assets/images/svg/flowers/flower-${i}.svg`);
  }

  window.addEventListener("load", () => fillBackground(background, images));
  window.addEventListener("resize", () => fillBackground(background, images));
})();
