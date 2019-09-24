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

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={`material-icons ${className}`}
  />
));

export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className="toolbar"
  />
));