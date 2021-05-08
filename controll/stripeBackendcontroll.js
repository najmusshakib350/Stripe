//StudentSchema 
const Student =require('./../model/student');

const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeBackend=(req,res,next) =>{
  const paymentIntent = stripe.charges.create({
    amount: 20*100,
    currency: 'usd',
    source:req.body.token,
  }).then((result)=>{
    Student.create(req.body)
    .then((result)=>{
      console.log("Your data is successfully saved");
    })
    .catch((err)=>{
       console.log(err);
    });
  }).catch((err)=>{
     console.log(err);
     console.log(err);
  });
  return next();
}

module.exports=stripeBackend;