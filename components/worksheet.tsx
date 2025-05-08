"use client";

import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { RefreshCcw } from "lucide-react";
import { useId } from "react";
import { ShareButton } from "@/components/share-button";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { QuestionMarkCircleIcon } from '@heroicons/react/16/solid'


export function ProblemStatementWorksheet() {
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-gray-900">
          Document Title
        </h3>
        <div className="flex gap-2 items-center sm:mt-0">
          <Button type="button" size="icon" variant="secondary">
            <RefreshCcw size={16} />
          </Button>
          <ShareButton />
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Print Document
          </Button>
        </div>
      </div>
      <div className="mt-6 grid gap-8">
        <ResponseInput title="Problem question" rows={3} />
        <div className="grid grid-cols-3 gap-4">
          <ResponseInput title="Context" />
          <ResponseInput title="Constraints within solution space" />
          <ResponseInput title="Criteria for success" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <ResponseInput title="Stakeholders" />
          <ResponseInput title="Scope of solution space" />
          <ResponseInput title="Key sources of insight" />
        </div>
      </div>
    </>
  );
}

function ResponseInput({ title, rows = 6 }: { title: string; rows?: number }) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <div className="flex items-center gap-4">
        <Label htmlFor={id} className="text-base/7 font-semibold">
          {title}
        </Label>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <QuestionMarkCircleIcon
                aria-hidden="true"
                className="col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4"
              />
            </TooltipTrigger>
            <TooltipContent className="py-3 max-w-xs">
              <div className="space-y-1">
                <p className="text-[13px] font-medium">Tooltip with title</p>
                <p className="text-muted-foreground text-xs">
                  Tooltips are made to be highly customizable, with features
                  like dynamic placement, rich content, and a robust API. You
                  can even use them as a full-featured dropdown menu by setting
                  the <code>trigger</code> prop to <code>click</code>.
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Textarea
        id={id}
        placeholder="Leave a comment"
        className="bg-muted border-transparent shadow-none border-2 text-base focus-visible:border-primary focus-visible:bg-card [resize:none]"
        rows={rows}
      />
    </div>
  );
}
