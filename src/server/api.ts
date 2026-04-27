/**
 * BACKEND SKELETON — The Sly Old Fox
 * --------------------------------------------------
 * This file is intentionally NOT wired to the frontend.
 * It documents the shape a future backend (Node/Express,
 * a serverless function, or a Lovable Cloud edge function)
 * should expose. Drop these handlers behind /api/* and
 * uncomment the corresponding fetch() calls in the UI.
 *
 * Suggested env vars:
 *   SMTP_HOST, SMTP_USER, SMTP_PASS, BOOKINGS_TO_EMAIL,
 *   CONTACT_TO_EMAIL, RECAPTCHA_SECRET
 */

export interface BookingRequest {
  name: string;
  email: string;
  phone?: string;
  guests: string;
  date: string;     // ISO yyyy-mm-dd
  time: string;     // HH:mm
  occasion?: string;
  message?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResult<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
}

/* -------------------------------------------------- */
/*  POST /api/book                                    */
/* -------------------------------------------------- */
export async function handleBooking(payload: BookingRequest): Promise<ApiResult> {
  // 1. Validate
  if (!payload.name || !payload.email || !payload.date || !payload.time) {
    return { ok: false, error: "Missing required fields." };
  }

  // 2. Persist (DB / Lovable Cloud / Airtable / Sheets)
  // await db.from('bookings').insert(payload);

  // 3. Notify the pub
  // await sendMail({ to: process.env.BOOKINGS_TO_EMAIL, subject: `New booking: ${payload.name}`, html: renderBookingEmail(payload) });

  // 4. Confirm to the guest
  // await sendMail({ to: payload.email, subject: 'We\'ve received your booking', html: renderGuestEmail(payload) });

  return { ok: true, data: { message: "Booking received." } };
}

/* -------------------------------------------------- */
/*  POST /api/contact                                 */
/* -------------------------------------------------- */
export async function handleContact(payload: ContactRequest): Promise<ApiResult> {
  if (!payload.name || !payload.email || !payload.message) {
    return { ok: false, error: "Missing required fields." };
  }

  // await sendMail({ to: process.env.CONTACT_TO_EMAIL, subject: `Enquiry: ${payload.subject ?? 'no subject'}`, html: ... });
  return { ok: true };
}

/* -------------------------------------------------- */
/*  Example Express adapter (commented out)           */
/* -------------------------------------------------- */
//
// import express from 'express';
// const app = express();
// app.use(express.json());
//
// app.post('/api/book', async (req, res) => {
//   const result = await handleBooking(req.body);
//   res.status(result.ok ? 200 : 400).json(result);
// });
//
// app.post('/api/contact', async (req, res) => {
//   const result = await handleContact(req.body);
//   res.status(result.ok ? 200 : 400).json(result);
// });
//
// app.listen(3001);
