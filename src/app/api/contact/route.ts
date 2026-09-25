import { NextResponse } from "next/server";
import { Resend } from "resend";


export const runtime = "nodejs";


function clean(
  value: FormDataEntryValue | null,
  maxLength: number
) {
  if (
    typeof value !== "string"
  ) {
    return "";
  }

  return value
    .trim()
    .slice(0, maxLength);
}


function escapeHtml(
  value: string
) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function isValidEmail(
  email: string
) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}


export async function POST(
  request: Request
) {
  try {
    const apiKey =
      process.env.RESEND_API_KEY;

    const toEmail =
      process.env.CONTACT_TO_EMAIL;

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL;


    if (
      !apiKey ||
      !toEmail ||
      !fromEmail
    ) {
      console.error(
        "Missing contact email environment variables."
      );

      return NextResponse.json(
        {
          error:
            "Contact service is temporarily unavailable.",
        },
        {
          status: 500,
        }
      );
    }


    const resend =
      new Resend(apiKey);


    const formData =
      await request.formData();


    /*
     * Honeypot.
     * Real users never see this field.
     */
    const website =
      clean(
        formData.get("website"),
        200
      );


    if (website) {
      return NextResponse.json(
        {
          success: true,
        }
      );
    }


    const name =
      clean(
        formData.get("name"),
        100
      );

    const email =
      clean(
        formData.get("email"),
        200
      );

    const company =
      clean(
        formData.get("company"),
        150
      );

    const subject =
      clean(
        formData.get("subject"),
        100
      );

    const message =
      clean(
        formData.get("message"),
        5000
      );


    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }


    if (
      !isValidEmail(email)
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }


    if (
      message.length < 10
    ) {
      return NextResponse.json(
        {
          error:
            "Please tell us a little more about your enquiry.",
        },
        {
          status: 400,
        }
      );
    }


    const safeName =
      escapeHtml(name);

    const safeEmail =
      escapeHtml(email);

    const safeCompany =
      escapeHtml(
        company || "—"
      );

    const safeSubject =
      escapeHtml(subject);

    const safeMessage =
      escapeHtml(message)
        .replaceAll(
          "\n",
          "<br />"
        );


    const {
      error,
    } =
      await resend.emails.send({
        from: fromEmail,

        to: [
          toEmail,
        ],

        replyTo:
          email,

        subject:
          `[YB Website] ${subject} — ${name}`,

        text: `
New enquiry from the YB website

Name: ${name}
Email: ${email}
Company: ${company || "—"}
Topic: ${subject}

Message:
${message}
        `.trim(),

        html: `
<!doctype html>
<html>
  <body
    style="
      margin: 0;
      padding: 0;
      background: #09090d;
      color: #f3f0ea;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 48px 32px;
      "
    >
      <div
        style="
          margin-bottom: 40px;
          color: #ff8067;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        "
      >
        YB Website
      </div>

      <h1
        style="
          margin: 0 0 36px;
          color: #f3f0ea;
          font-size: 32px;
          font-weight: 400;
          line-height: 1.1;
        "
      >
        New contact enquiry
      </h1>

      <div
        style="
          padding: 24px;
          border: 1px solid #28282d;
          border-radius: 14px;
          background: #111116;
        "
      >
        <p style="margin: 0 0 12px;">
          <strong>Name:</strong>
          ${safeName}
        </p>

        <p style="margin: 0 0 12px;">
          <strong>Email:</strong>
          ${safeEmail}
        </p>

        <p style="margin: 0 0 12px;">
          <strong>Company:</strong>
          ${safeCompany}
        </p>

        <p style="margin: 0;">
          <strong>Topic:</strong>
          ${safeSubject}
        </p>
      </div>

      <div
        style="
          margin-top: 18px;
          padding: 24px;
          border: 1px solid #28282d;
          border-radius: 14px;
          background: #111116;
        "
      >
        <div
          style="
            margin-bottom: 14px;
            color: #8e8e94;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          "
        >
          Message
        </div>

        <div
          style="
            color: #d5d2cd;
            font-size: 15px;
            line-height: 1.55;
          "
        >
          ${safeMessage}
        </div>
      </div>
    </div>
  </body>
</html>
        `.trim(),
      });


    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return NextResponse.json(
        {
          error:
            "The message could not be sent. Please try again.",
        },
        {
          status: 500,
        }
      );
    }


    return NextResponse.json(
      {
        success: true,
      }
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}