import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    //   try {
    //     const { name, email, message } = await request.json();

    //     // Validate input
    //     if (!name || !email || !message) {
    //       return NextResponse.json(
    //         { error: "Missing required fields" },
    //         { status: 400 }
    //       );
    //     }

    //     // Send email
    //     const { data, error } = await resend.emails.send({
    //       from: "Portfolio Contact <onboarding@resend.dev>",
    //       to: ["buithach.it@gmail.com"],
    //       subject: `New Contact Message from ${name}`,
    //       html: `
    //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    //           <h2 style="color: #2563eb;">New Contact Message</h2>
    //           <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    //             <p><strong>Name:</strong> ${name}</p>
    //             <p><strong>Email:</strong> ${email}</p>
    //             <p><strong>Message:</strong></p>
    //             <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
    //               ${message.replace(/\n/g, "<br>")}
    //             </div>
    //           </div>
    //           <p style="color: #64748b; font-size: 14px;">
    //             This message was sent from your portfolio contact form.
    //           </p>
    //         </div>
    //       `,
    //       replyTo: email,
    //     });

    //     if (error) {
    //       console.error("Resend error:", error);
    //       return NextResponse.json(
    //         { error: "Failed to send email" },
    //         { status: 500 }
    //       );
    //     }

    //     return NextResponse.json({ success: true, data });
    //   } catch (error) {
    //     console.error("API error:", error);
    //     return NextResponse.json(
    //       { error: "Internal server error" },
    //       { status: 500 }
    //     );
    //   }
}
