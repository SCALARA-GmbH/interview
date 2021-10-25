import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Comments from '../components/Comments';
import sinon from 'sinon';
import axios from 'axios';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock("axios");

Enzyme.configure({ adapter: new Adapter() });
import renderer , { act } from "react-dom/test-utils";
test('Comments Component render', () => {
    const { getByText } = render(<Comments />);
    const commentElement = getByText(/Comments/i);
    expect(commentElement).toBeInTheDocument();
});
const mockedDa = {
    data: [
        { id: 1, date: "2021-10-23T14:18:11.069Z", content: "my first comment" }
    ]
}
test("Comments Component fetch API", async() => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mockedDa);
    let component;
    await act(async () => {
        component = shallow(<Comments />);
    });
    expect(axiosGetSpy).toBeCalledWith('http://localhost:5000/comments?post-id=1');
    //expect(component.toJSON()).toMatchSnapshot();
    axiosGetSpy.mockRestore()
});

test('Comments Component renders form properly', () => {
    //const handleFormSubmit = sinon.spy();
    const handleFormSubmit = jest.fn();

    const handleSubmit = {};

    const commentComponent = mount(<Comments />);
    expect(commentComponent.find('form').length).toBe(1);
    expect(commentComponent.find('button').length).toBe(1);
    commentComponent.find('button').simulate('click', handleFormSubmit);
    const input = commentComponent.find('input')
    input.simulate('change', { target: { value: 'Hello' } })
    //expect(commentComponent.find('span').length).toBe(1);
    expect(handleFormSubmit).not.toBeCalled();
   // expect(commentComponent.find("input").get(0).props.value).toEqual("Hello");

});
