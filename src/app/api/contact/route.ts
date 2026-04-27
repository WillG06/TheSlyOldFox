import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, message } = body;

    // ── Validate ────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── TODO: integrate an email provider here ──────────────────
    //
    // Option A — Resend (recommended for Next.js):
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from:    "website@theslyoldfox.co.uk",
    //     to:      "info@theslyoldfox.co.uk",
    //     subject: `Website enquiry from ${name}`,
    //     text:    message,
    //   });
    //
    // Option B — Nodemailer / SMTP:
    //   const transporter = nodemailer.createTransport({ ... });
    //   await transporter.sendMail({ from: email, to: "...", subject: ..., text: message });
    //
    // Option C — Send to a CRM / Airtable / Notion database
    // ────────────────────────────────────────────────────────────

    // Log for now
    console.log("[CONTACT]", { name, email, message: message.slice(0, 120), ts: new Date().toISOString() });

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch soon." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[CONTACT ERROR]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
