const card = document.getElementById("card01");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X do mouse relativa ao elemento
    const y = e.clientY - rect.top;  // posição Y do mouse

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
  });



  const card02 = document.getElementById("card02");

  card02.addEventListener("mousemove", (e) => {
    const rect = card02.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X do mouse relativa ao elemento
    const y = e.clientY - rect.top;  // posição Y do mouse

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card02.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card02.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });



  const card03 = document.getElementById("card03");

  card03.addEventListener("mousemove", (e) => {
    const rect = card03.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X do mouse relativa ao elemento
    const y = e.clientY - rect.top;  // posição Y do mouse

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card03.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
  });



  const card04 = document.getElementById("card04");

  card04.addEventListener("mousemove", (e) => {
    const rect = card04.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X do mouse relativa ao elemento
    const y = e.clientY - rect.top;  // posição Y do mouse

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card04.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card04.addEventListener("mouseleave", () => {
  });

  