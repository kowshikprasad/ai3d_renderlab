import { Resend } from "resend";

const productMap = {
  "ai-exterior-rendering": {
    title: "AI Exterior Rendering",
    pdfPath: "/pdfs/ai-exterior-rendering.pdf",
  },
  "ai-interior-rendering": {
    title: "AI Interior Rendering",
    pdfPath: "/pdfs/ai-interior-rendering.pdf",
  },
  "ai-design-presentation": {
    title: "AI Design Presentation",
    pdfPath: "/pdfs/ai-design-presentation.pdf",
  },
  "ultimate-ai-rendering-pro-bundle": {
    title: "Ultimate AI Rendering Pro Bundle",
    pdfPath: "/pdfs/ultimate-ai-rendering-pro-bundle.pdf",
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, productType } = req.body;

    if (!name || !email || !productType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const product = productMap[productType];

    if (!product) {
      return res.status(400).json({ error: "Invalid product type" });
    }

    const origin = req.headers.origin || `https://${req.headers.host}`;
    const downloadUrl = `${origin}${product.pdfPath}`;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111827;">
        <div style="max-width: 640px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 24px;">
          <div style="text-align: center; padding: 24px; background: rgba(59,130,246,0.1); border-radius: 20px;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #111827;">Your AI Rendering Download Is Ready</h1>
            <p style="margin: 12px 0 0; color: #475569; font-size: 16px;">Thank you for purchasing ${product.title}.</p>
          </div>
          <div style="margin-top: 24px; padding: 24px; background: #ffffff; border-radius: 20px; border: 1px solid rgba(15, 23, 42, 0.05);">
            <p style="margin: 0 0 16px; color: #334155; font-size: 15px;">Hi ${name},</p>
            <p style="margin: 0 0 24px; color: #334155; font-size: 15px;">
              Your digital product is now available. Use the download button below to access your PDF instantly.
            </p>
            <div style="text-align: center;">
              <a
                href="${downloadUrl}"
                style="display: inline-block; padding: 15px 28px; border-radius: 14px; background: linear-gradient(90deg, #2563eb 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; font-weight: 700;"
              >
                Download Your PDF
              </a>
            </div>
            <p style="margin: 24px 0 0; color: #64748b; font-size: 13px;">
              If the button does not work, copy and paste the following link into your browser:
              <br />
              <a href="${downloadUrl}" style="color: #2563eb; word-break: break-all;">${downloadUrl}</a>
            </p>
          </div>
          <p style="margin: 24px 0 0; text-align: center; color: #94a3b8; font-size: 13px;">
            AI 3D Renderlab • Instant architectural AI toolkits
          </p>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
  from: "AI3D Renderlab <noreply@airenderlab.katviz.com>",
  to: email,
  subject: `Your ${product.title} Download`,
  html,
});

console.log("EMAIL SENT SUCCESSFULLY:", response);

    return res.status(200).json({ success: true, downloadUrl });
  } catch (error) {
   console.error("EMAIL SEND ERROR:", error);
    return res.status(500).json({ error: error instanceof Error ? error.message : "Failed to send purchase email" });
  }
}
