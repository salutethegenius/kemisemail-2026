export type TurnstileVerifyResult =
  | { ok: true }
  | { ok: false; error: string };

export async function verifyTurnstileToken(
  token: string | undefined | null,
  remoteip?: string | null
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: false, error: "Captcha is not configured. Please try again shortly." };
  }

  const trimmed = (token || "").trim();
  if (!trimmed) {
    return { ok: false, error: "Please complete the captcha challenge." };
  }

  try {
    const body = new URLSearchParams({
      secret,
      response: trimmed,
    });
    if (remoteip) body.set("remoteip", remoteip);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!res.ok) {
      return { ok: false, error: "Captcha verification failed. Please try again." };
    }

    const data = (await res.json()) as { success?: boolean };
    if (!data.success) {
      return { ok: false, error: "Captcha failed. Please try again." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Captcha verification failed. Please try again." };
  }
}
