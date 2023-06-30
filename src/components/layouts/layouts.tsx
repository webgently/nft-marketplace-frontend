import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layouts = ({ children }: ComPropsObject) => {
  return (
    <div className="min-h-100vh flex flex-col bg-baseBg text-white">
      <Header />

      <div className="flex-1 flex flex-col">
        {children}
      </div>

      <Footer />
    </div>
  )
}