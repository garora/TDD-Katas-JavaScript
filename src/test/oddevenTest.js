import { should } from 'chai';
import oddeven from '../OddEven/Simple/oddeven';

describe('Odd', function () {

    it('Number 1 is Odd', function () {
        oddeven(1).should.equal('odd');
    });

    it('Number 3 is Odd', function () {
        oddeven(3).should.equal('odd');
    });
});

describe('Even', function () {

    it('Number 2 is Even', function () {
        oddeven(2).should.equal('even');
    });

    it('Number 4 is Even', function () {
        oddeven(4).should.equal('even');
    });
});