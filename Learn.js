var ans=check(16)
console.log(ans)
function check(a){
    var c=a===12? "true":"false";
    return c
}


 const ask = (question, yes, no) => {
  return question == "yes" ? yes() : no();
};

const result = ask(
  "yes",
  () => "yes",
  () => "nooo"
);

console.log(result);

var con="Success is not always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come. Stay focused, stay disciplined, and keep pushing forward even when things get tough. The journey may be long, but the reward is worth it in the end rithu.";
var len=con.length
console.log("you have writtenh "+len+" characters you have "+271-len+" remaining")
console.log(con.slice(0,271))
var names="riYa"
console.log(names.charAt(0).toUpperCase()+names.slice(1,names.length).toLowerCase())
