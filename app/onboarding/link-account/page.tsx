"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

export default function LinkAccountPage() {
  const router = useRouter();

  const handleConnect = (provider: string) => {
    // Here you would implement the OAuth flow for the selected provider
    console.log(`Connecting to ${provider}...`);
  };

  const handleFinish = () => {
    router.push("/dashboard"); // or wherever you want to redirect after onboarding
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container max-w-3xl px-4 py-8">
      <div className="mb-8">
        <Progress value={66} className="h-2" />
      </div>

      <Card className="p-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-center">
              Link Your Account To See Analytical Data On Your Dashboard
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium text-primary">Link Account</h2>

            <div className="space-y-4">
              {/* QuickBooks Integration */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/quickbooks-logo.png"
                      alt="QuickBooks"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">QuickBooks</h3>
                    <p className="text-sm text-muted-foreground">quickbooks.intuit.com</p>
                  </div>
                </div>
                <Button variant="secondary" onClick={() => handleConnect("quickbooks")}>
                  Connect
                </Button>
              </div>

              {/* Xero Integration */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative">
                    <Image src="/xero-logo.png" alt="Xero" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-medium">Xero</h3>
                    <p className="text-sm text-muted-foreground">xero.com</p>
                  </div>
                </div>
                <Button variant="secondary" onClick={() => handleConnect("xero")}>
                  Connect
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleFinish}>Finish</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
