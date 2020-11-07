/**
 * IR tests
 */

irVS1838.connectIrReceiver(DigitalPin.P0);
irVS1838.onIrButton(IrButton.OK, IrButtonAction.Pressed, () => {});
irVS1838.onIrButton(IrButton.Up, IrButtonAction.Released, () => {});
irVS1838.onIrDatagram(() => {});
const received: boolean = irVS1838.wasIrDataReceived();
const button: number = irVS1838.irButton();
const datagram: string = irVS1838.irDatagram();
const buttonCode: number = irVS1838.irButtonCode(IrButton.Num9);
