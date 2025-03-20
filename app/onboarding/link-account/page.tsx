"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LinkAccountPage() {
  const router = useRouter();

  const handleConnect = (provider: string) => {
    // Here you would implement the OAuth flow for the selected provider
    console.log(`Connecting to ${provider}...`);
  };

  const handleFinish = () => {
    router.push("/dashboard");
  };

  const handleBack = () => {
    router.back();
  };

  const integrations = [
    {
      name: "QuickBooks",
      domain: "quickbooks.intuit.com",
      logo: "/dummy-quickbooks-logo.png",
      id: "quickbooks",
    },
    {
      name: "Xero",
      domain: "xero.com",
      logo: "/dummy-xero-logo.png",
      id: "xero",
    },
    {
      name: "FreshBooks",
      domain: "freshbooks.com",
      logo: "/dummy-freshbooks-logo.png",
      id: "freshbooks",
    },
    {
      name: "Wave",
      domain: "waveapps.com",
      logo: "/dummy-wave-logo.png",
      id: "wave",
    },
  ];

  return (
    <Card className="w-full max-w-3xl">
      <div className="space-y-8 p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-primary">Link Account</h2>
            <div className="space-y-4">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 relative">
                        {/* Using a colored div as placeholder for now */}
                        <div
                          className="w-full h-full rounded"
                          style={{
                            background: `hsl(${Math.random() * 360}, 70%, 70%)`,
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">{integration.name}</h3>
                      <p className="text-sm text-muted-foreground">{integration.domain}</p>
                    </div>
                  </div>
                  <Button variant="secondary" onClick={() => handleConnect(integration.id)}>
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="container max-w-3xl flex justify-between items-center">
          <Button variant="ghost" onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleFinish}>Finish</Button>
        </div>
      </div>
    </Card>
  );
}
