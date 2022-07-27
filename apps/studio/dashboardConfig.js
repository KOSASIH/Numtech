export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'KOSASIH/Numtech'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62e0da2ec3b32f466660452a',
                  title: 'Sanity Studio',
                  name: 'numtech-studio',
                  apiId: 'd791c0a8-a4f9-45f0-bc78-34702c3876a2'
                },
                {
                  buildHookId: '62e0da2e97f3cb4bb690f3bd',
                  title: 'Website',
                  name: 'numtech',
                  apiId: '65e2018b-2080-4fc5-a9d5-d40a9cb699b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KOSASIH/Numtech',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://numtech.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
