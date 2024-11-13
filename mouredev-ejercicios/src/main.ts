import "./style.css";
import { setupCounter } from "./counter.ts";
import { Anagrama, FizzBuzz } from "./ejercicios/index.ts"
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
 
    <h1>      Ejercicios de mouredev
</h1>
    
  </div>
`;

setupCounter()

FizzBuzz()
console.log(Anagrama("toro","orto"))
console.log(Anagrama("toro","foso"))
