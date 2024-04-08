"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DropdownProps {
  children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          size="lg"
          type="button"
          className="justify-between w-full border px-4 text-sm"
        >
          Select Amneties
          <ChevronDown className="size-4" />
        </Button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-full rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
          {children}
        </div>
      )}
    </div>
  );
};
