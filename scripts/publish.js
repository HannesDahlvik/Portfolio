import { publish } from 'gh-pages'

publish('build', {
    branch: 'build',
    repo: 'https://github.com/HannesDahlvik/portfolio.git'
})
