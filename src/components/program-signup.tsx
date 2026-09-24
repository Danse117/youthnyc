"use client";

import { useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgramSignupProps {
  title: string;
  formUrl: string;
  label?: string;
  variant?: "default" | "outline";
  className?: string;
}

export function ProgramSignup({
  title,
  formUrl,
  label = "Sign Up",
  variant = "default",
  className,
}: ProgramSignupProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog.Root disablePointerDismissal>
      <Dialog.Trigger
        render={<Button variant={variant} className={className} />}
        aria-label={`${label} for ${title}`}
      >
        {label}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/50 transition-opacity duration-200 data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
        <Dialog.Popup className="program-signup-popup" initialFocus={closeRef}>
          <div className="shrink-0 border-b border-border px-5 py-4 pr-16 sm:px-6 sm:pr-16">
            <Dialog.Title className="font-heading text-xl font-semibold text-foreground">
              {title} Signup
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Complete the form below. YCEC will follow up with next steps.
            </Dialog.Description>
            <Dialog.Close
              ref={closeRef}
              render={<Button variant="ghost" className="absolute right-3 top-3 size-11" />}
              aria-label="Close signup form"
            >
              <X aria-hidden="true" />
            </Dialog.Close>
          </div>
          <EmbeddedForm title={title} formUrl={formUrl} />
          <div className="shrink-0 border-t border-border px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-sm sm:px-6">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-8 items-center gap-2 text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Open form in a new tab
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Portal content mounts only while open, so closed signups do not load Tally.
// CSS changes the same popup between desktop and mobile without reloading input.
function EmbeddedForm({ title, formUrl }: Pick<ProgramSignupProps, "title" | "formUrl">) {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const embedUrl = `${formUrl.replace("/r/", "/embed/")}?hideTitle=1&alignLeft=1`;

  return (
    <div className="relative min-h-0 flex-1 bg-white" aria-busy={loading}>
      {(loading || failed) && (
        <p role="status" className="pointer-events-none absolute inset-x-4 top-5 text-center text-sm text-gray-600">
          {failed ? "The form could not load. Please use the link below." : "Loading signup form…"}
        </p>
      )}
      <iframe
        src={embedUrl}
        title={`${title} signup form`}
        className="block h-full w-full border-0"
        onLoad={() => setLoading(false)}
        onError={() => { setLoading(false); setFailed(true); }}
      />
    </div>
  );
}
