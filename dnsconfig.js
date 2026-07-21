var REG_NONE = NewRegistrar("none");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");
var DSP_INWX = NewDnsProvider("inwx");

D("junit.org", REG_NONE,
    DnsProvider(DSP_CLOUDFLARE, 0),
    DnsProvider(DSP_INWX),
    DefaultTTL(300),

    ALIAS("@", "junit-org.statichost.page."),
    CNAME("www", "junit-org.statichost.page."),
    CNAME("api", "edge.redirect.pizza."),
    CNAME("assets", "junit-assets.statichost.page."),
    CNAME("develocity", "junit.develocity.cloud."),
    CNAME("docs", "junit-docs.statichost.page."),
    CNAME("eu-develocity-node", "eu-node.junit.develocity.cloud."),
    CNAME("schemas", "junit-schemas.statichost.page."),
    CNAME("start", "edge.redirect.pizza."),

    // Mail: anonaddy (addy.io) forwarding
    MX("@", 10, "mail.anonaddy.me."),
    MX("@", 20, "mail2.anonaddy.me."),
    CNAME("dk1._domainkey", "dk1._domainkey.anonaddy.me."),
    CNAME("dk2._domainkey", "dk2._domainkey.anonaddy.me."),
    TXT("@", "v=spf1 include:spf.anonaddy.me -all"),
    TXT("_dmarc", "v=DMARC1; p=quarantine; adkim=s"),

    TXT("_atproto", "did=did:plc:3lqgjtqn3jdc26uryc4ibdw3"),
);
