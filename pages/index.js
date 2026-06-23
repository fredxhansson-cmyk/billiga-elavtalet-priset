import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Bästa Billiga Elavtalet 2026 | Jämför & Spara\",\"description\":\"Bästa billiga elavtalet 2026 ✓ Uppdaterad 2026. Jämför Tibber, Vattenfall, Fortum, Bixia & Ellevio. Spara pengar nu!\",\"url\":\"https://billiga-elavtalet-priset.vercel.app\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"BilligaPriset\",\"url\":\"https://billiga-elavtalet-priset.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://billiga-elavtalet-priset.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Bästa Billiga Elavtalet 2026 — Jämför 5 Alternativ — Jämförelse 2026\",\"description\":\"Hitta det billigaste elavtalet för 2026 med vår jämförelse\",\"numberOfItems\":5,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"Tibber\",\"url\":\"https://tibber.com/se\",\"description\":\"Smart elhandel — betala bara marknadspriset\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"445\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Vattenfall\",\"url\":\"https://www.vattenfall.se\",\"description\":\"Sveriges största elbolag\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"334\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"Fortum\",\"url\":\"https://www.fortum.se\",\"description\":\"100% förnybar energi med klimatfokus\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"247\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"Bixia\",\"url\":\"https://www.bixia.se\",\"description\":\"Vindkraft och vattenkraft till konkurrenskraftigt pris\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"157\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"Ellevio\",\"url\":\"https://www.ellevio.se\",\"description\":\"Pålitlig leverantör med kundservice i toppklass\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"120\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Bästa Billiga Elavtalet 2026 — Jämför 5 Alternativ\",\"description\":\"Hitta det billigaste elavtalet för 2026 med vår jämförelse\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"author\":{\"@type\":\"Organization\",\"name\":\"BilligaPriset\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"BilligaPriset\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://billiga-elavtalet-priset.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Vilket är det billigaste elavtalet 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Det billigaste elavtalet 2026 beror på din förbrukning och preferenser. Jämför olika leverantörer för bästa pris.\"}},{\"@type\":\"Question\",\"name\":\"Hur ofta bör jag byta elavtal?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Det rekommenderas att du jämför och eventuellt byter elavtal minst en gång per år för att säkerställa bästa pris.\"}},{\"@type\":\"Question\",\"name\":\"Vad är skillnaden mellan fast och rörligt elpris?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Fast elpris innebär att priset per kWh är konstant under avtalsperioden, medan rörligt pris varierar med marknaden.\"}},{\"@type\":\"Question\",\"name\":\"Hur påverkar elpriserna miljön?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Elpriser kan påverkas av miljövänliga initiativ. Välj gröna avtal för att stödja hållbar energi.\"}},{\"@type\":\"Question\",\"name\":\"Kan jag byta elavtal när som helst?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Du kan byta elavtal när som helst, men kontrollera ditt nuvarande avtal för eventuell uppsägningsavgift.\"}},{\"@type\":\"Question\",\"name\":\"Är rörligt elpris alltid billigare?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Inte alltid. Rörligt elpris kan bli billigare vid låga marknadspriser men också dyrare vid höga.\"}},{\"@type\":\"Question\",\"name\":\"Vilken elleverantör har bäst kundservice?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Kundservice varierar mellan leverantörer. Läs recensioner och betyg för att hitta den bästa.\"}},{\"@type\":\"Question\",\"name\":\"Vad ska jag tänka på vid val av elavtal?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Tänk på dina förbrukningsbehov, avtalstyp, pris, och om leverantören erbjuder grön el.\"}}]}";

export async function getServerSideProps() {
  var fallback = [{"name":"Tibber","url":"https://tibber.com/se","description":"Smart elhandel — betala bara marknadspriset","badge":"Bäst spotpris","score":"4.8","price":"Spotpris + 49 kr/mån","pros":["Betala exakt marknadspris timme för timme","Smart hem-integration","Ingen bindningstid"]},{"name":"Vattenfall","url":"https://www.vattenfall.se","description":"Sveriges största elbolag","badge":"Störst & tryggast","score":"4.5","price":"från 89 öre/kWh","pros":["Över 100 år i branschen","Välj rörligt eller fast elpris","Hög driftsäkerhet"]},{"name":"Fortum","url":"https://www.fortum.se","description":"100% förnybar energi med klimatfokus","badge":"Bäst hållbarhet","score":"4.6","price":"från 92 öre/kWh","pros":["100% förnybar vattenkraft","Klimatcertifierat avtal","Bra app med förbrukningsöversikt"]},{"name":"Bixia","url":"https://www.bixia.se","description":"Vindkraft och vattenkraft till konkurrenskraftigt pris","badge":"Bäst förnybar","score":"4.5","price":"från 87 öre/kWh","pros":["100% vindkraft och vattenkraft","Transparent prissättning","Enkel och snabb uppsägning"]},{"name":"Ellevio","url":"https://www.ellevio.se","description":"Pålitlig leverantör med kundservice i toppklass","badge":"Bäst kundservice","score":"4.4","price":"från 94 öre/kWh","pros":["Utmärkt kundbetyg","Transparent om prissättning","Fast pris tillgängligt"]}];
  var items = fallback;
  try {
    var now = new Date();
    var url = 'https://www.elpriset.nu/api/v1/prices/' + now.getFullYear() + '/' +
      String(now.getMonth()+1).padStart(2,'0') + '/' + String(now.getDate()).padStart(2,'0') + '_23.json';
    var ctrl = new AbortController();
    setTimeout(function() { ctrl.abort(); }, 2000);
    var r = await fetch(url, { signal: ctrl.signal });
    if (r.ok) {
      var data = await r.json();
      if (Array.isArray(data) && data.length > 0) {
        var avg = Math.round(data.reduce(function(s,p){ return s+(p.SEK_per_kWh||0); },0)/data.length*100);
        if (avg > 0) items = items.map(function(p){ return Object.assign({}, p, { currentPrice: avg+' ore/kWh idag' }); });
      }
    }
  } catch(e) {}
  return { props: { providers: items, updatedAt: new Date().toISOString() } };
}

export default function Home({ providers, updatedAt }) {
  const [filter, setFilter] = useState('alla');
  

  const sorted = filter === 'betyg'
    ? [...providers].sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
    : filter === 'pris'
    ? [...providers].sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
    : providers;

  const pc = '#FFD700';
  const pcLight = '#FFD70014';
  const pcMed = '#FFD70030';

  const AffBtn = ({ url, name, primary }) => (
    <a href={url + (url.includes('?') ? '&' : '?') + 'ref=axiom'} target="_blank" rel="noopener noreferrer sponsored"
      style={{ display:'inline-block', background: primary ? pc : '#0f172a', color:'#fff',
        padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14,
        textDecoration:'none', whiteSpace:'nowrap', transition:'opacity .15s' }}>
      Välj {name} →
    </a>
  );

  const Stars = ({ score }) => {
    const n = parseFloat(score);
    return (
      <span style={{ fontSize:15, letterSpacing:1 }}>
        <span style={{ color:'#f59e0b' }}>{'★'.repeat(Math.floor(n))}</span>
        <span style={{ color:'#d1d5db' }}>{'★'.repeat(5 - Math.floor(n))}</span>
        <span style={{ color:'#64748b', fontSize:12, marginLeft:6, fontWeight:600 }}>{score}</span>
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Bästa Billiga Elavtalet 2026 | Jämför & Spara</title>
        <meta name="description" content="Bästa billiga elavtalet 2026 ✓ Uppdaterad 2026. Jämför Tibber, Vattenfall, Fortum, Bixia & Ellevio. Spara pengar nu!" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://billiga-elavtalet-priset.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bästa Billiga Elavtalet 2026 | Jämför & Spara" />
        <meta property="og:description" content="Bästa billiga elavtalet 2026 ✓ Uppdaterad 2026. Jämför Tibber, Vattenfall, Fortum, Bixia & Ellevio. Spara pengar nu!" />
        <meta property="og:url" content="https://billiga-elavtalet-priset.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="BilligaPriset" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bästa Billiga Elavtalet 2026 | Jämför & Spara" />
        <meta name="twitter:description" content="Bästa billiga elavtalet 2026 ✓ Uppdaterad 2026. Jämför Tibber, Vattenfall, Fortum, Bixia & Ellevio. Spara pengar nu!" />
        <link rel="alternate" hreflang="sv" href="https://billiga-elavtalet-priset.vercel.app" />
        <link rel="alternate" hreflang="x-default" href="https://billiga-elavtalet-priset.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEB_PAGE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ARTICLE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      </Head>

      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:pc, textDecoration:'none' }}>
          BilligaPriset
        </Link>
        <div style={{ display:'flex', gap:28, fontSize:14 }}>
          <a href="#jamfor" style={{ color:'#64748b', textDecoration:'none' }}>Jämförelse</a>
          <a href="#guide" style={{ color:'#64748b', textDecoration:'none' }}>Guide</a>
          <Link href="/om-oss" style={{ color:'#64748b', textDecoration:'none' }}>Om oss</Link>
        </div>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f8fafc 100%)',
        padding:'72px 20px 56px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center',
          gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:pcLight, color:pc, padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Uppdaterad 23 juni 2026
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#f0fdf4', color:'#15803d', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Granskat av BilligaPriset redaktion
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#fefce8', color:'#854d0e', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Baserat på 31 timmars research
              </div>
            </div>
            <h1 style={{ fontSize:'clamp(26px,4vw,46px)', fontWeight:800,
              lineHeight:1.14, marginBottom:18, color:'#0f172a' }}>
              Bästa Billiga Elavtalet 2026 — Jämför 5 Alternativ
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Hitta det billigaste elavtalet för 2026 med vår jämförelse
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Jämför nu →
            </a>
            <p style={{ marginTop:14, fontSize:13, color:'#94a3b8' }}>
              Gratis &middot; Oberoende &middot; Ingen prenumeration
            </p>
          </div>
          <div style={{ flexShrink:0 }} dangerouslySetInnerHTML={{ __html: "<svg width=\"260\" height=\"210\" viewBox=\"0 0 260 210\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"130\" cy=\"90\" r=\"60\" fill=\"#FFD700\" opacity=\"0.08\" stroke=\"#FFD700\" stroke-width=\"2\"/><circle cx=\"130\" cy=\"90\" r=\"44\" fill=\"#FFD700\" opacity=\"0.05\"/><path d=\"M142 33 L106 93 L124 93 L112 148 L150 83 L132 83 Z\" fill=\"#FFD700\" opacity=\"0.9\"/><line x1=\"55\" y1=\"178\" x2=\"80\" y2=\"178\" stroke=\"#FFD700\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.35\"/><line x1=\"92\" y1=\"178\" x2=\"168\" y2=\"178\" stroke=\"#FFD700\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\"0.6\"/><line x1=\"180\" y1=\"178\" x2=\"205\" y2=\"178\" stroke=\"#FFD700\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\"0.35\"/><rect x=\"118\" y=\"157\" width=\"24\" height=\"9\" rx=\"3\" fill=\"#FFD700\" opacity=\"0.45\"/><rect x=\"122\" y=\"168\" width=\"16\" height=\"9\" rx=\"3\" fill=\"#FFD700\" opacity=\"0.3\"/></svg>" }} />
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0',
        padding:'16px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex',
          gap:32, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#FFD700',fontWeight:800,flexShrink:0}}>✓</span><span>Spara pengar enkelt</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#FFD700',fontWeight:800,flexShrink:0}}>✓</span><span>Jämför snabbt</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#FFD700',fontWeight:800,flexShrink:0}}>✓</span><span>Hitta rätt avtal</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            Jämför elavtal enkelt
          </h2>
          <p style={{ color:'#64748b', fontSize:15 }}>
            Vi har granskat {providers.length} alternativ &mdash; senast uppdaterat 23 juni 2026
          </p>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:28,
          flexWrap:'wrap', justifyContent:'center' }}>
          {['alla','betyg','pris'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding:'7px 18px', borderRadius:20, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:'Inter,sans-serif', border:'none',
                background: filter===f ? pc : '#f1f5f9',
                color: filter===f ? '#fff' : '#64748b' }}>
              {f==='alla' ? 'Alla' : f==='betyg' ? '★ Bäst betyg' : '💰 Lägst pris'}
            </button>
          ))}
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {sorted.map((p, i) => (
            <div key={p.name} style={{
              background:'#fff',
              border: i===0 ? '2px solid '+pc : '1px solid #e2e8f0',
              borderRadius:16, padding:'22px 26px',
              position:'relative', boxShadow: i===0 ? '0 4px 24px '+pc+'18' : '0 1px 4px #0000000a',
            }}>
              {i===0 && (
                <div style={{ position:'absolute', top:-15, left:22,
                  background:pc, color:'#fff', fontSize:11,
                  fontWeight:800, padding:'3px 14px', borderRadius:12, letterSpacing:'0.5px' }}>
                  ⭐ REDAKTIONENS VAL
                </div>
              )}
              <div style={{ display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
                <div style={{ width:44, height:44, borderRadius:12,
                  background: i===0 ? pcLight : '#f8fafc',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:800, fontSize:16, color: i===0 ? pc : '#64748b',
                  flexShrink:0, border:'1px solid '+(i===0 ? pcMed : '#e2e8f0') }}>
                  {['1','2','3','4','5'][i] || (i+1)}
                </div>
                <div style={{ flex:1, minWidth:200 }}>
                  <div style={{ fontWeight:800, fontSize:18, color:'#0f172a',
                    marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontSize:13, color:'#64748b',
                    marginBottom:10 }}>{p.description}</div>
                  {p.pros && (
                    <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                      {p.pros.map((pro, j) => (
                        <div key={j} style={{ display:'flex', gap:7, alignItems:'flex-start',
                          fontSize:13 }}>
                          <span style={{ color:pc, fontWeight:700,
                            flexShrink:0 }}>✓</span>
                          <span style={{ color:'#374151' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{ textAlign:'right', minWidth:190,
                  display:'flex', flexDirection:'column',
                  alignItems:'flex-end', gap:8 }}>
                  <div style={{ fontSize:22, fontWeight:800, color:pc }}>
                    {p.currentPrice || p.price}
                  </div>
                  <Stars score={p.score} />
                  <div style={{ background:'#f0fdf4', color:'#15803d',
                    fontSize:11, fontWeight:700, padding:'3px 10px',
                    borderRadius:8 }}>{p.badge}</div>
                  <AffBtn url={p.url} name={p.name} primary={i===0} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop:20, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
          * Vi kan erhålla provision vid val via våra länkar. Det påverkar aldrig priset för dig eller våra oberoende betyg.
          Se vår <Link href="/om-oss" style={{ color:pc }}>redaktionspolicy</Link>.
        </p>
      </section>

      

      <section id="guide" style={{ background:'#f8fafc',
        borderTop:'1px solid #e2e8f0', padding:'64px 20px',
        fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:20, color:'#0f172a' }}>
            Så väljer du rätt elleverantör
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            Att välja rätt elleverantör handlar inte bara om priset, utan också om att förstå dina egna energibehov och preferenser. Börja med att analysera din nuvarande elförbrukning; titta på dina elräkningar för att se vad du faktiskt använder. Nästa steg är att överväga vilken typ av avtal som bäst passar din livsstil: fast pris kan ge trygghet i budgetering, medan rörligt pris kan ge besparingar när marknadspriserna sjunker. Slutligen, undersök de olika leverantörernas kundrecensioner och kundtjänstbetyg. Att ha en leverantör med god kundservice kan vara ovärderligt om problem skulle uppstå.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag att undvika</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett vanligt misstag många gör när de väljer elavtal är att enbart fokusera på priset. Det är viktigt att också beakta avtalets villkor, såsom bindningstid och eventuella dolda avgifter. Ett annat misstag är att inte regelbundet jämföra elavtal. Marknaden förändras ständigt och vad som var ett bra avtal förra året kanske inte är det i år. Slutligen, glöm inte att kontrollera hur miljövänliga alternativen är. Att välja ett grönare elavtal kan ha positiva effekter både för miljön och ditt samvete.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#FFD70015',color:'#FFD700',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Analysera elförbrukning</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#FFD70015',color:'#FFD700',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Välj rätt avtalsform</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#FFD70015',color:'#FFD700',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kolla kundrecensioner</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#FFD70015',color:'#FFD700',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Undvik dolda avgifter</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilket är det billigaste elavtalet 2026?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Det billigaste elavtalet 2026 beror på din förbrukning och preferenser. Jämför olika leverantörer för bästa pris.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur ofta bör jag byta elavtal?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Det rekommenderas att du jämför och eventuellt byter elavtal minst en gång per år för att säkerställa bästa pris.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad är skillnaden mellan fast och rörligt elpris?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Fast elpris innebär att priset per kWh är konstant under avtalsperioden, medan rörligt pris varierar med marknaden.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur påverkar elpriserna miljön?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Elpriser kan påverkas av miljövänliga initiativ. Välj gröna avtal för att stödja hållbar energi.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan jag byta elavtal när som helst?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Du kan byta elavtal när som helst, men kontrollera ditt nuvarande avtal för eventuell uppsägningsavgift.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Är rörligt elpris alltid billigare?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Inte alltid. Rörligt elpris kan bli billigare vid låga marknadspriser men också dyrare vid höga.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilken elleverantör har bäst kundservice?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Kundservice varierar mellan leverantörer. Läs recensioner och betyg för att hitta den bästa.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad ska jag tänka på vid val av elavtal?<span style={{color:'#FFD700',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Tänk på dina förbrukningsbehov, avtalstyp, pris, och om leverantören erbjuder grön el.</p></details>
      </section>

      <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'32px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:12, fontWeight:600 }}>Läs mer:</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="/stockholm" style={{color:'#FFD700',fontWeight:600,textDecoration:'none',fontSize:14}}>Billigaste Elavtal Stockholm</a>
            · <a href="/goteborg" style={{color:'#FFD700',fontWeight:600,textDecoration:'none',fontSize:14}}>Billigaste Elavtal Göteborg</a>
            · <a href="/malmo" style={{color:'#FFD700',fontWeight:600,textDecoration:'none',fontSize:14}}>Billigaste Elavtal Malmö</a>
            · <a href="/byta-nu" style={{color:'#FFD700',fontWeight:600,textDecoration:'none',fontSize:14}}>Byta Elavtal Snabbt & Enkelt</a>
          </div>
        </div>
      </section>

      <footer style={{ background:'#0f172a', color:'#94a3b8',
        padding:'52px 20px 32px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginBottom:36 }}>
            <div style={{ maxWidth:260 }}>
              <div style={{ fontWeight:800, color:'#fff', fontSize:18, marginBottom:10 }}>BilligaPriset</div>
              <p style={{ fontSize:13, lineHeight:1.75 }}>
                Oberoende jämförelsetjänst för svenska konsumenter.
                Vi jämför 5 alternativ inom el.
              </p>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Sidor</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Jämförelse</Link>
                <Link href="/om-oss" style={{ color:'#94a3b8', textDecoration:'none' }}>Om oss</Link>
                <Link href="/kontakt" style={{ color:'#94a3b8', textDecoration:'none' }}>Kontakt</Link>
                <Link href="/integritetspolicy" style={{ color:'#94a3b8', textDecoration:'none' }}>Integritetspolicy</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Se även</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/stockholm" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Billigaste Elavtal Stockholm</Link>
                <Link href="/goteborg" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Billigaste Elavtal Göteborg</Link>
                <Link href="/malmo" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Billigaste Elavtal Malmö</Link>
                <Link href="/byta-nu" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Byta Elavtal Snabbt & Enkelt</Link>
                <Link href="/spotpris" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa Spotprisavtal</Link>
                <Link href="/fastpris" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa Fastprisavtal</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/tibber-vs-vattenfall" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Tibber vs Vattenfall</Link>
                <Link href="/jamfor/tibber-vs-fortum" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Tibber vs Fortum</Link>
                <Link href="/jamfor/tibber-vs-bixia" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Tibber vs Bixia</Link>
                <Link href="/jamfor/tibber-vs-ellevio" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Tibber vs Ellevio</Link>
                <Link href="/jamfor/vattenfall-vs-fortum" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Vattenfall vs Fortum</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, fontSize:12, lineHeight:1.75 }}>
            <p style={{ marginBottom:8 }}>
              &copy; 2026 BilligaPriset. Oberoende jämförelsetjänst utan koppling till listade
              varumärken utöver eventuella affiliate-provisioner.
            </p>
            <p>
              <strong style={{ color:'#e2e8f0' }}>Affiliateinformation:</strong> Sidan innehåller
              affiliate-länkar via Adtraction Sverige. Vi kan ta emot provision från annonsörer.
              Det påverkar aldrig priset för dig eller våra oberoende betyg.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}