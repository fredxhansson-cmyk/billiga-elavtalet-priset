export async function getServerSideProps({ res }) {
  const base = process.env.NEXT_PUBLIC_URL || 'https://billiga-elavtalet-priset.vercel.app';
  const pages = [{"path":"","priority":"1.0","changefreq":"daily"},{"path":"/om-oss","priority":"0.5","changefreq":"monthly"},{"path":"/kontakt","priority":"0.4","changefreq":"monthly"},{"path":"/integritetspolicy","priority":"0.3","changefreq":"yearly"},{"path":"/stockholm","priority":"0.8","changefreq":"weekly"},{"path":"/goteborg","priority":"0.8","changefreq":"weekly"},{"path":"/malmo","priority":"0.8","changefreq":"weekly"},{"path":"/byta-nu","priority":"0.8","changefreq":"weekly"},{"path":"/spotpris","priority":"0.8","changefreq":"weekly"},{"path":"/fastpris","priority":"0.8","changefreq":"weekly"},{"path":"/jamfor/tibber-vs-vattenfall","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/tibber-vs-fortum","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/tibber-vs-bixia","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/tibber-vs-ellevio","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/vattenfall-vs-fortum","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/vattenfall-vs-bixia","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/vattenfall-vs-ellevio","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/fortum-vs-bixia","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/fortum-vs-ellevio","priority":"0.7","changefreq":"weekly"},{"path":"/jamfor/bixia-vs-ellevio","priority":"0.7","changefreq":"weekly"}];
  const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    pages.map(function(p) { return '<url><loc>'+base+p.path+'</loc><lastmod>2026-06-23</lastmod><changefreq>'+p.changefreq+'</changefreq><priority>'+p.priority+'</priority></url>'; }).join('') +
    '</urlset>';
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.write(xml); res.end();
  return { props: {} };
}
export default function Sitemap() { return null; }