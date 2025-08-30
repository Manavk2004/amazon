
import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";


dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())


app.get("/", (request, response) => response.status(200).send("Hello World"))

app.post("/payments/create", async (request, response) => {
    console.log("Inside backend post")
    const total = request.query.total
    console.log('Payment Request Received', total)

    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)


