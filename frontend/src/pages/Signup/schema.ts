import { z } from "zod";

export const defaultValue = {
  email: "",
  password: "",
};

export const SignupSchema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください"),
  password: z
    .string()
    .min(8, "パスワードは少なくとも8文字である必要があります。")
    .refine(
      (val) => /[A-Z]/.test(val),
      "パスワードには少なくとも1つの大文字が含まれている必要があります。"
    )
    .refine(
      (val) => /[0-9]/.test(val),
      "パスワードには少なくとも1つの数字が含まれている必要があります。"
    )
    .refine(
      (val) => /[^a-zA-Z0-9]/.test(val),
      "パスワードには少なくとも1つの記号が含まれている必要があります。"
    ),
});

export type SignupType = z.infer<typeof SignupSchema>;
