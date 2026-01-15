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
  extends React.InputHTMLAttributes<HTMLInputElement>, FieldProps {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}
// Label Types
export interface LabelProps extends React.BlockquoteHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}
// Checkbox Types
export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
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
// SelectOption Types
export interface SelectOption {
  label: string;
  value: string;
}
// Select Types
export interface SelectProps extends FieldProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}
// Textarea Types
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}
// Radio Group Types
export interface RadioGroupOption {
  label: string;
  value: string;
}
export interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioGroupOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}
// Toggle Types
export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}
// ToggleOption Types
export type ToggleOption = {
  label: string;
  value: string;
  disabled?: boolean;
};
// ToggleGroup Types
export type ToggleGroupProps = {
  options: ToggleOption[];
  value: string[]; // Array for multi-select
  onChange: (selected: string[]) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
};
// Slider Types
export type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
};
