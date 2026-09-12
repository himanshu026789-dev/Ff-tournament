export default async function handler(req,res){
 if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
 try{
  const {tournament,uid,ign,contact,match}=req.body||{};
  if(!tournament||!uid||!ign) return res.status(400).json({error:'Tournament, UID and IGN are required.'});
  const text =
`🔥 NEW TOURNAMENT JOIN 🔥\n\n`+
`🏆 Tournament: ${tournament}\n`+
`👤 IGN: ${ign}\n`+
`🎮 FF UID: ${uid}\n`+
`📱 Contact: ${contact||'Not provided'}\n`+
`🎯 Match/Slot: ${match||'Not selected'}\n\n`+
`📋 Status: NEW REGISTRATION`;
  const tg=await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({chat_id:process.env.TELEGRAM_CHAT_ID,text})
  });
  if(!tg.ok) return res.status(500).json({error:'Telegram notification failed. Check bot settings.'});
  return res.status(200).json({ok:true});
 }catch(err){return res.status(500).json({error:'Server error'});}
}