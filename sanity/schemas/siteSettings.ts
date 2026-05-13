import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'agencyName', title: 'Agency Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'twitter', title: 'Twitter URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'totalSpend', title: 'Total Ad Spend Managed', type: 'string' }),
    defineField({ name: 'avgRoas', title: 'Average ROAS', type: 'string' }),
    defineField({ name: 'brandsScaled', title: 'Brands Scaled', type: 'number' }),
    defineField({ name: 'clientRetention', title: 'Client Retention %', type: 'number' }),
  ],
});
