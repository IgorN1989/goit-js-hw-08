!function(){var e=document.querySelector(".feedback-form"),t=e.querySelector('[name = "email"]'),o=e.querySelector('[name = "message"]'),n="feedback-form-state",a={};!function(){var e=localStorage.getItem(n),a=JSON.parse(e);a&&Object.entries(a).map((function(e){t.value=a.email,o.value=a.message}));console.log(e),console.log(Object.entries(a))}(),e.addEventListener("input",(function(e){a[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(a))})),e.addEventListener("submit",(function(e){console.log(e)})),console.log("TEST")}();
//# sourceMappingURL=03-feedback.110c9d1c.js.map