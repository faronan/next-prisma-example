import { shallow } from "enzyme";
import Home from "@/pages/index";

describe("Home", () => {
  test("check h1 tag's text", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").text()).toEqual("Welcome to Next.js!");
  });
});
