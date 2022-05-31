export const ExternalLink = ({ className, children, href, target="_blank" }) => (
  <a className={className} href={href} rel="noreferrer noopener" target={target}>
    {children}
  </a>
)
