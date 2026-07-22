var REG_NONE = NewRegistrar("none");
var REG_INWX = NewRegistrar("inwx");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");
var DSP_INWX = NewDnsProvider("inwx");

D("junit.org", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE),
    DnsProvider(DSP_INWX, 0),
    DefaultTTL(300),

    // statichost.eu
    ALIAS("@", "junit-org.statichost.page."),
    CNAME("www", "junit-org.statichost.page."),
    CNAME("assets", "junit-assets.statichost.page."),
    CNAME("docs", "junit-docs.statichost.page."),
    CNAME("schemas", "junit-schemas.statichost.page."),

    // Redirects
    CNAME("api", "edge.redirect.pizza."),
    CNAME("start", "edge.redirect.pizza."),

    // Develocity
    CNAME("develocity", "junit.develocity.cloud."),
    CNAME("eu-develocity-node", "eu-node.junit.develocity.cloud."),

    // Mail: anonaddy (addy.io) forwarding
    MX("@", 10, "mail.anonaddy.me."),
    MX("@", 20, "mail2.anonaddy.me."),
    CNAME("dk1._domainkey", "dk1._domainkey.anonaddy.me."),
    CNAME("dk2._domainkey", "dk2._domainkey.anonaddy.me."),
    TXT("@", "v=spf1 include:spf.anonaddy.me -all"),
    TXT("_dmarc", "v=DMARC1; p=quarantine; adkim=s"),

    // Bluesky domain verification
    TXT("_atproto", "did=did:plc:3lqgjtqn3jdc26uryc4ibdw3"),
);

D("apiguardian.org", REG_INWX,
  DnsProvider(DSP_INWX),
  DefaultTTL(3600),
  NAMESERVER_TTL("86400"),
  ALIAS("@", "junit-org.statichost.page."),
);

D("opentest4j.org", REG_INWX,
  DnsProvider(DSP_INWX),
  DefaultTTL(3600),
  NAMESERVER_TTL("86400"),
  ALIAS("@", "junit-org.statichost.page."),
);
