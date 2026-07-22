# DNS records for JUnit's domains

managed via [DNSControl](https://dnscontrol.org)

## Cloudflare → INWX migration

Currently, both providers serve the same DNS records.
The registrar (Squarespace) is configured to use INWX as of 2026-07-21.

Rollback: switch NS records back and reconfigure Squarespace

**TODOs:**
- [x] Check that INWX is used: `dig junit.org NS +trace`
- [ ] Transfer the domain from Squarespace to INWX: unlock and get transfer code at Squarespace, order transfer at INWX, re-enable transfer lock afterwards
- [ ] Replace `REG_NONE` with `NewRegistrar("inwx")` in `dnsconfig.js`
- [ ] Remove `DnsProvider(DSP_CLOUDFLARE)`, restore TTLs, and revoke Cloudflare token
