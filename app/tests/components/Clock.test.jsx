import React from 'react';
import ReactDOM from 'react-dom';
import Expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
    it('should exist', () => {
        Expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}></Clock>);
            var element = ReactDOM.findDOMNode(clock);
            var actualText = element.querySelector('.clock-text').innerText;
            var expectedText = '01:02';

            Expect(actualText).toBe(expectedText);
        });
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock></Clock>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            Expect(actual).toBe(expected);
        });
        it('should format seconds when min/sec less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock></Clock>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            Expect(actual).toBe(expected);
        });
    });
});

