import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'px-10 py-3 leading-none rounded-full text-medium border transition',
  {
    variants: {
      variant: {
        default: 'text-white bg-gray-900 border-transparent hover:bg-gray-800',
        secondary:
          'text-gray-900 bg-white border-gray-300 ring ring-4 ring-gray-100 hover:bg-gray-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  ),
)

Button.displayName = 'Button'
export default Button
