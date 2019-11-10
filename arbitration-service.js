const responder = new cote.Responder({name:'arbitration API', key:'arbitration'});
const rates= {};

responder.on('update rate',(req,cb)=>{
    rates[req.currencies]=req.rate;
    cb('OK!');
})