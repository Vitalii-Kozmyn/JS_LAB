import { speak as SpeakGoodBye } from "./SpeakGoodBye.js";
import { speak as SpeakHello } from "./SpeakHello.js";

var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let name in names) {
  if (names[name].charAt(0).toLowerCase() == "j") {
    SpeakGoodBye(names[name]);
  } else {
    SpeakHello(names[name]);
  }
}
