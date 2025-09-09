const stripe=require("stripe")(process.env.STRIPE_SECRET)

const stripeController=async(req,res)=>{
    const {purchasse,total_amount,shipping_fee}=req.body;

    const calculateOrderAmount=()=>{
        return total_amount+shipping_fee
    }

    const paymentIntent=await stripe.paymentIntents.create({
        amount:calculateOrderAmount,
        currency:"usd"
    })
    console.log(paymentIntent);

    res.json({clientSeret:paymentIntent.client_secret})
}

module.exports=stripeController