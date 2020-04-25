import { checkForValidity } from './checkForValidity'

test('checks that web.de is not a valid url', () => {
    expect(checkForValidity('web.de')).toBe(false);
});