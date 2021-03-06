import { expect } from 'chai';

import { Point } from './Point';

describe( 'Point', function() {

    describe( 'constructor()', function() {

        it( 'Should keep the given coordinates', function() {
            var iPoint = new Point( 15, 16 );
            expect( iPoint.x ).to.equal( 15 );
            expect( iPoint.y ).to.equal( 16 );
        });

    });

    describe( 'clone()', function() {

        it( 'Should return a new point with the same coordinates', function() {
            var iPoint = new Point( 10, 20 ),
                iClone = iPoint.clone();

            expect( iClone ).to.include( iPoint );
        });

    });

});
