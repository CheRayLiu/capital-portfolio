import { forwardRef } from 'react';

export const Select = forwardRef(({ children, ...props }, ref) => {
  return (
    <select
      style={{
        width: '100%',
        radius: '1rem',
        borderRadius: '1rem',
        minHeight: '3rem',
        padding: '0 1rem',
        boxShadow: '0 0 0 0.1rem rgba(0, 0, 0, 0.15)',
        border: 'none',
        appearance: 'none',
      }}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});
