export function SEOHead({ title, description, keywords }: { title?: string, description?: string, keywords?: string }) {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </>
  );
}
