export async function sendProductEmail({
  name,
  email,
  productType,
}: {
  name: string;
  email: string;
  productType: string;
}) {
  console.log(`[Client] Requesting email delivery for ${productType} to ${email}`);
  
  const response = await fetch("/api/send-product-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, productType }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const error = errorData?.error || `HTTP ${response.status}`;
    console.error(`[Client] Email delivery failed: ${error}`);
    throw new Error(error || "Failed to send purchase email.");
  }

  const result = await response.json();
  console.log(`[Client] Email delivery succeeded`);
  return result;
}
