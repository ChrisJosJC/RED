import updateTitle  from "./label.js";
import changeButton from './button.js'
import Notify from './notifications.js';
import giveLike from './like.js';

addEventListener("load", ()=>{
    updateTitle();
setInterval(updateTitle, 5000);
changeButton()
Notify()
giveLike()
})

