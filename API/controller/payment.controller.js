import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function Gateway(req, res) {
  try {
    // Product create
    const product = await stripe.products.create({
      name: "Funds",
      description: "Payment for charity",
    });

    // Price create
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: req.body.amount * 100, // amount in paisa
      currency: "inr",
    });

    // Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // ✅ important
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      customer_email: "check@gmail.com",
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error("Error creating payment session:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default Gateway;