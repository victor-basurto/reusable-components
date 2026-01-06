"use client";
import DialogWithToast from "@/components/test-components/DialogWithToast";
import UserSettings from "@/components/test-components/UserSettings";
import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";
import { Tooltip } from "@/components/ui/Tooltip";
import { DialogHandle } from "@/types/ui";
import Image from "next/image";
import { useRef } from "react";
export default function Home() {
  const dialog = useRef<DialogHandle>(null);
  // TODO: use the proper `button` component
  const dialogActions = (
    <Button
      variant="danger"
      className="flex items-center gap-2 transition-all duration-300"
      size="sm"
    >
      close
    </Button>
  );
  // TODO: use the proper `template` for description
  const dialogDescription = (
    <p>This is the content of the dialog. Click `close` to exit</p>
  );
  const handleDialogOpen = () => {
    dialog.current?.open();
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left white">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-primary">
            To get started, edit the page.tsx file.
          </h1>
          <div className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more
            {/* TODO: tooltip should be dark mode enabled */}
            <Tooltip content="instruction details, Nextjs Docs" position="top">
              instructions?
            </Tooltip>
            Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button
            variant="ghost"
            className="flex items-center gap-2 transition-all duration-300"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          >
            <Image
              className=""
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 transition-all duration-300"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          >
            Documentation
          </Button>
        </div>
      </main>
      <div className="grid gap-4">
        {/* TODO: move `<ToggleTheme>` to header component when ready */}
        <ToggleTheme />

        {/* TODO: move `<Dialog>` to desire page when page is ready */}
        <Dialog
          ref={dialog}
          title="Dialog Title"
          description={dialogDescription}
          modalActions={dialogActions}
        />
        <Button
          variant="primary"
          size="md"
          onClick={handleDialogOpen}
          className="flex items-center gap-2 transition-all duration-300"
        >
          open dialog
        </Button>
        <UserSettings />
        <DialogWithToast />
      </div>
    </div>
  );
}
