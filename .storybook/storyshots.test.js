import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

initStoryshots({
  test: ({ story, context }) => {
    const converter = new Stories2SnapsConverter();
    const snapshotFileName = converter.getSnapshotFileName(context);
    const storyElement = story.render(context);
    const tree = shallow(storyElement);

    if (snapshotFileName) {
      expect(toJson(tree)).toMatchSpecificSnapshot(snapshotFileName);
    }
  },
});
