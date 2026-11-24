import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, phone, city, enquiryType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !city || !enquiryType || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Check if an external webhook or email delivery service is configured
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    let deliveryStatus = "local_logger";

    if (webhookUrl) {
      // Forward to configured enterprise webhook
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "quaine-water-website",
          timestamp: new Date().toISOString(),
          data: { name, businessName, email, phone, city, enquiryType, message },
        }),
      });
      if (webhookRes.ok) {
        deliveryStatus = "delivered_via_webhook";
      }
    } else {
      // In development / demo mode: safely log the enquiry to server console
      console.log("[QUAINE COMMERCIAL DESK INCOMING ENQUIRY]:", {
        timestamp: new Date().toISOString(),
        name,
        businessName: businessName || "N/A",
        email,
        phone,
        city,
        enquiryType,
        message,
      });
      deliveryStatus = "stored_pending_smtp_config";
    }

    return NextResponse.json({
      success: true,
      message:
        deliveryStatus === "delivered_via_webhook"
          ? "Thank you! Your enquiry has been received and routed to our commercial team."
          : "Your enquiry details have been recorded. (Note: Email service awaiting SMTP/Webhook credential configuration).",
      deliveryMode: deliveryStatus,
      referenceId: `QN-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
