// Create the Page document 
// Location: /schemas/page.js

export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'callout',
        title: 'Call out',
        description: 'Make it catchy',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'bodytop',
        title: 'Body top',
        type: 'blockContent',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },{
        name: 'seotitle',
        title: 'SEO Title',
        description: 'Maximum Text 65 Char ',
        type: 'string',
        options: {
          source: 'title',
          maxLength: 65
        },
        validation: Rule => Rule.required().min(10).max(65),
        validation: Rule => Rule.max(65).warning('Shorter titles are usually better for SEO')
      },
      {
        name: 'seodesc',
        title: 'SEO Description',
        description: 'Maximum Text 150 Char ',
        type: 'text',
        options: {
          source: 'title',
          maxLength: 150
        },
        validation: Rule => Rule.required().min(120).max(150),
        validation: Rule => Rule.max(150).warning('Your SEO Desc needs to be between 120 and 150 chars long, please shorten yours')
        
      
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
    },
  }