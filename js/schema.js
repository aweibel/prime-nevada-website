// Base organization schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prime Nevada",
    "url": "https://primenevada.com",
    "logo": "https://primenevada.com/images/logo.png",
    "description": "Prime Nevada is a modern holding company focused on acquiring and transforming businesses through technology, marketing, and operational efficiencies.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Reno",
        "addressRegion": "NV",
        "addressCountry": "US"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-775-453-0575",
        "contactType": "business",
        "email": "info@primenevada.com"
    }
};

// Generate breadcrumb schema for a given page
function generateBreadcrumbSchema(currentPage, pageName) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://primenevada.com"
            }
        ]
    };

    if (currentPage !== 'home') {
        breadcrumbSchema.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": pageName,
            "item": `https://primenevada.com/${currentPage}`
        });
    }

    return breadcrumbSchema;
}

// Function to inject schema into the page
function injectSchema(schemas) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
}

// Export functions for use in pages
export { organizationSchema, generateBreadcrumbSchema, injectSchema };
