import { useState } from "react";
import { Progress } from "../form/Progress";
import { Button } from "../ui/Button";

export default function ProgressBarV1() {
  const [progress, setProgress] = useState(13);
  // simulate a loading process
  const startLoading = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev > 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };
  return (
    <div className="bg-slate-50 p-10 flex flex-col items-center">
      <div className="w-full max-w-md space-y-12">
        <h1 className="text-xl font-bold border-b pb-4 text-foreground">
          Progress Component Testing
        </h1>

        {/* Determinate Static */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
            Static Determinate (33%)
          </h2>
          <Progress value={33} showValue />
        </section>

        {/* Indeterminate */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
            Indeterminate State
          </h2>
          <Progress />
        </section>

        {/* Dynamic */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
            Dynamic Simulation
          </h2>
          <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
            <Progress value={progress} showValue className="h-3" />

            <div className="mt-6 flex justify-end">
              <Button onClick={startLoading} variant="primary" size="sm">
                Restart Simulation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
