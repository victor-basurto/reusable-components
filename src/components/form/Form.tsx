"use client";

import { FormProps } from "@/types/form";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

export function Form<
  TSchema extends ZodType,
  TFieldValues extends FieldValues = z.infer<TSchema> & FieldValues
>({
  schema,
  onSubmit,
  children,
  className,
  defaultValues,
}: FormProps<TSchema, TFieldValues>) {
  const methods = useForm<TFieldValues>({
    // resolver typing is strict about the schema's input type being FieldValues;
    // we ensure the public API remains typed via TFieldValues. Disable the
    // explicit-any rule for this narrow cast.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema as any),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues: defaultValues as any,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children(methods)}
      </form>
    </FormProvider>
  );
}
