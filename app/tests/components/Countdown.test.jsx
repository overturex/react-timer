import React from 'react';
import ReactDOM from 'react-dom';
import Expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Countdown from 'Countdown';

describe('Countdown', () => {
    it('should exist', () => {
        Expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('SHOULD set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            Expect(countdown.state.count).toBe(10);
            Expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                Expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('SHOULD NOT set count to LESS THAN 0 after countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                Expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});