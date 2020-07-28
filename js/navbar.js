
function enableBurgerMenu()
{
   console.log("hello");
   var tabs = document.getElementsByClassName("tabs")[0];
   var listItems = document.getElementsByClassName("label");
   console.log(listItems)
   if (tabs.classList.contains("tabs-hidden")) {
      tabs.classList.remove("tabs-hidden");
      for (let item of listItems) {
         item.classList.remove("li-hidden");
      }
   }
   else {
      tabs.classList.add("tabs-hidden");
      for (let item of listItems) {
         item.classList.add("li-hidden");
      }
   }

   console.log(tabs)

}