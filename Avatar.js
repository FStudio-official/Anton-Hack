//name: der name des produkts (Bsp: headgear.crown = Krone)
getAvatar = function(name, price) {
    return typeof log !== 'undefined'
        ? ( 
            log.log({ event: "unlockAvatarOption", id: name, price: price }),
            log.log({ event: "adjustCoins", value: price*-1, src: "QRSH" }),
            log.log({ event: "sessionEnd", type: "suspend", src: "QRSH" })
          )
        : void 8;
};
//Um den Namen herauszufinden
const oldLog = log.log;
window.foundEvents = new Set();
log.log = function(data){
    if (data && data.avatarOption) {
        foundEvents.add(data.avatarOption);
        console.log("Event gefunden:", data.event);
    }
    return oldLog.apply(this, arguments);
};
