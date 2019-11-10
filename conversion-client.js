const cote =require('cote');
const requester = new cote.Requester({name:'currency conversion requester'})

const request = {type:'convert', from:'eur', to:'usd' , amount:250};
requester.send(request,(res)=>{
    console.log(res);
})

