import { z } from "zod";

export const defaultValue = {
  email: "",
  password: "",
};

export const SigninSchema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください"),
  password: z.string(),
});

export type SigninType = z.infer<typeof SigninSchema>;
