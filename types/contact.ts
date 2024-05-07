import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

type TContactForm = z.infer<typeof contactFormSchema>;

export { contactFormSchema, type TContactForm };
