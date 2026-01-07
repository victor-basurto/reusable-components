import React from "react";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import * as z from "zod";
// ================================================
// FORM Types
// ================================================
// Form Types
export interface FormProps<
  TSchema extends z.ZodTypeAny,
  // Ensure the inferred type satisfies react-hook-form's FieldValues
  TFieldValues extends FieldValues = z.infer<TSchema> & FieldValues,
> {
  // Zod schema for the form. We keep the concrete schema type so callers
  // can preserve strong types and we can infer the form value shape.
  schema: TSchema;
  // onSubmit and children use the inferred output type from the provided Zod schema
  onSubmit: SubmitHandler<TFieldValues>;
  children: (methods: UseFormReturn<TFieldValues>) => React.ReactNode;
  className?: string;
  defaultValues?: DefaultValues<TFieldValues>;
}
// Field Types
export interface FieldProps {
  label?: string;
  helperText?: string;
  error?: string;
  className?: string;
  required?: boolean;
}
// Input Types
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FieldProps {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}
// Label Types
export interface LabelProps
  extends React.BlockquoteHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}
// Checkbox Types
export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  indeterminate?: boolean;
  helperText?: string;
}
// Progress Types
export interface ProgressProps {
  value?: number; // 0-100. If undefined, it becomes indeterminate
  className?: string;
  showValue?: boolean;
}
// Switch Types
export interface SwitchProps {
  id?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}
