import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Link from "next/link";

const MenuBar = () => {
  return (
    <Menubar className="bg-slate-100 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">File</MenubarTrigger>
          <MenubarContent>
            <Link href="/">
              <MenubarItem>
                New ...<MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
            </Link>
            <Link href="/">
              <MenubarItem>
                Open ...<MenubarShortcut>⌘E</MenubarShortcut>
              </MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/">
              <MenubarItem>
                Quit app<MenubarShortcut>⌘X</MenubarShortcut>
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-200">Edit</MenubarTrigger>
          <MenubarContent>
            <Link href="/">
              <MenubarItem>
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
                Masterdata
              </MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <div className="pr-3 text-lg font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Application Name
      </div>
    </Menubar>
  )
}

export default MenuBar;
