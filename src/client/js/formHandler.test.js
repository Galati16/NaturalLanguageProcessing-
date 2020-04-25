import { buttonClicked } from './formHandler'

var x = document.createEvent("MouseEvent");
x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

test('sorry...I have no idea, how to test an eventHandlerCode with an fetch statement!', () => {
    expect(buttonClicked(x)).toBeGreaterThanOrEqual(1);
});