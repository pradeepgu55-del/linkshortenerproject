import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInCta, SignUpCta } from "@/components/auth-buttons";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center gap-6 px-6 py-28 md:py-36">
        <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
          Free &amp; Open to Use
        </Badge>
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight leading-tight text-foreground md:text-6xl">
          Shorten links.<br />Share faster.
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
          Turn any long URL into a clean, shareable short link in seconds. Track
          clicks, manage links from your dashboard, and never lose a link again.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <SignUpCta className="rounded-full px-8">
            Get Started — It’s Free
          </SignUpCta>
          <SignInCta className="rounded-full px-8" />
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-foreground mb-12">
            Everything you need
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">⚡ Instant Redirects</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Short links resolve in milliseconds. Your audience gets to the
                destination with zero perceptible delay.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🔗 Custom Short Codes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Choose a memorable slug for your short link or let us generate
                one for you automatically.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📊 Click Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                See how many times each link has been clicked, all from your
                personal dashboard.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🔒 Secure & Private</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                Your links are tied to your account. Only you can edit or delete
                them — no one else can access your data.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📋 Dashboard Management</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                View, copy, and delete all your short links from a single,
                organised dashboard. No clutter, no confusion.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🆓 Completely Free</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                No credit card, no subscription. Sign up and start shortening
                links immediately at no cost.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-5 px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Ready to get started?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Create an account and shorten your first link in under 30 seconds.
        </p>
        <SignUpCta className="rounded-full px-10">
          Create Free Account
        </SignUpCta>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} LinkShortener. All rights reserved.
      </footer>
    </main>
  );
}
