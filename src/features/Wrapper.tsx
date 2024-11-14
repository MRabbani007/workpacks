import React, { ReactNode } from "react";

export default function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={"lg:max-w-[80vw] mx-auto p-4 lg:p-0 " + className}>
      {children}
    </div>
  );
}
