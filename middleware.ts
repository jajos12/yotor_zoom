import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isIgnored = createRouteMatcher(["/sign-up(.*)", "/sign-in(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (!isIgnored(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
