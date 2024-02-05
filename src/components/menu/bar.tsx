import Link from "next/link";

// 3rd party components
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "../ui/input";

// icons
import {
  Search,
  SettingsIcon,
  MailQuestionIcon,
  LayoutDashboardIcon,
  GraduationCapIcon,
  TextSearchIcon,
  ArrowUpRightFromSquareIcon,
  FilePlus2Icon,
  LogOutIcon,
  BadgeInfoIcon,
  ClipboardTypeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MenuBar = () => {
  const isDisabled = true;
  return (
    <Menubar className="flex items-center justify-between bg-slate-100">
      <div className="flex items-center justify-center">
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled={isDisabled}>
              <Link
                href="/"
                className="items flex w-full items-center justify-between"
              >
                <FilePlus2Icon className="mr-2 h-4 w-4" />
                New ...<MenubarShortcut>⌘N</MenubarShortcut>
              </Link>
            </MenubarItem>
            <MenubarItem disabled={isDisabled}>
              <Link
                href="/"
                className="items flex w-full items-center justify-between"
              >
                <ArrowUpRightFromSquareIcon className="mr-2 h-4 w-4" />
                Open ...<MenubarShortcut>⌘E</MenubarShortcut>
              </Link>
            </MenubarItem>
            <MenubarSeparator className="bg-gray-200" />
            <MenubarItem>
              <Link
                href="/"
                className="items flex w-full items-center justify-between"
              >
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings<MenubarShortcut>⌘,</MenubarShortcut>
              </Link>
            </MenubarItem>
            <MenubarSeparator className="bg-gray-200" />
            <MenubarItem className="hover:text-red-400">
              <Link
                href="/"
                className="items flex w-full items-center justify-between"
              >
                <div className="flex w-full items-center hover:text-red-400">
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Quit app<MenubarShortcut>⌘X</MenubarShortcut>
                </div>
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled={isDisabled}>
              <Link
                href="/"
                className="items flex w-full items-center justify-between"
              >
                <TextSearchIcon className="mr-2 h-4 w-4" />
                Find ...<MenubarShortcut>⌘F</MenubarShortcut>
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link
                href="/"
                className="items flex w-full items-center justify-between"
              >
                <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                Dashboard <MenubarShortcut>⌘1</MenubarShortcut>
              </Link>
            </MenubarItem>
            <MenubarItem disabled={isDisabled}>
              <Link
                href="/"
                className="items flex w-full items-center justify-between"
              >
                <ClipboardTypeIcon className="mr-2 h-4 w-4" />
                Reports <MenubarShortcut>⌘2</MenubarShortcut>
              </Link>
            </MenubarItem>
            <MenubarSeparator className="bg-gray-200" />
            <MenubarItem>
              <Link
                href="/masterdata"
                className="items flex w-full items-center justify-start"
              >
                <GraduationCapIcon className="mr-2 h-4 w-4" />
                Masterdata
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">Help</MenubarTrigger>
          <MenubarContent>
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
            <MenubarSeparator />
            <Link href="/">
              <MenubarItem>
                <MailQuestionIcon className="mr-2 h-4 w-4" />
                Contact QDM
              </MenubarItem>
            </Link>
            <Link href="/">
              <MenubarItem>
                <BadgeInfoIcon className="mr-2 h-4 w-4" />
                About ...
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text pr-3 text-lg font-bold text-transparent">
        Application Name
      </div>
    </Menubar>
  );
};

export default MenuBar;
