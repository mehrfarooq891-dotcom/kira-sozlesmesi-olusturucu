import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function SEO({ 
  title = "Kira Sözleşmesi Oluşturucu | Ücretsiz ve Güvenli PDF Hazırla", 
  description = "2026 güncel kira sözleşmesi oluşturun. Kiracı ve kiraya veren bilgilerini girin, saniyeler içinde yasal geçerli PDF indirin. Tamamen ücretsiz.",
  canonical = "https://kira-sozlesmesi-olusturucu.com"
}: SEOProps) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kira Sözleşmesi Oluşturucu",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kira sözleşmesi noter huzurunda mı yapılmalıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kira sözleşmesinin geçerli olması için noter huzurunda yapılması zorunlu değildir. Tarafların kendi aralarında imzaladığı yazılı sözleşmeler de yasal olarak geçerlidir."
        }
      },
      {
        "@type": "Question",
        "name": "Kira artış oranı nasıl hesaplanır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Konut kiralarında kira artış oranı, bir önceki kira yılının tüketici fiyat endeksindeki (TÜFE) on iki aylık ortalamalara göre değişim oranını geçemez."
        }
      },
      {
        "@type": "Question",
        "name": "Depozito miktarı en fazla ne kadar olabilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Türk Borçlar Kanunu'na göre depozito bedeli, üç aylık kira bedelini aşamaz."
        }
      },
      {
        "@type": "Question",
        "name": "Kira sözleşmesi ne zaman yenilenmiş sayılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Belirli süreli kira sözleşmelerinde, sürenin bitiminden en az 15 gün önce kiracı tarafından fesih bildirimi yapılmadığı sürece sözleşme aynı şartlarla 1 yıl uzatılmış sayılır."
        }
      },
      {
        "@type": "Question",
        "name": "Ev sahibi kiracıyı hangi durumlarda evden çıkarabilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ev sahibi; kiranın ödenmemesi, evin ihtiyacı, evin yeniden inşası gibi yasal sebeplerle tahliye davası açabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Aidat ve ortak giderleri kim öder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aksi sözleşmede kararlaştırılmadıkça, kullanım giderleri kiracıya aittir."
        }
      },
      {
        "@type": "Question",
        "name": "Kira sözleşmesi damga vergisi ne kadardır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kira sözleşmeleri damga vergisine tabidir. Vergi oranı genellikle binde 1.89 oranındadır."
        }
      },
      {
        "@type": "Question",
        "name": "Tahliye taahhütnamesi nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kiracının, kiralananı belirli bir tarihte boşaltmayı yazılı olarak üstlendiği belgedir."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://kira-sozlesmesi-olusturucu.com"
      }
    ]
  };

  return (
    <Helmet>
      <html lang="tr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Kira Sözleşmesi Oluşturucu" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
