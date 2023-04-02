const { Router } = require("express");
const router = Router();
let pushSubscription;
const webpush = require("../webpush");

const allPrograms = {
  "bk": {
    title: "Somos Balsamo Kidz",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
    hour: "10:00:00",
    day: 6,
  },
  "10:00:00-6": {
    title: "Balsamo de vida",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
  },
  "mujeres-de-fe": {
    title: "Mujeres de fé",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
    hour: "15:00:00",
    day: 0,
  },
  "17:39:00-0": {
    title: "Desayuno espiritual",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
  },
};

let programsUser = new Set();
router.post("/subscribe/", (req, res) => {
  const program = req.body.program;
  console.log(program);
  programsUser.add(allPrograms[program]);

  pushSubscription = req.body.subcription;

  const payload = JSON.stringify([...programsUser])
  webpush.sendNotification(pushSubscription, payload);

  res.status(200).json(programsUser);
});

module.exports = router;
