
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json();

        if (!body || typeof body !== "object" || Array.isArray(body)) {
            return Response.json(
                { error: "Vigased andmed." },
                { status: 400 },
            );
        }

        const data = body as Record<string, unknown>;
        const website =
            typeof data.website === "string" ? data.website.trim() : "";

        if (website) {
            return Response.json({ success: true });
        }

        const name = typeof data.name === "string" ? data.name.trim() : "";
        const company =
            typeof data.company === "string" ? data.company.trim() : "";
        const email = typeof data.email === "string" ? data.email.trim() : "";
        const message =
            typeof data.message === "string" ? data.message.trim() : "";

        if (
            !name ||
            name.length > 100 ||
            company.length > 150 ||
            !email ||
            email.length > 254 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            !message ||
            message.length > 5000
        ) {
            return Response.json(
                { error: "Kontrolli palun sisestatud andmeid." },
                { status: 400 },
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL;

        if (!apiKey || !to || !from) {
            console.error("Contact form email settings are missing.");

            return Response.json(
                { error: "Saatmine pole praegu seadistatud." },
                { status: 500 },
            );
        }

        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from,
            to: [to],
            replyTo: email,
            subject: `Veebilehe päring: ${name}`,
            text: [
                `Nimi: ${name}`,
                `Ettevõte: ${company || "Pole märgitud"}`,
                `E-post: ${email}`,
                "",
                "Sõnum:",
                message,
            ].join("\n"),
        });

        if (error) {
            console.error("Contact email could not be sent:", error);

            return Response.json(
                { error: "Sõnumi saatmine ebaõnnestus." },
                { status: 502 },
            );
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Contact form request failed:", error);

        return Response.json(
            { error: "Sõnumi saatmine ebaõnnestus." },
            { status: 500 },
        );
    }
}
