import { useToast } from "@/store/toast-context-provider";
import { z } from "zod";
import { Controller } from "react-hook-form";
import { Form } from "../form/Form";
import { Input } from "../form/Input";
import { Icon } from "../abstract/Icon";
import { Button } from "../ui/Button";
import { Checkbox } from "../form/Checkbox";
import { Switch } from "../form/Switch";
import { Select } from "../form/Select";
import { TextArea } from "../form/Textarea";
import { RadioGroup } from "../form/RadioGroup";
import Slider from "../form/Slider";
import Toggle from "../form/Toggle";
import ToggleGroup from "../form/ToggleGroup";
import { Alert } from "../abstract/Alert";
import { useState } from "react";
import { AlertDialog } from "../ui/AlertDialog";
/**
 * for this example we are creating a form validating the following fields:
 * email
 * password
 * phone
 * zipCode
 * acceptTerms
 * notifications
 * role
 * plan
 * */
const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  // NOTE: HTML inputs usually return strings.
  // If your Input component returns a string, use z.string().regex()
  // or use z.coerce.number()
  phone: z.coerce.number().min(900000000, "Enter proper phone number"),
  zipCode: z.coerce.number().min(10000, "Invalid ZipCode"),
  // z.boolean() takes an options object, not a boolean literal
  acceptTerms: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms",
  }),
  notifications: z.boolean().refine((v) => v === true, {
    message: "Please mark or unmark notifications",
  }),
  role: z.string("Please select a job title").min(1),
  plan: z.string("Please select a plan").min(1),
  sliderValue: z.number().min(0, "Minimum is 0").max(100, "Maximum is 100"),
  toggleValue: z.boolean(),
  toggleGroupValue: z.array(z.string()).min(1, "Select at least one option"),
});
type LoginFormvalues = z.infer<typeof loginSchema>;
export function SimpleForm() {
  const { addToast } = useToast();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const onSubmit = (data: LoginFormvalues) => {
    console.log(data);
    addToast("loggin in to XM Cloud...", "info");
  };
  return (
    <div className="mx-auto mt-4 p-6 border border-border reounded-xl">
      <Form schema={loginSchema} onSubmit={onSubmit}>
        {({
          control,
          register,
          reset,
          formState: { errors, isSubmitting },
        }) => (
          <div className="grid grid-cols-6 gap-3">
            {/* Input */}
            <div className="col-span-full lg:col-[1/4]">
              <Input
                label="Email Address"
                placeholder="name@company.com"
                prefixIcon={<Icon name="email" className="w-4 h-4" />}
                error={errors.email?.message}
                className="w-full"
                {...register("email")}
              />
            </div>

            {/* Input */}
            <div className="col-span-full lg:col-[4/7]">
              <Input
                label="Password"
                type="password"
                placeholder="--------"
                className="w-full"
                prefixIcon={<Icon name="lock" className="w-4 h-4" />}
                error={errors.password?.message}
                {...register("password")}
              />
            </div>

            {/* Input */}
            <div className="col-span-full">
              <Input
                label="Address"
                placeholder="1234 Main St"
                prefixIcon={<Icon name="mapPinHouse" className="w-4 h-4" />}
                className="w-full"
              />
            </div>

            {/* Input */}
            <div className="col-span-full lg:col-[1/4]">
              <Input
                label="Address 2"
                placeholder="Apartment, studio, or floor"
                prefixIcon={<Icon name="mapPinHouse" className="w-4 h-4" />}
                className="w-full"
              />
            </div>

            {/* Input */}
            <div className="col-span-full lg:col-[4/7]">
              <Input
                label="Phone"
                placeholder="1237894566"
                prefixIcon={<Icon name="phone" className="w-4 h-4" />}
                className="w-full"
                {...register("phone")}
              />
            </div>

            {/* Input */}
            <div className="col-span-full lg:col-[1/3]">
              <Input
                label="City"
                placeholder="CA"
                prefixIcon={<Icon name="building" className="w-4 h-4" />}
                className="w-full"
              />
            </div>

            {/* Input */}
            <div className="col-span-full lg:col-[3/5]">
              <Input
                label="State"
                placeholder=""
                prefixIcon={<Icon name="building" className="w-4 h-4" />}
                className="w-full"
              />
            </div>

            {/* Input */}
            <div className="col-span-full lg:col-[5/7]">
              <Input
                label="Zip"
                placeholder="10085"
                prefixIcon={<Icon name="binary" className="w-4 h-4" />}
                className="w-full"
                {...register("zipCode")}
              />
            </div>

            {/* Checkbox */}
            <div className="col-span-full">
              <Checkbox
                label="I accept the XMCloud terms of service"
                error={errors.acceptTerms?.message}
                {...register("acceptTerms")}
              />
            </div>

            {/* Switch */}
            <div className="col-span-full">
              <Controller
                control={control}
                name="notifications"
                render={({ field }) => (
                  <Switch
                    label="Enable email notifications"
                    checked={!!field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* Select */}
            <div className="col-span-full">
              <Controller
                control={control}
                name="role"
                render={({ field, fieldState }) => (
                  <Select
                    label="Your Role"
                    placeholder="Chooose a job title..."
                    options={[
                      { label: "Developer", value: "dev" },
                      { label: "Designer", value: "design" },
                      { label: "Manager", value: "manager" },
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            {/* RadioGroup */}
            <div className="col-span-full">
              <Controller
                control={control}
                name="plan"
                render={({ field, fieldState }) => (
                  <RadioGroup
                    label="Select a Plan"
                    name="plan"
                    options={[
                      { label: "Free ($0/mo)", value: "free" },
                      { label: "Pro ($19/mo)", value: "pro" },
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            {/* TextArea */}
            <div className="col-span-full">
              <TextArea label="About you" placeholder="Enter your info..." />
            </div>
            {/* Slider */}
            <div className="col-span-full">
              <Controller
                control={control}
                name="sliderValue"
                defaultValue={50}
                render={({ field }) => (
                  <Slider
                    label="Volume"
                    min={0}
                    max={100}
                    step={1}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            {/* Single Toggle */}
            <div className="col-span-full">
              <Controller
                control={control}
                name="toggleValue"
                defaultValue={false}
                render={({ field }) => (
                  <Toggle
                    label="Enable Feature"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            {/* ToggleGroup */}
            <div className="col-span-full">
              <Controller
                control={control}
                name="toggleGroupValue"
                defaultValue={[]}
                render={({ field }) => (
                  <ToggleGroup
                    label="Select Options"
                    options={[
                      { label: "Option A", value: "A" },
                      { label: "Option B", value: "B" },
                      { label: "Option C", value: "C" },
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>

            {/* TODO: alertdialog */}
            <div className="col-span-full flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsConfirmOpen(true)}
              >
                clear form
              </Button>
              <p>AlertDialog Component</p>
            </div>

            {/* Button */}
            <div className="col-span-full">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                isLoading={isSubmitting}
              >
                Subscribe
              </Button>
            </div>

            {/* inline alert */}
            <div className="col-span-full">
              <Alert variant="info" title="Subscription Update">
                By subscribing, you agree to our new 2026 XM Cloud Service
                protocol
              </Alert>
            </div>
            <AlertDialog
              isOpen={isConfirmOpen}
              title="Reset form Data"
              description="This will clear all information you've typed into this form"
              confirmLabel="Yes, Reset"
              variant="danger"
              onClose={() => setIsConfirmOpen(false)}
              onConfirm={() => {
                reset();
                addToast("form has been clared", "info");
              }}
            />
          </div>
        )}
      </Form>
    </div>
  );
}
