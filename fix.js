const fixter = () => {

  var follow = document.getElementsByTagName("span")
  if (follow.length){
    for (var i = follow.length - 1; i >= 0; i--) {
       if(follow[i].textContent === 'Follow'){
          follow[i].parentElement.parentElement.style["background-color"] = 'rgb(29, 161, 242)'
      }
    }
  }
}
console.log('starting fixter...')

const observer = new MutationObserver(() => {
  fixter()
});

const observerOptions = {
  childList: true,
  attributes: true,
  subtree: true
}
observer.observe(document, observerOptions);
