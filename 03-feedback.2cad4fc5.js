const e=document.querySelector(".feedback-form"),t=e.querySelector('[name = "email"]'),o=e.querySelector('[name = "message"]');let a={};!function(){const e=localStorage.getItem("feedback-form-state"),a=JSON.parse(e);a&&Object.entries(a).map((e=>{t.value=a.email,o.value=a.message}));console.log(e),console.log(Object.entries(a))}(),e.addEventListener("input",(function(e){a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a))})),e.addEventListener("submit",(function(e){console.log(e)})),console.log("TEST");
//# sourceMappingURL=03-feedback.2cad4fc5.js.map
