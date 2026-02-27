import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative z-10">
      <Card className="w-full max-w-md mx-4 bg-white/80 backdrop-blur-md">
        <CardContent className="pt-6 text-center">
          <AlertCircle className="h-8 w-8 text-brand-orange mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-brand-navy mb-2">Page Not Found</h1>
          <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
          <Link href="/">
            <Button className="bg-brand-navy text-white hover:bg-brand-indigo rounded-full">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
