# MN Tech Finsolutions — security release

This public website is meant to be viewable by customers. These controls reduce browser-side attacks; they do NOT make a public website unviewable or prevent authorized GitHub/Render administrators from changing it.

## Included
- Render static-site `_headers`: restrictive Content Security Policy, clickjacking prevention, MIME-sniffing protection, referrer policy, restricted browser permissions, HTTPS HSTS.
- WhatsApp enquiry opens a new window with `noopener,noreferrer` to prevent tabnabbing.
- No server-side database or administrator login exists in this static website; no customer enquiries are stored on the website server. Customers choose to send the enquiry via WhatsApp.

## REQUIRED account security (cannot be done by editing website files)
1. Enable two-factor authentication (ideally passkeys/security keys) on GitHub, Render and associated email accounts.
2. Remove collaborators and deploy keys who should not have access; use least-privilege roles. Revoke unused personal access tokens and OAuth app access.
3. In GitHub, protect the `main` branch: require pull requests and approval, restrict who can push, and disable force pushes/deletions. Settings vary by repository/plan.
4. Review Render team permissions, connected GitHub repository, deploy hooks and API keys; rotate any exposed credentials.
5. Protect the domain registrar and DNS accounts with MFA, lock domain transfers, and review DNS records.
6. After upload, verify the Render site actually sends the `_headers` response headers and that CSP does not block expected images, styles, scripts or WhatsApp navigation.
7. If you want a PRIVATE website that nobody else can VIEW, do not deploy it as a public static site. Use an authenticated access gateway instead, but then customers cannot browse it freely.

## Notes
- These security settings do not guarantee a site cannot be hacked or edited.
- GitHub source files can be changed by anyone who retains sufficient repository access, including the owner.
- ChatGPT cannot edit the live site without authorized access to the hosting/source accounts; revoke connector access if you want to prevent future assistance from accessing them.
- The certificate, Maps destination, WhatsApp enquiry, and privacy/terms language still need real-world review.
