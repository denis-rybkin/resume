import { marked } from 'marked'
import type { PersonalPageCfg } from './types'

import mainText from './texts/mainText.md?raw'
import shortDesc from './texts/shortDesc.md?raw'
import expFreelance from './texts/expFreelance.md?raw'
import expSber from './texts/expSber.md?raw'
import expMorizo from './texts/expMorizo.md?raw'
import expVMedia from './texts/expVMedia.md?raw'

export * from './types'

export const pageConfig: PersonalPageCfg = {
  name: 'Denis Rybkin',
  occupation: 'iOS Developer',
  shortDesc: marked.parse(shortDesc).toString(),
  resumeLink: '/Denis_Rybkin_Resume.pdf',
  socials: [
    {
      href: 'mailto:denisrybkinios@gmail.com',
      icon: ['far', 'envelope']
    },
    {
      href: 'https://github.com/denis-rybkin',
      icon: ['fab', 'github']
    },
    {
      href: 'https://www.linkedin.com/in/denis-rybkin',
      icon: ['fab', 'linkedin']
    },
  ],
  mainText: marked.parse(mainText).toString(),
  resume: [
    {
      from: 'Aug. 2022',
      to: 'present',
      occupation: 'iOS Developer',
      company: 'Freelance',
      description: marked.parse(expFreelance).toString()
    },
    {
      from: 'Sep. 2021',
      to: 'Aug. 2022',
      occupation: 'iOS Developer',
      company: 'SberBusiness',
      description: marked.parse(expSber).toString()
    },
    {
      from: 'Nov. 2020',
      to: 'Sep. 2021',
      occupation: 'iOS Developer',
      company: 'Morizo Digital',
      description: marked.parse(expMorizo).toString()
    },
    {
      from: 'Feb. 2018',
      to: 'Apr. 2020',
      occupation: 'iOS/tvOS Developer',
      company: 'VMedia inc.',
      description: marked.parse(expVMedia).toString()
    },
  ]
}
