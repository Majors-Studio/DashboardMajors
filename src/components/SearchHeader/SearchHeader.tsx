"use client";

import React from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  CalendarIcon,
  CogIcon,
  MailIcon,
  RocketIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

const SearchHeader: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const height = useSpring(0, { stiffness: 300, damping: 30 });

  React.useEffect(() => {
    if (open) {
      height.set(200);
    } else {
      height.set(0);
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Command
        className="relative z-20 overflow-visible text-white"
      >
        <CommandInput
          placeholder="Type a command or search..."
          onBlur={() => setOpen(false)}
          onFocus={() => setOpen(true)}
          onClick={() => setOpen(true)}
          
          className="
          w-full
          bg-transparent
          text-white
          border-none
          focus:outline-none
          font-semibold
          px-2
          py-2
          rounded-lg
          shadow-md
          
          "
        />

        <motion.div
          className="rounded-lg shadow-md absolute top-14 left-0 right-0 z-10 bg-gradient-to-r from-[#060B26] to-[#1A1F37] w-full overflow-hidden"
          style={{
            height,
            color: "white",
          }}
        >
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <MailIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CogIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </motion.div>
      </Command>
    </AnimatePresence>
  );
};

export default SearchHeader;
