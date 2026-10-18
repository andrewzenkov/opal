/** Replace the draft copy and add Kenny's real links here. */
export interface ProfileLink {
  label: string;
  url: string;
}

export const profile: { name: string; introduction: string; about: string; links: ProfileLink[] } =
  {
    name: 'Kenny',
    introduction: 'A little about me. A little of what comes next.',
    about:
      'Welcome to my corner of the internet. A space for the things I make, the ideas I’m exploring, and whatever comes next.',
    links: [],
  };
