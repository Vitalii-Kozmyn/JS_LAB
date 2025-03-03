console.log(
  "+---------------+----------------------------------------------------+"
);
console.log(
  "|  Позначення   |                    Що позначає                     |"
);
console.log(
  "+---------------+----------------------------------------------------+"
);
console.log(
  "|      leg      |                        катет                       |"
);
console.log(
  "+---------------+----------------------------------------------------+"
);
console.log(
  "|  hypotenuse   |                     гіпотенуза                     |"
);
console.log(
  "+---------------+----------------------------------------------------+"
);
console.log(
  "|adjacent angle |              прилеглий до катета кут               |"
);
console.log(
  "+---------------+----------------------------------------------------+"
);
console.log(
  "|opposite angle |            протилежний до катета кут               |"
);
console.log(
  "+---------------+----------------------------------------------------+"
);
console.log(
  "|     angle     | один з двох гострих кутів (коли задана гіпотенуза) |"
);
console.log(
  "+---------------+----------------------------------------------------+"
);

function convertRadiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

function convertDegreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function triangle(arg1, type1, arg2, type2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    console.log("Введені аргументи повинні бути числами.");
    return console.log("failed");
  }

  const EPSILON = 1e-10;
  if (Math.abs(arg1) < EPSILON || Math.abs(arg2) < EPSILON) {
    console.log("Значення занадто малі для точних обчислень.");
    return console.log("failed");
  }

  const MAX_VALUE = 1e10;
  if (Math.abs(arg1) > MAX_VALUE || Math.abs(arg2) > MAX_VALUE) {
    console.log("Значення занадто великі для точних обчислень.");
    return console.log("failed");
  }

  if ((type1 === "leg" || type1 === "hypotenuse") && arg1 <= 0) {
    console.log("Сторони трикутника повинні бути додатними числами.");
    return console.log("failed");
  }
  if ((type2 === "leg" || type2 === "hypotenuse") && arg2 <= 0) {
    console.log("Сторони трикутника повинні бути додатними числами.");
    return console.log("failed");
  }

  let a, b, c, alpha, beta;
  let alphaRad, betaRad;

  if (type1 === "leg" && type2 === "leg") {
    a = arg1;
    b = arg2;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    alphaRad = Math.atan(a / b);
    betaRad = Math.atan(b / a);
    alpha = convertRadiansToDegrees(alphaRad);
    beta = convertRadiansToDegrees(betaRad);
  } else if (
    (type1 === "leg" && type2 === "hypotenuse") ||
    (type1 === "hypotenuse" && type2 === "leg")
  ) {
    let leg, hyp;

    leg = arg2;
    hyp = arg1;

    if (leg >= hyp) {
      console.log("Катет не може бути більшим або рівним гіпотенузі");
      return console.log("failed");
    }

    a = leg;
    c = hyp;
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    alphaRad = Math.asin(a / c);
    betaRad = Math.acos(a / c);
    alpha = convertRadiansToDegrees(alphaRad);
    beta = convertRadiansToDegrees(betaRad);
  } else if (
    (type1 === "leg" && type2 === "adjacent angle") ||
    (type1 === "adjacent angle" && type2 === "leg")
  ) {
    let leg, angle;

    leg = arg2;
    angle = arg1;

    if (angle <= 0 || angle >= 90) {
      console.log("Прилеглий кут повинен бути більше 0 і менше 90 градусів.");
      return console.log("failed");
    }

    alphaRad = convertDegreesToRadians(angle);
    alpha = angle;
    beta = 90 - angle;
    b = leg;
    a = b * Math.tan(alphaRad);
    c = b / Math.cos(alphaRad);
  } else if (
    (type1 === "leg" && type2 === "opposite angle") ||
    (type1 === "opposite angle" && type2 === "leg")
  ) {
    let leg, angle;

    leg = arg2;
    angle = arg1;

    if (angle <= 0 || angle >= 90) {
      console.log("Протилежний кут повинен бути більше 0 і менше 90 градусів.");
      return console.log("failed");
    }

    alphaRad = convertDegreesToRadians(angle);
    alpha = angle;
    beta = 90 - angle;
    b = leg;
    a = b / Math.tan(alphaRad);
    c = b / Math.sin(alphaRad);
  } else if (
    (type1 === "hypotenuse" && type2 === "angle") ||
    (type1 === "angle" && type2 === "hypotenuse")
  ) {
    let hyp, angle;

    hyp = arg2;
    angle = arg1;

    if (angle <= 0 || angle >= 90) {
      console.log("Кут повинен бути більше 0 і менше 90 градусів.");
      return console.log("failed");
    }

    c = hyp;
    alphaRad = convertDegreesToRadians(angle);
    alpha = angle;
    beta = 90 - angle;
    a = c * Math.sin(alphaRad);
    b = c * Math.cos(alphaRad);
  } else {
    console.log("Непідтримувана комбінація типів: " + type1 + " і " + type2);
    console.log(
      "Перечитайте інструкцію і перевірте правильність введення даних."
    );
    return console.log("failed");
  }

  if (alpha >= 90 || beta >= 90) {
    console.log("Кут не може бути тупим (повинен бути < 90°). Введіть коректні дані.");
    return console.log("failed");
  }

  console.log("Результати: ");
  console.log("a = " + a);
  console.log("b = " + b);
  console.log("c = " + c);
  console.log("alpha = " + alpha);
  console.log("beta = " + beta);

  return console.log("success");
}

// Приклади виклику функції
// triangle(3, "leg", 4, "leg");
// triangle(7, "leg", 18, "hypotenuse");
// triangle(5, "hypotenuse", 3, "leg");
// triangle(5, "leg", 30, "adjacent angle");
// triangle(30, "adjacent angle", 5, "leg");
// triangle(60, "leg", 5, "opposite angle");
// triangle(60, "opposite angle", 5, "leg");
// triangle(15, "hypotenuse", 30, "angle");
// triangle(43.13, "angle", -2, "hypotenuse");
