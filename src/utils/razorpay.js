export const handlePayment = async (amount) => {
  try {
    const options = {
      key: "rzp_test_SszNI0FL4wMfMA",

      amount: amount,

      currency: "INR",

      name: "AI 3D Renderlab",

      description: "Purchase",
      
      upi: {
  flow: "collect",
},

      timeout: 300,

retry: {
  enabled: true,
},
      method: {
  upi: true,
  card: true,
  netbanking: true,
  wallet: true,
},



      handler: function (response) {
        alert("Payment Successful!");

        console.log(response);
      },

      modal: {
        ondismiss: function () {
          console.log("Checkout closed");
        },
      },

      retry: {
        enabled: true,
      },

      prefill: {
        name: "Customer",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  } catch (error) {
    console.error(error);

    alert("Payment Failed");
  }
};