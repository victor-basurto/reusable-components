import { useToast } from "@/store/toast-context-provider";
import { z } from "zod";
import { Form } from "../form/Form";
import { Input } from "../form/Input";
import { Icon } from "../abstract/Icon";
import { Button } from "../ui/Button";
/**
 * for this example we are creating a form validating the following fields:
 * email
 * password
 * phone
 * zipCode
 * */
const loginSchema = z.object({
  email: z.email("invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.number().min(9, "Enter proper phone number"),
  zipCode: z.number().min(5, "Invalid ZipCode"),
});
type LoginFormvalues = z.infer<typeof loginSchema>;
export function SimpleForm() {
  const { addToast } = useToast();
  const onSubmit = (data: LoginFormvalues) => {
    console.log(data);
    addToast("loggin in to XM Cloud...", "info");
  };
  return (
    <div className="mx-auto mt-4 p-6 border border-border reounded-xl">
      <Form schema={loginSchema} onSubmit={onSubmit}>
        {({ register, formState: { errors, isSubmitting } }) => (
          <div className="grid grid-cols-6 gap-3">
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

            <div className="col-span-full">
              <Input
                label="Address"
                placeholder="1234 Main St"
                prefixIcon={<Icon name="mapPinHouse" className="w-4 h-4" />}
                className="w-full"
              />
            </div>

            <div className="col-span-full lg:col-[1/4]">
              <Input
                label="Address 2"
                placeholder="Apartment, studio, or floor"
                prefixIcon={<Icon name="mapPinHouse" className="w-4 h-4" />}
                className="w-full"
              />
            </div>

            <div className="col-span-full lg:col-[4/7]">
              <Input
                label="Phone"
                placeholder="1237894566"
                prefixIcon={<Icon name="phone" className="w-4 h-4" />}
                className="w-full"
                {...register("phone")}
              />
            </div>

            <div className="col-span-full lg:col-[1/3]">
              <Input
                label="City"
                placeholder="CA"
                prefixIcon={<Icon name="building" className="w-4 h-4" />}
                className="w-full"
              />
            </div>
            {/* TODO: replace with Dropdown component */}
            <div className="col-span-full lg:col-[3/5]">
              <Input
                label="State"
                placeholder=""
                prefixIcon={<Icon name="building" className="w-4 h-4" />}
                className="w-full"
              />
            </div>
            <div className="col-span-full lg:col-[5/7]">
              <Input
                label="Zip"
                placeholder="10085"
                prefixIcon={<Icon name="binary" className="w-4 h-4" />}
                className="w-full"
                {...register("zipCode")}
              />
            </div>
            <div className="col-span-full md:col-span-full">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                isLoading={isSubmitting}
              >
                Log in
              </Button>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
}
