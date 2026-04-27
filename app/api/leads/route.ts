import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  source?: unknown;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;
  const name = String(payload.name ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const source = String(payload.source ?? "site").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, message: "Name and phone are required" },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { ok: false, message: "Telegram notification is not configured" },
        { status: 500 },
      );
    }

    console.info("Lead received without Telegram env configured", {
      name,
      phone,
      source,
    });

    return NextResponse.json({ ok: true, notification: "skipped" });
  }

  if (token && chatId) {
    const message = [
      "Новая заявка RoofMaster",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Источник: ${source}`,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      },
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { ok: false, message: "Telegram notification failed" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
