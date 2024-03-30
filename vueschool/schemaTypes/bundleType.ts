import {defineField, defineType} from 'sanity'

export const bundleType = defineType({
    name: 'bundleAccessList',
    title: 'Bundle access list',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Bundle title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'icon',
            title:'Bundle icon',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'order',
            title:'Bundle order',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'showMasterclass',
            title:'Should show masterclass section',
            type: 'boolean',
            initialValue: false,
        },
        {
            name:'data',
            type: 'array',
            of: [{
                title: 'Bundle Access',
                type:'object',
                fields:[
                    defineField({
                        name: 'name',
                        title: 'name',
                        type: 'string',
                        initialValue: '',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'isIncluded',
                        title: 'Is this feature included into bundle',
                        type: 'boolean',
                        initialValue: false,
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'isBold',
                        title: 'Is element has bold font',
                        type: 'boolean',
                        initialValue: false,
                    }),
                ]
            }],
        }
    ],
    orderings: [
        {
            title: 'Bundle asc',
            name: 'releaseDateAsc',
            by: [
                {field: 'order', direction: 'asc'}
            ]
        },
    ]
})
