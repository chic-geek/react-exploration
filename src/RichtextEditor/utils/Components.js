import React from 'react';

export const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={className}
    />
  )
);
Button.displayName = 'Button';

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={`material-icons ${className}`}
  />
));
Icon.displayName = 'Icon';

export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className="toolbar"
  />
));
Toolbar.displayName = 'Toolbar';