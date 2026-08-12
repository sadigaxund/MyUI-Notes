// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/ui/spinner/Spinner.tsx
import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
var spinnerVariants = cva("animate-spin rounded-full border-2 border-current border-t-transparent", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var Spinner = forwardRef(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "status",
      "aria-label": "Loading",
      className: cn(spinnerVariants({ size }), className),
      ...props,
      children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Loading..." })
    }
  )
);
Spinner.displayName = "Spinner";

// src/ui/button/Button.tsx
import { forwardRef as forwardRef2 } from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var buttonVariants = cva2(
  "inline-flex items-center justify-center gap-inline rounded-ui font-medium transition-colors focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-fg hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-fg hover:bg-secondary/80",
        ghost: "text-fg hover:bg-secondary",
        danger: "bg-danger text-primary-fg hover:bg-danger/90"
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = forwardRef2(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    "button",
    {
      ref,
      className: cn(buttonVariants({ variant, size }), className),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      disabled: disabled || loading,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsx2(Spinner, { size: "sm" }),
        children
      ]
    }
  )
);
Button.displayName = "Button";

// src/ui/input/Input.tsx
import { forwardRef as forwardRef3 } from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var inputVariants = cva3(
  "flex w-full rounded-ui border bg-bg px-3 py-2 text-sm ring-offset-bg placeholder:text-muted focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-border",
        filled: "border-transparent bg-secondary"
      },
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm"
      },
      invalid: {
        true: "border-danger ring-danger/30"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Input = forwardRef3(
  ({ className, variant, size, invalid, ...props }, ref) => /* @__PURE__ */ jsx3(
    "input",
    {
      ref,
      className: cn(inputVariants({ variant, size, invalid }), className),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      ...props
    }
  )
);
Input.displayName = "Input";

// src/ui/label/Label.tsx
import { forwardRef as forwardRef4 } from "react";
import { Root } from "@radix-ui/react-label";
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var labelVariants = cva4(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = forwardRef4(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx4(Root, { ref, className: cn(labelVariants(), className), ...props })
);
Label.displayName = "Label";

// src/ui/card/Card.tsx
import { forwardRef as forwardRef5 } from "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx5 } from "react/jsx-runtime";
var cardVariants = cva5("rounded-ui bg-surface text-fg", {
  variants: {
    variant: {
      default: "border border-border",
      outlined: "border-2 border-border",
      elevated: "border border-border shadow-lg"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Card = forwardRef5(
  ({ className, variant, style, ...props }, ref) => /* @__PURE__ */ jsx5(
    "div",
    {
      ref,
      className: cn(cardVariants({ variant }), className),
      style: { backdropFilter: "blur(var(--backdrop-blur))", borderWidth: "var(--border-width)", ...style },
      ...props
    }
  )
);
Card.displayName = "Card";

// src/ui/card/CardHeader.tsx
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var CardHeader = forwardRef6(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx6("div", { ref, className: cn("flex flex-col gap-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";

// src/ui/card/CardTitle.tsx
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var CardTitle = forwardRef7(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("h3", { ref, className: cn("text-lg font-semibold leading-tight", className), ...props })
);
CardTitle.displayName = "CardTitle";

// src/ui/card/CardContent.tsx
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var CardContent = forwardRef8(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx8("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";

// src/ui/card/CardFooter.tsx
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var CardFooter = forwardRef9(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/ui/badge/Badge.tsx
import { forwardRef as forwardRef10 } from "react";
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx10 } from "react/jsx-runtime";
var badgeVariants = cva6(
  // Density tokens (AGENTS.md §7 / Phase 3): min-height + vertical padding
  // come from --density-chip-* so Badge isn't vertically cramped next to
  // its text — was a bare `py-0.5` (2px), which reads as a sliver at
  // default text-xs line-height.
  "inline-flex items-center rounded-ui-sm px-2.5 py-[var(--density-chip-py)] min-h-[var(--density-chip-min-h)] text-xs font-medium",
  {
    variants: {
      variant: {
        neutral: ["text-secondary-fg", "bg-secondary/60"],
        primary: ["text-primary", "bg-primary/15"],
        success: ["text-success", "bg-success/15"],
        warning: ["text-warning", "bg-warning/15"],
        danger: ["text-danger", "bg-danger/15"]
      },
      style: {
        solid: "",
        soft: ""
      }
    },
    compoundVariants: [
      {
        style: "solid",
        variant: "neutral",
        className: "bg-secondary text-secondary-fg"
      },
      {
        style: "solid",
        variant: "primary",
        className: "bg-primary text-primary-fg"
      },
      {
        style: "solid",
        variant: "success",
        className: "bg-success text-bg"
      },
      {
        style: "solid",
        variant: "warning",
        className: "bg-warning text-bg"
      },
      {
        style: "solid",
        variant: "danger",
        className: "bg-danger text-primary-fg"
      }
    ],
    defaultVariants: {
      variant: "neutral",
      style: "solid"
    }
  }
);
var Badge = forwardRef10(
  ({ className, variant, style, ...props }, ref) => /* @__PURE__ */ jsx10("span", { ref, className: cn(badgeVariants({ variant, style }), className), ...props })
);
Badge.displayName = "Badge";

// src/ui/alert/Alert.tsx
import { forwardRef as forwardRef11 } from "react";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx11, jsxs as jsxs2 } from "react/jsx-runtime";
var alertVariants = cva7(
  "relative w-full rounded-ui border p-panel",
  {
    variants: {
      variant: {
        info: "border-primary/20 bg-primary/5 text-primary",
        success: "border-success/20 bg-success/5 text-success",
        warning: "border-warning/20 bg-warning/5 text-warning",
        danger: "border-danger/20 bg-danger/5 text-danger"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
);
var Alert = forwardRef11(
  ({ className, variant, title, icon, children, ...props }, ref) => /* @__PURE__ */ jsx11("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props, children: /* @__PURE__ */ jsxs2("div", { className: "flex gap-stack", children: [
    icon && /* @__PURE__ */ jsx11("span", { className: "mt-0.5 shrink-0", children: icon }),
    /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-tight", children: [
      title && /* @__PURE__ */ jsx11("h5", { className: "text-sm font-semibold", children: title }),
      /* @__PURE__ */ jsx11("div", { className: "text-sm", children })
    ] })
  ] }) })
);
Alert.displayName = "Alert";

// src/ui/checkbox/Checkbox.tsx
import { forwardRef as forwardRef12 } from "react";
import { Root as Root2, Indicator } from "@radix-ui/react-checkbox";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx12 } from "react/jsx-runtime";
var checkboxVariants = cva8(
  "peer shrink-0 rounded-ui-sm border border-border bg-bg ring-offset-bg focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-fg data-[state=checked]:border-primary",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Checkbox = forwardRef12(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsx12(Root2, { ref, className: cn(checkboxVariants({ size }), className), ...props, children: /* @__PURE__ */ jsx12(Indicator, { className: "flex items-center justify-center text-current", children: /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 12 12", className: "size-3 fill-current", children: /* @__PURE__ */ jsx12("path", { d: "M3 6l2 2 4-4", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }) }) })
);
Checkbox.displayName = "Checkbox";

// src/ui/radio-group/RadioGroup.tsx
import { forwardRef as forwardRef13 } from "react";
import { Root as Root3, Item, Indicator as Indicator2 } from "@radix-ui/react-radio-group";
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx13 } from "react/jsx-runtime";
var radioVariants = cva9(
  "aspect-square size-4 rounded-full border border-border bg-bg ring-offset-bg focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
);
var RadioGroup = forwardRef13(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13(Root3, { ref, className: cn("grid gap-inline", className), ...props })
);
RadioGroup.displayName = "RadioGroup";
var RadioGroupItem = forwardRef13(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13(Item, { ref, className: cn(radioVariants(), className), ...props, children: /* @__PURE__ */ jsx13(Indicator2, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx13("span", { className: "size-2 rounded-full bg-primary" }) }) })
);
RadioGroupItem.displayName = "RadioGroupItem";

// src/ui/switch/Switch.tsx
import { forwardRef as forwardRef14 } from "react";
import { Root as Root4, Thumb } from "@radix-ui/react-switch";
import { cva as cva10 } from "class-variance-authority";
import { jsx as jsx14 } from "react/jsx-runtime";
var switchVariants = cva10(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-secondary ring-offset-bg transition-colors focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring focus-visible:ring-offset-[length:var(--focus-ring-offset)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var thumbVariants = cva10(
  "pointer-events-none block rounded-full bg-bg shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-full",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Switch = forwardRef14(
  ({ className, size, ...props }, ref) => /* @__PURE__ */ jsx14(Root4, { ref, className: cn(switchVariants({ size }), className), ...props, children: /* @__PURE__ */ jsx14(Thumb, { className: cn(thumbVariants({ size })) }) })
);
Switch.displayName = "Switch";

// src/ui/textarea/Textarea.tsx
import { forwardRef as forwardRef15, useRef, useCallback } from "react";
import { cva as cva11 } from "class-variance-authority";
import { jsx as jsx15 } from "react/jsx-runtime";
var textareaVariants = cva11(
  "flex w-full rounded-ui border bg-bg px-3 py-2 text-sm ring-offset-bg placeholder:text-muted focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-border",
        filled: "border-transparent bg-secondary"
      },
      invalid: {
        true: "border-danger ring-danger/30"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Textarea = forwardRef15(
  ({ className, variant, invalid, autoResize, onChange, ...props }, ref) => {
    const internalRef = useRef(null);
    const setRef = useCallback(
      (node) => {
        internalRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );
    const resize = useCallback((el) => {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }, []);
    const handleChange = useCallback((e) => {
      if (autoResize) resize(e.currentTarget);
      onChange?.(e);
    }, [autoResize, onChange, resize]);
    return /* @__PURE__ */ jsx15(
      "textarea",
      {
        ref: setRef,
        className: cn(textareaVariants({ variant, invalid }), "min-h-20", className),
        onChange: handleChange,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/ui/select/Select.tsx
import { forwardRef as forwardRef16 } from "react";
import {
  Root as Root5,
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  Viewport,
  Item as Item2,
  ItemText,
  ItemIndicator
} from "@radix-ui/react-select";
import { cva as cva12 } from "class-variance-authority";
import { jsx as jsx16, jsxs as jsxs3 } from "react/jsx-runtime";
var triggerVariants = cva12(
  "flex w-full items-center justify-between rounded-ui border bg-bg px-3 py-2 text-sm ring-offset-bg placeholder:text-muted focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm"
      },
      invalid: {
        true: "border-danger ring-danger/30"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var SelectTrigger = forwardRef16(
  ({ className, size, invalid, children, ...props }, ref) => /* @__PURE__ */ jsxs3(Trigger, { ref, className: cn(triggerVariants({ size, invalid }), className), style: { backdropFilter: "blur(var(--backdrop-blur))" }, ...props, children: [
    children,
    /* @__PURE__ */ jsx16(Icon, { className: "ml-2 shrink-0 opacity-50", children: /* @__PURE__ */ jsx16("svg", { viewBox: "0 0 8 8", className: "size-3 fill-current", children: /* @__PURE__ */ jsx16("path", { d: "M0 2l4 4 4-4" }) }) })
  ] })
);
SelectTrigger.displayName = "SelectTrigger";
var SelectContent = forwardRef16(
  ({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx16(Portal, { children: /* @__PURE__ */ jsx16(
    Content,
    {
      ref,
      position,
      className: cn(
        "relative z-[var(--z-overlay)] max-h-96 min-w-[8rem] overflow-hidden rounded-ui border border-border bg-bg text-fg shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out",
        className
      ),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      ...props,
      children: /* @__PURE__ */ jsx16(Viewport, { className: "p-1", children })
    }
  ) })
);
SelectContent.displayName = "SelectContent";
var SelectItem = forwardRef16(
  ({ className, children, showIndicator = true, ...props }, ref) => /* @__PURE__ */ jsxs3(
    Item2,
    {
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-ui-sm py-1.5 pr-2 text-sm outline-none focus:bg-secondary focus:text-secondary-fg data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        showIndicator ? "pl-8" : "pl-2",
        className
      ),
      ...props,
      children: [
        showIndicator && /* @__PURE__ */ jsx16("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx16(ItemIndicator, { children: /* @__PURE__ */ jsx16("svg", { viewBox: "0 0 8 8", className: "size-3 fill-current", children: /* @__PURE__ */ jsx16("path", { d: "M1 4l2 2 4-4", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) }) }) }),
        /* @__PURE__ */ jsx16(ItemText, { children })
      ]
    }
  )
);
SelectItem.displayName = "SelectItem";

// src/ui/patterns/form-field/FormField.tsx
import { forwardRef as forwardRef17, useId } from "react";
import { jsx as jsx17, jsxs as jsxs4 } from "react/jsx-runtime";
var FormField = forwardRef17(
  ({ label, error, hint, required, className, children, ...props }, ref) => {
    const id = useId();
    return /* @__PURE__ */ jsxs4("div", { ref, className: cn("flex flex-col gap-1.5", className), ...props, children: [
      /* @__PURE__ */ jsxs4(Label, { htmlFor: id, children: [
        label,
        required && /* @__PURE__ */ jsx17("span", { className: "ml-1 text-danger", children: "*" })
      ] }),
      children,
      hint && !error && /* @__PURE__ */ jsx17("p", { className: "text-xs text-muted", children: hint }),
      error && /* @__PURE__ */ jsx17("p", { className: "text-xs text-danger", children: error })
    ] });
  }
);
FormField.displayName = "FormField";

// src/ui/dialog/Dialog.tsx
import { forwardRef as forwardRef18 } from "react";
import { Root as Root6, Trigger as Trigger2, Portal as Portal2, Overlay, Content as Content2, Title, Description, Close } from "@radix-ui/react-dialog";
import { cva as cva13 } from "class-variance-authority";
import { jsx as jsx18, jsxs as jsxs5 } from "react/jsx-runtime";
var dialogOverlay = "fixed inset-0 z-[var(--z-overlay)] bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out";
var dialogContentVariants = cva13(
  "fixed left-1/2 top-1/2 z-[var(--z-overlay)] w-full -translate-x-1/2 -translate-y-1/2 rounded-ui bg-surface-elevated p-6 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var dialogOverlayWithBlur = `${dialogOverlay} [backdrop-filter:blur(var(--backdrop-blur))]`;
var DialogContent = forwardRef18(
  ({ className, size, children, ...props }, ref) => /* @__PURE__ */ jsxs5(Portal2, { children: [
    /* @__PURE__ */ jsx18(Overlay, { className: dialogOverlayWithBlur }),
    /* @__PURE__ */ jsxs5(Content2, { ref, className: cn(dialogContentVariants({ size }), className), style: { backdropFilter: "blur(var(--backdrop-blur))", borderWidth: "var(--border-width)" }, ...props, children: [
      children,
      /* @__PURE__ */ jsx18(Close, { className: "absolute right-panel top-panel rounded-ui-sm opacity-70 hover:opacity-100", children: /* @__PURE__ */ jsx18("svg", { viewBox: "0 0 15 15", className: "size-4 fill-current", children: /* @__PURE__ */ jsx18("path", { d: "M2 2l11 11M13 2L2 13", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) }) })
    ] })
  ] })
);
DialogContent.displayName = "DialogContent";
var DialogHeader = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18("div", { ref, className: cn("flex flex-col gap-1.5 mb-4", className), ...props })
);
DialogHeader.displayName = "DialogHeader";
var DialogTitle = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18(Title, { ref, className: cn("text-lg font-semibold leading-tight", className), ...props })
);
DialogTitle.displayName = "DialogTitle";
var DialogDescription = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18(Description, { ref, className: cn("text-sm text-muted", className), ...props })
);
DialogDescription.displayName = "DialogDescription";
var DialogFooter = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18("div", { ref, className: cn("flex items-center justify-end gap-inline mt-6", className), ...props })
);
DialogFooter.displayName = "DialogFooter";

// src/ui/tooltip/Tooltip.tsx
import { forwardRef as forwardRef19 } from "react";
import { Provider, Root as Root7, Trigger as Trigger3, Portal as Portal3, Content as Content3 } from "@radix-ui/react-tooltip";
import { jsx as jsx19, jsxs as jsxs6 } from "react/jsx-runtime";
var TooltipProvider = Provider;
var Tooltip = ({ content, side = "top", children }) => /* @__PURE__ */ jsxs6(Root7, { children: [
  /* @__PURE__ */ jsx19(Trigger3, { asChild: true, children }),
  /* @__PURE__ */ jsx19(Portal3, { children: /* @__PURE__ */ jsx19(
    Content3,
    {
      side,
      sideOffset: 4,
      className: cn(
        "z-[var(--z-overlay)] overflow-hidden rounded-ui-sm bg-bg text-fg border border-border px-2.5 py-1 text-xs shadow-lg",
        "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out"
      ),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      children: content
    }
  ) })
] });
var TooltipContent = forwardRef19(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
    Content3,
    {
      ref,
      sideOffset: 4,
      className: cn(
        "z-[var(--z-overlay)] overflow-hidden rounded-ui-sm bg-bg text-fg border border-border px-2.5 py-1 text-xs shadow-lg",
        "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out",
        className
      ),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      ...props
    }
  )
);
TooltipContent.displayName = "TooltipContent";

// src/ui/dropdown-menu/DropdownMenu.tsx
import { forwardRef as forwardRef20 } from "react";
import {
  Root as Root8,
  Trigger as Trigger4,
  Portal as Portal4,
  Content as Content4,
  Item as Item3,
  Separator,
  Label as Label2
} from "@radix-ui/react-dropdown-menu";
import { jsx as jsx20 } from "react/jsx-runtime";
var DropdownMenuContent = forwardRef20(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx20(Portal4, { children: /* @__PURE__ */ jsx20(
    Content4,
    {
      ref,
      sideOffset: 4,
      className: cn(
        "z-[var(--z-overlay)] min-w-[8rem] overflow-hidden rounded-ui border border-border bg-bg p-1 shadow-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        className
      ),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      ...props
    }
  ) })
);
DropdownMenuContent.displayName = "DropdownMenuContent";
var DropdownMenuItem = forwardRef20(
  ({ className, destructive, ...props }, ref) => /* @__PURE__ */ jsx20(
    Item3,
    {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-ui-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        destructive ? "text-danger focus:bg-danger/10" : "text-fg focus:bg-secondary focus:text-secondary-fg",
        className
      ),
      ...props
    }
  )
);
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuSeparator = forwardRef20(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx20(Separator, { ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props })
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var DropdownMenuLabel = forwardRef20(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx20(Label2, { ref, className: cn("px-2 py-1.5 text-xs font-semibold text-muted", className), ...props })
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";

// src/ui/popover/Popover.tsx
import { forwardRef as forwardRef21 } from "react";
import { Root as Root9, Trigger as Trigger5, Portal as Portal5, Content as Content5, Close as Close2 } from "@radix-ui/react-popover";
import { jsx as jsx21 } from "react/jsx-runtime";
var PopoverContent = forwardRef21(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21(Portal5, { children: /* @__PURE__ */ jsx21(
    Content5,
    {
      ref,
      sideOffset: 4,
      updatePositionStrategy: "always",
      className: cn(
        "z-[var(--z-overlay)] w-72 rounded-ui border border-border bg-surface-elevated p-panel shadow-lg outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        className
      ),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      ...props
    }
  ) })
);
PopoverContent.displayName = "PopoverContent";

// src/ui/toast/Toast.tsx
import { forwardRef as forwardRef22, useCallback as useCallback2, useState, createContext, useContext } from "react";
import {
  Provider as Provider2,
  Root as Root10,
  Title as Title2,
  Description as Description2,
  Close as Close3,
  Viewport as Viewport2
} from "@radix-ui/react-toast";
import { cva as cva14 } from "class-variance-authority";
import { jsx as jsx22, jsxs as jsxs7 } from "react/jsx-runtime";
var toastVariants = cva14(
  "group pointer-events-auto relative flex w-full items-center justify-between gap-stack rounded-ui border p-panel shadow-elevated data-[swipe=end]:animate-out data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-elevated text-fg",
        success: "border-success bg-success text-success-fg",
        danger: "border-danger bg-danger text-danger-fg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var ToastContext = createContext(null);
function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <Toaster />");
  return ctx;
}
var ToastItem = forwardRef22(
  ({ title, description, variant = "default", ...props }, ref) => /* @__PURE__ */ jsxs7(
    Root10,
    {
      ref,
      className: cn(toastVariants({ variant })),
      style: { backdropFilter: "blur(var(--backdrop-blur))" },
      ...props,
      children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex flex-col gap-1", children: [
          title && /* @__PURE__ */ jsx22(Title2, { className: "text-sm font-semibold", children: title }),
          description && /* @__PURE__ */ jsx22(Description2, { className: "text-sm opacity-90", children: description })
        ] }),
        /* @__PURE__ */ jsx22(Close3, { className: "shrink-0 opacity-dim hover:opacity-100", children: /* @__PURE__ */ jsx22("svg", { viewBox: "0 0 15 15", className: "size-4 fill-current", children: /* @__PURE__ */ jsx22("path", { d: "M2 2l11 11M13 2L2 13", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) }) })
      ]
    }
  )
);
ToastItem.displayName = "ToastItem";
function Toaster({ children }) {
  const [toasts, setToasts] = useState([]);
  const toast = useCallback2(
    (data) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { ...data, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5e3);
    },
    []
  );
  return /* @__PURE__ */ jsxs7(ToastContext.Provider, { value: { toast }, children: [
    children,
    /* @__PURE__ */ jsxs7(Provider2, { children: [
      toasts.map((t) => /* @__PURE__ */ jsx22(ToastItem, { ...t }, t.id)),
      /* @__PURE__ */ jsx22(Viewport2, { className: "fixed bottom-panel right-panel z-[var(--z-toast)] flex flex-col gap-inline w-full max-w-sm" })
    ] })
  ] });
}

// src/ui/patterns/confirm-dialog/ConfirmDialog.tsx
import { jsx as jsx23, jsxs as jsxs8 } from "react/jsx-runtime";
function ConfirmDialog({
  title,
  description,
  confirmLabel = "Confirm",
  destructive,
  onConfirm,
  trigger,
  open,
  onOpenChange
}) {
  return /* @__PURE__ */ jsxs8(Root6, { open, onOpenChange, children: [
    trigger && /* @__PURE__ */ jsx23(Trigger2, { asChild: true, children: trigger }),
    /* @__PURE__ */ jsxs8(DialogContent, { size: "sm", children: [
      /* @__PURE__ */ jsxs8(DialogHeader, { children: [
        /* @__PURE__ */ jsx23(DialogTitle, { children: title }),
        description && /* @__PURE__ */ jsx23(DialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxs8(DialogFooter, { children: [
        /* @__PURE__ */ jsx23(Close, { asChild: true, children: /* @__PURE__ */ jsx23(Button, { variant: "ghost", children: "Cancel" }) }),
        /* @__PURE__ */ jsx23(Button, { variant: destructive ? "danger" : "primary", onClick: onConfirm, children: confirmLabel })
      ] })
    ] })
  ] });
}

// src/ui/tabs/Tabs.tsx
import { createContext as createContext2, useContext as useContext2, forwardRef as forwardRef23 } from "react";
import { Root as Root11, List, Trigger as Trigger6, Content as Content6 } from "@radix-ui/react-tabs";
import { cva as cva15 } from "class-variance-authority";
import { jsx as jsx24 } from "react/jsx-runtime";
var TabsVariantContext = createContext2("underline");
var tabsListVariants = cva15("inline-flex items-center", {
  variants: {
    variant: {
      underline: "border-b border-border gap-0",
      pills: "gap-1",
      filing: "flex items-end gap-0 overflow-x-auto scrollbar-gutter-stable w-fit max-w-full"
    }
  },
  defaultVariants: {
    variant: "underline"
  }
});
var tabsTriggerVariants = cva15(
  "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-bg transition-all focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        underline: "border-b-2 border-transparent px-3 py-2 -mb-px data-[state=active]:border-primary data-[state=active]:text-primary",
        pills: "rounded-ui-sm px-3 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-fg",
        filing: "rounded-t-ui-lg px-4 py-2 flex-shrink-0 border border-border data-[state=active]:bg-surface-elevated data-[state=active]:text-fg data-[state=active]:border-b-surface-elevated data-[state=active]:z-20 data-[state=inactive]:bg-surface data-[state=inactive]:text-muted data-[state=inactive]:z-10"
      }
    },
    defaultVariants: {
      variant: "underline"
    }
  }
);
var tabsContentVariants = cva15(
  "relative ring-offset-bg focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring",
  {
    variants: {
      variant: {
        underline: "mt-2",
        pills: "mt-2",
        filing: "bg-surface-elevated border border-border rounded-b-ui-lg rounded-tr-ui-lg -mt-px z-0 p-4"
      }
    },
    defaultVariants: {
      variant: "underline"
    }
  }
);
var Tabs = forwardRef23(
  ({ variant, ...props }, ref) => /* @__PURE__ */ jsx24(TabsVariantContext.Provider, { value: variant ?? "underline", children: /* @__PURE__ */ jsx24(Root11, { ref, ...props }) })
);
Tabs.displayName = "Tabs";
var TabsList = forwardRef23(
  ({ className, variant: explicitVariant, ...props }, ref) => {
    const ctxVariant = useContext2(TabsVariantContext);
    const variant = explicitVariant ?? ctxVariant;
    return /* @__PURE__ */ jsx24(
      List,
      {
        ref,
        className: cn(tabsListVariants({ variant }), className),
        ...props
      }
    );
  }
);
TabsList.displayName = "TabsList";
var TabsTrigger = forwardRef23(
  ({ className, variant: explicitVariant, onFocus, ...props }, ref) => {
    const ctxVariant = useContext2(TabsVariantContext);
    const variant = explicitVariant ?? ctxVariant;
    return /* @__PURE__ */ jsx24(
      Trigger6,
      {
        ref,
        className: cn(tabsTriggerVariants({ variant }), className),
        onFocus: (e) => {
          if (variant === "filing") {
            e.currentTarget.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
          onFocus?.(e);
        },
        ...props
      }
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = forwardRef23(
  ({ className, ...props }, ref) => {
    const variant = useContext2(TabsVariantContext);
    return /* @__PURE__ */ jsx24(
      Content6,
      {
        ref,
        className: cn(tabsContentVariants({ variant }), className),
        ...props
      }
    );
  }
);
TabsContent.displayName = "TabsContent";

// src/ui/breadcrumbs/Breadcrumbs.tsx
import { forwardRef as forwardRef24 } from "react";
import { jsx as jsx25, jsxs as jsxs9 } from "react/jsx-runtime";
var Breadcrumbs = forwardRef24(
  ({ items, separator = "/", className, ...props }, ref) => /* @__PURE__ */ jsx25("nav", { ref, "aria-label": "Breadcrumb", className: cn("flex items-center gap-tight text-sm", className), ...props, children: /* @__PURE__ */ jsx25("ol", { className: "flex items-center gap-tight", children: items.map((item, i) => {
    const isLast = i === items.length - 1;
    return /* @__PURE__ */ jsxs9("li", { className: "flex items-center gap-tight", children: [
      i > 0 && /* @__PURE__ */ jsx25("span", { className: "text-muted", children: separator }),
      item.href && !isLast ? /* @__PURE__ */ jsx25("a", { href: item.href, className: "text-muted hover:text-fg transition-colors", children: item.label }) : /* @__PURE__ */ jsx25("span", { className: isLast ? "text-fg font-medium" : "text-muted", children: item.label })
    ] }, i);
  }) }) })
);
Breadcrumbs.displayName = "Breadcrumbs";

// src/ui/pagination/Pagination.tsx
import { forwardRef as forwardRef25 } from "react";
import { jsx as jsx26, jsxs as jsxs10 } from "react/jsx-runtime";
function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [];
  if (current <= 3) {
    pages.push(1, 2, 3, "...", total);
  } else if (current >= total - 2) {
    pages.push(1, "...", total - 2, total - 1, total);
  } else {
    pages.push(1, "...", current - 1, current, current + 1, "...", total);
  }
  return pages;
}
var Pagination = forwardRef25(
  ({ currentPage, totalPages, onPageChange, className, ...props }, ref) => /* @__PURE__ */ jsxs10("nav", { ref, "aria-label": "Pagination", className: cn("flex items-center gap-tight", className), ...props, children: [
    /* @__PURE__ */ jsx26(
      Button,
      {
        variant: "ghost",
        size: "sm",
        disabled: currentPage <= 1,
        onClick: () => onPageChange(currentPage - 1),
        children: "Prev"
      }
    ),
    getPageNumbers(currentPage, totalPages).map(
      (page, i) => page === "..." ? /* @__PURE__ */ jsx26("span", { className: "px-2 text-muted text-sm", children: "..." }, `ellipsis-${i}`) : /* @__PURE__ */ jsx26(
        Button,
        {
          variant: page === currentPage ? "primary" : "ghost",
          size: "sm",
          onClick: () => onPageChange(page),
          children: page
        },
        page
      )
    ),
    /* @__PURE__ */ jsx26(
      Button,
      {
        variant: "ghost",
        size: "sm",
        disabled: currentPage >= totalPages,
        onClick: () => onPageChange(currentPage + 1),
        children: "Next"
      }
    )
  ] })
);
Pagination.displayName = "Pagination";

// src/ui/avatar/Avatar.tsx
import { forwardRef as forwardRef26 } from "react";
import { Root as Root12, Image, Fallback } from "@radix-ui/react-avatar";
import { cva as cva16 } from "class-variance-authority";
import { jsx as jsx27, jsxs as jsxs11 } from "react/jsx-runtime";
var avatarVariants = cva16(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "size-8",
        md: "size-10",
        lg: "size-12"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var fallbackVariants = cva16(
  "flex size-full items-center justify-center rounded-full bg-secondary text-secondary-fg font-medium",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Avatar = forwardRef26(
  ({ className, size, src, alt, fallback, ...props }, ref) => /* @__PURE__ */ jsxs11(Root12, { ref, className: cn(avatarVariants({ size }), className), ...props, children: [
    src && /* @__PURE__ */ jsx27(Image, { src, alt, className: "size-full object-cover" }),
    /* @__PURE__ */ jsx27(Fallback, { className: cn(fallbackVariants({ size })), children: fallback.slice(0, 2).toUpperCase() })
  ] })
);
Avatar.displayName = "Avatar";

// src/ui/skeleton/Skeleton.tsx
import { forwardRef as forwardRef27 } from "react";
import { cva as cva17 } from "class-variance-authority";
import { jsx as jsx28 } from "react/jsx-runtime";
var skeletonVariants = cva17("animate-pulse bg-secondary", {
  variants: {
    shape: {
      text: "h-4 w-full rounded-ui-sm",
      circle: "rounded-full",
      rect: "rounded-ui"
    }
  },
  defaultVariants: {
    shape: "text"
  }
});
var Skeleton = forwardRef27(
  ({ className, shape, width, height, style, ...props }, ref) => /* @__PURE__ */ jsx28(
    "div",
    {
      ref,
      className: cn(skeletonVariants({ shape }), className),
      style: { width, height, ...style },
      ...props
    }
  )
);
Skeleton.displayName = "Skeleton";

// src/ui/empty-state/EmptyState.tsx
import { forwardRef as forwardRef28 } from "react";
import { jsx as jsx29, jsxs as jsxs12 } from "react/jsx-runtime";
var EmptyState = forwardRef28(
  ({ icon, title, description, action, className, ...props }, ref) => /* @__PURE__ */ jsxs12(
    "div",
    {
      ref,
      className: cn("flex flex-col items-center justify-center py-12 text-center", className),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx29("div", { className: "mb-4 text-muted", children: icon }),
        /* @__PURE__ */ jsx29("h3", { className: "text-lg font-semibold", children: title }),
        description && /* @__PURE__ */ jsx29("p", { className: "mt-1 text-sm text-muted max-w-sm", children: description }),
        action && /* @__PURE__ */ jsx29("div", { className: "mt-4", children: action })
      ]
    }
  )
);
EmptyState.displayName = "EmptyState";

// src/ui/table/Table.tsx
import { forwardRef as forwardRef29 } from "react";
import { cva as cva18 } from "class-variance-authority";
import { jsx as jsx30 } from "react/jsx-runtime";
var tableVariants = cva18("w-full caption-bottom text-sm", {
  variants: {
    variant: {
      default: "",
      striped: " [&_tbody_tr:nth-child(odd)]:bg-secondary/50"
    },
    density: {
      compact: "",
      normal: ""
    }
  },
  defaultVariants: {
    variant: "default",
    density: "normal"
  }
});
var Table = forwardRef29(
  ({ className, variant, density, ...props }, ref) => /* @__PURE__ */ jsx30("div", { className: "relative w-full", children: /* @__PURE__ */ jsx30("table", { ref, className: cn(tableVariants({ variant, density }), className), ...props }) })
);
Table.displayName = "Table";

// src/ui/table/TableHeader.tsx
import { forwardRef as forwardRef30 } from "react";
import { jsx as jsx31 } from "react/jsx-runtime";
var TableHeader = forwardRef30(
  ({ className, sticky, ...props }, ref) => /* @__PURE__ */ jsx31(
    "thead",
    {
      ref,
      className: cn("[&_tr]:border-b", sticky && "sticky top-0 z-10 bg-bg", className),
      ...props
    }
  )
);
TableHeader.displayName = "TableHeader";

// src/ui/table/TableBody.tsx
import { forwardRef as forwardRef31 } from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
var TableBody = forwardRef31(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx32("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";

// src/ui/table/TableRow.tsx
import { forwardRef as forwardRef32 } from "react";
import { cva as cva19 } from "class-variance-authority";
import { jsx as jsx33 } from "react/jsx-runtime";
var rowVariants = cva19("border-b transition-colors hover:bg-secondary/50 data-[state=selected]:bg-secondary", {
  variants: {
    density: {
      compact: "",
      normal: ""
    }
  },
  defaultVariants: {
    density: "normal"
  }
});
var TableRow = forwardRef32(
  ({ className, density, ...props }, ref) => /* @__PURE__ */ jsx33("tr", { ref, className: cn(rowVariants({ density }), className), ...props })
);
TableRow.displayName = "TableRow";

// src/ui/table/TableHead.tsx
import { forwardRef as forwardRef33 } from "react";
import { cva as cva20 } from "class-variance-authority";
import { jsx as jsx34 } from "react/jsx-runtime";
var headVariants = cva20("font-medium text-muted", {
  variants: {
    density: {
      compact: "h-8 px-2 text-xs",
      normal: "h-10 px-3 text-sm"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    density: "normal",
    align: "left"
  }
});
var TableHead = forwardRef33(
  ({ className, density, align, ...props }, ref) => /* @__PURE__ */ jsx34("th", { ref, className: cn(headVariants({ density, align }), className), ...props })
);
TableHead.displayName = "TableHead";

// src/ui/table/TableCell.tsx
import { forwardRef as forwardRef34 } from "react";
import { cva as cva21 } from "class-variance-authority";
import { jsx as jsx35 } from "react/jsx-runtime";
var cellVariants = cva21("overflow-hidden min-w-0", {
  variants: {
    density: {
      compact: "p-2 text-xs",
      normal: "p-3 text-sm"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    density: "normal",
    align: "left"
  }
});
var TableCell = forwardRef34(
  ({ className, density, align, ...props }, ref) => /* @__PURE__ */ jsx35("td", { ref, className: cn(cellVariants({ density, align }), className), ...props })
);
TableCell.displayName = "TableCell";

// src/ui/patterns/page-shell/PageShell.tsx
import { forwardRef as forwardRef35 } from "react";
import { jsx as jsx36, jsxs as jsxs13 } from "react/jsx-runtime";
var PageShell = forwardRef35(
  ({ title, description, actions, children, className, ...props }, ref) => /* @__PURE__ */ jsxs13("div", { ref, className: cn("flex flex-col gap-6", className), ...props, children: [
    /* @__PURE__ */ jsxs13("div", { className: "flex flex-col gap-tight sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx36("h1", { className: "text-2xl font-bold", children: title }),
        description && /* @__PURE__ */ jsx36("p", { className: "text-sm text-muted mt-1", children: description })
      ] }),
      actions && /* @__PURE__ */ jsx36("div", { className: "flex items-center gap-inline mt-2 sm:mt-0", children: actions })
    ] }),
    /* @__PURE__ */ jsx36("div", { children })
  ] })
);
PageShell.displayName = "PageShell";

// src/ui/patterns/toolbar/Toolbar.tsx
import { forwardRef as forwardRef36 } from "react";
import { jsx as jsx37, jsxs as jsxs14 } from "react/jsx-runtime";
function FilterChip({ label, onRemove }) {
  return /* @__PURE__ */ jsxs14(Badge, { variant: "neutral", style: "soft", className: "gap-1 pr-1", children: [
    /* @__PURE__ */ jsx37("span", { children: label }),
    onRemove && /* @__PURE__ */ jsx37(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: "sm",
        onClick: onRemove,
        "aria-label": `Remove ${label} filter`,
        className: "h-4 w-4 min-h-0 p-0",
        children: /* @__PURE__ */ jsx37("svg", { viewBox: "0 0 8 8", className: "size-2 shrink-0 fill-none stroke-current", children: /* @__PURE__ */ jsx37("path", { d: "M1 1l6 6M7 1L1 7", strokeWidth: "1.3", strokeLinecap: "round" }) })
      }
    )
  ] });
}
var Toolbar = forwardRef36(
  ({ leading, search, filters, actions, resultCount, chips, onClearAll, className, ...props }, ref) => {
    const hasMeta = chips && chips.length > 0 || resultCount != null;
    return /* @__PURE__ */ jsxs14("div", { ref, className: cn("@container/toolbar flex w-full flex-col gap-inline", className), ...props, children: [
      /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-inline @lg/toolbar:flex-row @lg/toolbar:items-center @lg/toolbar:justify-between", children: [
        /* @__PURE__ */ jsxs14("div", { className: "flex min-w-0 flex-1 flex-col gap-inline @lg/toolbar:flex-row @lg/toolbar:flex-wrap @lg/toolbar:items-center @lg/toolbar:gap-stack", children: [
          leading && /* @__PURE__ */ jsx37("div", { className: "flex shrink-0 items-center gap-inline", children: leading }),
          search && /* @__PURE__ */ jsx37("div", { className: "w-full @lg/toolbar:w-auto @lg/toolbar:min-w-56", children: search }),
          filters && /* @__PURE__ */ jsx37("div", { className: "flex flex-wrap items-center gap-inline", children: filters })
        ] }),
        actions && /* @__PURE__ */ jsx37("div", { className: "flex w-full shrink-0 items-center gap-inline @lg/toolbar:w-auto", children: actions })
      ] }),
      hasMeta && /* @__PURE__ */ jsxs14("div", { className: "flex flex-wrap items-center gap-inline border-t border-border pt-inline", children: [
        resultCount != null && /* @__PURE__ */ jsx37("span", { className: "text-xs text-muted", children: resultCount }),
        chips?.map(({ key, ...chip }) => /* @__PURE__ */ jsx37(FilterChip, { ...chip }, key)),
        chips && chips.length > 0 && onClearAll && /* @__PURE__ */ jsx37(Button, { type: "button", variant: "ghost", size: "sm", onClick: onClearAll, className: "h-6 px-2 text-xs", children: "Clear all" })
      ] })
    ] });
  }
);
Toolbar.displayName = "Toolbar";

// src/ui/patterns/stat-card/StatCard.tsx
import { forwardRef as forwardRef37 } from "react";
import { jsx as jsx38, jsxs as jsxs15 } from "react/jsx-runtime";
var StatCard = forwardRef37(
  ({ label, value, delta, icon, className, ...props }, ref) => /* @__PURE__ */ jsx38(Card, { ref, className: cn(className), ...props, children: /* @__PURE__ */ jsx38(CardContent, { className: "pt-4", children: /* @__PURE__ */ jsxs15("div", { className: "flex items-start justify-between", children: [
    /* @__PURE__ */ jsxs15("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx38("p", { className: "text-sm text-muted", children: label }),
      /* @__PURE__ */ jsx38("p", { className: "text-2xl font-bold", children: value }),
      delta && /* @__PURE__ */ jsxs15("p", { className: "flex items-center gap-1 text-sm", children: [
        /* @__PURE__ */ jsxs15(
          Badge,
          {
            variant: delta.direction === "up" ? "success" : "danger",
            style: "soft",
            children: [
              delta.direction === "up" ? "\u2191" : "\u2193",
              " ",
              delta.value
            ]
          }
        ),
        delta.label && /* @__PURE__ */ jsx38("span", { className: "text-muted", children: delta.label })
      ] })
    ] }),
    icon && /* @__PURE__ */ jsx38("div", { className: "text-muted", children: icon })
  ] }) }) })
);
StatCard.displayName = "StatCard";

// src/ui/separator/Separator.tsx
import { forwardRef as forwardRef38 } from "react";
import { cva as cva22 } from "class-variance-authority";
import { jsx as jsx39 } from "react/jsx-runtime";
var separatorVariants = cva22("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});
var Separator2 = forwardRef38(
  ({ className, orientation, ...props }, ref) => /* @__PURE__ */ jsx39(
    "div",
    {
      ref,
      role: "separator",
      "aria-orientation": orientation === "vertical" ? "vertical" : void 0,
      className: cn(separatorVariants({ orientation }), className),
      ...props
    }
  )
);
Separator2.displayName = "Separator";

// src/ui/progress/Progress.tsx
import { forwardRef as forwardRef39 } from "react";
import { cva as cva23 } from "class-variance-authority";
import { jsx as jsx40, jsxs as jsxs16 } from "react/jsx-runtime";
var barVariants = cva23("h-full rounded-full transition-all duration-[var(--duration-slow)] ease-[var(--ease-standard)]", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Progress = forwardRef39(
  ({ value, variant, label, className, ...props }, ref) => /* @__PURE__ */ jsxs16("div", { className: cn("flex flex-col gap-tight", className), ...props, children: [
    label && /* @__PURE__ */ jsxs16("div", { className: "flex justify-between text-xs", children: [
      /* @__PURE__ */ jsx40("span", { className: "text-muted", children: label }),
      /* @__PURE__ */ jsxs16("span", { className: "text-fg font-medium", children: [
        Math.round(value),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx40("div", { ref, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100, className: "h-2 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsx40(
      "div",
      {
        className: cn(barVariants({ variant })),
        style: { width: `${Math.min(100, Math.max(0, value))}%` }
      }
    ) })
  ] })
);
Progress.displayName = "Progress";

// src/ui/status-dot/StatusDot.tsx
import { forwardRef as forwardRef40 } from "react";
import { cva as cva24 } from "class-variance-authority";
import { jsx as jsx41 } from "react/jsx-runtime";
var statusDotVariants = cva24("inline-block shrink-0 rounded-full", {
  variants: {
    variant: {
      neutral: "bg-muted",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
      info: "bg-primary"
    },
    size: {
      sm: "size-2",
      md: "size-3"
    }
  },
  defaultVariants: {
    variant: "neutral",
    size: "md"
  }
});
var StatusDot = forwardRef40(
  ({ className, variant, size, pulse, ...props }, ref) => /* @__PURE__ */ jsx41(
    "span",
    {
      ref,
      className: cn(
        statusDotVariants({ variant, size }),
        pulse && "animate-pulse",
        className
      ),
      ...props
    }
  )
);
StatusDot.displayName = "StatusDot";

// src/ui/kbd/Kbd.tsx
import { forwardRef as forwardRef41 } from "react";
import { jsx as jsx42 } from "react/jsx-runtime";
var Kbd = forwardRef41(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx42(
    "kbd",
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center rounded-ui-sm border border-border bg-secondary px-1.5 py-[var(--density-chip-py)] min-h-[var(--density-chip-min-h)] text-xs font-mono text-muted shadow-card",
        className
      ),
      ...props
    }
  )
);
Kbd.displayName = "Kbd";

// src/ui/cell-type/CellType.tsx
import { useCallback as useCallback6, useState as useState5, useRef as useRef4, useLayoutEffect as useLayoutEffect2 } from "react";

// src/ui/cell-type/CellType.date-displays.tsx
import { jsx as jsx43, jsxs as jsxs17 } from "react/jsx-runtime";
function relativeTime(d) {
  const diff = Date.now() - d.getTime();
  const sec = Math.floor(diff / 1e3);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  const month = Math.floor(day / 30);
  const year = Math.floor(month / 12);
  if (sec < 60) return "just now";
  if (min < 2) return "1 minute ago";
  if (min < 60) return `${min} minutes ago`;
  if (hr < 2) return "1 hour ago";
  if (hr < 24) return `${hr} hours ago`;
  if (day < 2) return "1 day ago";
  if (day < 30) return `${day} days ago`;
  if (month < 2) return "1 month ago";
  if (month < 12) return `${month} months ago`;
  if (year < 2) return "1 year ago";
  return `${year} years ago`;
}
function parseDate(value) {
  const d = new Date(String(value));
  return isNaN(d.getTime()) ? null : d;
}
function DateHumanDisplay({ value }) {
  const d = parseDate(value);
  if (!d) return /* @__PURE__ */ jsx43("span", { className: "text-muted", children: "\u2014" });
  return /* @__PURE__ */ jsx43("span", { title: d.toLocaleString(), className: "cursor-help truncate inline-block max-w-full align-middle font-medium text-primary", children: relativeTime(d) });
}
function DateSystemDisplay({ value, dateFormat }) {
  const d = parseDate(value);
  if (!d) return /* @__PURE__ */ jsx43("span", { className: "text-muted", children: "\u2014" });
  const fmt = dateFormat ?? { year: "numeric", month: "short", day: "numeric" };
  const parts = new Intl.DateTimeFormat(void 0, fmt).formatToParts(d);
  return /* @__PURE__ */ jsx43("span", { className: "truncate inline-block max-w-full align-middle tabular-nums", children: parts.map((part, i) => {
    if (part.type === "year" || part.type === "weekday")
      return /* @__PURE__ */ jsx43("span", { className: "text-muted text-xs", children: part.value }, i);
    if (part.type === "literal")
      return /* @__PURE__ */ jsx43("span", { children: part.value }, i);
    return /* @__PURE__ */ jsx43("span", { className: "font-medium", children: part.value }, i);
  }) });
}
function tzOffset(d) {
  const o = -d.getTimezoneOffset();
  const h = Math.floor(Math.abs(o) / 60);
  const m = Math.abs(o) % 60;
  return `${o >= 0 ? "+" : "-"}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function DateTimeTzDisplay({ value }) {
  const d = parseDate(value);
  if (!d) return /* @__PURE__ */ jsx43("span", { className: "text-muted", children: "\u2014" });
  const iso = d.toISOString();
  const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const offset2 = tzOffset(d);
  const meta = `${iso}
${tzName} (${offset2})
${relativeTime(d)}`;
  const dateParts = new Intl.DateTimeFormat(void 0, { month: "short", day: "2-digit", year: "numeric" }).formatToParts(d);
  const timeStr = d.toLocaleString(void 0, { hour: "2-digit", minute: "2-digit" });
  return /* @__PURE__ */ jsxs17("span", { title: meta, className: "cursor-help whitespace-nowrap inline-flex items-center gap-1.5 max-w-full min-w-0 tabular-nums align-middle", children: [
    /* @__PURE__ */ jsxs17("span", { className: "min-w-0 truncate text-xs/none", children: [
      /* @__PURE__ */ jsx43("span", { className: "text-muted", children: dateParts.map((part, i) => {
        if (part.type === "year")
          return /* @__PURE__ */ jsx43("span", { className: "text-muted", children: part.value }, i);
        if (part.type === "literal")
          return /* @__PURE__ */ jsx43("span", { children: part.value }, i);
        return /* @__PURE__ */ jsx43("span", { className: "font-medium", children: part.value }, i);
      }) }),
      /* @__PURE__ */ jsx43("span", { className: "ml-1.5 font-semibold", children: timeStr })
    ] }),
    /* @__PURE__ */ jsx43("span", { className: "inline-flex shrink-0 items-center rounded-sm px-1 py-0.5 text-xs/none leading-none bg-muted/10 text-muted font-mono", children: offset2 })
  ] });
}

// src/ui/cell-type/CellType.numeric-displays.tsx
import { jsx as jsx44, jsxs as jsxs18 } from "react/jsx-runtime";
function numberParts(value, opts) {
  const n = Number(value);
  if (isNaN(n)) return null;
  return { n, parts: new Intl.NumberFormat(void 0, opts).formatToParts(n) };
}
function styledParts(parts, overrides) {
  return parts.map((p, i) => {
    const cls = overrides?.[p.type];
    return cls ? /* @__PURE__ */ jsx44("span", { className: cls, children: p.value }, i) : p.value;
  });
}
var common = "font-mono tabular-nums truncate inline-block max-w-full align-middle";
var BYTE_UNITS = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte"];
var BYTE_SHORT = ["B", "KB", "MB", "GB", "TB"];
function byteUnitIndex(unit) {
  if (!unit) return void 0;
  const u = unit.toUpperCase();
  for (let i = 0; i < BYTE_SHORT.length; i++) {
    if (BYTE_SHORT[i] === u || BYTE_UNITS[i] === u.toLowerCase()) return i;
  }
  return void 0;
}
function NumberDisplay({ value, compact, fractionDigits }) {
  const opts = fractionDigits != null ? { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits } : {};
  if (compact) {
    opts.notation = "compact";
    opts.maximumFractionDigits = 1;
  }
  const r = numberParts(Number(value), opts);
  if (!r) return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: "\u2014" });
  return /* @__PURE__ */ jsx44("span", { className: common, children: styledParts(r.parts, { integer: "font-medium", fraction: "text-muted text-xs", decimal: "text-muted", group: "text-muted" }) });
}
function PercentageDisplay({ value, fractionDigits }) {
  const n = Number(value);
  if (isNaN(n)) return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: "\u2014" });
  const maxFrac = fractionDigits ?? 1;
  const parts = new Intl.NumberFormat(void 0, { style: "percent", minimumFractionDigits: maxFrac, maximumFractionDigits: maxFrac }).formatToParts(n);
  return /* @__PURE__ */ jsx44("span", { className: common, children: styledParts(parts, { integer: "font-medium", fraction: "text-muted text-xs", decimal: "text-muted", percentSign: "text-muted text-xs" }) });
}
function BytesDisplay({ value, compact, displayUnit }) {
  const n = Number(value);
  if (isNaN(n)) return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: "\u2014" });
  const forcedIdx = byteUnitIndex(displayUnit);
  let i = 0, s = n;
  if (forcedIdx != null) {
    i = forcedIdx;
    s = n / Math.pow(1024, i);
  } else {
    while (s >= 1024 && i < BYTE_UNITS.length - 1) {
      s /= 1024;
      i++;
    }
  }
  const opts = { style: "unit", unit: BYTE_UNITS[i], unitDisplay: "short", minimumFractionDigits: 1, maximumFractionDigits: 2 };
  if (compact) opts.notation = "compact";
  const parts = new Intl.NumberFormat(void 0, opts).formatToParts(s);
  const unitLabel = parts.find((p) => p.type === "unit")?.value ?? BYTE_SHORT[i];
  const nonUnit = parts.filter((p) => p.type !== "unit");
  return /* @__PURE__ */ jsxs18("span", { className: common, children: [
    styledParts(nonUnit, { integer: "font-medium", fraction: "text-muted text-xs", decimal: "text-muted", group: "text-muted" }),
    /* @__PURE__ */ jsxs18("span", { className: "text-muted text-xs", children: [
      " ",
      unitLabel
    ] })
  ] });
}
function DurationDisplay({ value }) {
  const sec = Number(value);
  if (isNaN(sec)) return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: "\u2014" });
  const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = Math.round(sec % 60);
  const segs = [];
  if (h > 0) segs.push({ v: String(h), u: "h" });
  if (m > 0) segs.push({ v: String(m), u: "m" });
  if (s > 0 || segs.length === 0) segs.push({ v: String(s), u: "s" });
  return /* @__PURE__ */ jsx44("span", { className: common, children: segs.map((seg, i) => /* @__PURE__ */ jsxs18("span", { children: [
    i > 0 && /* @__PURE__ */ jsx44("span", { className: "text-muted text-xs", children: " " }),
    /* @__PURE__ */ jsxs18("span", { className: i === 0 ? "font-medium" : "text-muted text-xs", children: [
      seg.v,
      seg.u
    ] })
  ] }, i)) });
}
function CurrencyDisplay({ value, compact, fractionDigits, currency }) {
  const minFrac = fractionDigits ?? 2;
  const maxFrac = fractionDigits ?? 2;
  const r = numberParts(Number(value), { style: "currency", currency: currency ?? "USD", minimumFractionDigits: minFrac, maximumFractionDigits: maxFrac, ...compact ? { notation: "compact" } : {} });
  if (!r) return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: "\u2014" });
  return /* @__PURE__ */ jsx44("span", { className: common, children: r.parts.map((p, i) => {
    if (p.type === "currency") return /* @__PURE__ */ jsx44("span", { className: "text-muted text-xs", children: p.value }, i);
    if (p.type === "fraction") return /* @__PURE__ */ jsx44("span", { className: "text-muted text-xs", children: p.value }, i);
    if (p.type === "decimal") return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: p.value }, i);
    if (p.type === "group") return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: p.value }, i);
    if (p.type === "literal" && compact) return /* @__PURE__ */ jsx44("span", { className: "text-muted text-xs", children: p.value }, i);
    return /* @__PURE__ */ jsx44("span", { className: "font-medium", children: p.value }, i);
  }) });
}
function SignedDisplay({ value }) {
  const n = Number(value);
  if (isNaN(n)) return /* @__PURE__ */ jsx44("span", { className: "text-muted", children: "\u2014" });
  const positive = n > 0;
  const negative = n < 0;
  const color = positive ? "text-success" : negative ? "text-danger" : "text-muted";
  const abs = Math.abs(n);
  const parts = new Intl.NumberFormat(void 0, { maximumFractionDigits: 2 }).formatToParts(abs);
  return /* @__PURE__ */ jsx44("span", { className: `${common} ${color}`, children: /* @__PURE__ */ jsxs18("span", { className: "inline-flex items-center gap-0.5", children: [
    positive && /* @__PURE__ */ jsx44("svg", { viewBox: "0 0 12 12", className: "size-icon-sm fill-current", children: /* @__PURE__ */ jsx44("path", { d: "M6 2v8M2 6h8", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) }),
    negative && /* @__PURE__ */ jsx44("svg", { viewBox: "0 0 12 12", className: "size-icon-sm fill-current", children: /* @__PURE__ */ jsx44("path", { d: "M2 6h8", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) }),
    /* @__PURE__ */ jsx44("span", { children: styledParts(parts, { integer: "font-semibold", fraction: "text-muted text-xs", decimal: "text-muted", group: "text-muted" }) })
  ] }) });
}

// src/ui/cell-type/CellType.complex-displays.tsx
import { useRef as useRef3, useLayoutEffect, useState as useState4 } from "react";

// src/ui/code-block/CodeBlock.tsx
import { forwardRef as forwardRef42, useState as useState2, useCallback as useCallback3, useMemo } from "react";
import { cva as cva25 } from "class-variance-authority";

// src/ui/code-block/CodeBlock.highlight.tsx
import { Fragment, jsx as jsx45 } from "react/jsx-runtime";
var KEYWORDS = /* @__PURE__ */ new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "let",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "undefined",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "async",
  "await",
  "of",
  "from",
  "as",
  "type",
  "interface",
  "implements",
  "namespace",
  "abstract",
  "static",
  "private",
  "protected",
  "public",
  "readonly",
  "get",
  "set",
  "keyof",
  "infer",
  "never",
  "any",
  "unknown",
  "boolean",
  "string",
  "number",
  "symbol",
  "object"
]);
function skipWs(code, i) {
  let j = i;
  while (j < code.length && /\s/.test(code[j])) j++;
  return j;
}
function tokenizeJsTs(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    if (/\s/.test(code[i])) {
      const j = skipWs(code, i);
      if (j > i) tokens.push({ text: code.slice(i, j), className: "whitespace" });
      i = j;
      continue;
    }
    if (code[i] === "/" && code[i + 1] === "/") {
      let j = i;
      while (j < code.length && code[j] !== "\n") j++;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code[i] === "/" && code[i + 1] === "*") {
      let j = i + 2;
      while (j < code.length && !(code[j] === "*" && code[j + 1] === "/")) j++;
      j += 2;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code[i] === "`") {
      let j = i + 1;
      while (j < code.length && code[j] !== "`") {
        if (code[j] === "\\") j++;
        j++;
      }
      j++;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== q) {
        if (code[j] === "\\") j++;
        j++;
      }
      j++;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (/[0-9]/.test(code[i]) || code[i] === "." && /[0-9]/.test(code[i + 1] || "")) {
      let j = i;
      if (code[j] === "0" && /[xX]/.test(code[j + 1] || "")) {
        j += 2;
        while (j < code.length && /[0-9a-fA-F]/.test(code[j])) j++;
      } else if (code[j] === "0" && /[bB]/.test(code[j + 1] || "")) {
        j += 2;
        while (j < code.length && /[01]/.test(code[j])) j++;
      } else {
        while (j < code.length && /[0-9.eE+\-_]/.test(code[j])) j++;
      }
      tokens.push({ text: code.slice(i, j), className: "number" });
      i = j;
      continue;
    }
    if (/[a-zA-Z_$]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_$]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({ text: word, className: KEYWORDS.has(word) ? "keyword" : /^[A-Z]/.test(word) ? "type" : "identifier" });
      i = j;
      continue;
    }
    const multiChar = ["===", "!==", "==", "!=", "<=", ">=", "&&", "||", "??", "=>", "++", "--", "**", "+=", "-=", "*=", "/=", "%=", "<<", ">>", "..."];
    let matched = false;
    for (const op of multiChar) {
      if (code.startsWith(op, i)) {
        tokens.push({ text: op, className: "operator" });
        i += op.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    tokens.push({ text: code[i], className: "punctuation" });
    i++;
  }
  return tokens;
}
function tokenizeJson(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    if (/\s/.test(code[i])) {
      const j = skipWs(code, i);
      if (j > i) tokens.push({ text: code.slice(i, j), className: "whitespace" });
      i = j;
      continue;
    }
    if (code[i] === '"') {
      let j = i + 1;
      while (j < code.length && code[j] !== '"') {
        if (code[j] === "\\") j++;
        j++;
      }
      j++;
      tokens.push({ text: code.slice(i, j), className: code.slice(j).trimStart().startsWith(":") ? "key" : "string" });
      i = j;
      continue;
    }
    if (/[0-9]/.test(code[i]) || code[i] === "-" && /[0-9]/.test(code[i + 1] || "")) {
      let j = i;
      if (code[j] === "-") j++;
      while (j < code.length && /[0-9.eE+\-]/.test(code[j])) j++;
      tokens.push({ text: code.slice(i, j), className: "number" });
      i = j;
      continue;
    }
    const words = { true: 4, false: 5, null: 4 };
    for (const [w, len] of Object.entries(words)) {
      if (code.startsWith(w, i)) {
        tokens.push({ text: w, className: "keyword" });
        i += len;
        break;
      }
    }
    if (i >= code.length || words[code[i]]) continue;
    tokens.push({ text: code[i], className: "punctuation" });
    i++;
  }
  return tokens;
}
function tokenizeBash(code) {
  const tokens = [];
  const lines = code.split("\n");
  const add = (text, cls) => {
    if (text) tokens.push({ text, className: cls });
  };
  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    let i = 0;
    while (i < line.length) {
      if (line[i] === "#") {
        add(line.slice(i), "comment");
        i = line.length;
        continue;
      }
      if (line[i] === '"' || line[i] === "'") {
        const q = line[i];
        let j = i + 1;
        while (j < line.length && line[j] !== q) {
          if (line[j] === "\\") j++;
          j++;
        }
        j++;
        add(line.slice(i, j), "string");
        i = j;
        continue;
      }
      if (line[i] === "$" && line[i + 1] === "{") {
        let j = i + 2, depth = 1;
        while (j < line.length && depth > 0) {
          if (line[j] === "{") depth++;
          if (line[j] === "}") depth--;
          j++;
        }
        add(line.slice(i, j), "keyword");
        i = j;
        continue;
      }
      if (line[i] === "$" && /[a-zA-Z_]/.test(line[i + 1] || "")) {
        let j = i + 1;
        while (j < line.length && /[a-zA-Z0-9_]/.test(line[j])) j++;
        add(line.slice(i, j), "keyword");
        i = j;
        continue;
      }
      add(line[i], "punctuation");
      i++;
    }
    if (li < lines.length - 1) add("\n", "whitespace");
  }
  return tokens;
}
var CSS_PSEUDO = /:(?:active|after|before|checked|disabled|empty|enabled|first-child|first-letter|first-line|focus|hover|invalid|last-child|link|nth-child|nth-last-child|required|root|target|valid|visited)\b/;
function tokenizeCss(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    if (/\s/.test(code[i])) {
      const j = skipWs(code, i);
      if (j > i) tokens.push({ text: code.slice(i, j), className: "whitespace" });
      i = j;
      continue;
    }
    if (code[i] === "/" && code[i + 1] === "*") {
      let j = i + 2;
      while (j < code.length && !(code[j] === "*" && code[j + 1] === "/")) j++;
      j += 2;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== q) {
        if (code[j] === "\\") j++;
        j++;
      }
      j++;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (/[0-9]/.test(code[i]) || code[i] === "." && /[0-9]/.test(code[i + 1] || "")) {
      let j = i;
      while (j < code.length && /[0-9.eE%pxsvw]/.test(code[j])) j++;
      tokens.push({ text: code.slice(i, j), className: "number" });
      i = j;
      continue;
    }
    if (code[i] === "@") {
      let j = i + 1;
      while (j < code.length && /[a-zA-Z0-9_-]/.test(code[j])) j++;
      tokens.push({ text: code.slice(i, j), className: "keyword" });
      i = j;
      continue;
    }
    if (code[i] === "#" || code[i] === "." && /[a-zA-Z0-9]/.test(code[i + 1] || "")) {
      let j = i + 1;
      while (j < code.length && /[a-zA-Z0-9_-]/.test(code[j])) j++;
      tokens.push({ text: code.slice(i, j), className: "tag" });
      i = j;
      continue;
    }
    if (CSS_PSEUDO.test(code.slice(i))) {
      const m = CSS_PSEUDO.exec(code.slice(i));
      tokens.push({ text: m[0], className: "type" });
      i += m[0].length;
      continue;
    }
    if (/[a-zA-Z_-]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_-]/.test(code[j])) j++;
      const word = code.slice(i, j);
      const after = code.slice(j).trimStart();
      tokens.push({ text: word, className: after.startsWith(":") ? "key" : "tag" });
      i = j;
      continue;
    }
    tokens.push({ text: code[i], className: "punctuation" });
    i++;
  }
  return tokens;
}
function tokenizeHtml(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    if (code.startsWith("<!--", i)) {
      let j = i + 4;
      while (j < code.length && !code.startsWith("-->", j)) j++;
      j += 3;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code[i] === "<" && (code[i + 1] === "!" || code[i + 1] === "?")) {
      let j = i;
      while (j < code.length && code[j] !== ">") j++;
      j++;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code[i] === "<" && code[i + 1] === "/") {
      tokens.push({ text: "</", className: "punctuation" });
      i += 2;
      continue;
    }
    if (code[i] === "<") {
      tokens.push({ text: "<", className: "punctuation" });
      i++;
      if (/[a-zA-Z]/.test(code[i] || "")) {
        let j = i;
        while (j < code.length && /[a-zA-Z0-9_-]/.test(code[j])) j++;
        tokens.push({ text: code.slice(i, j), className: "tag" });
        i = j;
      }
      continue;
    }
    if (code[i] === "/" && code[i + 1] === ">") {
      tokens.push({ text: "/>", className: "punctuation" });
      i += 2;
      continue;
    }
    if (code[i] === ">") {
      tokens.push({ text: ">", className: "punctuation" });
      i++;
      continue;
    }
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== q) j++;
      j++;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_-]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({ text: word, className: code.slice(j).trimStart().startsWith("=") ? "key" : "identifier" });
      i = j;
      continue;
    }
    if (/\s/.test(code[i])) {
      const j = skipWs(code, i);
      if (j > i) tokens.push({ text: code.slice(i, j), className: "whitespace" });
      i = j;
      continue;
    }
    tokens.push({ text: code[i], className: "punctuation" });
    i++;
  }
  return tokens;
}
var PY_KEYWORDS = /* @__PURE__ */ new Set([
  "and",
  "as",
  "assert",
  "async",
  "await",
  "break",
  "class",
  "continue",
  "def",
  "del",
  "elif",
  "else",
  "except",
  "False",
  "finally",
  "for",
  "from",
  "global",
  "if",
  "import",
  "in",
  "is",
  "lambda",
  "None",
  "nonlocal",
  "not",
  "or",
  "pass",
  "raise",
  "return",
  "True",
  "try",
  "while",
  "with",
  "yield"
]);
function tokenizePython(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    if (code[i] === "#") {
      let j = i;
      while (j < code.length && code[j] !== "\n") j++;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code.startsWith("'''", i) || code.startsWith('"""', i)) {
      const q = code.slice(i, i + 3);
      let j = i + 3;
      while (j < code.length && !code.startsWith(q, j)) j++;
      j += 3;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (code[i] === '"' || code[i] === "'") {
      const q = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== q) {
        if (code[j] === "\\") j++;
        j++;
      }
      j++;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (/[fF]/.test(code[i]) && (code[i + 1] === '"' || code[i + 1] === "'")) {
      const q = code[i + 1];
      let j = i + 2;
      while (j < code.length && code[j] !== q) {
        if (code[j] === "\\") j++;
        j++;
      }
      j++;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (/[0-9]/.test(code[i]) || code[i] === "." && /[0-9]/.test(code[i + 1] || "")) {
      let j = i;
      if (code[j] === "0" && /[xXbB]/.test(code[j + 1] || "")) {
        j += 2;
        while (j < code.length && /[0-9a-fA-F_]/.test(code[j])) j++;
      } else {
        while (j < code.length && /[0-9.eE_jJ]/.test(code[j])) j++;
      }
      tokens.push({ text: code.slice(i, j), className: "number" });
      i = j;
      continue;
    }
    if (code[i] === "@") {
      let j = i + 1;
      while (j < code.length && /[a-zA-Z0-9_.]/.test(code[j])) j++;
      tokens.push({ text: code.slice(i, j), className: "type" });
      i = j;
      continue;
    }
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({ text: word, className: PY_KEYWORDS.has(word) ? "keyword" : /^[A-Z]/.test(word) ? "type" : "identifier" });
      i = j;
      continue;
    }
    if (/\s/.test(code[i])) {
      const j = skipWs(code, i);
      if (j > i) tokens.push({ text: code.slice(i, j), className: "whitespace" });
      i = j;
      continue;
    }
    tokens.push({ text: code[i], className: "punctuation" });
    i++;
  }
  return tokens;
}
function tokenizeYaml(code) {
  const tokens = [];
  const lines = code.split("\n");
  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    let i = 0;
    if (/^\s+/.test(line)) {
      const m = line.match(/^\s+/);
      tokens.push({ text: m[0], className: "whitespace" });
      i = m[0].length;
    }
    if (i >= line.length) {
      if (li < lines.length - 1) tokens.push({ text: "\n", className: "whitespace" });
      continue;
    }
    if (line[i] === "#") {
      tokens.push({ text: line.slice(i), className: "comment" });
      if (li < lines.length - 1) tokens.push({ text: "\n", className: "whitespace" });
      continue;
    }
    if (line[i] === "-" && (line[i + 1] === " " || i + 1 >= line.length)) {
      tokens.push({ text: "-", className: "punctuation" });
      i++;
      while (i < line.length && line[i] === " ") i++;
    }
    if (/[a-zA-Z_"]/.test(line[i])) {
      if (line[i] === '"' || line[i] === "'") {
        const q = line[i];
        let j = i + 1;
        while (j < line.length && line[j] !== q) j++;
        j++;
        tokens.push({ text: line.slice(i, j), className: "key" });
        i = j;
      } else {
        let j = i;
        while (j < line.length && !/[:\s#]/.test(line[j])) j++;
        const word = line.slice(i, j);
        const after = line.slice(j).trimStart();
        tokens.push({ text: word, className: after.startsWith(":") ? "key" : "string" });
        i = j;
      }
      while (i < line.length && /[:\s]/.test(line[i])) {
        tokens.push({ text: line[i], className: line[i] === ":" ? "punctuation" : "whitespace" });
        i++;
      }
      if (i < line.length && line[i] !== "#") {
        if (line[i] === '"' || line[i] === "'") {
          const q = line[i];
          let j = i + 1;
          while (j < line.length && line[j] !== q) {
            if (line[j] === "\\") j++;
            j++;
          }
          j++;
          tokens.push({ text: line.slice(i, j), className: "string" });
          i = j;
        } else if (/true|false|yes|no|null|on|off/i.test(line.slice(i).split(/#|\s/)[0])) {
          const w = line.slice(i).split(/#|\s/)[0];
          tokens.push({ text: w, className: "keyword" });
          i += w.length;
        } else if (/[0-9]/.test(line[i]) || line[i] === "-") {
          let j = i;
          if (line[j] === "-") j++;
          while (j < line.length && /[0-9.eE]/.test(line[j])) j++;
          tokens.push({ text: line.slice(i, j), className: "number" });
          i = j;
        } else {
          let j = i;
          while (j < line.length && line[j] !== "#") j++;
          tokens.push({ text: line.slice(i, j).trimEnd(), className: "string" });
          i = j;
        }
      }
      if (i < line.length && line[i] === "#") tokens.push({ text: line.slice(i), className: "comment" });
      if (li < lines.length - 1) tokens.push({ text: "\n", className: "whitespace" });
      continue;
    }
    if (line[i] === "|" || line[i] === ">") {
      tokens.push({ text: line[i], className: "operator" });
      i++;
    }
    while (i < line.length) {
      tokens.push({ text: line[i], className: "punctuation" });
      i++;
    }
    if (li < lines.length - 1) tokens.push({ text: "\n", className: "whitespace" });
  }
  return tokens;
}
var SQL_KEYWORDS = /* @__PURE__ */ new Set([
  "SELECT",
  "FROM",
  "WHERE",
  "INSERT",
  "INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE",
  "CREATE",
  "TABLE",
  "ALTER",
  "DROP",
  "INDEX",
  "VIEW",
  "JOIN",
  "LEFT",
  "RIGHT",
  "INNER",
  "OUTER",
  "FULL",
  "ON",
  "AS",
  "AND",
  "OR",
  "NOT",
  "NULL",
  "IS",
  "IN",
  "BETWEEN",
  "LIKE",
  "ORDER",
  "BY",
  "ASC",
  "DESC",
  "GROUP",
  "HAVING",
  "LIMIT",
  "OFFSET",
  "UNION",
  "ALL",
  "DISTINCT",
  "CASE",
  "WHEN",
  "THEN",
  "ELSE",
  "END",
  "EXISTS",
  "PRIMARY",
  "KEY",
  "FOREIGN",
  "REFERENCES",
  "CONSTRAINT",
  "DEFAULT",
  "CHECK",
  "INT",
  "INTEGER",
  "VARCHAR",
  "TEXT",
  "BOOLEAN",
  "FLOAT",
  "DOUBLE",
  "DECIMAL",
  "TIMESTAMP",
  "DATE",
  "TRUE",
  "FALSE",
  "COUNT",
  "SUM",
  "AVG",
  "MAX",
  "MIN",
  "TRUNCATE",
  "IF",
  "BEGIN",
  "COMMIT",
  "ROLLBACK",
  "GRANT",
  "REVOKE",
  "WITH",
  "RECURSIVE"
]);
function tokenizeSql(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    if (/\s/.test(code[i])) {
      const j = skipWs(code, i);
      if (j > i) tokens.push({ text: code.slice(i, j), className: "whitespace" });
      i = j;
      continue;
    }
    if (code[i] === "-" && code[i + 1] === "-") {
      let j = i;
      while (j < code.length && code[j] !== "\n") j++;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code[i] === "/" && code[i + 1] === "*") {
      let j = i + 2;
      while (j < code.length && !(code[j] === "*" && code[j + 1] === "/")) j++;
      j += 2;
      tokens.push({ text: code.slice(i, j), className: "comment" });
      i = j;
      continue;
    }
    if (code[i] === "'") {
      let j = i + 1;
      while (j < code.length && code[j] !== "'") {
        if (code[j] === "\\") j++;
        j++;
      }
      j++;
      tokens.push({ text: code.slice(i, j), className: "string" });
      i = j;
      continue;
    }
    if (/[0-9]/.test(code[i]) || code[i] === "." && /[0-9]/.test(code[i + 1] || "")) {
      let j = i;
      while (j < code.length && /[0-9.eE]/.test(code[j])) j++;
      tokens.push({ text: code.slice(i, j), className: "number" });
      i = j;
      continue;
    }
    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({ text: word, className: SQL_KEYWORDS.has(word.toUpperCase()) ? "keyword" : "identifier" });
      i = j;
      continue;
    }
    tokens.push({ text: code[i], className: "punctuation" });
    i++;
  }
  return tokens;
}
var TOKENIZERS = {
  js: tokenizeJsTs,
  jsx: tokenizeJsTs,
  ts: tokenizeJsTs,
  tsx: tokenizeJsTs,
  javascript: tokenizeJsTs,
  typescript: tokenizeJsTs,
  json: tokenizeJson,
  tsconfig: tokenizeJson,
  bash: tokenizeBash,
  sh: tokenizeBash,
  shell: tokenizeBash,
  css: tokenizeCss,
  scss: tokenizeCss,
  less: tokenizeCss,
  html: tokenizeHtml,
  htm: tokenizeHtml,
  xml: tokenizeHtml,
  python: tokenizePython,
  py: tokenizePython,
  yaml: tokenizeYaml,
  yml: tokenizeYaml,
  sql: tokenizeSql,
  pgsql: tokenizeSql,
  mysql: tokenizeSql
};
function tokenize(code, language) {
  const lang = language?.toLowerCase();
  if (!lang || !TOKENIZERS[lang]) return null;
  return TOKENIZERS[lang](code);
}
function splitTokensByLine(tokens) {
  const result = [];
  let current = [];
  for (const t of tokens) {
    if (t.text === "\n") {
      result.push(current);
      current = [];
      continue;
    }
    if (t.text.includes("\n")) {
      const parts = t.text.split("\n");
      for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
          result.push(current);
          current = [];
        }
        if (parts[i]) current.push({ text: parts[i], className: t.className });
      }
    } else {
      current.push(t);
    }
  }
  if (current.length > 0) result.push(current);
  return result;
}
function renderHighlightedLine(tokens) {
  return /* @__PURE__ */ jsx45(Fragment, { children: tokens.map((t, i) => /* @__PURE__ */ jsx45("span", { className: t.className === "whitespace" ? void 0 : `hl-${t.className}`, children: t.text }, i)) });
}

// src/ui/code-block/CodeBlock.tsx
import { Fragment as Fragment2, jsx as jsx46, jsxs as jsxs19 } from "react/jsx-runtime";
var codeBlockVariants = cva25(
  "group relative overflow-clip rounded-ui border border-border bg-code-bg text-sm flex flex-col",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-card"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function CopyIcon() {
  return /* @__PURE__ */ jsxs19("svg", { viewBox: "0 0 12 12", className: "size-3.5 fill-code-muted", children: [
    /* @__PURE__ */ jsx46("path", { d: "M3 1h6l2 2v6a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1zm0 1v7h7V3.5L8.5 2H3z" }),
    /* @__PURE__ */ jsx46("path", { d: "M2 4H1v6a1 1 0 001 1h6v-1" })
  ] });
}
function CheckIcon() {
  return /* @__PURE__ */ jsx46("svg", { viewBox: "0 0 12 12", className: "size-3.5 fill-success", children: /* @__PURE__ */ jsx46("path", { d: "M2 6l3 3 5-5", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) });
}
function CopyButton({ copied, onCopy }) {
  return /* @__PURE__ */ jsxs19(
    "button",
    {
      type: "button",
      onClick: onCopy,
      className: cn(
        "flex items-center gap-1 rounded-ui-sm px-1.5 h-6 shrink-0",
        "text-xs text-code-muted hover:text-code-fg hover:bg-code-bg/80 border border-transparent hover:border-border",
        "opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-[var(--duration-fast)]",
        "outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring cursor-pointer",
        copied && "opacity-100"
      ),
      title: "Copy code",
      children: [
        copied ? /* @__PURE__ */ jsx46(CheckIcon, {}) : /* @__PURE__ */ jsx46(CopyIcon, {}),
        /* @__PURE__ */ jsx46("span", { className: cn(copied && "text-success"), children: copied ? "Copied" : "Copy" })
      ]
    }
  );
}
var CodeBlock = forwardRef42(
  ({ className, variant, code, language, header, wrap = true, showLineNumbers = false, highlight = false, highlightLines, highlightColor = "primary", highlightGroups, highlightRanges, ...props }, ref) => {
    const [copied, setCopied] = useState2(false);
    const copy = useCallback3(() => {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }, [code]);
    const lines = useMemo(() => code.split("\n"), [code]);
    const hasHeader = Boolean(header || language);
    const showGutter = showLineNumbers || highlightLines != null && highlightLines.length > 0 || highlightGroups != null && highlightGroups.length > 0 || highlightRanges != null && highlightRanges.length > 0;
    const highlighted = useMemo(() => {
      if (!highlight) return null;
      return tokenize(code, language);
    }, [code, language, highlight]);
    const HIGHLIGHT_BG = {
      primary: "bg-primary/10",
      warning: "bg-warning/15",
      success: "bg-success/10",
      danger: "bg-danger/10"
    };
    const lineColor = useMemo(() => {
      const map = /* @__PURE__ */ new Map();
      if (highlightGroups) {
        for (const g of highlightGroups) {
          const cls = HIGHLIGHT_BG[g.color ?? "primary"] ?? HIGHLIGHT_BG.primary;
          for (const ln of g.lines) map.set(ln, cls);
        }
      } else if (highlightLines) {
        const cls = HIGHLIGHT_BG[highlightColor ?? "primary"] ?? HIGHLIGHT_BG.primary;
        for (const ln of highlightLines) map.set(ln, cls);
      }
      return map;
    }, [highlightLines, highlightColor, highlightGroups]);
    const perLineTokens = useMemo(() => {
      if (!highlighted) return null;
      return splitTokensByLine(highlighted);
    }, [highlighted]);
    const SUBSTR_BG = {
      primary: "bg-primary/15",
      warning: "bg-warning/20",
      success: "bg-success/15",
      danger: "bg-danger/15"
    };
    const lineRanges = useMemo(() => {
      const map = /* @__PURE__ */ new Map();
      if (!highlightRanges) return map;
      for (const r of highlightRanges) {
        const line = r.line;
        if (!map.has(line)) map.set(line, []);
        map.get(line).push({ start: r.start, end: r.end, color: r.color ?? "primary" });
      }
      return map;
    }, [highlightRanges]);
    function segmentedLine(line, ranges) {
      const sorted = [...ranges].sort((a, b) => a.start - b.start);
      const parts = [];
      let pos = 0;
      for (let i = 0; i < sorted.length; i++) {
        const r = sorted[i];
        const s = Math.max(r.start, 0);
        const e = Math.min(r.end, line.length);
        if (s > pos) parts.push(/* @__PURE__ */ jsx46("span", { children: line.slice(pos, s) }, `t${i}`));
        if (e > s) {
          const bg = SUBSTR_BG[r.color] ?? SUBSTR_BG.primary;
          parts.push(
            /* @__PURE__ */ jsx46("span", { className: cn(bg, "rounded-sm px-0.5 -mx-0.5"), children: line.slice(s, e) }, `h${i}`)
          );
          pos = e;
        }
        while (i + 1 < sorted.length && sorted[i + 1].start < pos) i++;
      }
      if (pos < line.length) parts.push(/* @__PURE__ */ jsx46("span", { children: line.slice(pos) }, "end"));
      if (parts.length === 0) parts.push(/* @__PURE__ */ jsx46("span", { children: "\xA0" }, "e"));
      return /* @__PURE__ */ jsx46(Fragment2, { children: parts });
    }
    return /* @__PURE__ */ jsxs19("div", { className: cn(codeBlockVariants({ variant }), className), children: [
      hasHeader && /* @__PURE__ */ jsxs19("div", { className: "flex items-center justify-between gap-2 h-9 pl-panel pr-1.5 border-b border-border", children: [
        /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-2 min-w-0", children: [
          header && /* @__PURE__ */ jsx46("span", { className: "text-xs font-medium text-code-fg truncate", children: header }),
          language && /* @__PURE__ */ jsx46("span", { className: "shrink-0 rounded-ui-sm bg-code-bg/80 px-1.5 py-0.5 font-mono text-xs uppercase tracking-wide text-code-muted border border-border/50", children: language })
        ] }),
        /* @__PURE__ */ jsx46(CopyButton, { copied, onCopy: copy })
      ] }),
      /* @__PURE__ */ jsxs19("div", { className: "flex flex-col flex-1 min-h-0", children: [
        !hasHeader && /* @__PURE__ */ jsx46("div", { className: "sticky top-0 z-10 flex justify-end pr-1 -mb-7", children: /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-1 pt-1", children: [
          language && /* @__PURE__ */ jsx46("span", { className: "rounded-ui-sm bg-code-bg/80 px-1.5 py-0.5 font-mono text-xs uppercase tracking-wide text-code-muted border border-border/50 pointer-events-none", children: language }),
          /* @__PURE__ */ jsx46(CopyButton, { copied, onCopy: copy })
        ] }) }),
        /* @__PURE__ */ jsxs19("div", { className: "flex flex-1 min-h-0 overflow-x-auto", children: [
          showGutter && /* @__PURE__ */ jsx46(
            "div",
            {
              "aria-hidden": true,
              className: "select-none shrink-0 py-panel text-right font-mono text-xs leading-relaxed text-code-muted border-r border-border",
              children: lines.map((_, i) => /* @__PURE__ */ jsx46("div", { className: cn("pl-compact-x pr-compact-x", lineColor.get(i + 1)), children: i + 1 }, i))
            }
          ),
          perLineTokens ? /* @__PURE__ */ jsx46(
            "pre",
            {
              ref,
              className: cn(
                "flex-1 min-w-0 py-panel font-mono text-xs leading-relaxed text-code-fg",
                wrap && "whitespace-pre-wrap break-words"
              ),
              ...props,
              children: /* @__PURE__ */ jsx46("code", { children: perLineTokens.map((lineTokens, i) => {
                const r = lineRanges.get(i + 1);
                return /* @__PURE__ */ jsx46("div", { className: cn("px-panel", lineColor.get(i + 1)), children: r ? segmentedLine(lines[i], r) : lineTokens.length > 0 ? renderHighlightedLine(lineTokens) : " " }, i);
              }) })
            }
          ) : /* @__PURE__ */ jsx46(
            "pre",
            {
              ref,
              className: cn(
                "flex-1 min-w-0 py-panel font-mono text-xs leading-relaxed text-code-fg",
                wrap && "whitespace-pre-wrap break-words"
              ),
              ...props,
              children: /* @__PURE__ */ jsx46("code", { children: lines.map((line, i) => {
                const r = lineRanges.get(i + 1);
                return /* @__PURE__ */ jsx46("div", { className: cn("px-panel", lineColor.get(i + 1)), children: r ? segmentedLine(line, r) : line || " " }, i);
              }) })
            }
          )
        ] })
      ] })
    ] });
  }
);
CodeBlock.displayName = "CodeBlock";

// src/ui/scroll-area/ScrollArea.tsx
import { forwardRef as forwardRef43 } from "react";
import { jsx as jsx47 } from "react/jsx-runtime";
var ScrollArea = forwardRef43(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx47("div", { ref, className: cn("overflow-auto", className), ...props, children })
);
ScrollArea.displayName = "ScrollArea";

// src/ui/tree-view/TreeView.tsx
import { useState as useState3, useCallback as useCallback5, useMemo as useMemo2, useRef as useRef2, useEffect } from "react";
import { cva as cva26 } from "class-variance-authority";

// src/ui/tree-view/TreeItem.tsx
import { forwardRef as forwardRef44, useCallback as useCallback4 } from "react";
import { jsx as jsx48, jsxs as jsxs20 } from "react/jsx-runtime";
function Chevron({ expanded }) {
  return /* @__PURE__ */ jsx48("svg", { viewBox: "0 0 12 12", className: cn(
    "size-3.5 fill-none stroke-current text-muted shrink-0 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
    expanded && "rotate-90"
  ), children: /* @__PURE__ */ jsx48("path", { d: "M4 2l4 4-4 4", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function GuideColumn({ indent, drawLine, highlight }) {
  return /* @__PURE__ */ jsx48("span", { "aria-hidden": true, className: "relative shrink-0 self-stretch", style: { width: indent }, children: drawLine && /* @__PURE__ */ jsx48("span", { className: cn(
    "absolute inset-y-0 left-1/2 w-px -translate-x-1/2 transition-colors duration-[var(--duration-fast)]",
    highlight ? "bg-primary/40" : "bg-border"
  ) }) });
}
function ElbowColumn({ indent, isLast, highlight }) {
  return /* @__PURE__ */ jsxs20("span", { "aria-hidden": true, className: "relative shrink-0 self-stretch", style: { width: indent }, children: [
    /* @__PURE__ */ jsx48("span", { className: cn(
      "absolute left-1/2 top-0 w-px -translate-x-1/2 transition-colors duration-[var(--duration-fast)]",
      highlight ? "bg-primary/40" : "bg-border"
    ), style: { height: isLast ? "50%" : "100%" } }),
    /* @__PURE__ */ jsx48("span", { className: cn(
      "absolute left-1/2 top-1/2 h-px -translate-y-1/2 transition-colors duration-[var(--duration-fast)]",
      highlight ? "bg-primary/40" : "bg-border"
    ), style: { width: indent / 2 } })
  ] });
}
function isArrayIndex(label) {
  return /^\[\d+\]$/.test(label);
}
function Sigil({ kind, count }) {
  const glyph = kind === "object" ? "{}" : "[]";
  return /* @__PURE__ */ jsxs20("span", { className: "flex items-center gap-0.5 shrink-0 font-mono text-xs text-muted", children: [
    /* @__PURE__ */ jsx48("span", { children: glyph }),
    /* @__PURE__ */ jsx48("span", { className: "text-xs", children: count })
  ] });
}
var TreeItem = forwardRef44(
  ({ node, depth, variant, indent, ancestorLines, isLast, expanded, current, hovered, onToggle, onHover, replacements, children }, ref) => {
    const hasChildren = !!node.children?.length;
    const arrIndex = isArrayIndex(node.label);
    const guideHighlight = hovered;
    const handleMouseEnter = useCallback4(() => onHover(node.id), [node.id, onHover]);
    const handleMouseLeave = useCallback4(() => onHover(void 0), [onHover]);
    return /* @__PURE__ */ jsxs20("li", { ref, className: cn("relative", variant === "condensed" ? "py-px" : "py-0.5"), children: [
      /* @__PURE__ */ jsxs20(
        "div",
        {
          id: node.id,
          role: "treeitem",
          "aria-expanded": hasChildren ? expanded : void 0,
          "aria-selected": current,
          tabIndex: current ? 0 : -1,
          className: cn(
            "group/row flex items-stretch min-w-0 rounded-ui-sm cursor-pointer outline-none",
            "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
            "hover:bg-surface-hover",
            current && "bg-surface-active",
            "focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring focus-visible:ring-inset"
          ),
          onClick: () => hasChildren && onToggle(node.id),
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          children: [
            ancestorLines.map((drawLine, i) => /* @__PURE__ */ jsx48(GuideColumn, { indent, drawLine, highlight: guideHighlight && drawLine }, i)),
            depth > 0 && /* @__PURE__ */ jsx48(ElbowColumn, { indent, isLast, highlight: guideHighlight }),
            /* @__PURE__ */ jsxs20("div", { className: cn(
              "flex items-center gap-1.5 min-w-0 flex-1 pr-2",
              variant === "condensed" ? "py-1" : "py-1.5"
            ), children: [
              hasChildren ? /* @__PURE__ */ jsx48(Chevron, { expanded }) : /* @__PURE__ */ jsx48("span", { className: "size-3.5 shrink-0" }),
              hasChildren && node.kind && /* @__PURE__ */ jsx48(Sigil, { kind: node.kind, count: node.children.length }),
              node.icon && /* @__PURE__ */ jsx48("span", { className: "flex items-center justify-center size-4 shrink-0 text-muted [&_svg]:size-3.5", children: node.icon }),
              /* @__PURE__ */ jsx48("span", { className: cn(
                "text-sm leading-normal truncate flex-1 min-w-0",
                arrIndex && "font-mono text-muted text-xs"
              ), children: node.label }),
              node.value && /* @__PURE__ */ jsx48("span", { className: "truncate overflow-hidden shrink min-w-0 text-right", children: /* @__PURE__ */ jsx48(CellType, { ...node.value, replacements }) })
            ] })
          ]
        }
      ),
      children
    ] });
  }
);
TreeItem.displayName = "TreeItem";

// src/ui/tree-view/TreeView.tsx
import { jsx as jsx49 } from "react/jsx-runtime";
var treeVariants = cva26("", {
  variants: {
    variant: {
      default: "space-y-0.5",
      condensed: "space-y-0"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function computeInitialExpanded(data, depth) {
  const set = /* @__PURE__ */ new Set();
  function walk(nodes, d) {
    for (const node of nodes) {
      if (node.children?.length && d < depth) {
        set.add(node.id);
        walk(node.children, d + 1);
      }
    }
  }
  walk(data, 0);
  return set;
}
function flattenVisible(nodes, expanded, parentId, acc) {
  for (const node of nodes) {
    const hasChildren = !!node.children?.length;
    acc.push({ id: node.id, parentId, hasChildren });
    if (hasChildren && expanded.has(node.id)) {
      flattenVisible(node.children, expanded, node.id, acc);
    }
  }
  return acc;
}
function renderNodes(nodes, depth, ancestorLines, variant, indent, expanded, currentId, hoveredId, onToggle, onHover, replacements) {
  return nodes.map((node, i) => {
    const isLast = i === nodes.length - 1;
    const hasChildren = !!node.children?.length;
    const isExpanded = hasChildren && expanded.has(node.id);
    return /* @__PURE__ */ jsx49(
      TreeItem,
      {
        node,
        depth,
        variant,
        indent,
        ancestorLines,
        isLast,
        expanded: isExpanded,
        current: node.id === currentId,
        hovered: node.id === hoveredId,
        onToggle,
        onHover,
        replacements,
        children: isExpanded && /* @__PURE__ */ jsx49("ul", { role: "group", className: "list-none m-0 p-0", children: renderNodes(
          node.children,
          depth + 1,
          [...ancestorLines, !isLast],
          variant,
          indent,
          expanded,
          currentId,
          hoveredId,
          onToggle,
          onHover,
          replacements
        ) })
      },
      node.id
    );
  });
}
function TreeView({
  data,
  variant = "default",
  indent = 16,
  defaultExpandedDepth = 1,
  expandedKeys,
  onToggle,
  replacements
}) {
  const treeRef = useRef2(null);
  const v = variant ?? "default";
  const [internalExpanded, setInternalExpanded] = useState3(
    () => computeInitialExpanded(data, defaultExpandedDepth)
  );
  const expanded = expandedKeys ?? internalExpanded;
  const toggle = useCallback5((id) => {
    if (expandedKeys) {
      onToggle?.(id);
      return;
    }
    setInternalExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, [expandedKeys, onToggle]);
  const [hoveredId, setHoveredId] = useState3(void 0);
  const onHover = useCallback5((id) => setHoveredId(id), []);
  const visible = useMemo2(() => flattenVisible(data, expanded, null, []), [data, expanded]);
  const [focusIndex, setFocusIndex] = useState3(0);
  useEffect(() => {
    if (focusIndex > visible.length - 1) setFocusIndex(Math.max(0, visible.length - 1));
  }, [visible, focusIndex]);
  const handleKeyDown = useCallback5((e) => {
    if (visible.length === 0) return;
    const cur = visible[focusIndex];
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusIndex((i) => Math.min(i + 1, visible.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusIndex((i) => Math.max(i - 1, 0));
        break;
      case "ArrowRight":
        e.preventDefault();
        if (cur.hasChildren && !expanded.has(cur.id)) toggle(cur.id);
        else if (cur.hasChildren) setFocusIndex((i) => Math.min(i + 1, visible.length - 1));
        break;
      case "ArrowLeft":
        e.preventDefault();
        if (cur.hasChildren && expanded.has(cur.id)) toggle(cur.id);
        else if (cur.parentId) {
          const pIdx = visible.findIndex((entry) => entry.id === cur.parentId);
          if (pIdx >= 0) setFocusIndex(pIdx);
        }
        break;
      case "Home":
        e.preventDefault();
        setFocusIndex(0);
        break;
      case "End":
        e.preventDefault();
        setFocusIndex(visible.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (cur?.hasChildren) toggle(cur.id);
        break;
    }
  }, [visible, focusIndex, expanded, toggle]);
  useEffect(() => {
    if (visible.length === 0) return;
    const id = visible[focusIndex]?.id;
    if (!id) return;
    const el = treeRef.current?.querySelector(`[role="treeitem"][id="${CSS.escape(id)}"]`);
    if (el instanceof HTMLElement) el.focus();
  }, [focusIndex, visible]);
  const currentId = visible[focusIndex]?.id;
  return /* @__PURE__ */ jsx49(
    "ul",
    {
      ref: treeRef,
      role: "tree",
      onKeyDown: handleKeyDown,
      className: cn(treeVariants({ variant: v }), "list-none m-0 p-0 outline-none"),
      children: renderNodes(data, 0, [], v, indent, expanded, currentId, hoveredId, toggle, onHover, replacements)
    }
  );
}

// src/ui/cell-type/CellType.complex-displays.tsx
import { Fragment as Fragment3, jsx as jsx50, jsxs as jsxs21 } from "react/jsx-runtime";
function safeStringify(value) {
  const seen = /* @__PURE__ */ new WeakSet();
  return JSON.stringify(value, (_, val) => {
    if (typeof val === "object" && val !== null) {
      if (seen.has(val)) return "[Circular]";
      seen.add(val);
    }
    if (typeof val === "bigint") return val.toString();
    return val;
  }, 2);
}
function valPreview(val) {
  if (val === null || val === void 0) return [{ type: "null", value: "null" }];
  if (typeof val === "string") {
    const truncated = val.length > 24 ? val.slice(0, 22) + "\u2026" : val;
    return [{ type: "string", value: `"${truncated}"` }];
  }
  if (typeof val === "number") return [{ type: "number", value: String(val) }];
  if (typeof val === "boolean") return [{ type: "boolean", value: String(val) }];
  if (Array.isArray(val)) {
    return [{ type: "collapsed", value: val.length === 0 ? "[]" : `[${val.length}]` }];
  }
  if (typeof val === "object") {
    const keys = Object.keys(val);
    return [{ type: "collapsed", value: keys.length === 0 ? "{}" : `{${keys.length}}` }];
  }
  return [{ type: "string", value: String(val) }];
}
function jsonPreview(value) {
  if (typeof value !== "object" || value === null) return null;
  const full = safeStringify(value);
  const isArray = Array.isArray(value);
  const tokens = [];
  if (isArray) {
    const arr = value;
    tokens.push({ type: "punctuation", value: "[" });
    arr.forEach((item, i) => {
      if (i > 0) tokens.push({ type: "punctuation", value: ", " });
      tokens.push(...valPreview(item));
    });
    tokens.push({ type: "punctuation", value: "]" });
  } else {
    const obj = value;
    tokens.push({ type: "punctuation", value: "{" });
    Object.entries(obj).forEach(([key, val], i) => {
      if (i > 0) tokens.push({ type: "punctuation", value: ", " });
      tokens.push({ type: "key", value: key });
      tokens.push({ type: "punctuation", value: ": " });
      tokens.push(...valPreview(val));
    });
    tokens.push({ type: "punctuation", value: "}" });
  }
  return { tokens, full };
}
var tokenStyles = {
  key: "text-secondary-fg",
  string: "text-primary font-medium",
  number: "text-primary font-medium",
  boolean: "text-primary font-medium",
  null: "text-muted italic",
  punctuation: "text-muted",
  ellipsis: "text-muted",
  collapsed: "text-muted text-xs"
};
function JsonDisplay({ value }) {
  if (typeof value !== "object" || value === null) {
    return /* @__PURE__ */ jsx50("span", { className: "text-muted", children: "\u2014" });
  }
  const count = Array.isArray(value) ? value.length : Object.keys(value).length;
  const preview = jsonPreview(value);
  if (!preview) return /* @__PURE__ */ jsx50("span", { className: "text-muted", children: "\u2014" });
  return /* @__PURE__ */ jsxs21(Root9, { children: [
    /* @__PURE__ */ jsx50(Trigger5, { className: "font-mono text-xs cursor-pointer hover:text-primary transition-colors flex w-full max-w-full min-w-0 items-center gap-1.5", children: count === 0 ? /* @__PURE__ */ jsx50("span", { className: "text-muted italic", children: "empty" }) : /* @__PURE__ */ jsxs21(Fragment3, { children: [
      /* @__PURE__ */ jsxs21(Badge, { variant: "neutral", style: "soft", className: "text-xs px-1 py-0 leading-none shrink-0", children: [
        count,
        " ",
        Array.isArray(value) ? "items" : "keys"
      ] }),
      /* @__PURE__ */ jsx50("span", { className: "block min-w-0 flex-1 overflow-hidden whitespace-nowrap", children: preview.tokens.map((t, i) => /* @__PURE__ */ jsx50("span", { className: tokenStyles[t.type], children: t.value }, i)) }),
      /* @__PURE__ */ jsx50("span", { className: "ml-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded bg-muted/10 text-xs font-bold leading-none text-muted", children: "\u2026" })
    ] }) }),
    /* @__PURE__ */ jsxs21(PopoverContent, { side: "bottom", align: "start", className: "p-0 overflow-hidden", style: { minWidth: "var(--radix-popover-trigger-width)", maxWidth: "var(--radix-popover-trigger-width)" }, children: [
      /* @__PURE__ */ jsx50("div", { className: "flex items-center justify-between px-3 pt-2", children: /* @__PURE__ */ jsx50("span", { className: "text-xs text-muted", children: "JSON" }) }),
      /* @__PURE__ */ jsx50(ScrollArea, { className: "max-h-72", children: /* @__PURE__ */ jsx50(CodeBlock, { code: preview.full }) })
    ] })
  ] });
}
function objToTreeNodes(obj, path = "") {
  if (obj === null || obj === void 0) return [{ id: `${path}_null`, label: "null", value: { type: "null", value: null } }];
  if (Array.isArray(obj)) {
    if (obj.length === 0) return [{ id: `${path}_empty`, label: "[]", value: { type: "text", value: "[]" } }];
    return obj.map((item, i) => {
      const id = `${path}_${i}`;
      if (typeof item === "object" && item !== null) return { id, label: `[${i}]`, children: objToTreeNodes(item, id), kind: "array" };
      return { id, label: `[${i}]`, value: { type: detectType(item), value: item } };
    });
  }
  if (typeof obj === "object") {
    const entries = Object.entries(obj);
    if (entries.length === 0) return [{ id: `${path}_empty`, label: "{}", value: { type: "text", value: "{}" } }];
    return entries.map(([key, val]) => {
      const id = `${path}_${key}`;
      if (typeof val === "object" && val !== null) return { id, label: key, children: objToTreeNodes(val, id), kind: "object" };
      return { id, label: key, value: { type: detectType(val), value: val } };
    });
  }
  return [{ id: `${path}_val`, label: String(obj), value: { type: detectType(obj), value: obj } }];
}
function detectType(val) {
  if (val === null || val === void 0) return "null";
  if (typeof val === "boolean") return "boolean";
  if (typeof val === "number") return "number";
  if (typeof val === "string") {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "email";
    if (/^https?:\/\//.test(val)) return "url";
    return "text";
  }
  return "text";
}
function TreeDisplay({ value, replacements }) {
  if (typeof value !== "object" || value === null) return /* @__PURE__ */ jsx50("span", { className: "truncate inline-block max-w-full align-middle", children: String(value) });
  const nodes = objToTreeNodes(value);
  const isArray = Array.isArray(value);
  const count = isArray ? value.length : Object.keys(value).length;
  const keys = isArray ? [] : Object.keys(value);
  const previewRef = useRef3(null);
  const [isTruncated, setIsTruncated] = useState4(false);
  useLayoutEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const check = () => setIsTruncated(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [value]);
  return /* @__PURE__ */ jsxs21(Root9, { children: [
    /* @__PURE__ */ jsx50(Trigger5, { className: "font-mono text-xs cursor-pointer hover:text-primary transition-colors flex w-full max-w-full min-w-0 items-center gap-1.5", children: count === 0 ? /* @__PURE__ */ jsx50("span", { className: "text-muted italic", children: "empty" }) : /* @__PURE__ */ jsxs21(Fragment3, { children: [
      /* @__PURE__ */ jsxs21(Badge, { variant: "neutral", style: "soft", className: "text-xs px-1 py-0 leading-none shrink-0", children: [
        count,
        " ",
        isArray ? "items" : "keys"
      ] }),
      keys.length > 0 && /* @__PURE__ */ jsx50(
        "span",
        {
          ref: previewRef,
          className: "block min-w-0 overflow-hidden whitespace-nowrap text-secondary-fg",
          children: keys.map((k, i) => /* @__PURE__ */ jsxs21("span", { children: [
            i > 0 && /* @__PURE__ */ jsx50("span", { className: "text-muted", children: ", " }),
            k
          ] }, k))
        }
      ),
      isTruncated && /* @__PURE__ */ jsx50("span", { className: "ml-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded bg-muted/10 text-xs font-bold leading-none text-muted", children: "\u2026" })
    ] }) }),
    /* @__PURE__ */ jsxs21(PopoverContent, { side: "bottom", align: "start", className: "p-0 overflow-hidden", style: { minWidth: "var(--radix-popover-trigger-width)", maxWidth: "var(--radix-popover-trigger-width)" }, children: [
      /* @__PURE__ */ jsx50("div", { className: "flex items-center justify-between px-3 pt-2", children: /* @__PURE__ */ jsx50("span", { className: "text-xs text-muted", children: "Tree" }) }),
      /* @__PURE__ */ jsx50(ScrollArea, { className: "max-h-72 p-2", children: /* @__PURE__ */ jsx50(TreeView, { data: nodes, variant: "condensed", indent: 12, defaultExpandedDepth: 2, replacements }) })
    ] })
  ] });
}
function ArrayDisplay({ value }) {
  const arr = Array.isArray(value) ? value : [];
  const count = arr.length;
  const previewRef = useRef3(null);
  const [isTruncated, setIsTruncated] = useState4(false);
  useLayoutEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const check = () => setIsTruncated(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [value]);
  return /* @__PURE__ */ jsxs21(Root9, { children: [
    /* @__PURE__ */ jsx50(Trigger5, { className: "font-mono text-xs cursor-pointer hover:text-primary transition-colors flex w-full max-w-full min-w-0 items-center gap-1.5", children: count === 0 ? /* @__PURE__ */ jsx50("span", { className: "text-muted italic", children: "empty" }) : /* @__PURE__ */ jsxs21(Fragment3, { children: [
      /* @__PURE__ */ jsxs21(Badge, { variant: "neutral", style: "soft", className: "text-xs px-1 py-0 leading-none shrink-0", children: [
        count,
        " items"
      ] }),
      /* @__PURE__ */ jsx50(
        "span",
        {
          ref: previewRef,
          className: "block min-w-0 overflow-hidden whitespace-nowrap text-secondary-fg",
          children: arr.map((item, i) => /* @__PURE__ */ jsxs21("span", { children: [
            i > 0 && /* @__PURE__ */ jsx50("span", { className: "text-muted", children: ", " }),
            String(item)
          ] }, i))
        }
      ),
      isTruncated && /* @__PURE__ */ jsx50("span", { className: "ml-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded bg-muted/10 text-xs font-bold leading-none text-muted", children: "\u2026" })
    ] }) }),
    /* @__PURE__ */ jsxs21(PopoverContent, { side: "bottom", align: "start", className: "p-0 overflow-hidden", style: { minWidth: "var(--radix-popover-trigger-width)", maxWidth: "var(--radix-popover-trigger-width)" }, children: [
      /* @__PURE__ */ jsx50("div", { className: "flex items-center justify-between px-3 pt-2", children: /* @__PURE__ */ jsxs21("span", { className: "text-xs text-muted", children: [
        "List (",
        count,
        ")"
      ] }) }),
      /* @__PURE__ */ jsx50(ScrollArea, { className: "max-h-72 p-2", children: /* @__PURE__ */ jsx50("div", { className: "flex flex-col gap-1", children: arr.map((item, i) => /* @__PURE__ */ jsx50(Badge, { variant: "neutral", style: "soft", children: String(item) }, i)) }) })
    ] })
  ] });
}

// src/ui/cell-type/CellType.tsx
import { Fragment as Fragment4, jsx as jsx51, jsxs as jsxs22 } from "react/jsx-runtime";
function BooleanDisplay({ value }) {
  const t = Boolean(value);
  return /* @__PURE__ */ jsx51("span", { className: cn("inline-flex items-center", t ? "text-success" : "text-muted"), children: /* @__PURE__ */ jsx51("svg", { viewBox: "0 0 12 12", className: "size-icon fill-current", children: t ? /* @__PURE__ */ jsx51("path", { d: "M2 6l3 3 5-5", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) : /* @__PURE__ */ jsx51("path", { d: "M2 2l8 8M10 2L2 10", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) }) });
}
function applyReplacements(str, replacements) {
  if (!replacements) return str;
  let r = str;
  for (const x of replacements) r = r.replaceAll(x.pattern, x.label);
  return r;
}
function ImageDisplay({ value }) {
  const src = String(value);
  const [open, setOpen] = useState5(false);
  return /* @__PURE__ */ jsxs22(Fragment4, { children: [
    /* @__PURE__ */ jsx51("img", { src, alt: "", className: "size-8 rounded-ui-sm object-cover border border-border cursor-pointer hover:opacity-80 transition-opacity", onClick: () => setOpen(true) }),
    /* @__PURE__ */ jsx51(Root6, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs22(DialogContent, { className: "p-0 overflow-hidden max-w-[90vw] w-auto", children: [
      /* @__PURE__ */ jsx51(DialogTitle, { className: "sr-only", children: "Image preview" }),
      /* @__PURE__ */ jsx51("img", { src, alt: "", className: "max-w-[80vw] max-h-[80vh] object-contain" })
    ] }) })
  ] });
}
function AudioDisplay({ value }) {
  const src = String(value);
  const r = useRef4(null);
  const [p, setP] = useState5(false);
  const [t, setT] = useState5(0);
  const [d, setD] = useState5(0);
  const toggle = useCallback6(() => {
    const a = r.current;
    if (!a) return;
    if (p) {
      a.pause();
      setP(false);
      return;
    }
    if (a.ended || a.currentTime >= a.duration - 0.01) a.currentTime = 0;
    a.play();
    setP(true);
  }, [p]);
  const seek = useCallback6((e) => {
    const a = r.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setT(a.currentTime);
  }, []);
  const fmt = (s) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  return /* @__PURE__ */ jsxs22("span", { className: "inline-flex items-center gap-2 text-xs min-w-48", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx51("audio", { ref: r, src, onTimeUpdate: () => setT(r.current?.currentTime ?? 0), onLoadedMetadata: () => setD(r.current?.duration ?? 0), onEnded: () => setP(false) }),
    /* @__PURE__ */ jsx51(
      "button",
      {
        type: "button",
        onClick: toggle,
        className: "size-6 shrink-0 flex items-center justify-center rounded-full bg-primary text-primary-fg cursor-pointer hover:opacity-80 transition-opacity",
        children: p ? /* @__PURE__ */ jsxs22("svg", { viewBox: "0 0 10 10", className: "size-3 fill-current", children: [
          /* @__PURE__ */ jsx51("rect", { x: "1", y: "1", width: "3", height: "8", rx: "0.5" }),
          /* @__PURE__ */ jsx51("rect", { x: "6", y: "1", width: "3", height: "8", rx: "0.5" })
        ] }) : /* @__PURE__ */ jsx51("svg", { viewBox: "0 0 10 10", className: "size-3 fill-current", children: /* @__PURE__ */ jsx51("path", { d: "M2 1l7 4-7 4V1z" }) })
      }
    ),
    /* @__PURE__ */ jsx51(
      "input",
      {
        type: "range",
        min: 0,
        max: d || 1,
        step: 0.1,
        value: t,
        onChange: seek,
        className: "flex-1 h-1 accent-primary cursor-pointer"
      }
    ),
    /* @__PURE__ */ jsx51("span", { className: "font-mono tabular-nums text-muted shrink-0 w-24 text-right whitespace-nowrap", children: d ? `${fmt(t)} / ${fmt(d)}` : "--:-- / --:--" })
  ] });
}
function TruncatedCellValue({ value, className }) {
  const ref = useRef4(null);
  const [isTruncated, setIsTruncated] = useState5(false);
  const [open, setOpen] = useState5(false);
  useLayoutEffect2(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setIsTruncated(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [value]);
  useLayoutEffect2(() => {
    if (!isTruncated) setOpen(false);
  }, [isTruncated]);
  return /* @__PURE__ */ jsxs22(Root9, { open, onOpenChange: (next) => isTruncated && setOpen(next), children: [
    /* @__PURE__ */ jsx51(Trigger5, { asChild: true, disabled: !isTruncated, children: /* @__PURE__ */ jsxs22(
      "span",
      {
        className: cn("flex w-full max-w-full min-w-0 items-center", isTruncated && "cursor-pointer"),
        tabIndex: isTruncated ? void 0 : -1,
        "aria-disabled": !isTruncated,
        children: [
          /* @__PURE__ */ jsx51(
            "span",
            {
              ref,
              className: cn(
                "block min-w-0 flex-1 overflow-hidden whitespace-nowrap",
                !isTruncated && "text-ellipsis",
                className
              ),
              children: value
            }
          ),
          isTruncated && /* @__PURE__ */ jsx51("span", { className: "ml-0.5 inline-flex size-3.5 shrink-0 items-center justify-center rounded bg-muted/10 text-xs font-bold leading-none text-muted", children: "\u2026" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx51(PopoverContent, { className: "max-w-sm p-3 text-sm whitespace-pre-wrap break-words", children: value })
  ] });
}
function CellType({
  type = "text",
  value,
  badgeVariant,
  badgeStyle,
  statusVariant,
  statusPulse,
  replacements,
  dateFormat,
  compact,
  fractionDigits,
  currency,
  displayUnit
}) {
  if (value === null || value === void 0 || type === "null") return /* @__PURE__ */ jsx51("span", { className: "text-muted", children: "\u2014" });
  switch (type) {
    case "boolean":
      return /* @__PURE__ */ jsx51(BooleanDisplay, { value });
    case "email":
      return /* @__PURE__ */ jsx51("a", { href: `mailto:${String(value)}`, className: "text-primary hover:underline inline-flex min-w-0 w-full", children: /* @__PURE__ */ jsx51("span", { className: "truncate", children: String(value) }) });
    case "url":
      return /* @__PURE__ */ jsxs22("a", { href: String(value), target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-tight text-primary hover:underline min-w-0 w-full", children: [
        /* @__PURE__ */ jsx51("span", { className: "truncate", children: applyReplacements(String(value), replacements) }),
        /* @__PURE__ */ jsx51("svg", { viewBox: "0 0 12 12", className: "size-icon-sm shrink-0 fill-current opacity-dim", children: /* @__PURE__ */ jsx51("path", { d: "M2 2h3v1H3v6h6V7h1v3H2V2zm4 0h4v4H9V4.5L6.5 7 6 6.5 8.5 4H6V2z" }) })
      ] });
    case "json":
      return /* @__PURE__ */ jsx51(JsonDisplay, { value });
    case "badge":
      return /* @__PURE__ */ jsx51(Badge, { variant: badgeVariant ?? "neutral", style: badgeStyle ?? "solid", children: String(value) });
    case "status":
      return /* @__PURE__ */ jsxs22("span", { className: "inline-flex items-center gap-1.5 min-w-0 w-full", children: [
        /* @__PURE__ */ jsx51(StatusDot, { variant: statusVariant ?? "neutral", size: "sm", pulse: statusPulse }),
        /* @__PURE__ */ jsx51(TruncatedCellValue, { value: String(value) })
      ] });
    case "number":
      return /* @__PURE__ */ jsx51(NumberDisplay, { value, compact, fractionDigits });
    case "percentage":
      return /* @__PURE__ */ jsx51(PercentageDisplay, { value, fractionDigits });
    case "date-human":
      return /* @__PURE__ */ jsx51(DateHumanDisplay, { value });
    case "date-system":
      return /* @__PURE__ */ jsx51(DateSystemDisplay, { value, dateFormat });
    case "datetime-tz":
      return /* @__PURE__ */ jsx51(DateTimeTzDisplay, { value });
    case "bytes":
      return /* @__PURE__ */ jsx51(BytesDisplay, { value, compact, displayUnit });
    case "duration":
      return /* @__PURE__ */ jsx51(DurationDisplay, { value });
    case "currency":
      return /* @__PURE__ */ jsx51(CurrencyDisplay, { value, compact, fractionDigits, currency });
    case "signed":
      return /* @__PURE__ */ jsx51(SignedDisplay, { value });
    case "image":
      return /* @__PURE__ */ jsx51(ImageDisplay, { value });
    case "audio":
      return /* @__PURE__ */ jsx51(AudioDisplay, { value });
    case "array":
      return /* @__PURE__ */ jsx51(ArrayDisplay, { value });
    case "tree":
      return /* @__PURE__ */ jsx51(TreeDisplay, { value, replacements });
    default:
      return /* @__PURE__ */ jsx51(TruncatedCellValue, { value: String(value) });
  }
}

// src/ui/canvas/Canvas.tsx
import { forwardRef as forwardRef45, useRef as useRef5, useState as useState6, useCallback as useCallback7, useEffect as useEffect2 } from "react";

// src/ui/graph-node/grid.ts
var GRID = 16;
var HEADER = 2;
var ROW = 2;
var FOOTER = 1;
function nodeHeightCells(rowCount, hasFooter) {
  return HEADER + rowCount * ROW + (hasFooter ? FOOTER : 0);
}
function nodeHeightPx(rowCount, hasFooter) {
  return nodeHeightCells(rowCount, hasFooter) * GRID;
}
function portY(rowIndex) {
  return (HEADER + rowIndex * ROW + ROW / 2) * GRID;
}
function snap(v) {
  return Math.round(v / GRID) * GRID;
}

// src/ui/canvas/Canvas.tsx
import { Fragment as Fragment5, jsx as jsx52, jsxs as jsxs23 } from "react/jsx-runtime";
var btn = "inline-flex items-center justify-center size-7 rounded-ui-sm border border-border bg-bg text-xs text-fg hover:bg-secondary cursor-pointer";
var Canvas = forwardRef45(
  ({ className, gridSize = GRID, initialZoom = 1, minZoom = 0.25, maxZoom = 3, zoomStep = 0.1, controls, children, style, onBackgroundClick, offset: controlledOffset, zoom: controlledZoom, onOffsetChange, onZoomChange, ...props }, ref) => {
    const containerRef = useRef5(null);
    const childrenRef = useRef5(null);
    const offsetRef = useRef5({ x: 0, y: 0 });
    const zoomRef = useRef5(initialZoom);
    const [internalOffset, setInternalOffset] = useState6({ x: 0, y: 0 });
    const [internalZoom, setInternalZoom] = useState6(initialZoom);
    const isControlled = controlledOffset !== void 0;
    const renderOffset = isControlled ? controlledOffset : internalOffset;
    const renderZoom = controlledZoom !== void 0 ? controlledZoom : internalZoom;
    offsetRef.current = renderOffset;
    zoomRef.current = renderZoom;
    const setOffset = useCallback7((o) => {
      if (isControlled) {
        const next = typeof o === "function" ? o(renderOffset) : o;
        onOffsetChange?.(next);
      } else {
        setInternalOffset(o);
      }
    }, [isControlled, renderOffset, onOffsetChange]);
    const setZoom = useCallback7((z) => {
      if (onZoomChange) {
        const next = typeof z === "function" ? z(renderZoom) : z;
        onZoomChange(next);
      } else {
        setInternalZoom(z);
      }
    }, [renderZoom, onZoomChange]);
    const handleMouseDown = useCallback7((e) => {
      if (e.button !== 0) return;
      onBackgroundClick?.();
      const startX = e.clientX;
      const startY = e.clientY;
      const startOffset = { x: offsetRef.current.x, y: offsetRef.current.y };
      const onMove = (ev) => {
        const newOffset = {
          x: startOffset.x + (ev.clientX - startX),
          y: startOffset.y + (ev.clientY - startY)
        };
        offsetRef.current = newOffset;
        if (childrenRef.current) {
          childrenRef.current.style.transform = `translate(${newOffset.x}px, ${newOffset.y}px) scale(${zoomRef.current})`;
        }
        onOffsetChange?.(newOffset);
        ev.preventDefault();
      };
      const onUp = () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
        setInternalOffset(offsetRef.current);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    }, [onBackgroundClick, onOffsetChange]);
    const handleWheel = useCallback7((e) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const oldZoom = zoomRef.current;
      const next = e.deltaY < 0 ? oldZoom + zoomStep : oldZoom - zoomStep;
      const clamped = Math.min(maxZoom, Math.max(minZoom, Math.round(next * 10) / 10));
      const scale = clamped / oldZoom;
      const oldOffset = offsetRef.current;
      const newOffset = { x: cx - (cx - oldOffset.x) * scale, y: cy - (cy - oldOffset.y) * scale };
      offsetRef.current = newOffset;
      zoomRef.current = clamped;
      if (childrenRef.current) {
        childrenRef.current.style.transform = `translate(${newOffset.x}px, ${newOffset.y}px) scale(${clamped})`;
      }
      setInternalOffset(newOffset);
      setInternalZoom(clamped);
    }, [minZoom, maxZoom, zoomStep]);
    useEffect2(() => {
      const el = containerRef.current;
      if (!el) return;
      el.addEventListener("wheel", handleWheel, { passive: false });
      return () => el.removeEventListener("wheel", handleWheel);
    }, [handleWheel]);
    const zoomIn = () => setZoom((z) => Math.min(maxZoom, Math.round((z + zoomStep) * 10) / 10));
    const zoomOut = () => setZoom((z) => Math.max(minZoom, Math.round((z - zoomStep) * 10) / 10));
    const resetView = () => {
      setOffset({ x: 0, y: 0 });
      setZoom(1);
    };
    const mergedRef = useCallback7((node) => {
      containerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    }, [ref]);
    return /* @__PURE__ */ jsxs23(
      "div",
      {
        ref: mergedRef,
        className: cn("relative overflow-hidden bg-bg select-none", className),
        style,
        onMouseDown: handleMouseDown,
        ...props,
        children: [
          /* @__PURE__ */ jsxs23(
            "div",
            {
              ref: childrenRef,
              className: "absolute inset-0",
              style: {
                transform: `translate(${renderOffset.x}px, ${renderOffset.y}px) scale(${renderZoom})`,
                transformOrigin: "0 0",
                // `willChange` belongs on this single transforming layer only —
                // never on the nodes/surfaces inside it. Promoting every node
                // individually multiplies GPU memory for no benefit; promoting
                // this one wrapper is what actually keeps drag/zoom smooth.
                willChange: "transform",
                // Token boundary (AGENTS.md §7 "Canvas surface boundary"):
                // surfaces INSIDE the transforming subtree never blur or
                // texture, regardless of the active theme. Every component
                // reads `var(--backdrop-blur)` / `var(--texture-opacity)`, so
                // overriding them here — rather than in each component — is
                // what makes this structural instead of a per-component patch.
                ["--backdrop-blur"]: "0px",
                ["--texture-opacity"]: "0"
              },
              children: [
                /* @__PURE__ */ jsx52(
                  "div",
                  {
                    className: "absolute",
                    style: {
                      left: "-100vw",
                      top: "-100vh",
                      right: "-100vw",
                      bottom: "-100vh",
                      backgroundImage: "radial-gradient(circle, var(--color-grid-dot) 1.5px, transparent 1.5px)",
                      backgroundSize: `${gridSize}px ${gridSize}px`,
                      zIndex: "var(--z-canvas-grid)"
                    }
                  }
                ),
                children
              ]
            }
          ),
          /* @__PURE__ */ jsxs23("div", { className: "absolute bottom-3 right-3 flex items-center gap-0.5 rounded-ui border border-border bg-bg p-0.5 shadow-card", style: { zIndex: "var(--z-canvas-controls)" }, onMouseDown: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsx52("button", { type: "button", className: btn, onClick: zoomOut, title: "Zoom out", children: "\u2212" }),
            /* @__PURE__ */ jsxs23("button", { type: "button", className: cn(btn, "w-auto px-2 font-mono"), onClick: resetView, title: "Reset view", children: [
              Math.round(renderZoom * 100),
              "%"
            ] }),
            /* @__PURE__ */ jsx52("button", { type: "button", className: btn, onClick: zoomIn, title: "Zoom in", children: "+" }),
            controls && /* @__PURE__ */ jsxs23(Fragment5, { children: [
              /* @__PURE__ */ jsx52("div", { className: "w-px h-4 bg-border mx-0.5" }),
              controls
            ] })
          ] })
        ]
      }
    );
  }
);
Canvas.displayName = "Canvas";

// src/ui/canvas/Edge.tsx
import { useMemo as useMemo4 } from "react";
import { cva as cva28 } from "class-variance-authority";

// src/ui/connection-line/ConnectionLine.tsx
import { forwardRef as forwardRef46, useMemo as useMemo3 } from "react";
import { cva as cva27 } from "class-variance-authority";
import { jsx as jsx53, jsxs as jsxs24 } from "react/jsx-runtime";
var lineVariants = cva27("fill-none", {
  variants: {
    variant: {
      bezier: "",
      stepped: "",
      straight: ""
    },
    state: {
      default: "stroke-muted stroke-[2px]",
      connected: "stroke-primary stroke-[2px]",
      highlighted: "stroke-primary stroke-[2px] drop-shadow-[0_0_4px_var(--color-primary)]",
      pending: "stroke-muted stroke-[2px] opacity-60 [stroke-dasharray:6_3]"
    }
  },
  defaultVariants: {
    variant: "bezier",
    state: "connected"
  }
});
function generatePath(from, to, variant) {
  switch (variant) {
    case "stepped": {
      const midX = (from.x + to.x) / 2;
      return `M ${from.x} ${from.y} L ${midX} ${from.y} L ${midX} ${to.y} L ${to.x} ${to.y}`;
    }
    case "straight":
      return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
    default: {
      const dx = Math.abs(to.x - from.x);
      const cp = Math.max(dx * 0.5, 30);
      return `M ${from.x} ${from.y} C ${from.x + cp} ${from.y}, ${to.x - cp} ${to.y}, ${to.x} ${to.y}`;
    }
  }
}
function getArrowAngle(from, to, variant) {
  switch (variant) {
    case "stepped": {
      const midX = (from.x + to.x) / 2;
      return to.x >= midX ? 0 : 180;
    }
    case "straight":
      return Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
    default:
      return 0;
  }
}
var ARROWHEAD_COLOR = {
  connected: "text-primary",
  highlighted: "text-primary",
  default: "text-muted",
  pending: "text-muted"
};
var ConnectionLine = forwardRef46(
  function ConnectionLine2({ className, variant = "bezier", state = "connected", from, to, arrowhead, label }, ref) {
    const d = useMemo3(() => generatePath(from, to, variant ?? "bezier"), [from, to, variant]);
    const arrowAngle = useMemo3(() => getArrowAngle(from, to, variant ?? "bezier"), [from, to, variant]);
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    return /* @__PURE__ */ jsxs24(
      "svg",
      {
        ref,
        className: cn(
          lineVariants({ variant, state }),
          "absolute inset-0 w-full h-full pointer-events-none overflow-visible",
          className
        ),
        children: [
          /* @__PURE__ */ jsx53("path", { d }),
          arrowhead && /* @__PURE__ */ jsx53(
            "polygon",
            {
              points: "0,-4 8,0 0,4",
              fill: "currentColor",
              className: ARROWHEAD_COLOR[state ?? "connected"],
              transform: `translate(${to.x},${to.y}) rotate(${arrowAngle})`
            }
          ),
          label && /* @__PURE__ */ jsx53(
            "foreignObject",
            {
              x: midX - label.length * 3.5 - 6,
              y: midY - 10,
              width: label.length * 7 + 12,
              height: 20,
              className: "overflow-visible pointer-events-none",
              children: /* @__PURE__ */ jsx53(
                "span",
                {
                  className: "inline-flex items-center rounded-sm px-1.5 py-0.5 text-xs text-fg font-mono bg-canvas-surface border border-border/60 shadow-sm whitespace-nowrap leading-none",
                  style: { backdropFilter: "blur(2px)" },
                  children: label
                }
              )
            }
          )
        ]
      }
    );
  }
);
ConnectionLine.displayName = "ConnectionLine";

// src/ui/canvas/Edge.tsx
import { jsx as jsx54, jsxs as jsxs25 } from "react/jsx-runtime";
var edgeVariants = cva28("fill-none", {
  variants: {
    state: {
      default: "stroke-border stroke-[2px]",
      connected: "stroke-primary stroke-[2px]",
      highlighted: "stroke-primary stroke-[3px] drop-shadow-[0_0_4px_var(--color-primary)]",
      pending: "stroke-muted stroke-[2px] opacity-60 [stroke-dasharray:6_3]"
    }
  },
  defaultVariants: {
    state: "default"
  }
});
var HIT_STROKE = 12;
function Edge({ from, to, state, className, hitStrokeWidth = HIT_STROKE, onClick, onContextMenu, ...props }) {
  const d = useMemo4(() => generatePath(from, to, "bezier"), [from, to]);
  return /* @__PURE__ */ jsxs25("g", { onMouseDown: (e) => e.stopPropagation(), children: [
    onClick || onContextMenu ? /* @__PURE__ */ jsx54(
      "path",
      {
        d,
        fill: "none",
        stroke: "transparent",
        strokeWidth: hitStrokeWidth,
        className: "cursor-pointer pointer-events-auto",
        onClick,
        onContextMenu
      }
    ) : null,
    /* @__PURE__ */ jsx54("path", { d, className: cn(edgeVariants({ state }), "pointer-events-none", className), ...props })
  ] });
}

// src/ui/graph-node/GraphNode.tsx
import { forwardRef as forwardRef48 } from "react";
import { cva as cva30 } from "class-variance-authority";

// src/ui/port/Port.tsx
import { forwardRef as forwardRef47 } from "react";
import { cva as cva29 } from "class-variance-authority";
import { jsx as jsx55, jsxs as jsxs26 } from "react/jsx-runtime";
var portVariants = cva29(
  "size-3 rounded-full border-2 bg-bg transition-colors",
  {
    variants: {
      side: {
        in: "",
        out: ""
      },
      state: {
        default: "border-muted",
        connected: "border-primary bg-primary",
        highlighted: "border-primary ring-2 ring-primary/30"
      }
    },
    defaultVariants: {
      side: "in",
      state: "default"
    }
  }
);
var Port = forwardRef47(
  ({ className, side, state, label, ...props }, ref) => /* @__PURE__ */ jsxs26("div", { ref, className: cn("relative flex items-center gap-2", side === "in" ? "flex-row" : "flex-row-reverse"), children: [
    /* @__PURE__ */ jsx55("div", { className: cn(portVariants({ side, state }), className), ...props }),
    label && /* @__PURE__ */ jsx55("span", { className: "text-xs text-muted", children: label })
  ] })
);
Port.displayName = "Port";

// src/ui/graph-node/GraphNode.tsx
import { jsx as jsx56, jsxs as jsxs27 } from "react/jsx-runtime";
var ROW_PORT_Y_OFFSET = HEADER * GRID;
var graphNodeVariants = cva30(
  // `bg-canvas-surface` (never `bg-surface`): nodes render an opaque,
  // blur-free surface regardless of theme — see the "Canvas surface
  // boundary" token set in tokens.css / AGENTS.md §7. `contain-[layout_paint]`
  // scopes each node's layout/paint work so one node's content changes never
  // force a reflow/repaint of its siblings while panning/zooming.
  "absolute flex flex-col rounded-node border bg-canvas-surface shadow-card min-w-40 overflow-hidden contain-[layout_paint]",
  {
    variants: {
      variant: {
        default: "border-border",
        selected: "border-primary ring-2 ring-primary/20",
        muted: "border-border opacity-dim",
        simple: "border-border"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var GraphNode = forwardRef48(
  ({ className, variant, x, y, header, accent, ports, footer, rows, children, style, ...props }, ref) => {
    const isSimple = variant === "simple";
    const hasRows = rows && rows.length > 0;
    const height = hasRows ? nodeHeightPx(rows.length, !!footer && !isSimple) : void 0;
    return /* @__PURE__ */ jsxs27(
      "div",
      {
        ref,
        className: cn(graphNodeVariants({ variant }), className),
        style: { left: x, top: y, height, ...style },
        ...props,
        children: [
          header && /* @__PURE__ */ jsx56("div", { className: cn("flex flex-col shrink-0", accent && !isSimple && "border-t-2 border-primary"), style: { height: HEADER * GRID }, children: /* @__PURE__ */ jsx56("div", { className: "flex items-center px-3 border-b border-border flex-1 min-h-0", children: /* @__PURE__ */ jsxs27("div", { className: cn("flex items-center gap-inline flex-1 min-w-0", isSimple && "justify-center"), children: [
            !isSimple && /* @__PURE__ */ jsxs27("div", { className: "flex gap-0.5", children: [
              /* @__PURE__ */ jsx56("span", { className: "size-1.5 rounded-full bg-danger" }),
              /* @__PURE__ */ jsx56("span", { className: "size-1.5 rounded-full bg-warning" }),
              /* @__PURE__ */ jsx56("span", { className: "size-1.5 rounded-full bg-success" })
            ] }),
            /* @__PURE__ */ jsx56("span", { className: "text-xs font-semibold truncate", children: header })
          ] }) }) }),
          hasRows ? /* @__PURE__ */ jsxs27("div", { className: "flex-1 overflow-hidden relative", children: [
            rows.map((row, i) => /* @__PURE__ */ jsxs27(
              "div",
              {
                className: "grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 px-3 text-xs items-center border-b border-border/50 last:border-b-0 hover:bg-muted/10 transition-colors",
                style: { height: ROW * GRID },
                children: [
                  /* @__PURE__ */ jsx56("span", { className: "text-muted truncate", children: row.label }),
                  /* @__PURE__ */ jsx56("span", { className: "text-fg text-right", children: row.value })
                ]
              },
              i
            )),
            !isSimple && /* @__PURE__ */ jsx56("div", { className: "absolute inset-0 pointer-events-none", children: rows.map((row, i) => /* @__PURE__ */ jsxs27("div", { children: [
              row.portLeft && /* @__PURE__ */ jsx56(
                "div",
                {
                  className: "absolute pointer-events-auto",
                  style: { left: "0px", top: portY(i) - ROW_PORT_Y_OFFSET, transform: "translate(-50%, -50%)" },
                  children: /* @__PURE__ */ jsx56(Port, { state: row.portLeft.state, side: "in" })
                }
              ),
              row.portRight && /* @__PURE__ */ jsx56(
                "div",
                {
                  className: "absolute pointer-events-auto",
                  style: { right: "0px", top: portY(i) - ROW_PORT_Y_OFFSET, transform: "translate(50%, -50%)" },
                  children: /* @__PURE__ */ jsx56(Port, { state: row.portRight.state, side: "out" })
                }
              )
            ] }, `ports-${i}`)) })
          ] }) : children && /* @__PURE__ */ jsx56("div", { className: "px-3 py-2 text-xs flex-1", children }),
          ports && ports.length > 0 && !hasRows && !isSimple && /* @__PURE__ */ jsx56("div", { className: "absolute inset-0 pointer-events-none", children: ports.map((p, i) => {
            const leftPorts = ports.filter((x2) => x2.side === "left");
            const rightPorts = ports.filter((x2) => x2.side === "right");
            const isLeft = p.side === "left";
            const idx = isLeft ? leftPorts.indexOf(p) : rightPorts.indexOf(p);
            const total = isLeft ? leftPorts.length : rightPorts.length;
            const yPos = (HEADER * GRID + GRID) / (total + 1) * (idx + 1);
            return /* @__PURE__ */ jsxs27(
              "div",
              {
                className: cn(
                  "absolute flex items-center gap-1.5 pointer-events-auto whitespace-nowrap",
                  isLeft ? "right-full flex-row-reverse mr-1.5" : "left-full flex-row ml-1.5"
                ),
                style: { top: yPos, transform: "translateY(-50%)" },
                children: [
                  /* @__PURE__ */ jsx56(Port, { state: p.state, side: p.side === "left" ? "in" : "out" }),
                  p.label && /* @__PURE__ */ jsx56("span", { className: "text-xs text-muted", children: p.label })
                ]
              },
              i
            );
          }) }),
          footer && !isSimple && /* @__PURE__ */ jsx56(
            "div",
            {
              className: "px-3 border-t border-border text-xs text-muted flex items-center gap-1.5 shrink-0 bg-muted/5",
              style: { height: FOOTER * GRID },
              children: footer
            }
          )
        ]
      }
    );
  }
);
GraphNode.displayName = "GraphNode";

// src/ui/typography/Typography.tsx
import { forwardRef as forwardRef49 } from "react";
import { jsx as jsx57 } from "react/jsx-runtime";
var Typography = forwardRef49(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx57("div", { ref, className: cn("space-y-4", className), ...props, children })
);
Typography.displayName = "Typography";

// src/ui/combobox/Combobox.tsx
import { forwardRef as forwardRef50, useState as useState7, useMemo as useMemo5, useRef as useRef6 } from "react";
import { jsx as jsx58, jsxs as jsxs28 } from "react/jsx-runtime";
var Combobox = forwardRef50(
  function Combobox2({ options, value, onChange, placeholder = "Search...", emptyText = "No results found", className, disabled }, ref) {
    const [open, setOpen] = useState7(false);
    const [query, setQuery] = useState7("");
    const inputRef = useRef6(null);
    const filtered = useMemo5(
      () => options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())),
      [options, query]
    );
    const selectedLabel = options.find((o) => o.value === value)?.label ?? "";
    return /* @__PURE__ */ jsxs28(Root9, { open, onOpenChange: (v) => {
      setOpen(v);
      if (!v) setQuery("");
    }, children: [
      /* @__PURE__ */ jsx58(Trigger5, { asChild: true, children: /* @__PURE__ */ jsxs28(
        "button",
        {
          ref,
          type: "button",
          role: "combobox",
          disabled,
          className: cn(
            "flex w-full items-center justify-between rounded-ui border border-border bg-bg px-3 py-2 text-sm text-left ring-offset-bg",
            "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !selectedLabel && "text-muted",
            className
          ),
          onClick: () => {
            setOpen(true);
            setTimeout(() => inputRef.current?.focus(), 0);
          },
          children: [
            selectedLabel || placeholder,
            /* @__PURE__ */ jsx58("svg", { viewBox: "0 0 8 8", className: "size-3 shrink-0 fill-current opacity-dim", children: /* @__PURE__ */ jsx58("path", { d: "M0 2l4 4 4-4" }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs28(
        PopoverContent,
        {
          side: "bottom",
          align: "start",
          className: "w-[var(--radix-popover-trigger-width)] p-0 overflow-hidden",
          children: [
            /* @__PURE__ */ jsx58("div", { className: "border-b border-border", children: /* @__PURE__ */ jsx58(
              Input,
              {
                ref: inputRef,
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder,
                variant: "filled",
                className: "border-0 rounded-none ring-0 focus-visible:ring-0"
              }
            ) }),
            /* @__PURE__ */ jsx58(ScrollArea, { className: "max-h-60", children: /* @__PURE__ */ jsx58("div", { className: "p-1", children: filtered.length === 0 ? /* @__PURE__ */ jsx58("p", { className: "px-2 py-4 text-sm text-muted text-center", children: emptyText }) : filtered.map((option) => /* @__PURE__ */ jsx58(
              "button",
              {
                type: "button",
                className: cn(
                  "w-full text-left px-2 py-1.5 rounded-ui-sm text-sm hover:bg-secondary focus:bg-secondary outline-none",
                  option.value === value && "bg-primary/10 text-primary font-medium"
                ),
                onClick: () => {
                  onChange?.(option.value);
                  setOpen(false);
                  setQuery("");
                },
                children: option.label
              },
              option.value
            )) }) })
          ]
        }
      )
    ] });
  }
);
Combobox.displayName = "Combobox";

// src/ui/multi-select/MultiSelect.tsx
import { forwardRef as forwardRef51, useState as useState8, useMemo as useMemo6, useRef as useRef7 } from "react";
import { Fragment as Fragment6, jsx as jsx59, jsxs as jsxs29 } from "react/jsx-runtime";
var MultiSelect = forwardRef51(
  function MultiSelect2({ options, value = [], onChange, placeholder = "Select...", emptyText = "No results found", className, disabled }, ref) {
    const [open, setOpen] = useState8(false);
    const [query, setQuery] = useState8("");
    const inputRef = useRef7(null);
    const filtered = useMemo6(
      () => options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())),
      [options, query]
    );
    const toggle = (optionValue) => {
      const next = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue];
      onChange?.(next);
    };
    const selectedLabels = options.filter((o) => value.includes(o.value));
    return /* @__PURE__ */ jsxs29(Root9, { open, onOpenChange: (v) => {
      setOpen(v);
      if (!v) setQuery("");
    }, children: [
      /* @__PURE__ */ jsx59(Trigger5, { asChild: true, children: /* @__PURE__ */ jsx59(
        "button",
        {
          type: "button",
          disabled,
          ref,
          className: cn(
            "flex w-full items-center gap-1 flex-wrap rounded-ui border border-border bg-bg px-3 py-2 text-sm text-left ring-offset-bg min-h-10",
            "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            selectedLabels.length === 0 && "text-muted",
            className
          ),
          children: selectedLabels.length === 0 ? placeholder : selectedLabels.length <= 3 ? selectedLabels.map((opt) => /* @__PURE__ */ jsx59(Badge, { variant: "neutral", style: "soft", children: opt.label }, opt.value)) : /* @__PURE__ */ jsxs29(Fragment6, { children: [
            selectedLabels.slice(0, 2).map((opt) => /* @__PURE__ */ jsx59(Badge, { variant: "neutral", style: "soft", children: opt.label }, opt.value)),
            /* @__PURE__ */ jsxs29(Badge, { variant: "neutral", style: "soft", children: [
              "+",
              selectedLabels.length - 2
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxs29(
        PopoverContent,
        {
          side: "bottom",
          align: "start",
          className: "w-[var(--radix-popover-trigger-width)] p-0 overflow-hidden",
          children: [
            /* @__PURE__ */ jsx59("div", { className: "border-b border-border", children: /* @__PURE__ */ jsx59(
              Input,
              {
                ref: inputRef,
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder,
                variant: "filled",
                className: "border-0 rounded-none ring-0 focus-visible:ring-0"
              }
            ) }),
            /* @__PURE__ */ jsx59(ScrollArea, { className: "max-h-60", children: /* @__PURE__ */ jsx59("div", { className: "p-1", children: filtered.length === 0 ? /* @__PURE__ */ jsx59("p", { className: "px-2 py-4 text-sm text-muted text-center", children: emptyText }) : filtered.map((option) => /* @__PURE__ */ jsxs29(
              "label",
              {
                className: cn(
                  "flex items-center gap-2 px-2 py-1.5 rounded-ui-sm text-sm hover:bg-secondary cursor-pointer"
                ),
                children: [
                  /* @__PURE__ */ jsx59(
                    Checkbox,
                    {
                      checked: value.includes(option.value),
                      onCheckedChange: () => toggle(option.value)
                    }
                  ),
                  option.label
                ]
              },
              option.value
            )) }) })
          ]
        }
      )
    ] });
  }
);
MultiSelect.displayName = "MultiSelect";

// src/ui/command-palette/CommandPalette.tsx
import { forwardRef as forwardRef52, useState as useState9, useMemo as useMemo7, useRef as useRef8, useEffect as useEffect3, useCallback as useCallback8 } from "react";
import { jsx as jsx60, jsxs as jsxs30 } from "react/jsx-runtime";
var CommandPalette = forwardRef52(
  function CommandPalette2({ open, onOpenChange, actions, onSelect, placeholder = "Search commands...", emptyText = "No results found", groups }, ref) {
    const [query, setQuery] = useState9("");
    const [activeIdx, setActiveIdx] = useState9(0);
    const inputRef = useRef8(null);
    const filtered = useMemo7(
      () => actions.filter((a) => {
        const q = query.toLowerCase();
        return a.label.toLowerCase().includes(q) || a.keywords && a.keywords.some((k) => k.toLowerCase().includes(q));
      }),
      [actions, query]
    );
    const groupedFiltered = useMemo7(() => {
      if (!groups) return null;
      const filteredIds = new Set(filtered.map((a) => a.id));
      return groups.map((g) => ({
        ...g,
        actions: g.actionIds.map((id) => actions.find((a) => a.id === id)).filter((a) => a && filteredIds.has(a.id))
      })).filter((g) => g.actions.length > 0);
    }, [groups, filtered, actions]);
    useEffect3(() => {
      if (open) {
        setQuery("");
        setActiveIdx(0);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }, [open]);
    const handleKeyDown = useCallback8(
      (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setActiveIdx((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && filtered[activeIdx]) {
          e.preventDefault();
          onSelect(filtered[activeIdx]);
          onOpenChange(false);
        } else if (e.key === "Escape") {
          onOpenChange(false);
        }
      },
      [filtered, activeIdx, onSelect, onOpenChange]
    );
    const flatItems = groupedFiltered ? groupedFiltered.flatMap((g) => g.actions) : filtered;
    return /* @__PURE__ */ jsx60(Root6, { open, onOpenChange, children: /* @__PURE__ */ jsx60("div", { ref, children: /* @__PURE__ */ jsxs30(DialogContent, { size: "lg", className: "p-0 overflow-hidden gap-0", children: [
      /* @__PURE__ */ jsx60("div", { className: "border-b border-border", children: /* @__PURE__ */ jsx60(
        "input",
        {
          ref: inputRef,
          value: query,
          onChange: (e) => {
            setQuery(e.target.value);
            setActiveIdx(0);
          },
          onKeyDown: handleKeyDown,
          placeholder,
          className: "w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
        }
      ) }),
      /* @__PURE__ */ jsx60(ScrollArea, { className: "max-h-80", children: /* @__PURE__ */ jsx60("div", { className: "p-2", onKeyDown: handleKeyDown, children: flatItems.length === 0 ? /* @__PURE__ */ jsx60("p", { className: "px-2 py-8 text-sm text-muted text-center", children: emptyText }) : groupedFiltered ? groupedFiltered.map((group) => /* @__PURE__ */ jsxs30("div", { children: [
        /* @__PURE__ */ jsx60("p", { className: "px-2 py-1 text-xs font-semibold text-muted uppercase tracking-wider", children: group.label }),
        group.actions.map((action) => {
          const idx = flatItems.indexOf(action);
          return /* @__PURE__ */ jsx60(
            CommandItem,
            {
              action,
              active: idx === activeIdx,
              onSelect: () => {
                onSelect(action);
                onOpenChange(false);
              },
              onMouseEnter: () => setActiveIdx(idx)
            },
            action.id
          );
        })
      ] }, group.label)) : filtered.map((action, idx) => /* @__PURE__ */ jsx60(
        CommandItem,
        {
          action,
          active: idx === activeIdx,
          onSelect: () => {
            onSelect(action);
            onOpenChange(false);
          },
          onMouseEnter: () => setActiveIdx(idx)
        },
        action.id
      )) }) })
    ] }) }) });
  }
);
CommandPalette.displayName = "CommandPalette";
function CommandItem({
  action,
  active,
  onSelect,
  onMouseEnter
}) {
  return /* @__PURE__ */ jsxs30(
    "button",
    {
      type: "button",
      className: cn(
        "flex w-full items-center gap-3 rounded-ui-sm px-2 py-1.5 text-sm text-left",
        active ? "bg-secondary text-secondary-fg" : "text-fg"
      ),
      onClick: onSelect,
      onMouseEnter,
      children: [
        action.icon && /* @__PURE__ */ jsx60("span", { className: "shrink-0 size-4 text-muted", children: action.icon }),
        /* @__PURE__ */ jsx60("span", { className: "flex-1 truncate", children: action.label }),
        action.shortcut && /* @__PURE__ */ jsx60("span", { className: "shrink-0 text-xs text-muted", children: action.shortcut })
      ]
    }
  );
}

// src/ui/drawer/Drawer.tsx
import { forwardRef as forwardRef53 } from "react";
import { Root as Root13, Trigger as Trigger7, Portal as Portal6, Overlay as Overlay2, Content as Content7, Title as Title3, Description as Description3, Close as Close4 } from "@radix-ui/react-dialog";
import { cva as cva31 } from "class-variance-authority";
import { jsx as jsx61, jsxs as jsxs31 } from "react/jsx-runtime";
var drawerOverlay = "fixed inset-0 z-[var(--z-overlay)] bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out";
var drawerContentVariants = cva31(
  "fixed z-[var(--z-overlay)] flex flex-col bg-surface-elevated shadow-lg transition-transform duration-[var(--duration-slow)] ease-[var(--ease-standard)]",
  {
    variants: {
      side: {
        left: "left-0 top-0 bottom-0 data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full",
        right: "right-0 top-0 bottom-0 data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full"
      },
      size: {
        sm: "w-72",
        md: "w-96",
        lg: "w-120"
      }
    },
    defaultVariants: {
      side: "right",
      size: "md"
    }
  }
);
var DrawerContent = forwardRef53(
  ({ className, side, size, children, ...props }, ref) => /* @__PURE__ */ jsxs31(Portal6, { children: [
    /* @__PURE__ */ jsx61(Overlay2, { className: drawerOverlay }),
    /* @__PURE__ */ jsxs31(Content7, { ref, className: cn(drawerContentVariants({ side, size }), className), style: { backdropFilter: "blur(var(--backdrop-blur))" }, ...props, children: [
      children,
      /* @__PURE__ */ jsx61(Close4, { className: "absolute right-panel top-panel rounded-ui-sm opacity-70 hover:opacity-100", children: /* @__PURE__ */ jsx61("svg", { viewBox: "0 0 15 15", className: "size-4 fill-current", children: /* @__PURE__ */ jsx61("path", { d: "M2 2l11 11M13 2L2 13", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }) }) })
    ] })
  ] })
);
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = forwardRef53(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx61("div", { ref, className: cn("flex flex-col gap-1.5 p-panel border-b border-border", className), ...props })
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerTitle = forwardRef53(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx61(Title3, { ref, className: cn("text-lg font-semibold leading-tight", className), ...props })
);
DrawerTitle.displayName = "DrawerTitle";
var DrawerDescription = forwardRef53(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx61(Description3, { ref, className: cn("text-sm text-muted", className), ...props })
);
DrawerDescription.displayName = "DrawerDescription";
var DrawerBody = forwardRef53(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx61("div", { ref, className: cn("flex-1", className), ...props, children: /* @__PURE__ */ jsx61(ScrollArea, { className: "h-full p-panel", children }) })
);
DrawerBody.displayName = "DrawerBody";
var DrawerFooter = forwardRef53(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx61("div", { ref, className: cn("flex items-center justify-end gap-inline p-panel border-t border-border", className), ...props })
);
DrawerFooter.displayName = "DrawerFooter";

// src/ui/data-list/DataList.tsx
import { forwardRef as forwardRef54 } from "react";
import { cva as cva32 } from "class-variance-authority";
import { jsx as jsx62, jsxs as jsxs32 } from "react/jsx-runtime";
var dataListVariants = cva32("overflow-hidden divide-y divide-border", {
  variants: {
    variant: {
      default: "",
      compact: ""
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var DataList = forwardRef54(
  ({ className, variant, items, replacements, ...props }, ref) => /* @__PURE__ */ jsx62(
    "dl",
    {
      ref,
      className: cn(dataListVariants({ variant }), className),
      ...props,
      children: items.map((item, i) => /* @__PURE__ */ jsxs32(
        "div",
        {
          className: cn(
            "flex items-center gap-4 min-w-0",
            variant === "compact" ? "py-1 px-2" : "py-2 px-3"
          ),
          children: [
            /* @__PURE__ */ jsxs32("dt", { className: "flex w-36 shrink-0 items-center gap-2 text-sm text-muted", children: [
              item.icon && /* @__PURE__ */ jsx62("span", { className: "shrink-0", children: item.icon }),
              item.label
            ] }),
            /* @__PURE__ */ jsx62("dd", { className: "min-w-0 flex-1 overflow-hidden text-sm text-fg font-medium", children: item.value !== void 0 ? /* @__PURE__ */ jsx62(
              CellType,
              {
                type: item.type ?? "text",
                value: item.value,
                badgeVariant: item.badgeVariant,
                badgeStyle: item.badgeStyle,
                statusVariant: item.statusVariant,
                statusPulse: item.statusPulse,
                replacements
              }
            ) : /* @__PURE__ */ jsx62("span", { className: "text-muted", children: "\u2014" }) })
          ]
        },
        i
      ))
    }
  )
);
DataList.displayName = "DataList";

// src/ui/patterns/data-table/DataTable.tsx
import { forwardRef as forwardRef55 } from "react";
import { cva as cva33 } from "class-variance-authority";
import { jsx as jsx63, jsxs as jsxs33 } from "react/jsx-runtime";
var COLUMN_WIDTH_SCALE = {
  xs: "8%",
  sm: "12%",
  md: "18%",
  lg: "26%",
  xl: "34%"
};
var dataTableVariants = cva33("", {
  variants: {
    variant: {
      default: "",
      striped: ""
    },
    density: {
      compact: "",
      normal: ""
    }
  },
  defaultVariants: {
    variant: "default",
    density: "normal"
  }
});
var DataTable = forwardRef55(
  ({ className, columns, rows, variant, density, stickyHeader, replacements, layout = "fixed", ...props }, ref) => /* @__PURE__ */ jsx63(ScrollArea, { ref, className: cn("w-full", className), ...props, children: /* @__PURE__ */ jsxs33(
    Table,
    {
      variant,
      density,
      className: layout === "fixed" ? "table-fixed" : "table-auto",
      children: [
        layout === "fixed" && /* @__PURE__ */ jsx63("colgroup", { children: columns.map((col) => /* @__PURE__ */ jsx63("col", { style: col.width ? { width: COLUMN_WIDTH_SCALE[col.width] } : void 0 }, col.key)) }),
        /* @__PURE__ */ jsx63(TableHeader, { sticky: stickyHeader, children: /* @__PURE__ */ jsx63(TableRow, { children: columns.map((col) => /* @__PURE__ */ jsx63(TableHead, { density, align: col.align, children: col.header }, col.key)) }) }),
        /* @__PURE__ */ jsx63(TableBody, { children: rows.map((row, i) => /* @__PURE__ */ jsx63(TableRow, { density, children: columns.map((col) => /* @__PURE__ */ jsx63(TableCell, { density, align: col.align, children: /* @__PURE__ */ jsx63(
          CellType,
          {
            type: col.type,
            value: row[col.key],
            badgeVariant: col.badgeVariant,
            badgeStyle: col.badgeStyle,
            statusVariant: typeof col.statusVariant === "function" ? col.statusVariant(row[col.key]) : col.statusVariant,
            statusPulse: col.statusPulse,
            replacements
          }
        ) }, col.key)) }, i)) })
      ]
    }
  ) })
);
DataTable.displayName = "DataTable";

// src/ui/slider/Slider.tsx
import { forwardRef as forwardRef56 } from "react";
import { jsx as jsx64, jsxs as jsxs34 } from "react/jsx-runtime";
var Slider = forwardRef56(
  ({ className, label, showValue, value, min = 0, max = 100, step = 1, ...props }, ref) => /* @__PURE__ */ jsxs34("div", { className: cn("flex flex-col gap-1", className), children: [
    (label || showValue) && /* @__PURE__ */ jsxs34("div", { className: "flex items-center justify-between", children: [
      label && /* @__PURE__ */ jsx64("span", { className: "text-sm text-fg", children: label }),
      showValue && /* @__PURE__ */ jsx64("span", { className: "text-sm text-muted font-mono", children: String(value ?? 0) })
    ] }),
    /* @__PURE__ */ jsx64(
      "input",
      {
        ref,
        type: "range",
        value,
        min,
        max,
        step,
        className: "w-full h-2 rounded-full bg-secondary appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-bg [&::-webkit-slider-thumb]:shadow-card",
        ...props
      }
    )
  ] })
);
Slider.displayName = "Slider";

// src/ui/markdown/Markdown.tsx
import { useMemo as useMemo8 } from "react";
import { Fragment as Fragment7, jsx as jsx65, jsxs as jsxs35 } from "react/jsx-runtime";
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function renderInline(text) {
  const parts = [];
  const regex = /(`[^`]+`)|(\*\*(.+?)\*\*)|(\*(.+?)\*)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(escapeHtml(text.slice(lastIndex, match.index)));
    }
    if (match[1]) {
      parts.push(/* @__PURE__ */ jsx65("code", { className: "rounded-ui-sm bg-secondary px-1 py-0.5 text-xs font-mono", children: match[1].slice(1, -1) }, match.index));
    } else if (match[3]) {
      parts.push(/* @__PURE__ */ jsx65("strong", { children: escapeHtml(match[3]) }, match.index));
    } else if (match[5]) {
      parts.push(/* @__PURE__ */ jsx65("em", { children: escapeHtml(match[5]) }, match.index));
    } else if (match[7]) {
      parts.push(/* @__PURE__ */ jsx65("a", { href: match[8], className: "text-primary hover:underline", children: escapeHtml(match[7]) }, match.index));
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(escapeHtml(text.slice(lastIndex)));
  }
  return parts.length === 1 ? parts[0] : parts.length > 1 ? /* @__PURE__ */ jsx65(Fragment7, { children: parts }) : "";
}
function parseBlocks(content) {
  const lines = content.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line === "") {
      i++;
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.+)/);
    if (heading) {
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
      i++;
      continue;
    }
    if (line.startsWith("```")) {
      const language = line.slice(3).trim() || void 0;
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", code: codeLines.join("\n"), language });
      continue;
    }
    if (line.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      if (tableLines.length >= 2 && /^[\s|:-]+$/.test(tableLines[1])) {
        const parseRow = (row) => row.split("|").slice(1, -1).map((c) => c.trim());
        const headers = parseRow(tableLines[0]);
        const rows = tableLines.slice(2).map(parseRow);
        blocks.push({ type: "table", headers, rows });
      }
      continue;
    }
    const listItem = line.match(/^[-*]\s+(.+)/);
    if (listItem) {
      const items = [listItem[1]];
      i++;
      while (i < lines.length) {
        const next = lines[i].match(/^[-*]\s+(.+)/);
        if (next) {
          items.push(next[1]);
          i++;
        } else break;
      }
      blocks.push({ type: "list", items });
      continue;
    }
    const paraLines = [line];
    i++;
    while (i < lines.length && lines[i] !== "") {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({ type: "paragraph", text: paraLines.join(" ") });
  }
  return blocks;
}
function Markdown({ content, className, ...props }) {
  const blocks = useMemo8(() => parseBlocks(content), [content]);
  return /* @__PURE__ */ jsx65("div", { className: cn("space-y-3", className), ...props, children: blocks.map((block, i) => {
    switch (block.type) {
      case "heading": {
        const sizes = ["", "text-lg", "text-base", "text-sm", "text-xs", "text-xs"];
        const cls = cn(sizes[block.level - 1] ?? "text-base", "font-semibold text-fg");
        const h = block.level;
        return h === 1 ? /* @__PURE__ */ jsx65("h1", { className: cls, children: renderInline(block.text) }, i) : h === 2 ? /* @__PURE__ */ jsx65("h2", { className: cls, children: renderInline(block.text) }, i) : h === 3 ? /* @__PURE__ */ jsx65("h3", { className: cls, children: renderInline(block.text) }, i) : h === 4 ? /* @__PURE__ */ jsx65("h4", { className: cls, children: renderInline(block.text) }, i) : h === 5 ? /* @__PURE__ */ jsx65("h5", { className: cls, children: renderInline(block.text) }, i) : /* @__PURE__ */ jsx65("h6", { className: cls, children: renderInline(block.text) }, i);
      }
      case "paragraph":
        return /* @__PURE__ */ jsx65("p", { className: "text-sm leading-relaxed text-fg", children: renderInline(block.text) }, i);
      case "list":
        return /* @__PURE__ */ jsx65("ul", { className: "list-disc pl-5 space-y-0.5", children: block.items.map((item, j) => /* @__PURE__ */ jsx65("li", { className: "text-sm text-fg", children: renderInline(item) }, j)) }, i);
      case "code":
        return /* @__PURE__ */ jsx65(CodeBlock, { code: block.code, language: block.language }, i);
      case "table":
        return /* @__PURE__ */ jsx65("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs35("table", { className: "w-full text-sm border-collapse", children: [
          block.headers.length > 0 && /* @__PURE__ */ jsx65("thead", { children: /* @__PURE__ */ jsx65("tr", { children: block.headers.map((h, j) => /* @__PURE__ */ jsx65("th", { className: "border border-border px-3 py-2 text-left font-semibold text-fg text-xs uppercase tracking-wider", children: renderInline(h) }, j)) }) }),
          /* @__PURE__ */ jsx65("tbody", { children: block.rows.map((row, j) => /* @__PURE__ */ jsx65("tr", { children: row.map((c, k) => /* @__PURE__ */ jsx65("td", { className: "border border-border px-3 py-1.5 text-fg", children: renderInline(c) }, k)) }, j)) })
        ] }) }, i);
      default:
        return null;
    }
  }) });
}

// src/ui/file-drop/FileDrop.tsx
import { forwardRef as forwardRef57, useState as useState10, useRef as useRef9, useCallback as useCallback9 } from "react";
import { cva as cva34 } from "class-variance-authority";
import { Fragment as Fragment8, jsx as jsx66, jsxs as jsxs36 } from "react/jsx-runtime";
var fileDropVariants = cva34(
  "relative flex flex-col items-center justify-center gap-2 rounded-ui border-2 border-dashed p-8 text-center transition-colors cursor-pointer",
  {
    variants: {
      state: {
        default: "border-border bg-bg hover:bg-secondary/50",
        dragging: "border-primary bg-primary/5",
        error: "border-danger bg-danger/5",
        success: "border-success bg-success/5"
      },
      size: {
        sm: "min-h-20 p-4 text-xs",
        md: "min-h-28 p-8 text-sm",
        lg: "min-h-40 p-10 text-base"
      }
    },
    defaultVariants: {
      state: "default",
      size: "md"
    }
  }
);
var FileDrop = forwardRef57(
  ({ className, onDrop, accept, multiple = true, maxSize, size, disabled, ...props }, ref) => {
    const [dragOver, setDragOver] = useState10(false);
    const [error, setError] = useState10(null);
    const [success, setSuccess] = useState10(false);
    const inputRef = useRef9(null);
    const validateAndDrop = useCallback9((files) => {
      setError(null);
      setSuccess(false);
      const fileArray = Array.from(files);
      if (!multiple && fileArray.length > 1) {
        setError("Only one file allowed");
        return;
      }
      if (accept) {
        const pattern = accept.replace(/\*/g, ".*");
        const invalid = fileArray.find((f) => !f.type.match(pattern));
        if (invalid) {
          setError(`File type not accepted: ${invalid.name}`);
          return;
        }
      }
      if (maxSize) {
        const oversized = fileArray.find((f) => f.size > maxSize);
        if (oversized) {
          const mb = maxSize / 1024 / 1024;
          setError(`File too large (max ${mb.toFixed(0)}MB): ${oversized.name}`);
          return;
        }
      }
      setSuccess(true);
      onDrop?.(fileArray);
    }, [multiple, accept, maxSize, onDrop]);
    const handleDragOver = useCallback9((e) => {
      e.preventDefault();
      if (!disabled) setDragOver(true);
    }, [disabled]);
    const handleDragLeave = useCallback9(() => setDragOver(false), []);
    const handleDrop = useCallback9((e) => {
      e.preventDefault();
      setDragOver(false);
      if (disabled) return;
      validateAndDrop(e.dataTransfer.files);
    }, [disabled, validateAndDrop]);
    const handleClick = useCallback9(() => inputRef.current?.click(), []);
    const handleFileChange = useCallback9((e) => {
      if (e.target.files) validateAndDrop(e.target.files);
    }, [validateAndDrop]);
    const state = disabled ? "default" : error ? "error" : success ? "success" : dragOver ? "dragging" : "default";
    return /* @__PURE__ */ jsxs36(
      "div",
      {
        ref,
        className: cn(fileDropVariants({ state, size }), disabled && "opacity-50 cursor-not-allowed", className),
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onClick: disabled ? void 0 : handleClick,
        ...props,
        children: [
          /* @__PURE__ */ jsx66("input", { ref: inputRef, type: "file", accept, multiple, className: "hidden", onChange: handleFileChange }),
          dragOver ? /* @__PURE__ */ jsxs36(Fragment8, { children: [
            /* @__PURE__ */ jsx66("svg", { viewBox: "0 0 24 24", className: "size-8 text-primary fill-none stroke-current stroke-[1.5]", children: /* @__PURE__ */ jsx66("path", { d: "M12 4v12m0 0l-3-3m3 3l3-3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" }) }),
            /* @__PURE__ */ jsx66("p", { className: "font-medium text-primary", children: "Drop files here" })
          ] }) : /* @__PURE__ */ jsxs36(Fragment8, { children: [
            /* @__PURE__ */ jsx66("svg", { viewBox: "0 0 24 24", className: "size-8 text-muted fill-none stroke-current stroke-[1.5]", children: /* @__PURE__ */ jsx66("path", { d: "M7 16a4 4 0 010-8 5 5 0 0110 0 4 4 0 010 8h-1M12 4v12m0 0l-3-3m3 3l3-3" }) }),
            /* @__PURE__ */ jsx66("p", { className: "font-medium text-fg", children: error || success ? "" : "Drop files here or click to browse" }),
            error && /* @__PURE__ */ jsx66("p", { className: "text-xs text-danger", children: error }),
            success && /* @__PURE__ */ jsx66("p", { className: "text-xs text-success", children: "Files added" }),
            !error && !success && /* @__PURE__ */ jsxs36("p", { className: "text-xs text-muted", children: [
              accept ? `Accepts: ${accept}` : "Any file type",
              maxSize ? ` \xB7 Max ${(maxSize / 1024 / 1024).toFixed(0)}MB` : "",
              multiple ? " \xB7 Multiple" : ""
            ] })
          ] })
        ]
      }
    );
  }
);
FileDrop.displayName = "FileDrop";

// src/ui/image/Image.tsx
import { forwardRef as forwardRef58 } from "react";
import { cva as cva35 } from "class-variance-authority";
import { jsx as jsx67, jsxs as jsxs37 } from "react/jsx-runtime";
var imageVariants = cva35("inline-block object-cover bg-secondary", {
  variants: {
    fit: {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
      scaleDown: "object-scale-down"
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-ui-sm",
      md: "rounded-ui",
      lg: "rounded-ui-lg",
      full: "rounded-full"
    },
    aspect: {
      auto: "aspect-auto",
      square: "aspect-square",
      video: "aspect-video",
      wide: "aspect-[16/9]",
      tall: "aspect-[3/4]"
    },
    bordered: {
      true: "ring-1 ring-border"
    },
    shadowed: {
      true: "shadow-card"
    }
  },
  defaultVariants: {
    fit: "cover",
    radius: "md",
    aspect: "auto"
  }
});
var Image2 = forwardRef58(
  ({ className, fit, radius, aspect, bordered, shadowed, caption, alt = "", ...props }, ref) => {
    const img = /* @__PURE__ */ jsx67(
      "img",
      {
        ref,
        alt,
        className: cn(imageVariants({ fit, radius, aspect, bordered, shadowed }), className),
        ...props
      }
    );
    if (caption) {
      return /* @__PURE__ */ jsxs37("figure", { className: "inline-flex flex-col gap-1.5", children: [
        img,
        /* @__PURE__ */ jsx67("figcaption", { className: "text-xs text-muted text-center", children: caption })
      ] });
    }
    return img;
  }
);
Image2.displayName = "Image";

// src/ui/patterns/graph/Graph.tsx
import { useReducer, useRef as useRef11, useCallback as useCallback12, useEffect as useEffect4 } from "react";

// src/ui/patterns/graph/types.ts
var NODE_WIDTH = 160;
var PORT_HIT = 24;
function getPortAnchor(node, rowIndex, side) {
  return {
    x: side === "left" ? node.x : node.x + NODE_WIDTH,
    y: node.y + portY(rowIndex)
  };
}

// src/ui/patterns/graph/GraphNode.tsx
import { useCallback as useCallback11 } from "react";

// src/ui/patterns/graph/PortHitZone.tsx
import { useCallback as useCallback10, useRef as useRef10 } from "react";
import { jsx as jsx68 } from "react/jsx-runtime";
function PortHitZone({
  nodeId,
  rowIndex,
  side,
  onPortEvent
}) {
  const elRef = useRef10(null);
  const down = useCallback10((e) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    onPortEvent("start", { nodeId, rowIndex, side }, e.nativeEvent);
  }, [nodeId, rowIndex, side, onPortEvent]);
  const move = useCallback10((e) => {
    onPortEvent("move", { nodeId, rowIndex, side }, e.nativeEvent);
  }, [nodeId, rowIndex, side, onPortEvent]);
  const up = useCallback10((e) => {
    onPortEvent("end", { nodeId, rowIndex, side }, e.nativeEvent);
  }, [nodeId, rowIndex, side, onPortEvent]);
  const stopProp = useCallback10((e) => e.stopPropagation(), []);
  return /* @__PURE__ */ jsx68(
    "div",
    {
      ref: elRef,
      "data-port": `${nodeId}-${rowIndex}-${side}`,
      className: "absolute z-20 rounded-full bg-transparent",
      style: {
        left: side === "left" ? -PORT_HIT / 2 : NODE_WIDTH - PORT_HIT / 2,
        top: portY(rowIndex) - PORT_HIT / 2,
        width: PORT_HIT,
        height: PORT_HIT,
        cursor: "crosshair"
      },
      onPointerDown: down,
      onPointerMove: move,
      onPointerUp: up,
      onMouseDown: stopProp
    }
  );
}

// src/ui/patterns/graph/GraphNode.tsx
import { jsx as jsx69, jsxs as jsxs38 } from "react/jsx-runtime";
function GraphNodeRenderer({
  node,
  isSelected,
  onSelect,
  onDragStart,
  onPortEvent
}) {
  const onDown = useCallback11((e) => {
    e.stopPropagation();
    onSelect(node.id);
    onDragStart(node.id, e.clientX, e.clientY, node.x, node.y);
  }, [node.id, node.x, node.y, onSelect, onDragStart]);
  return /* @__PURE__ */ jsxs38("div", { className: "absolute", style: { left: node.x, top: node.y, width: NODE_WIDTH }, onMouseDown: onDown, children: [
    /* @__PURE__ */ jsx69(
      GraphNode,
      {
        x: 0,
        y: 0,
        header: node.header,
        variant: isSelected ? "selected" : node.state ?? "default",
        accent: node.accent,
        footer: node.footer,
        rows: node.rows,
        className: "max-w-40"
      }
    ),
    node.rows.flatMap(
      (row, i) => ["left", "right"].filter((s) => s === "left" ? row.portLeft : row.portRight).map((s) => /* @__PURE__ */ jsx69(PortHitZone, { nodeId: node.id, rowIndex: i, side: s, onPortEvent }, `${i}-${s}`))
    )
  ] });
}

// src/ui/patterns/graph/Graph.tsx
import { jsx as jsx70, jsxs as jsxs39 } from "react/jsx-runtime";
function graphReducer(state, action) {
  switch (action.type) {
    case "MOVE_NODE":
      return {
        ...state,
        nodes: state.nodes.map((n) => n.id === action.id ? { ...n, x: action.x, y: action.y } : n)
      };
    case "SELECT_NODE":
      return { ...state, selectedNodeIds: [action.id], selectedEdgeIds: [] };
    case "SELECT_EDGE":
      return { ...state, selectedEdgeIds: [action.id], selectedNodeIds: [] };
    case "DESELECT_ALL":
      return { ...state, selectedNodeIds: [], selectedEdgeIds: [] };
    case "START_CONNECTING":
      return { ...state, connecting: { from: action.from, fromPos: action.fromPos, cursorWorld: action.cursorWorld } };
    case "MOVE_CONNECTING":
      return state.connecting ? { ...state, connecting: { ...state.connecting, cursorWorld: action.cursorWorld } } : state;
    case "END_CONNECTING": {
      if (!state.connecting) return state;
      const from = state.connecting.from;
      const to = action.to;
      if (to && to.nodeId !== from.nodeId && to.side !== from.side) {
        const exists = state.edges.some(
          (e) => e.from.nodeId === from.nodeId && e.from.rowIndex === from.rowIndex && e.to.nodeId === to.nodeId && e.to.rowIndex === to.rowIndex
        );
        if (!exists) {
          return {
            ...state,
            edges: [...state.edges, { id: `${from.nodeId}-${from.rowIndex}-to-${to.nodeId}-${to.rowIndex}`, from, to }],
            connecting: null
          };
        }
      }
      return { ...state, connecting: null };
    }
    case "DELETE_SELECTED": {
      const nodeIds = new Set(state.selectedNodeIds);
      const edgeIds = new Set(state.selectedEdgeIds);
      return {
        ...state,
        nodes: state.nodes.filter((n) => !nodeIds.has(n.id)),
        edges: state.edges.filter((e) => !nodeIds.has(e.from.nodeId) && !nodeIds.has(e.to.nodeId) && !edgeIds.has(e.id)),
        selectedNodeIds: [],
        selectedEdgeIds: []
      };
    }
    case "SET_OFFSET":
      return { ...state, offset: action.offset };
    case "SET_ZOOM":
      return { ...state, zoom: action.zoom };
  }
}
var Graph = ({
  initialNodes,
  initialEdges = [],
  snapToGrid: snapToGridProp = false,
  className,
  controls,
  onChange
}) => {
  const containerRef = useRef11(null);
  const [state, dispatch] = useReducer(graphReducer, {
    nodes: initialNodes,
    edges: initialEdges,
    selectedNodeIds: [],
    selectedEdgeIds: [],
    connecting: null,
    offset: { x: 0, y: 0 },
    zoom: 1
  });
  const stateRef = useRef11(state);
  stateRef.current = state;
  const snapToGrid = useRef11(snapToGridProp);
  snapToGrid.current = snapToGridProp;
  const onChangeRef = useRef11(onChange);
  onChangeRef.current = onChange;
  useEffect4(() => {
    onChangeRef.current?.({ nodes: state.nodes, edges: state.edges });
  }, [state.nodes, state.edges]);
  const screenToWorld = useCallback12((clientX, clientY) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    const s = stateRef.current;
    return {
      x: (clientX - rect.left - s.offset.x) / s.zoom,
      y: (clientY - rect.top - s.offset.y) / s.zoom
    };
  }, []);
  const handleDragStart = useCallback12((id, clientX, clientY, nodeX, nodeY) => {
    const startX = clientX, startY = clientY;
    const startNodeX = nodeX, startNodeY = nodeY;
    const onMove = (e) => {
      const z = stateRef.current.zoom;
      dispatch({ type: "MOVE_NODE", id, x: startNodeX + (e.clientX - startX) / z, y: startNodeY + (e.clientY - startY) / z });
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      if (snapToGrid.current) {
        const n = stateRef.current.nodes.find((x) => x.id === id);
        if (n) dispatch({ type: "MOVE_NODE", id, x: snap(n.x), y: snap(n.y) });
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, []);
  const handlePortEvent = useCallback12((type, portRef, e) => {
    if (type === "start") {
      const node = stateRef.current.nodes.find((n) => n.id === portRef.nodeId);
      if (!node) return;
      const fromPos = getPortAnchor(node, portRef.rowIndex, portRef.side);
      dispatch({ type: "START_CONNECTING", from: portRef, fromPos, cursorWorld: screenToWorld(e.clientX, e.clientY) });
    } else if (type === "move") {
      dispatch({ type: "MOVE_CONNECTING", cursorWorld: screenToWorld(e.clientX, e.clientY) });
    } else {
      const target = (() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const attr = el?.closest("[data-port]")?.getAttribute("data-port");
        if (!attr) return null;
        const [nid, ri, sd] = attr.split("-");
        return { nodeId: nid, rowIndex: parseInt(ri), side: sd };
      })();
      dispatch({ type: "END_CONNECTING", to: target });
    }
  }, [screenToWorld]);
  useEffect4(() => {
    const onKeyDown = (e) => {
      if ((e.key === "Delete" || e.key === "Backspace") && (stateRef.current.selectedNodeIds.length > 0 || stateRef.current.selectedEdgeIds.length > 0)) {
        dispatch({ type: "DELETE_SELECTED" });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  const handleEdgeClick = useCallback12((edgeId) => {
    dispatch({ type: "SELECT_EDGE", id: edgeId });
  }, []);
  const { nodes, edges, selectedNodeIds, selectedEdgeIds, connecting, offset: offset2, zoom } = state;
  return /* @__PURE__ */ jsxs39(
    Canvas,
    {
      ref: containerRef,
      className: cn("h-96 w-full rounded-ui border border-border", className),
      offset: offset2,
      zoom,
      onOffsetChange: (o) => dispatch({ type: "SET_OFFSET", offset: o }),
      onZoomChange: (z) => dispatch({ type: "SET_ZOOM", zoom: z }),
      onBackgroundClick: () => dispatch({ type: "DESELECT_ALL" }),
      controls,
      children: [
        /* @__PURE__ */ jsxs39("svg", { className: "absolute inset-0 overflow-visible w-full h-full pointer-events-none", children: [
          edges.map((edge) => {
            const fn = nodes.find((n) => n.id === edge.from.nodeId);
            const tn = nodes.find((n) => n.id === edge.to.nodeId);
            if (!fn || !tn) return null;
            const accent = fn.accent || tn.accent;
            return /* @__PURE__ */ jsx70(
              Edge,
              {
                from: getPortAnchor(fn, edge.from.rowIndex, edge.from.side),
                to: getPortAnchor(tn, edge.to.rowIndex, edge.to.side),
                state: selectedEdgeIds.includes(edge.id) ? "highlighted" : edge.state ?? "default",
                className: accent && !selectedEdgeIds.includes(edge.id) ? "stroke-primary" : void 0,
                onClick: () => handleEdgeClick(edge.id)
              },
              edge.id
            );
          }),
          connecting && /* @__PURE__ */ jsx70(
            "path",
            {
              d: generatePath(connecting.fromPos, connecting.cursorWorld, "bezier"),
              className: "fill-none stroke-muted stroke-[2px] opacity-60",
              style: { strokeDasharray: "6 3" }
            }
          )
        ] }),
        nodes.map((node) => /* @__PURE__ */ jsx70(
          GraphNodeRenderer,
          {
            node,
            isSelected: selectedNodeIds.includes(node.id),
            onSelect: (id) => dispatch({ type: "SELECT_NODE", id }),
            onDragStart: handleDragStart,
            onPortEvent: handlePortEvent
          },
          node.id
        ))
      ]
    }
  );
};

// src/ui/patterns/textured-surface/TexturedSurface.tsx
import { forwardRef as forwardRef59, useMemo as useMemo9 } from "react";
import { cva as cva36 } from "class-variance-authority";

// src/ui/patterns/textured-surface/svg-utils.ts
var MIN_FROSTED_CYCLES = 10;
function genFrostedTile(tile, freq) {
  return Math.max(tile, Math.ceil(MIN_FROSTED_CYCLES / freq));
}
function dataUri(svg) {
  return `data:image/svg+xml,${svg.trim().replace(/\s+/g, " ").replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E")}`;
}
function offset(stretch) {
  return (0.5 * (1 - stretch)).toFixed(3);
}
function paperSvg(s) {
  const o = offset(s.stretch);
  return `<svg viewBox='0 0 ${s.tile} ${s.tile}' xmlns='http://www.w3.org/2000/svg'>
<filter id='p' color-interpolation-filters='sRGB'>
<feTurbulence type='fractalNoise' baseFrequency='${s.freq}' numOctaves='${s.octaves}' stitchTiles='stitch' x='0' y='0' width='100%' height='100%' result='noise'/>
<feColorMatrix in='noise' type='matrix' values='${s.stretch} 0 0 0 ${o} ${s.stretch} 0 0 0 ${o} ${s.stretch} 0 0 0 ${o} 1 0 0 0 0'/>
</filter>
<rect width='100%' height='100%' filter='url(#p)'/>
</svg>`.trim();
}
function metallicSvg(s) {
  const o = offset(s.stretch);
  const cx = s.tile / 2, cy = s.tile / 2;
  return `<svg viewBox='0 0 ${s.tile} ${s.tile}' xmlns='http://www.w3.org/2000/svg'>
<filter id='m' color-interpolation-filters='sRGB'>
<feTurbulence type='fractalNoise' baseFrequency='${s.freqX} ${s.freqY}' numOctaves='${s.octaves}' stitchTiles='stitch' x='0' y='0' width='${s.tile}' height='${s.tile}' result='noise'/>
<feColorMatrix in='noise' type='matrix' values='${s.stretch} 0 0 0 ${o} ${s.stretch} 0 0 0 ${o} ${s.stretch} 0 0 0 ${o} 1 0 0 0 0'/>
</filter>
<g transform='rotate(${s.angle} ${cx} ${cy})'>
<rect x='-50%' y='-50%' width='200%' height='200%' filter='url(#m)'/>
</g>
</svg>`.trim();
}
function frostedSvgBody(fid, s) {
  const o = offset(s.stretch);
  const row = `${s.stretch} 0 0 0 ${o}`;
  const fineFreq = s.freq * 3;
  const seedAttr = s.seed != null ? ` seed='${s.seed}'` : "";
  const gt = genFrostedTile(s.tile, s.freq);
  return `<svg viewBox='0 0 ${gt} ${gt}' xmlns='http://www.w3.org/2000/svg'>
<filter id='${fid}' x='0' y='0' width='${gt}' height='${gt}' color-interpolation-filters='sRGB'>
<feTurbulence type='fractalNoise' baseFrequency='${s.freq}' numOctaves='${s.octaves}' stitchTiles='stitch' x='0' y='0' width='${gt}' height='${gt}' result='cRaw'${seedAttr}/>
<feTurbulence type='fractalNoise' baseFrequency='${fineFreq}' numOctaves='2' stitchTiles='stitch' x='0' y='0' width='${gt}' height='${gt}' result='fRaw'${seedAttr}/>
<feComposite in='cRaw' in2='fRaw' operator='arithmetic' k1='0' k2='0.5' k3='0.5' k4='0' x='0' y='0' width='${gt}' height='${gt}' result='mixedRaw'/>
<feColorMatrix in='mixedRaw' type='matrix' values='${row} ${row} ${row} 1 0 0 0 0' x='0' y='0' width='${gt}' height='${gt}'/>
</filter>
<rect width='100%' height='100%' filter='url(#${fid})'/>
</svg>`.trim();
}
function frostedBlurSvg(s) {
  return frostedSvgBody("f", s);
}
function fullFrostedSvg(s) {
  return frostedSvgBody("ff", s);
}
function ditherSvg() {
  return `<svg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
<filter id='d'>
<feTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1'/>
</filter>
<rect width='100%' height='100%' filter='url(#d)'/>
</svg>`.trim();
}
function pAssets(freq, octaves, stretch, tile, secTile) {
  return {
    primary: dataUri(paperSvg({ freq, octaves, stretch, tile, opacity: 0 })),
    secondary: dataUri(paperSvg({ freq, octaves, stretch, tile: secTile, opacity: 0 })),
    tileSize: tile
  };
}
function mAssets(freqX, freqY, octaves, stretch, tile, secTile) {
  return {
    primary: dataUri(metallicSvg({ freqX, freqY, angle: 0, octaves, stretch, tile, opacity: 0 })),
    secondary: dataUri(metallicSvg({ freqX, freqY, angle: 0, octaves, stretch, tile: secTile, opacity: 0 })),
    tileSize: tile
  };
}
function fAssets(freq, octaves, stretch, tile, secTile) {
  const genTile = genFrostedTile(tile, freq);
  const genSecTile = genFrostedTile(secTile, freq);
  return {
    primary: dataUri(fullFrostedSvg({ freq, octaves, stretch, tile: genTile, opacity: 0 })),
    secondary: dataUri(fullFrostedSvg({ freq, octaves, stretch, tile: genSecTile, opacity: 0 })),
    tileSize: genTile
  };
}
var PAGE_MEDIUM_URI = pAssets(0.4, 5, 2.6, 255, 166).primary;
var PAGE_MEDIUM_FROSTED_LAYERS = [1, 7, 13].map((s) => `url("${dataUri(frostedBlurSvg({ freq: 3e-3, octaves: 2, stretch: 2.6, tile: 3334, opacity: 0, seed: s }))}")`).join(", ");
var layerPaper = {
  page: {
    subtle: pAssets(0.16, 4, 1.8, 110, 72),
    medium: pAssets(0.14, 3, 2, 130, 85),
    strong: pAssets(0.11, 3, 2.2, 150, 98)
  },
  surface: {
    subtle: pAssets(0.55, 6, 2.1, 210, 137),
    medium: pAssets(0.4, 5, 2.6, 255, 166),
    strong: pAssets(0.3, 5, 3, 300, 195)
  },
  foreground: {
    subtle: pAssets(0.24, 5, 1.4, 65, 42),
    medium: pAssets(0.2, 4, 1.5, 80, 52),
    strong: pAssets(0.18, 4, 1.6, 100, 65)
  }
};
var layerMetallic = {
  page: {
    subtle: mAssets(1.8, 96e-4, 2, 2, 168, 109),
    medium: mAssets(1.68, 6e-3, 2, 2.2, 204, 133),
    strong: mAssets(1.56, 36e-4, 2, 2.3, 240, 156)
  },
  surface: {
    subtle: mAssets(1.56, 36e-4, 2, 2.2, 228, 149),
    medium: mAssets(1.44, 24e-4, 1, 2.3, 264, 172),
    strong: mAssets(1.38, 12e-4, 1, 2.4, 300, 196)
  },
  foreground: {
    subtle: mAssets(2.04, 0.0144, 3, 1.9, 108, 71),
    medium: mAssets(1.92, 96e-4, 2, 2, 132, 86),
    strong: mAssets(1.8, 6e-3, 2, 2.2, 156, 102)
  }
};
var FROSTED_DITHER = dataUri(ditherSvg());
var layerFrosted = {
  page: {
    subtle: fAssets(0.015, 2, 2, 667, 434),
    medium: fAssets(0.01, 2, 2.2, 1e3, 650),
    strong: fAssets(8e-3, 2, 2.4, 1250, 813)
  },
  surface: {
    subtle: fAssets(0.03, 1, 2.4, 334, 217),
    medium: fAssets(0.03, 1, 2.6, 350, 228),
    strong: fAssets(0.03, 1, 3, 400, 260)
  },
  foreground: {
    subtle: fAssets(0.04, 3, 1.6, 250, 163),
    medium: fAssets(0.03, 3, 1.8, 334, 217),
    strong: fAssets(0.02, 3, 2, 500, 325)
  }
};
var LAYER_SVGS = {
  "paper-grain": layerPaper,
  "brushed-aluminium": layerMetallic,
  "frosted-glass": layerFrosted
};

// src/ui/patterns/textured-surface/TexturedSurface.tsx
import { jsx as jsx71, jsxs as jsxs40 } from "react/jsx-runtime";
var TEXTURE_STRENGTHS = {
  "paper-grain": { subtle: 0.3, medium: 0.5, strong: 0.75 },
  "frosted-glass": { subtle: 0.22, medium: 0.35, strong: 0.55 },
  "brushed-aluminium": { subtle: 0.15, medium: 0.28, strong: 0.45 }
};
var LAYER_OPACITY = {
  page: 0.55,
  surface: 0.3,
  foreground: 0.25
};
var TEXTURE_CONFS = {
  "paper-grain": (op, layer, strength) => {
    const a = LAYER_SVGS["paper-grain"]?.[layer]?.[strength];
    if (!a) return null;
    return {
      layers: [
        { uri: a.primary, opacity: op, blend: "hard-light", tileSize: a.tileSize },
        { uri: a.secondary, opacity: op * 0.15, blend: "hard-light", tileSize: Math.round(a.tileSize * 0.65) }
      ]
    };
  },
  "brushed-aluminium": (op, layer, strength) => {
    const a = LAYER_SVGS["brushed-aluminium"]?.[layer]?.[strength];
    if (!a) return null;
    return {
      layers: [
        { uri: a.primary, opacity: op, blend: "hard-light", tileSize: a.tileSize },
        { uri: a.secondary, opacity: op * 0.15, blend: "hard-light", tileSize: Math.round(a.tileSize * 0.65) }
      ]
    };
  },
  "frosted-glass": (op, layer, strength) => {
    const a = LAYER_SVGS["frosted-glass"]?.[layer]?.[strength];
    if (!a) return null;
    return {
      layers: [
        { uri: a.primary, opacity: op, blend: "hard-light" },
        { uri: a.secondary, opacity: op * 0.08, blend: "hard-light", tileSize: Math.round(a.tileSize * 0.65) },
        { uri: FROSTED_DITHER, opacity: 0.03, blend: "hard-light", tileSize: 64 }
      ]
    };
  }
};
var texturedSurfaceVariants = cva36(
  "after:content-[''] after:absolute after:inset-0 after:-z-10 after:pointer-events-none after:[background-image:var(--texture-paper-resolved,var(--texture-paper))] after:[background-size:var(--texture-size-resolved,var(--texture-size))] after:opacity-[var(--texture-opacity-resolved,var(--texture-opacity-surface))] after:[mix-blend-mode:var(--texture-blend)]",
  {
    variants: {
      variant: {
        surface: "",
        elevated: "shadow-elevated"
      },
      radius: {
        default: "rounded-ui",
        sm: "rounded-ui-sm",
        lg: "rounded-ui-lg",
        none: ""
      }
    },
    defaultVariants: {
      variant: "surface",
      radius: "default"
    }
  }
);
var TexturedSurface = forwardRef59(
  ({ className, variant, radius, color = "--color-surface", texture = "theme", strength = "medium", layer = "page", alignToViewport = false, style, children, ...props }, ref) => {
    const conf = useMemo9(() => {
      if (texture === "theme") return null;
      const baseOp = TEXTURE_STRENGTHS[texture]?.[strength] ?? 0.5;
      const layerOp = LAYER_OPACITY[layer];
      return TEXTURE_CONFS[texture]?.(baseOp * layerOp, layer, strength) ?? null;
    }, [texture, strength, layer]);
    const textureType = (typeof document !== "undefined" ? getComputedStyle(document.documentElement).getPropertyValue("--texture-type").trim() : "") || "paper-grain";
    const rootStyle = useMemo9(() => {
      if (conf) {
        return { "--texture-opacity": "0", "--texture-opacity-surface": "0", ...style };
      }
      const lo = LAYER_OPACITY[layer];
      const overrides = {};
      const svgs = LAYER_SVGS[textureType]?.[layer]?.[strength];
      if (svgs) {
        overrides["--texture-paper-resolved"] = `url("${svgs.primary}")`;
        overrides["--texture-size-resolved"] = `${svgs.tileSize}px`;
      }
      if (lo !== 1) {
        overrides["--texture-opacity-resolved"] = `calc(var(--texture-opacity-surface) * ${lo})`;
      }
      return { ...overrides, ...style };
    }, [conf, layer, style, textureType]);
    if (conf) {
      const tileLayers = conf.layers.filter((l) => l.tileSize);
      const coverLayers = conf.layers.filter((l) => !l.tileSize);
      return /* @__PURE__ */ jsxs40(
        "div",
        {
          ref,
          className: cn("relative isolate overflow-hidden border border-border", texturedSurfaceVariants({ variant, radius }), className),
          style: rootStyle,
          ...props,
          children: [
            /* @__PURE__ */ jsx71("div", { className: "absolute inset-0 pointer-events-none -z-10", style: { backgroundColor: `var(${color})` } }),
            tileLayers.map((l, i) => /* @__PURE__ */ jsx71(
              "div",
              {
                "aria-hidden": true,
                className: "absolute inset-0 pointer-events-none -z-10",
                style: {
                  backgroundImage: `url("${l.uri}")`,
                  backgroundSize: `${l.tileSize}px`,
                  backgroundRepeat: "repeat",
                  opacity: l.opacity,
                  mixBlendMode: l.blend,
                  ...alignToViewport ? { backgroundAttachment: "fixed" } : {}
                }
              },
              i
            )),
            coverLayers.length > 0 && /* @__PURE__ */ jsx71("div", { className: "absolute inset-0 pointer-events-none -z-10", style: { containerType: "size" }, children: coverLayers.map((l, i) => /* @__PURE__ */ jsx71(
              "div",
              {
                "aria-hidden": true,
                className: "absolute pointer-events-none",
                style: {
                  top: "50%",
                  left: "50%",
                  width: "calc(100cqw + 100cqh)",
                  height: "calc(100cqw + 100cqh)",
                  transform: "translate(-50%, -50%)",
                  transformOrigin: "center",
                  backgroundImage: `url("${l.uri}")`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  opacity: l.opacity,
                  mixBlendMode: l.blend
                }
              },
              i
            )) }),
            children
          ]
        }
      );
    }
    return /* @__PURE__ */ jsx71(
      "div",
      {
        ref,
        className: cn("relative isolate overflow-hidden border border-border", texturedSurfaceVariants({ variant, radius }), className),
        style: { backgroundColor: `var(${color})`, ...rootStyle },
        ...props,
        children
      }
    );
  }
);
TexturedSurface.displayName = "TexturedSurface";

// src/ui/patterns/textured-surface/ParamTable.tsx
import { Fragment as Fragment9 } from "react";
import { jsx as jsx72, jsxs as jsxs41 } from "react/jsx-runtime";
var LAYERS = ["page", "surface", "foreground"];
var STRENGTHS = ["subtle", "medium", "strong"];
var LAYER_LABELS = {
  page: "Page",
  surface: "Surface",
  foreground: "Foreground"
};
function ParamTable({ texture = "paper-grain" }) {
  return /* @__PURE__ */ jsxs41("div", { className: "w-full grid grid-cols-[4rem_repeat(3,1fr)] gap-1 items-center", children: [
    /* @__PURE__ */ jsx72("div", {}),
    STRENGTHS.map((s) => /* @__PURE__ */ jsx72("div", { className: "text-center text-xs font-medium text-muted", children: s }, s)),
    LAYERS.map((layer) => /* @__PURE__ */ jsxs41(Fragment9, { children: [
      /* @__PURE__ */ jsx72("div", { className: "text-xs font-medium text-muted self-center", children: LAYER_LABELS[layer] }),
      STRENGTHS.map((strength) => /* @__PURE__ */ jsx72(
        TexturedSurface,
        {
          texture,
          layer,
          strength,
          className: "aspect-square min-h-20 rounded-ui"
        },
        strength
      ))
    ] }, layer))
  ] });
}

// src/ui/patterns/textured-surface/index.ts
var TexturedSurface2 = Object.assign(TexturedSurface, { ParamTable });
export {
  Alert,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Canvas,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CellType,
  Checkbox,
  CodeBlock,
  Combobox,
  CommandPalette,
  ConfirmDialog,
  ConnectionLine,
  DataList,
  DataTable,
  Root6 as Dialog,
  Close as DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Trigger2 as DialogTrigger,
  Root13 as Drawer,
  DrawerBody,
  Close4 as DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Trigger7 as DrawerTrigger,
  Root8 as DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Trigger4 as DropdownMenuTrigger,
  EmptyState,
  FileDrop,
  FormField,
  Graph,
  GraphNode,
  Image2 as Image,
  Input,
  Kbd,
  Label,
  Markdown,
  MultiSelect,
  PageShell,
  Pagination,
  Root9 as Popover,
  Close2 as PopoverClose,
  PopoverContent,
  Trigger5 as PopoverTrigger,
  Port,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Root5 as Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Value as SelectValue,
  Separator2 as Separator,
  Skeleton,
  Slider,
  Spinner,
  StatCard,
  StatusDot,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  TexturedSurface2 as TexturedSurface,
  Toaster,
  Toolbar,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TreeView,
  Typography,
  cn,
  useToast
};
