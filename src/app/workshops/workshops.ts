import { Workshop } from './workshop.model';

export const WORKSHOPS: Workshop[] = [
  {
    name: 'introduction',
    title: 'Introduction',
    participants: {
      min: 1,
      max: 12
    },
    length: {
      length: 180
    }
  },
  {
    name: 'setupprocess',
    title: 'Setup OKR process',
    participants: {
      min: 1,
      max: 12
    },
    length: {
      length: 120
    }
  },
  {
    name: 'managementonboarding',
    title: 'Management Onboarding',
    participants: {
      min: 1,
      max: 12
    },
    length: {
      length: 300
    }
  },
  {
    name: 'employeeonboarding',
    title: 'Employee Onboarding',
    participants: {
      min: 1,
      max: 60
    },
    length: {
      length: 180
    }
  },
  {
    name: 'okrworkshop',
    title: 'OKR-Workshop',
    description:
      'The OKR-Workshop brings all participants together to formulate a commen goal for the next iteration.',
    goals: [
      {
        type: 'PRIMARY',
        description: 'Formulate OKR'
      },
      {
        type: 'SECONDARY',
        description: `Teambuilding <br />
    Increase transparency`
      }
    ],
    participants: {
      min: 1,
      max: 20,
      description:
        'Everybody, who will work on the OKR. For example if Team Marketing is setting their OKR, every member of the team including the team-leader will particpate.'
    },
    length: {
      length: 480,
      description: `Expect the first OKR-Workshop for any given team/company to last a full
      8-hour-day. The time any team actually needs depends on different factors
      <ol>
        <li>team size</li>
        <li>shared vision/goals</li>
        <li>existing conflicts/existing harmony</li>
        <li>experience working agile</li>
        <li>psychological safety</li>
      </ol>
      For example, a small, harmonic team with a shared vision, which is already
      working agile and where its members feel safe to express their opinion will need
      much less time.`
    },
    schedule: [
      {
        length: 30,
        title: 'Introduction',
        description:
          'Introduce yourself, show the agenda, set expactations and prepare the stage'
      },
      {
        length: 30,
        title: 'Gather data',
        description:
          'Collect all ideas for the next iteration. They can align with super level OKR, vision, strategy or new ideas.'
      },
      {
        length: 20,
        title: 'Cluster ideas',
        description: 'Cluster all ideas into common topics.'
      },
      {
        length: 30,
        title: 'Prioritize',
        description: 'Prioritize clusters and get a clear order'
      },
      {
        length: 30,
        title: 'Formulate Objective',
        description:
          'Take the top-most cluster and formulate the title of the first objective'
      },
      {
        length: 30,
        title: 'Generate Key Results',
        description:
          'Find out, how you know, that the objective has been achieved'
      },
      {
        length: 30,
        title: 'Formulate Key Results',
        description:
          'Take the measures and turn them into well-formulated Key Results'
      },
      {
        length: 30,
        title: 'Close',
        description:
          'Recap the day and its results, thank everybody, show next steps and close the session'
      }
    ]
  },
  {
    name: 'retrospective',
    title: 'Retrospective',
    participants: {
      min: 1,
      max: 30
    },
    length: {
      length: 240
    }
  },
  {
    name: 'okrmaster',
    title: 'Training of OKR-Masters',
    participants: {
      min: 1,
      max: 4
    },
    length: {
      length: 1440
    }
  },
  {
    name: 'weeklies',
    title: 'Weekly meetings',
    participants: {
      min: 1,
      max: 12
    },
    length: {
      length: 60
    }
  }
];
