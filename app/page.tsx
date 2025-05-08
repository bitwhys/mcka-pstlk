import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import { ShareButton } from "@/components/share-button";
import { RefreshCcw } from "lucide-react";
import { ProblemStatementWorksheet } from "@/components/worksheet";

export default function HomePaage() {
  return (
    <div className="min-h-full">
      <div className="bg-[#111111] pb-32">
        <header className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Problem Statement Worksheet
            </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <Card className="rounded-sm">
            <CardContent>
              <ProblemStatementWorksheet />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

