import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status={"status changed from test"} updateStatus={() => {
        }}/>);
        const instance = component.getInstance();
        expect(instance?.props.status).toBe("status changed from test");
    });

    test('After creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status={"status changed from test"} updateStatus={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test('after creation <input> should not displayed', () => {
        const component = create(<ProfileStatus status={'it-kamasutra'}
                                                updateStatus={() => {
                                                }}
        />);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });

    test('input should be displayed in editMode instead of span )', () => {
        const component = create(<ProfileStatus status={'it-kamasutra'}
                                                updateStatus={() => {
                                                }}
        />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('it-kamasutra');

    });

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'it-kamasutra'}
                                                updateStatus={mockCallback}
        />);
        const instance = component.getInstance();
        //instance?.props.deActivateEditMode();
        debugger
        expect(mockCallback.mock.calls.length).toBe(1);
    });


})