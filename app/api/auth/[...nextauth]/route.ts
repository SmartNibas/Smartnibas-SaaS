import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.926951295295-obdv8sq25j0bs61kdoveulu6tindk21c.apps.googleusercontent.com!,
      clientSecret: process.env.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!,
    }),
  ],
  secret: process.env.6a9cb61f756b7e66512ce3f37c1048ad,
});

export { handler as GET, handler as POST };
