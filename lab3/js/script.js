import { speak as SpeakGoodBye } from "./SpeakGoodBye.js";
import { speak as SpeakHello } from "./SpeakHello.js";

(function() {
var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let name in names) {
  if (names[name].charAt(0).toLowerCase() == "j") {
    SpeakGoodBye(names[name]);
  } else {
    SpeakHello(names[name]);
  }
}

//Мій підхід:
console.log("")
console.log("Наступний підхід полягає в тому, що якщо довжина імені більша за 4, то викликається SpeakGoodBye:");

for(let i in names) {
  if(names[i].length > 4) {
    SpeakGoodBye(names[i]);
  } else {
    SpeakHello(names[i]);
  }
}
})();