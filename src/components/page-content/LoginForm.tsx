import { useToast } from "@/store/toast-context-provider";
import { z } from "zod";
import { Form } from "../form/Form";
import { Input } from "../form/Input";
import { Icon } from "../abstract/Icon";
import { Button } from "../ui/Button";
const loginSchema = z.object({
  email: z.email("invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type LoginFormvalues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { addToast } = useToast();
  const onSubmit = (data: LoginFormvalues) => {
    addToast(`loggin in to XM Cloud...`, "info");
    if (!data.email) return;
    setTimeout(() => {
      addToast(`Welcome back: ${data.email}`, "info");
    }, 3000);
  };
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border border-border reounded-xl">
      <Form schema={loginSchema} onSubmit={onSubmit}>
        {({ register, formState: { errors, isSubmitting } }) => (
          <div className="space-y-4">
            <Input
              label="Email Address"
              placeholder="name@company.com"
              prefixIcon={<Icon name="email" className="w-4 h-4" />}
              error={errors.email?.message}
              className="w-full"
              {...register("email")}
            />
            <Input
              label="Password"
              type="password"
              placeholder="--------"
              className="w-full"
              prefixIcon={<Icon name="lock" className="w-4 h-4" />}
              error={errors.password?.message}
              {...register("password")}
            />
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
        )}
      </Form>
    </div>
  );
}
