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

function triangle(arg1, type1, arg2, type2) {
  if (arg1 <= 0 || arg2 <= 0) {
    console.log("Нуль або від'ємне число");
    return console.log("failed");
  }

  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    console.log("Введені аргументи повинні бути числами.");
    return console.log("failed");
  }

  let a;
  let b;
  let c;
  let alpha;
  let beta;

  if (type1 == "leg" && type2 == "leg") {
    c = Math.sqrt(Math.pow(arg1, 2) + Math.pow(arg2, 2));
    alpha = Math.atan(arg1 / arg2);
    beta = Math.atan(arg2 / arg1);

    console.log("Результати: ");
    console.log("a = " + arg1);
    console.log("b = " + arg2);
    console.log("c = " + c);
    console.log("alpha = " + convertRadiansToDegrees(alpha));
    console.log("beta = " + convertRadiansToDegrees(beta));
  } else if (
    (type1 == "leg" && type2 == "hypotenuse") ||
    (type1 == "hypotenuse" && type2 == "leg")
  ) {
    if (arg1 >= arg2) {
      console.log("Катет не може бути більшим за гіпотенузу");
      return console.log("failed");
    }

    b = Math.sqrt(Math.pow(arg2, 2) - Math.pow(arg1, 2));
    alpha = Math.atan(arg1 / b);
    beta = Math.atan(b / arg1);

    console.log("Результати: ");
    console.log("a = " + arg1);
    console.log("b = " + b);
    console.log("c = " + arg2);
    console.log("alpha = " + convertRadiansToDegrees(alpha));
    console.log("beta = " + convertRadiansToDegrees(beta));
  } else if (
    (type1 == "leg" && type2 == "adjacent angle") ||
    (type1 == "adjacent angle" && type2 == "leg")
  ) {
    if (arg1 >= 90 || arg1 <= 0) {
      console.log(
        "Гострий кут повинен бути меншим за 90 градусів і більшим за 0."
      );
      return console.log("failed");
    }

    let alphaRad = arg1 * (Math.PI / 180);
    c = arg2 / Math.cos(alphaRad);
    a = arg2 * Math.tan(alphaRad);
    beta = 90 - arg1;

    console.log("Результати: ");
    console.log("a = " + a);
    console.log("b = " + arg2);
    console.log("c = " + c);
    console.log("alpha = " + arg1);
    console.log("beta = " + beta);
  } else if (
    (type1 == "leg" && type2 == "opposite angle") ||
    (type1 == "opposite angle" && type2 == "leg")
  ) {
    if (arg1 >= 90 || arg1 <= 0) {
      console.log(
        "Гострий кут повинен бути меншим за 90 градусів і більшим за 0."
      );
      return console.log("failed");
    }

    let betaRad = arg1 * (Math.PI / 180);
    alpha = 90 - arg1;
    c = arg2 / Math.sin(betaRad);
    a = arg2 * Math.tan(betaRad);

    console.log("Результати: ");
    console.log("a = " + a);
    console.log("b = " + arg2);
    console.log("c = " + c);
    console.log("alpha = " + alpha);
    console.log("beta = " + arg1);
  } else if (
    (type1 == "hypotenuse" && type2 == "angle") ||
    (type1 == "angle" && type2 == "hypotenuse")
  ) {
    if (arg1 >= 90 || arg1 <= 0) {
      console.log(
        "Гострий кут повинен бути меншим за 90 градусів і більшим за 0."
      );
      return console.log("failed");
    }

    let alphaRad = arg1 * (Math.PI / 180);
    beta = 90 - arg1;

    let a = arg2 * Math.sin(alphaRad);
    let b = arg2 * Math.cos(alphaRad);

    console.log("Результати: ");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + arg2);
    console.log("alpha = " + convertRadiansToDegrees(alphaRad));
    console.log("beta = " + beta);
  } else {
    console.log("Щось пішло не так, перечитайте ще раз інструкцію.");
    return console.log("failed");
  }
  return console.log("success");
}

// triangle(3, "leg", 4, "leg"); // Всі сторони та кути повинні бути розраховані правильно
// triangle(4, "hypotenuse", 8, "leg"); // Розрахунок другого катета та кутів
// triangle(5, "leg", 30, "adjacent angle"); // Обчислення через кут та катет
// triangle(60, "leg", 5, "opposite angle"); // Перевірка випадку з протилежним кутом
// triangle(10, "angle", 15, "hypotenuse"); // Розрахунок катетів від гіпотенузи та кута
// triangle(100, "angle", 5, "hypotenuse"); // Неправильний випадок: гострий кут > 90°
// triangle(5, "leg", -10, "leg"); // Некоректний ввід: від'ємне число
// triangle("five", "leg", 10, "leg"); // Некоректний ввід: не число
// triangle(3, "leg", 3, "leg"); // Випадок рівнобедреного прямокутного трикутника
// triangle(10, "hypotenus", 4, "leg"); // Помилка в написанні "hypotenuse"
