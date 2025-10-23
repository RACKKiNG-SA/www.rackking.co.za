
// ===== Rack King quick config =====
const RK = {
  phone: "+27700000000", // TODO: replace with your real number
  whatsapp: "27700000000", // TODO: replace digits only, no '+'
  wa_greeting: "Hi Rack King! I need help with racking."
};

function waLink(extra=""){
  const msg = encodeURIComponent(RK.wa_greeting + (extra ? " " + extra : ""));
  return `https://wa.me/${RK.whatsapp}?text=${msg}`;
}

// Hook up buttons/links after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  const waBtn = document.getElementById("wa-btn");
  if(waBtn){ waBtn.href = waLink(); }

  const waInspect = document.getElementById("wa-inspect");
  if(waInspect){ waInspect.href = waLink("I'd like to book a safety inspection."); waInspect.target = "_blank"; waInspect.rel="noopener"; }

  const callInspect = document.getElementById("call-inspect");
  if(callInspect){ callInspect.href = `tel:${RK.phone}`; }

  const phoneLink = document.getElementById("phone-link");
  if(phoneLink){ phoneLink.href = `tel:${RK.phone}`; phoneLink.textContent = RK.phone.replace("+27", "+27 "); }

  const waLinkEl = document.getElementById("wa-link");
  if(waLinkEl){ waLinkEl.href = waLink(); waLinkEl.target = "_blank"; waLinkEl.rel = "noopener"; }

  // Quote form → WhatsApp
  const qf = document.getElementById("quoteForm");
  if(qf){
    qf.addEventListener("submit", (e)=>{
      e.preventDefault();
      const data = new FormData(qf);
      const area = data.get("area") || "";
      const pallets = data.get("pallets") || "";
      const msg = data.get("msg") || "";
      const extra = `Project details:%0A• Area: ${area} m²%0A• Pallets: ${pallets}%0A• Notes: ${msg}`;
      window.open(waLink(extra), "_blank");
    });
  }

  // Contact form → WhatsApp
  const cf = document.getElementById("contactForm");
  if(cf){
    cf.addEventListener("submit", (e)=>{
      e.preventDefault();
      const data = new FormData(cf);
      const name = data.get("name") || "";
      const contact = data.get("contact") || "";
      const message = data.get("message") || "";
      const extra = `From: ${name}%0AContact: ${contact}%0A${message}`;
      window.open(waLink(extra), "_blank");
    });
  }
});
