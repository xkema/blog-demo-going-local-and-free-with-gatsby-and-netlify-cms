"use strict";(self.webpackChunkblog_demo_going_local_and_free_with_gatsby_and_netlify_cms=self.webpackChunkblog_demo_going_local_and_free_with_gatsby_and_netlify_cms||[]).push([[94],{5029:function(e,t,r){var a=r(7294);t.Z=function(e){return a.createElement("div",{className:"\r bg-stone-50\r text-center\r px-10 py-10\r text-stone-700\r border-b border-dashed border-b-stone-200\r "},a.createElement("h2",{className:"text-4xl"},e.frontmatter.title),a.createElement("p",null,e.frontmatter.description))}},400:function(e,t,r){r.r(t);var a=r(1597),n=r(6296),l=r(7294),o=r(5198),m=r(5029);t.default=function(e){return l.createElement(o.Z,{page:e.data.markdownRemark.frontmatter},l.createElement(m.Z,{frontmatter:e.data.markdownRemark.frontmatter}),l.createElement("div",{className:"container py-8 px-4 md:px-0"},l.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html},className:"\r prose\r prose-p:text-stone-900\r mb-6\r "}),l.createElement("ul",{className:"\r grid\r gap-4\r md:grid-cols-3\r place-items-center\r "},e.data.allMarkdownRemark.edges.map((function(e){return l.createElement("li",{key:e.node.id,className:"\r bg-stone-100\r rounded-lg\r overflow-clip\r shadow\r "},l.createElement(n.G,{image:e.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData,alt:"Please always fill the alternative text attributes!"}),l.createElement("div",{className:"\r text-center\r p-4\r space-y-2\r "},l.createElement("h1",{className:"text-lg font-medium"},e.node.frontmatter.title),l.createElement("p",null,e.node.frontmatter.description),l.createElement(a.rU,{to:e.node.fields.slug,title:e.node.fields.slug,className:"\r bg-stone-200\r inline-block\r py-2 px-4\r rounded-full\r transition-colors\r hover:bg-stone-300\r "},"See the Detail")))})))))}}}]);