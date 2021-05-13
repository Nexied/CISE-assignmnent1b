import React from "react";
import App from "./App";
import { EvidenceSearch } from "./components/EvidenceSearch"
import { ShowEvidenceResults } from "./components/ShowEvidenceResults"
import { shallow, mount, render } from 'enzyme'

describe("Testing", () => {
    test("render it", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('Router').contains("div Router"))
    })
})