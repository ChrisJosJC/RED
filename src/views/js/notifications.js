const buttons = document.querySelectorAll(".suscribe");
const PUBLIC_KEY =
  "BJBHqnQg-bG79IwR9M2URASAli3cSkFASNHMUoGPi5AZaNvVcN4LaavDXHZLQQhNPyqgnJGbsgFcwuOPX3oL-fQ";

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
