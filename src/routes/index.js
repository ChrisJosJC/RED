const { Router } = require("express");
const router = Router();
const webpush = require("../webpush");
let pushSubscription;

const allPrograms = {
  "bk": {
    title: "Somos Balsamo Kidz",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
    hour: "10:00:00",
    day: 6,
  },
  "bv": {
    title: "Balsamo de vida",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
    hour: "10:00:00",
    day: 6,
  },
  "mujeres-de-fe": {
    title: "Mujeres de fé",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
    hour: "15:00:00",
    day: 0,
  },
  "desayuno-espiritual": {
    title: "Desayuno espiritual",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
    hour: "10:00:00",
    day: 6,
  },
  "test": {
    title: "Testing",
    body: "Tu programa esta a punto de iniciar",
    image: "/assets/flyers/bk.jpg",
    hour: "23:32:00",
    day: 6,
  },
};

let users = {};
let programsUser = [];

router.post("/subscribe/", (req, res) => {
  const {program, clientId } = req.body;
  programsUser.push(allPrograms[program])
  programsUser = programsUser.length == 0
    ? [...programsUser]
    : Array.from(new Set([...programsUser]))

  users[clientId] = {
    programsUser,
    last_moodif: new Date().toLocaleDateString(),
  }

  pushSubscription = req.body.subcription;
  
  const payload = JSON.stringify([...programsUser])
  webpush.sendNotification(pushSubscription, payload);
  
  console.log([...programsUser]);
  res.status(200).json([...programsUser]);
});

router.get("/getDataUsers", (req, res)=>{
  res.status(200).json(users);
})

module.exports = router;
