import { LinkProps, Link as RouterLink } from "react-router-dom";

export function Link({ children, className, ...rest }: LinkProps) {
    return <RouterLink {...rest} className={`texxt-blue-500 underline underline-offset-2 `}>{children}</RouterLink>
}