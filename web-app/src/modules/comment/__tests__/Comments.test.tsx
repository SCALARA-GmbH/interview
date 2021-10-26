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
import renderer, { act } from "react-dom/test-utils";
import { MemoryRouter, Route } from 'react-router-dom';
test('Comments Component render', () => {
    const { getByText } = render(<MemoryRouter><Comments /></MemoryRouter>);
    const commentElement = getByText(/Comments/i);
    expect(commentElement).toBeInTheDocument();
});
const mockedDa = {
    data: [
        { id: 1, date: "2021-10-23T14:18:11.069Z", content: "my first comment" }
    ]
}

test("Comments Component fetch API", async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(mockedDa);
    let component;
    await act(async () => {
        component = mount(<MemoryRouter initialEntries={["/comments/1"]}>
            <Route path="/comments/:topicId">
                <Comments />
            </Route></MemoryRouter>);
    });
    expect(axiosGetSpy).toBeCalledWith('http://localhost:5000/comments?post-id=1');
    //expect(component.toJSON()).toMatchSnapshot();
    axiosGetSpy.mockRestore()
});

test('Comments Component renders form properly', async () => {
    //const handleFormSubmit = sinon.spy();
    const handleFormSubmit = jest.fn();

    const handleSubmit = {};

    const commentComponent = mount(<MemoryRouter><Comments /></MemoryRouter>);
    expect(commentComponent.find('form').length).toBe(1);
    expect(commentComponent.find('button').length).toBe(1);
   
    const input = commentComponent.find('input')
    input.simulate('change', { target: { value: 'Hello' } });
    commentComponent.find('button').simulate('click', handleFormSubmit);
    
    setTimeout(() => {
        expect(handleFormSubmit).toHaveBeenCalled();
      });
     
  

});
