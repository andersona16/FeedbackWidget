import { MailAdapter, sendMailData } from "../adapters/mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7bac3b87710a6d",
    pass: "d08c7449b78ca1",
  },
});

export class NodemailerMailAdpater implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipep  Feedget <oi@feedget.com>",
      to: "Anderson Araujo <andersonaraujoc1@gmail.com>",
      subject,
      html: body,
    });
  }
}
