export const handlePayment = async (
  amount: number,
  {
    prefillName = "Customer",
    onSuccess,
  }: {
    prefillName?: string;
    onSuccess?: (response: any) => Promise<void> | void;
  } = {}
) => {
  return new Promise<any>((resolve, reject) => {
    try {
      const options = {
        key: "rzp_live_SuWqtuTcCTJAiD",
        amount,
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
        handler: function (response: any) {
          if (onSuccess) {
            Promise.resolve(onSuccess(response)).then(resolve).catch(reject);
          } else {
            alert("Payment Successful!");
            resolve(response);
          }
        },
        modal: {
          ondismiss: function () {
            console.log("Checkout closed");
            reject(new Error("Checkout closed"));
          },
        },
        prefill: {
          name: prefillName,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
