import { NextRequest, NextResponse } from "next/server";

interface BookingBody {
  name: string;
  email: string;
  phone?: string;
  date: string;
  time?: string;
  guests: string | number;
  notes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: BookingBody = await req.json();
    const { name, email, phone, date, time, guests, notes } = body;

    // ── Validate ────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !date?.trim()) {
      return NextResponse.json(
        { error: "name, email and date are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const requestedDate = new Date(date);
    if (isNaN(requestedDate.getTime()) || requestedDate < new Date()) {
      return NextResponse.json(
        { error: "Please select a valid future date." },
        { status: 400 }
      );
    }

    // ── Booking payload ─────────────────────────────────────────
    const booking = {
      id:        `SOF-${Date.now()}`,
      name:      name.trim(),
      email:     email.trim(),
      phone:     phone?.trim() ?? null,
      date,
      time:      time ?? null,
      guests:    Number(guests),
      notes:     notes?.trim() ?? null,
      status:    "pending",
      createdAt: new Date().toISOString(),
    };

    // ── TODO: persist & notify ──────────────────────────────────
    //
    // Option A — Email notification (Resend):
    //   await resend.emails.send({
    //     from:    "bookings@theslyoldfox.co.uk",
    //     to:      "manager@theslyoldfox.co.uk",
    //     subject: `New booking request from ${name} — ${date} @ ${time}`,
    //     react:   BookingEmailTemplate({ booking }),
    //   });
    //
    // Option B — Save to database (Prisma + Postgres):
    //   await prisma.booking.create({ data: booking });
    //
    // Option C — Push to Google Sheets via Sheets API
    //
    // Option D — Integrate with ResDiary / OpenTable / Collins
    // ────────────────────────────────────────────────────────────

    console.log("[BOOKING]", booking);

    return NextResponse.json(
      {
        success: true,
        bookingId: booking.id,
        message:   "Booking request received. We'll confirm within 24 hours.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[BOOKING ERROR]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
