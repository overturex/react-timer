import React from 'react';
import ReactDOM from 'react-dom';
import Expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
    it('should exist', () => {
        Expect(CountdownForm).toExist();
    });

    it('SHOULD call onSetCountdown if VALID seconds entered', () => {
        var spy = Expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}></CountdownForm>);
        var element = ReactDOM.findDOMNode(countdownForm);

        countdownForm.setState({seconds: '109'});
        TestUtils.Simulate.submit(element.querySelector('form'));

        Expect(spy).toHaveBeenCalledWith(109);
    });

    it('SHOULD NOT call onSetCountdown if INVALID seconds entered', () => {
        var spy = Expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}></CountdownForm>);
        var element = ReactDOM.findDOMNode(countdownForm);

        countdownForm.setState({seconds: 'abc'});
        TestUtils.Simulate.submit(element.querySelector('form'));

        Expect(spy).toNotHaveBeenCalled();
    });

    it('SHOULD NOT call onSetCountdown if NO seconds entered', () => {
        var spy = Expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}></CountdownForm>);
        var element = ReactDOM.findDOMNode(countdownForm);

        countdownForm.setState({seconds: ''});
        TestUtils.Simulate.submit(element.querySelector('form'));

        Expect(spy).toNotHaveBeenCalled();
    });
});