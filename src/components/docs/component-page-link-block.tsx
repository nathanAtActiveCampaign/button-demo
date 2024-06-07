const repoLinkStub = `https://gitlab.devops.app-us1.com/front-end/camp/-/tree/main/packages/components`;
const storyLinkStub = `https://storybook.activecampaign.design/?path=/story`;
const bugLink = `https://activecampaign.atlassian.net/servicedesk/customer/portal/35`;
const helpLink = `https://activecampaign.slack.com/archives/CHECN3SG1`;

//www.figma.com/file/pOCu0qKyZ80SB2HTdqJfOu/%F0%9F%8F%95%EF%B8%8F-Camp-Toolkit?node-id=0%3A1990&t=w7bNr1sBe3yWzyyP-1
const linkStyles = `text-blue-600 hover:text-blue-700 text-sm underline decoration-from-font [text-underline-position:from-font]`;

type Props = {
  pkg: string;
  ember?: string;
  story?: string;
  figma?: string;
  classNames?: string;
  isStack?: boolean;
};

export const ComponentPageLinkBlock = ({
  pkg = "accordion",
  ember,
  story,
  figma,
  classNames = "mt-6",
  isStack = true,
}: Props) => {
  const repoLink = `${repoLinkStub}/${pkg}`;
  // const storyLink = `${storyLinkStub}/story`;
  const storyLink = story;
  const wrapperClasses = isStack
    ? `flex-col gap-y-4`
    : `flex-row gap-x-4 flex-wrap`;
  return (
    <div className={`flex ${wrapperClasses} ${classNames}`}>
      <a className={linkStyles} href={repoLink} target="_blank">
        View in Camp Repo ↗
      </a>
      {story && (
        <a className={linkStyles} href={storyLink} target="_blank">
          View in Storybook ↗
        </a>
      )}
      {figma && (
        <a className={linkStyles} href={figma} target="_blank">
          View in Figma ↗
        </a>
      )}
      <a
        className={linkStyles}
        href={`${repoLink}/CHANGELOG.md`}
        target="_blank"
      >
        View changelog ↗
      </a>
      <a className={linkStyles} href={bugLink} target="_blank">
        Submit bug/feedback ↗
      </a>
      <a className={linkStyles} href={helpLink} target="_blank">
        Get help ↗
      </a>
    </div>
  );
};
// [Gitlab (Ember)]()

// [View Changelog ↗]()

// [View in Storybook ↗]()
// [View in Figma ↗]()
// [Submit a bug or issue ↗]()
// [Get help in Slack ↗]()
