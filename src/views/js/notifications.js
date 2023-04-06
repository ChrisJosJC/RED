import createUser from "./createUser.js";

const section = document.querySelector("section");
const PUBLIC_KEY =
  "BEXQ3pOt1MMDeNr5dVHXR-DOZ959dvIIMFQ9yNlW28LhdCyqJjR-1duwj-db3pyvk_wa7F84DjhLW4oAd28mGw4";

async function Notify() {
  console.log("New Service Worker");
  
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/",
  });

  section.addEventListener("click", async (e) => {
    if (e.target.className == "suscribe") {
      console.log(e.target.className)
      const { program } = e.target.dataset;

      navigator.serviceWorker.onmessage = ({ data }) => {
        console.log("Mensaje recibido desde Worker:", data.msg);
        localStorage.setItem("programs", data.msg);
      };

      const subcription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_KEY,
      });

      const clientId = createUser();

      await fetch(`/subscribe`, {
        method: "POST",
        mode: "same-origin",
        body: JSON.stringify({ subcription, program, clientId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigator.serviceWorker.controller.postMessage(clientId);
    }
  });
}

export default Notify;
