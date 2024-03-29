import { useLocation } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = (props) => {
  // Get location data from the router.
  const location = useLocation();

  const prefixPathWithoutTrailingSlash = withPrefix('/').slice(0, -1);

  const pageMeta = {
    title: props.settings.siteTitle,
    description: '',
    imageSrc: `${prefixPathWithoutTrailingSlash}/img/static-img-og-fallback.jpg`,
  }

  if (props.page !== undefined) {
    pageMeta.title = props.page.title;
    pageMeta.description = props.page.description;
    if (props.page.featuredImage?.childImageSharp.resize.src) {
      pageMeta.imageSrc = `${prefixPathWithoutTrailingSlash}${props.page.featuredImage?.childImageSharp.resize.src}`;
    }
  }

  return (
    <Helmet titleTemplate='%s | Hola Mundo!'>
      {/* Github Pages URL: https://xkema.github.io/blog-demo-going-local-and-free-with-gatsby-and-netlify-cms/ */}

      {/* site meta */}
      <meta name="description" content={pageMeta.description} />
      <title>{pageMeta.title}</title>

      {/* meta meta 😱 */}
      <meta property="og:url" content={location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:image" content={pageMeta.imageSrc} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* twitter meta, missing tags will be completed from "og:*" meta */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Twitter" />
      <meta name="twitter:image:alt" content={pageMeta.description} />

      {/* favicon */}
      <link rel="shortcut icon" href={`${prefixPathWithoutTrailingSlash}/img/static-img-favicon.png`}></link>

      {/* other */}
      <body className={`
        bg-stone-50
        bg-[url(/img/static-img-bg-noisy-texture.png)]
        bg-fixed`}>
      </body>

      {/* A fix to avoid "mini-css-extract-plugin" plugin's "Error: Can't resolve '${prefixPathWithoutTrailingSlash}/img/static-img-bg-noisy-texture.png ...' error. (This error rises only if you use a path prefix.) */}
      {/* Can be removed removed after removal of sub-folder deployment and using a static URL for the background image! */}
      <style>
        {`
          body {
            background-image: url(${prefixPathWithoutTrailingSlash}/img/static-img-bg-noisy-texture.png) !important;
          }
        `}
      </style>
    </Helmet>
  )
}

export default Seo
