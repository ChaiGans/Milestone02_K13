export { default } from "next-auth/middleware"
export const config = {
  matcher: [
    "/upload/:path*",
    "/profile/:path*",
    "/checkout/:path*",
    "/edit-profile/:path*",
  ],
}
