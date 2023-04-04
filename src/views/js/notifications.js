const buttons = document.querySelectorAll(".suscribe");
const PUBLIC_KEY =
  "BEXQ3pOt1MMDeNr5dVHXR-DOZ959dvIIMFQ9yNlW28LhdCyqJjR-1duwj-db3pyvk_wa7F84DjhLW4oAd28mGw4";

function Notify() {
  console.log("New Service Worker");
  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const { program } = btn.dataset;
      const register = await navigator.serviceWorker.register("/worker.js", {
        scope: "/",
      });
      console.log(program);

      const subcription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_KEY,
      });

      await fetch(`/subscribe`, {
        method: "POST",
        mode: "same-origin",
        body: JSON.stringify({subcription, program}),
        headers: {
          "Content-Type": "application/json",
        },
      })
    });
  });
}

export default Notify;
