export const StorybookIFrame = ({
  storyId = "components-button-fill",
  customHeight = 2000,
}) => {
  const storyStart = `https://storybook.activecampaign.design/iframe.html?id=`;
  const storyEnd = `--docs&amp;panel=false&amp;nav=false&amp;addons=0&amp;stories=0&amp;full=1&amp;viewMode=docs`;
  const storySrc = storyStart + storyId + storyEnd;

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <iframe
        src={storySrc}
        allow="clipboard-write *"
        style={{
          width: "100%",
          height: `${customHeight}px`,
          // background: "red",
        }}
      />
      <div>{storySrc}</div>
    </div>
  );
};
