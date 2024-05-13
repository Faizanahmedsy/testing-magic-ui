import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "../page";
export type IconProps = React.HTMLAttributes<SVGElement>;

export default function page() {
  return (
    <>
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white h-screen flex  justify-center items-center flex-col">
        <p>Faizanahmed</p>
        <div className="absolute bottom-0">
          <Dock>
            <DockIcon>
              <Icons.gitHub className="h-6 w-6" />
            </DockIcon>
            <DockIcon>
              <Icons.googleDrive className="h-6 w-6" />
            </DockIcon>
            <DockIcon>
              <Icons.notion className="h-6 w-6" />
            </DockIcon>
            <DockIcon>
              <Icons.openai className="h-6 w-6" />
            </DockIcon>
            <DockIcon>
              <Icons.whatsapp className="h-6 w-6" />
            </DockIcon>
          </Dock>
        </div>
      </div>

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] h-full"
        )}
      />
    </>
  );
}
