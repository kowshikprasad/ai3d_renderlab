export async function sendProductEmail({
  name,
  email,
  productType,
}: {
  name: string;
  email: string;
  productType: string;
}) {
  const response = await fetch("/api/send-product-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, productType }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.error || "Failed to send purchase email.");
  }

  return response.json();
}
