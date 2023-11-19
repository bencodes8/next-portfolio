export function TypographyH1({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
            {children}
        </h2>
    );
}

export function TypographyH3({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
      <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
            {children}
      </h3>
    );
}

export function TypographyH4({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
      <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
            {children}
      </h4>
    );
}

export function TypographyLarge({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
      <div className={`text-lg font-semibold ${className}`}>
            {children}
      </div>
    );
  }
  