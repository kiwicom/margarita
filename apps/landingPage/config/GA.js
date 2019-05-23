// @flow

import ReactGA from 'react-ga';

export const GOOGLE_ANALYTICS_TRACKING_ID = 'UA-29345084-41';

export const EventLandingPageReadMore = () => {
  ReactGA.event({
    category: 'Landing Page',
    action: 'read more',
    label: 'Read more',
  });
};
export const EventGithub = () => {
  ReactGA.event({
    category: 'Github',
    action: 'code',
    label: 'Visit on Github',
  });
};

export const EventGithubCode = () => {
  ReactGA.event({
    category: 'Github',
    action: 'code',
    label: 'See code on Github',
  });
};

export const EventMargaritaDemo = () => {
  ReactGA.event({
    category: 'Margarita',
    action: 'demo',
    label: 'Try live demo',
  });
};

export const EventMargaritaPlayground = () => {
  ReactGA.event({
    category: 'Margarita',
    action: 'playground',
    label: 'See GraphQL playground',
  });
};

export const EventTequilaApi = () => {
  ReactGA.event({
    category: 'Tequila',
    action: 'api',
    label: 'Check Tequila REST API',
  });
};

export const EventGithubStar = () => {
  ReactGA.event({
    category: 'Github',
    action: 'star',
    label: 'Give us a star',
  });
};

export const EventKiwiJobs = () => {
  ReactGA.event({
    category: 'kiwi.com',
    action: 'jobs',
    label: 'See open positions',
  });
};

export const EventCodeKiwi = () => {
  ReactGA.event({
    category: 'code.kiwi.com',
    action: 'medium',
    label: 'Code.kiwi.com',
  });
};
