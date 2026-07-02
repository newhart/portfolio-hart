import { ActionError, defineAction } from "astro:actions";
import { MY_EMAIL, RESEND_API_KEY } from "astro:env/server";
import { z } from "astro:schema";
import { Resend } from "resend";
import SERVICES from "../assets/collections/services.json";
import Handlebars from "handlebars";
import contactTemplateSource from "../assets/templates/contact.hbs?raw";
import hireServiceTemplateSource from "../assets/templates/hire-service.hbs?raw";

const resend = new Resend(RESEND_API_KEY);

export const server = {
  contactMe: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      message: z.string().optional(),
    }),
    handler: async (input) => {
      const { email, message } = input;

      const template = Handlebars.compile(contactTemplateSource);
      const html = template({ email, message });

      const { error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [MY_EMAIL],
        replyTo: email,
        subject: `Nouveau message de ${email}`,
        html,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return { message: "Email sent successfully" };
    },
  }),

  hireService: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      message: z.string().optional(),
      serviceId: z
        .string()
        .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
          message: "serviceId must be a valid number greater than 0",
        })
        .transform((val) => Number(val)),
    }),
    handler: async (input) => {
      const { serviceId, email, message } = input;

      const service = SERVICES.find((service) => service.id === serviceId);

      if (!service) {
        throw new ActionError({
          code: "NOT_FOUND",
          message: `Service with id: ${serviceId} not found`,
        });
      }

      const template = Handlebars.compile(hireServiceTemplateSource);
      const html = template({
        service,
        email,
        message,
      });

      const { error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [MY_EMAIL],
        replyTo: email,
        subject: "New Service Hired!",
        html,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return {
        message: "Email sent successfully",
      };
    },
  }),
};
