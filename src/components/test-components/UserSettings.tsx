import { Icon } from "../abstract/Icon";
import { Button } from "../ui/Button";
import { Popover } from "../ui/Popover";

export default function UserSettings() {
  return (
    <div className="p-10 flex justify-end">
      <Popover
        trigger={
          <Button variant="outline" size="md">
            <Icon name="settings" className="w-4 h-4" />
          </Button>
        }
      >
        <div className="space-y-3">
          <h4 className="font-medium leading-none">Settings</h4>
          <p className="text-sm text-gray-500">
            Manage your account preferences.
          </p>
          <hr className="border-border" />
          <div className="grid gap-2">
            <Button variant="ghost" size="sm" className="justify-start">
              Profile Details
            </Button>
            <Button variant="danger" size="sm" className="justify-start">
              Logout
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
}
