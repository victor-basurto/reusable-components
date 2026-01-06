import { useState } from "react";
import { useToast } from "@/store/toast-context-provider";
import { Button } from "../ui/Button";
import { Icon } from "../abstract/Icon";
import { Drawer } from "../ui/Drawer";

export default function NavDrawer() {
  /*
   * Drawer Settings
   **/
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { addToast } = useToast();

  console.log("init");
  const handleAction = (name: string) => {
    addToast(`${name} feature coming soon!`, "info");
    setIsDrawerOpen(false);
  };
  return (
    <nav className="p-4 border-b border-border flex justify-between items-center">
      <span className="font-bold text-primary text-xl">Drawer component</span>
      {/* Trigger for the Drawer */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <Icon name="settings" className="w-5 h-5" />
      </Button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Menu"
        placement="right"
      >
        <div className="flex flex-col gap-2">
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => handleAction("Dashboard")}
          >
            <Icon name="home" className="w-4 h-4 mr-2" /> Dashboard
          </Button>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => handleAction("Settings")}
          >
            <Icon name="settings" className="w-4 h-4 mr-2" /> Settings
          </Button>
          <hr className="my-2 border-border" />
          <Button
            variant="danger"
            className="justify-start"
            onClick={() => handleAction("Logout")}
          >
            <Icon name="logout" className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </Drawer>
    </nav>
  );
}
