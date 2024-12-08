import * as React from "react";
import renderer from "react-test-renderer";

describe("Some test set", () => {
  // We are marking the test function call as async
  test("Name of the test", async () => {
    // import { MonoText } from '../StyledText';
    const { MonoText } = require("../StyledText");
    const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
