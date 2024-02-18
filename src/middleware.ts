// without a defined matcher (i.e. what goes where), apply next-auth to the
// entire project (i.e. protect everything)

export const config = { matcher: ["/masterdata"] };
export { default } from "next-auth/middleware";
