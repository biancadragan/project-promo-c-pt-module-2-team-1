console.log(">> Ready :)");console.log("Ready");const r=new FileReader,S=document.querySelector(".js__profile-upload-btn"),f=document.querySelector(".js__profile-image"),m=document.querySelector(".js__profile-preview");function L(){const t=localStorage.getItem("profileImage");t&&(f.style.backgroundImage=`url(${t})`,m.style.backgroundImage=`url(${t})`)}function w(t){const l=t.currentTarget.files[0];r.addEventListener("load",C),r.readAsDataURL(l)}function C(){const t=r.result;f.style.backgroundImage=`url(${r.result})`,m.style.backgroundImage=`url(${r.result})`,localStorage.setItem("profileImage",t)}S.addEventListener("change",w);L();const k=document.querySelector(".js_preview-btn"),q=t=>{localStorage.removeItem("profileImage")};k.addEventListener("click",q);const s={theme1:{nameColor:"#264653",jobColor:"#2a9d8f",iconsColor:"#e9c46a"},theme2:{nameColor:"#f4a261",jobColor:"#e76f51",iconsColor:"#d62828"},theme3:{nameColor:"#8ecae6",jobColor:"#219ebc",iconsColor:"#023047"}},E=document.querySelector(".js_preview_name"),P=document.querySelector(".js_preview_job"),$=document.querySelectorAll(".js_previewIcon"),a=t=>{E.style.color=t.nameColor,P.style.color=t.jobColor,$.forEach(l=>{l.style.color=t.iconsColor})};document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("data");t&&(e=JSON.parse(t)),a(s[e.field1]),o.elements.field2.value=e.field2,o.elements.field3.value=e.field3,o.elements.field4.value=e.field4,o.elements.field5.value=e.field5,o.elements.field6.value=e.field6,o.elements.field7.value=e.field7,i()});document.getElementById("palette1").addEventListener("change",()=>{a(s.theme1)});document.getElementById("palette2").addEventListener("change",()=>{a(s.theme2)});document.getElementById("palette3").addEventListener("change",()=>{a(s.theme3)});let e={field1:"theme1",field2:"",field3:"",photo:"",field4:"",field5:"",field6:"",field7:""};const o=document.querySelector(".js_form"),A=document.querySelector(".js_preview_name"),T=document.querySelector(".js_preview_job"),g=document.querySelector(".js_preview_email"),_=document.querySelector(".js_preview_phone"),h=document.querySelector(".js_preview_linkedin"),v=document.querySelector(".js_preview_github"),D=t=>{const l=t.target.name;e[l]=t.target.value,localStorage.setItem("data",JSON.stringify(e)),i()};function i(){A.innerHTML=e.field2===""?"Nombre Apellido":e.field2,T.innerHTML=e.field3===""?"Posición":e.field3,_.setAttribute("href",e.field5?`tel:${e.field5}`:""),g.setAttribute("href",e.field4?`mailto:${e.field4}`:""),_.style.display=e.field5?"inline-block":"none",g.style.display=e.field4?"inline-block":"none",h.setAttribute("href",e.field6?e.field6:""),h.style.display=e.field6?"inline-block":"none",v.setAttribute("href",e.field7?e.field7:""),v.style.display=e.field7?"inline-block":"none"}o.addEventListener("input",D);i();const M=document.querySelector(".js_createBtn"),u=document.querySelector(".js__card_result");function R(t){t.preventDefault(),console.log(e),e.field1=parseInt(e.field1.replace("theme","")),fetch("https://dev.adalab.es/api/info/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(l=>l.json()).then(l=>{if(console.log(l),l.success===!0){const n=`https://dev.adalab.es/api/info/${l.infoID}`,j=`https://bsky.app/intent/compose?text=${encodeURIComponent("¡Mira mi tarjeta de visita diseñada en ProCard Creator!")}&url=${encodeURIComponent(n)}`;u.innerHTML=`
        <h2 class="share_result__title">¡Aquí tienes el enlace a tu ProCard!</h2>
        <p>Que la disfrutes &#x1F604</p>
        <a class="share_result__link" href="${n}">${n}</a>
        <a class="share_result__shareButton" href="${j}" target="_blank">Compartir en Bluesky</a>
        `}else{const c=l.error.replace("Mandatory fields","Campos obligatorios a rellenar").replace("field2","nombre").replace("field3","puesto").replace("field4","email").replace("field5","teléfono").replace("field6","LinkedIn").replace("field7","Github").replace("photo","foto");u.innerHTML=`
        <h2 class="share_result__title">¡Oh, vaya! &#128517</h2>
        <p class="share_result__subtitle">No se ha podido completar el proceso.</p>
        <p class="share_result__subtitle">Vuelve a intentarlo, por favor &#128519</p>
        <b class="share_result__mandatory">${c}</b>
        `}}).catch(l=>{console.error("Error al enviar los datos:",l)})}M.addEventListener("click",R);const B=document.querySelector(".js_preview-btn");let F=t=>{console.log("funciono"),e={field1:"theme1",field2:"",field3:"",photo:"",field4:"",field5:"",field6:"",field7:""},f.style.backgroundImage="url('../images/Profile-pic.png')",m.style.backgroundImage="url('../images/Profile-pic.png')",o.reset(),i(),a(s.theme1),u.innerHTML="",localStorage.removeItem("data")};B.addEventListener("click",F);const y=document.querySelector(".js_designIcon"),b=document.querySelector(".js_fillIcon"),I=document.querySelector(".js_shareIcon"),p=(t,l)=>{const n=document.querySelector(l).querySelectorAll(".js_collapsibleContent");n.forEach(d=>{d&&d.classList.toggle("is-open")}),n[0].classList.contains("is-open")?(t.classList.remove("fa-caret-down"),t.classList.add("fa-caret-up")):(t.classList.remove("fa-caret-up"),t.classList.add("fa-caret-down"))};y.addEventListener("click",()=>p(y,".js_designFieldset"));b.addEventListener("click",()=>p(b,".js_fillFieldset"));I.addEventListener("click",()=>p(I,".js_shareFieldset"));
//# sourceMappingURL=main.js.map
