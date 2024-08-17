const counter = document.getElementById("mylabel");
const plus = document.getElementById("incbtn");
const minus = document.getElementById("decbtn");
const reset = document.getElementById("resetbtn");

console.log(
    "plus", plus
);

const handleIncrement = () => {
    let curr = Number(counter.textContent);
    curr++;
    counter.textContent = curr;
};
const handleDecrement = () => {
    let curr =Number(counter.textContent) ;
    curr--;
    counter.textContent = curr;
}
const handleReset = () =>{
    counter.textContent = 0;

}
    

plus.addEventListener("click", handleIncrement);
minus.addEventListener("click", handleDecrement);
reset.addEventListener("click", handleReset);

