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
  MailQuestionIcon,
  LayoutDashboardIcon,
  GraduationCapIcon,
  TextSearchIcon,
  ArrowUpRightFromSquareIcon,
  FilePlus2Icon,
  LogOutIcon,
  BadgeInfoIcon,
} from "lucide-react";

const MenuBar = () => {
  return (
    <Menubar className="bg-slate-100 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">File</MenubarTrigger>
          <MenubarContent>
            <Link href="/">
              <MenubarItem>
                <FilePlus2Icon className="h-4 w-4 mr-2" />
                New ...<MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
            </Link>
            <Link href="/">
              <MenubarItem>
                <ArrowUpRightFromSquareIcon className="h-4 w-4 mr-2" />
                Open ...<MenubarShortcut>⌘E</MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/">
              <MenubarItem className="hover:text-red-400">
                <div className="w-full flex items-center hover:text-red-400">
                  <LogOutIcon className="h-4 w-4 mr-2" />
                  Quit app<MenubarShortcut>⌘X</MenubarShortcut>
                </div>
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">Edit</MenubarTrigger>
          <MenubarContent>
            <Link href="/">
              <MenubarItem>
                <TextSearchIcon className="h-4 w-4 mr-2" />
                Find ...<MenubarShortcut>⌘F</MenubarShortcut>
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">View</MenubarTrigger>
          <MenubarContent>
            <Link href="/">
              <MenubarItem>
                <LayoutDashboardIcon className="h-4 w-4 mr-2" />
                Dashboard <MenubarShortcut>⌘1</MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/masterdata">
              <MenubarItem>
                <GraduationCapIcon className="h-4 w-4 mr-2" />
                Masterdata
              </MenubarItem>
            </Link>
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
                <MailQuestionIcon className="h-4 w-4 mr-2" />
                Contact QDM
              </MenubarItem>
            </Link>
            <Link href="/">
              <MenubarItem>
                <BadgeInfoIcon className="h-4 w-4 mr-2" />
                About ...
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="pr-3 text-lg font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Application Name
      </div>
    </Menubar>
  );
};

export default MenuBar;
