const app = require('express')();
const {v1: uuid} = require('uuid');

function getUser(user){
  if (user == 'attacker'){
    return {"balance":10, "user":"attacker"}
  }
  if (user == 'victim'){
    return {"balance":50, "user": "victim"}
  }
}
function storeTransfer(transferId, from, to, amount){
  console.log("transferid:" +transferId +" from:" + from.user +" to:"+to.user+" amount:"+amount )
}

function sendConfirmationmail(from, transferId){
  console.log("confrimation mail token: " + transferId)
}
app.get('/transfer/:from/:to/:amount', (req, res) =>{
  const transferId = uuid();
  const from = getUser(req.params.from)
  const to = getUser(req.params.to);
  const amount = parseInt(req.params.amount);
  if (amount >= 0 && from.balance >= amount){
    storeTransfer(transferId, from, to, amount);
    sendConfirmationmail(from, transferId);
  }
  res.send(transferId);
});

function getTransfer(transferId){
  if (transferId == "29bc99e0-5146-11ed-b899-696ecf770022"){ // you have to change this tranferId with vicitm transferId manually
    return true
  } else {
    return false
  }
}

app.get('/confirmTransfer/:id', (req,res)=>{
  const transfer = getTransfer(req.params.id);
  if (transfer){
    res.send("Amount transfered from your account!")
  } else {
    res.status(403).send('Invalid transferId')
  }
})

app.listen(80, ()=>{console.log('listening on 80!:')})
